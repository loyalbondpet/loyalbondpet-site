import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Return Policy - 30-Day Hassle-Free Returns',
  description: 'LoyalBond 30-day return policy. Not satisfied? Return any product within 30 days for a full refund. Free return shipping on defective items.',
};

export default function ReturnPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-brand-gray mb-8">
        <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="text-brand-dark font-medium">Return Policy</span>
      </nav>

      <h1 className="text-4xl font-bold text-brand-dark mb-8">Return Policy</h1>

      <div className="prose prose-lg max-w-none text-brand-gray space-y-6">
        <p className="text-lg">Last updated: January 2025</p>

        <div className="bg-brand-beige rounded-xl p-6 border border-brand-green/10">
          <p className="text-brand-dark font-medium text-lg">30-Day Hassle-Free Returns</p>
          <p className="mt-2">We want you and your pet to love every LoyalBond product. If you&apos;re not completely satisfied, you can return most items within 30 days of delivery for a full refund.</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Eligibility for Returns</h2>
          <p>To be eligible for a return, your item must be:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Unused or gently used (we understand pets need to try products!)</li>
            <li>In the original packaging when possible</li>
            <li>Returned within 30 days of the delivery date</li>
            <li>Accompanied by the original receipt or proof of purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Non-Returnable Items</h2>
          <p>The following items cannot be returned:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Items that have been heavily damaged by chewing or misuse</li>
            <li>Products purchased more than 30 days ago</li>
            <li>Items on final sale or clearance</li>
            <li>Gift cards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">How to Initiate a Return</h2>
          <ol className="list-decimal pl-6 space-y-3 mt-4">
            <li>Email us at <strong className="text-brand-dark">returns@loyalbondpet.com</strong> with your order number and reason for return.</li>
            <li>Our team will review your request and provide a Return Merchandise Authorization (RMA) number within 2 business days.</li>
            <li>Pack the item securely and include the RMA number on the outside of the package.</li>
            <li>Ship the package to the address provided in your RMA email.</li>
            <li>Once received and inspected, we&apos;ll process your refund within 5-7 business days.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Refunds</h2>
          <p>Refunds are processed to the original payment method. Please allow 5-10 business days for the refund to appear on your statement, depending on your financial institution.</p>
          <p className="mt-4">If your return is due to a defect or error on our part, we will cover return shipping costs and send a replacement at no additional charge if preferred.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Exchanges</h2>
          <p>Need a different size or color? We&apos;re happy to help! Contact us at <strong className="text-brand-dark">hello@loyalbondpet.com</strong> and we&apos;ll arrange an exchange. Exchange shipping is free within the contiguous United States.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Contact Us</h2>
          <p>For return-related questions, please contact us at <strong className="text-brand-dark">returns@loyalbondpet.com</strong> or visit our <Link href="/contact" className="text-brand-green hover:underline">Contact page</Link>.</p>
        </section>
      </div>
    </div>
  );
}
