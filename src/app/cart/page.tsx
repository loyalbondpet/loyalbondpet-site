'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart, isLoaded } = useCart();

  if (!isLoaded) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-brand-gray">Loading cart…</div>;
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-brand-beige mb-4" />
        <h1 className="text-2xl font-bold text-brand-dark mb-2">Your cart is empty</h1>
        <p className="text-brand-gray mb-6">Browse our senior dog essentials and add items to get started.</p>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
        >
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-brand-dark mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
              <Link href={`/products/${item.slug}`} className="shrink-0">
                <div className="w-24 h-24 bg-brand-beige rounded-lg overflow-hidden">
                  {item.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  )}
                </div>
              </Link>

              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.slug}`} className="font-semibold text-brand-dark hover:text-brand-green line-clamp-2">
                  {item.name}
                </Link>
                <div className="text-xs text-brand-gray mt-1 flex flex-wrap gap-x-3">
                  {item.color && <span>Color: {item.color}</span>}
                  {item.size && <span>Size: {item.size}</span>}
                </div>
                <div className="text-brand-green font-bold mt-1">${item.price.toFixed(2)}</div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-gray-50 rounded-l-lg"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-gray-50 rounded-r-lg"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>

              <div className="text-right font-bold text-brand-dark">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-brand-beige/40 border border-brand-beige rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-brand-dark mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm text-brand-gray mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-brand-gray mb-4">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t border-brand-beige pt-4 flex justify-between font-bold text-brand-dark mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 py-3 bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold rounded-lg transition-all"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="block text-center text-sm text-brand-gray hover:text-brand-green mt-3">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
