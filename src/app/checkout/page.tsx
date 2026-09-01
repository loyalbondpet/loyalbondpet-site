'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useCart } from '@/contexts/CartContext';
import { calculateShipping, getFreeShippingThreshold } from '@/lib/shipping';
import { ShoppingBag, Loader2, Lock, ShieldCheck, Truck, AlertTriangle } from 'lucide-react';

declare global {
  interface Window {
    paypal?: any;
  }
}

const SUPPORTED_COUNTRIES: { code: string; name: string }[] = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
];

export default function CheckoutPage() {
  const { items, subtotal, isLoaded, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [shippingForm, setShippingForm] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    countryCode: 'US',
    email: '',
    phone: '',
  });
  const [formValid, setFormValid] = useState(false);
  const buttonsRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate shipping based on cart items and destination country
  const shippingQuote = useMemo(() => {
    if (items.length === 0) return null;
    return calculateShipping(
      items.map(it => ({ productId: it.productId, quantity: it.quantity, size: it.size })),
      shippingForm.countryCode,
      subtotal,
    );
  }, [items, shippingForm.countryCode, subtotal]);

  const shipping = shippingQuote?.cost ?? 0;
  const shippingBlocked = shippingQuote?.cost === -1;
  const isFreeShip = shipping === 0 && !shippingBlocked && !!shippingQuote;
  const freeThreshold = getFreeShippingThreshold(shippingForm.countryCode);
  const total = subtotal + (shippingBlocked ? 0 : shipping);
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  useEffect(() => {
    const { name, addressLine1, city, state, postalCode, countryCode, email } = shippingForm;
    setFormValid(
      !!name && !!addressLine1 && !!city && !!state && !!postalCode &&
      !!countryCode && !!email && items.length > 0 && !shippingBlocked,
    );
  }, [shippingForm, items.length, shippingBlocked]);

  // Render / re-render PayPal buttons whenever shipping or items change
  useEffect(() => {
    if (!sdkReady || !window.paypal || !formValid || !containerRef.current) return;

    // Close previous buttons instance to avoid duplicates
    if (buttonsRef.current) {
      buttonsRef.current.close().catch(() => {});
      buttonsRef.current = null;
    }

    // Clear container
    containerRef.current.innerHTML = '';

    const paypal = window.paypal;
    const buttons = paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' },
      createOrder: async () => {
        setError(null);
        const res = await fetch('/api/paypal/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: items.map(it => ({
              productId: it.productId,
              name: it.name.slice(0, 120),
              quantity: it.quantity,
              unitAmount: it.price.toFixed(2),
            })),
            shipping: shipping.toFixed(2),
            shippingAddress: {
              name: shippingForm.name,
              addressLine1: shippingForm.addressLine1,
              addressLine2: shippingForm.addressLine2,
              adminArea2: shippingForm.city,
              adminArea1: shippingForm.state,
              postalCode: shippingForm.postalCode,
              countryCode: shippingForm.countryCode,
            },
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to create order');
        return data.id;
      },
      onApprove: async (data: { orderID: string }) => {
        setLoading(true);
        try {
          const res = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: data.orderID }),
          });
          const capture = await res.json();
          if (!res.ok) throw new Error(capture.error || 'Capture failed');
          clearCart();
          window.location.href = `/checkout/success?token=${data.orderID}`;
        } catch (e) {
          setError(e instanceof Error ? e.message : 'Payment capture failed');
          setLoading(false);
        }
      },
      onError: (err: unknown) => {
        console.error('PayPal button error', err);
        setError('PayPal encountered an error. Please try again.');
      },
      onCancel: () => {
        window.location.href = '/checkout/cancel';
      },
    });

    buttonsRef.current = buttons;
    buttons.render(containerRef.current).catch((err: unknown) => {
      console.error('PayPal render error', err);
      setError('Unable to load PayPal buttons. Please refresh.');
    });

    return () => {
      if (buttonsRef.current) {
        buttonsRef.current.close().catch(() => {});
        buttonsRef.current = null;
      }
    };
  }, [sdkReady, formValid, items, shipping, clearCart, shippingForm.name, shippingForm.addressLine1, shippingForm.addressLine2, shippingForm.city, shippingForm.state, shippingForm.postalCode, shippingForm.countryCode, shippingForm.email]);

  if (!isLoaded) {
    return <div className="max-w-6xl mx-auto px-4 py-20 text-center text-brand-gray">Loading…</div>;
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-brand-beige mb-4" />
        <h1 className="text-2xl font-bold text-brand-dark mb-2">Your cart is empty</h1>
        <p className="text-brand-gray mb-6">Add some products before checking out.</p>
        <Link href="/products" className="inline-block px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90">
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-brand-dark mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <section className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-brand-dark mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name *" value={shippingForm.name} onChange={v => setShippingForm({ ...shippingForm, name: v })} required className="sm:col-span-2" />
              <Field label="Email *" type="email" value={shippingForm.email} onChange={v => setShippingForm({ ...shippingForm, email: v })} required className="sm:col-span-2" />
              <Field label="Phone" value={shippingForm.phone} onChange={v => setShippingForm({ ...shippingForm, phone: v })} className="sm:col-span-2" />
              <Field label="Address Line 1 *" value={shippingForm.addressLine1} onChange={v => setShippingForm({ ...shippingForm, addressLine1: v })} required className="sm:col-span-2" />
              <Field label="Address Line 2" value={shippingForm.addressLine2} onChange={v => setShippingForm({ ...shippingForm, addressLine2: v })} className="sm:col-span-2" />
              <Field label="City *" value={shippingForm.city} onChange={v => setShippingForm({ ...shippingForm, city: v })} required />
              <Field label="State / Province *" value={shippingForm.state} onChange={v => setShippingForm({ ...shippingForm, state: v })} required />
              <Field label="Postal Code *" value={shippingForm.postalCode} onChange={v => setShippingForm({ ...shippingForm, postalCode: v })} required />
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">Country *</label>
                <select
                  value={shippingForm.countryCode}
                  onChange={e => setShippingForm({ ...shippingForm, countryCode: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                >
                  {SUPPORTED_COUNTRIES.map(c => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {shippingForm.countryCode === 'US' && (
              <div className="mt-4 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>U.S. deliveries do not support P.O. Box addresses.</strong> Please enter a
                  street address with house/building number to avoid delivery failure.
                </span>
              </div>
            )}
            {freeThreshold !== null && !isFreeShip && (
              <div className="mt-3 flex items-center gap-2 text-xs text-brand-green bg-green-50 border border-green-200 rounded-lg p-3">
                <Truck className="w-4 h-4 shrink-0" />
                <span>
                  Add <strong>${'$'}{(freeThreshold - subtotal).toFixed(2)}</strong> more to unlock
                  <strong> FREE shipping</strong> (orders over {'$'}{freeThreshold} ship free to the United States).
                </span>
              </div>
            )}
            {isFreeShip && (
              <div className="mt-3 flex items-center gap-2 text-xs text-brand-green bg-green-50 border border-green-200 rounded-lg p-3 font-semibold">
                <Truck className="w-4 h-4 shrink-0" />
                <span>🎉 You&apos;ve unlocked FREE shipping!</span>
              </div>
            )}
          </section>

          {/* Payment */}
          <section className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-4 h-4 text-brand-green" />
              <h2 className="text-lg font-bold text-brand-dark">Payment</h2>
            </div>
            {shippingBlocked ? (
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">Shipping unavailable</p>
                  <p>{shippingQuote?.breakdown}</p>
                </div>
              </div>
            ) : !formValid ? (
              <p className="text-sm text-brand-gray">Please fill in all required shipping fields to enable payment.</p>
            ) : !clientId ? (
              <p className="text-sm text-red-500">PayPal is not configured. Please contact support.</p>
            ) : (
              <>
                <Script
                  src={`https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=USD&intent=capture`}
                  strategy="afterInteractive"
                  onLoad={() => setSdkReady(true)}
                />
                <div ref={containerRef} className="min-h-[150px]" />
                {loading && (
                  <div className="flex items-center justify-center gap-2 mt-3 text-sm text-brand-gray">
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing payment…
                  </div>
                )}
                {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
              </>
            )}
            <div className="flex items-center gap-2 mt-4 text-xs text-brand-gray">
              <ShieldCheck className="w-4 h-4" />
              <span>Payments are securely processed by PayPal. We never see your card details.</span>
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-brand-beige/40 border border-brand-beige rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-brand-dark mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <div className="w-14 h-14 bg-white rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    {item.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-brand-dark line-clamp-2">{item.name}</div>
                    <div className="text-xs text-brand-gray">
                      {[item.color, item.size].filter(Boolean).join(' · ')} × {item.quantity}
                    </div>
                  </div>
                  <div className="font-semibold text-brand-dark">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-brand-beige pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-brand-gray">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-brand-gray">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  Shipping
                </span>
                <span>{shippingBlocked ? 'Unavailable' : !shippingQuote ? '—' : isFreeShip ? <span className="text-brand-green font-bold">FREE</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shippingQuote && !shippingBlocked && (
                <div className="text-xs text-brand-gray pl-5 -mt-1">
                  {shippingQuote.breakdown}
                </div>
              )}
              <div className="flex justify-between font-bold text-brand-dark text-base pt-2 border-t border-brand-beige">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = 'text', required = false, className = '',
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-brand-dark mb-1">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
      />
    </div>
  );
}
