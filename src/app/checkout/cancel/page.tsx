import Link from 'next/link';
import { XCircle } from 'lucide-react';

export const metadata = { title: 'Checkout Cancelled | LoyalBond' };

export default function CheckoutCancelPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <XCircle className="w-20 h-20 text-brand-gray mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-brand-dark mb-3">Checkout cancelled</h1>
      <p className="text-brand-gray mb-8">
        Your payment was not completed. Your cart has been saved — you can return anytime to finish checkout.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/checkout" className="px-6 py-3 bg-brand-coral text-white font-semibold rounded-lg hover:bg-brand-coral/90 transition-colors">
          Return to Checkout
        </Link>
        <Link href="/cart" className="px-6 py-3 border-2 border-brand-green text-brand-green font-semibold rounded-lg hover:bg-brand-green/5 transition-colors">
          View Cart
        </Link>
      </div>
    </div>
  );
}
