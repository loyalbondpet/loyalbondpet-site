'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Package } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const [orderInfo, setOrderInfo] = useState<{ id: string; total?: string; email?: string } | null>(null);

  useEffect(() => {
    if (!token) return;
    // Re-verify order on server (capture already done on checkout page).
    fetch(`/api/paypal/verify-order?orderId=${encodeURIComponent(token)}`)
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (d) setOrderInfo({ id: d.id || token, total: d.total, email: d.email }); })
      .catch(() => setOrderInfo({ id: token }));
  }, [token]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-brand-dark mb-3">Thank you for your order!</h1>
      <p className="text-brand-gray mb-2">
        Your payment has been received and your order is being prepared.
      </p>
      <p className="text-sm text-brand-gray mb-8">
        A confirmation has been sent to your email. You will receive tracking info once your package ships from our China warehouse (typically 7–15 business days).
      </p>

      <div className="bg-brand-beige/40 border border-brand-beige rounded-xl p-6 mb-8 text-left">
        <div className="flex items-center gap-2 mb-3">
          <Package className="w-5 h-5 text-brand-green" />
          <h2 className="font-bold text-brand-dark">Order Details</h2>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-brand-gray">Order ID</span>
            <span className="font-mono font-medium text-brand-dark">{orderInfo?.id || token || '—'}</span>
          </div>
          {orderInfo?.total && (
            <div className="flex justify-between">
              <span className="text-brand-gray">Amount Paid</span>
              <span className="font-semibold text-brand-dark">${orderInfo.total}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-brand-gray">Shipping From</span>
            <span className="text-brand-dark">Lishui, Zhejiang, China</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-gray">Estimated Delivery</span>
            <span className="text-brand-dark">7–15 business days</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/products" className="px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors">
          Continue Shopping
        </Link>
        <a
          href="mailto:sales@loyalbondpet.com?subject=Order%20Support"
          className="px-6 py-3 border-2 border-brand-green text-brand-green font-semibold rounded-lg hover:bg-brand-green/5 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-2xl mx-auto px-4 py-16 text-center text-brand-gray">Loading…</div>}>
      <SuccessContent />
    </Suspense>
  );
}
