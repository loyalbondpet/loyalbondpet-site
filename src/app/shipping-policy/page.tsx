import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy - Delivery Info & Rates',
  description: 'LoyalBond shipping policy: standard delivery 5-7 business days, express 2-3 days. International shipping available (buyer pays shipping).',
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav className="flex items-center gap-2 text-sm text-brand-gray mb-8">
        <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="text-brand-dark font-medium">Shipping Policy</span>
      </nav>

      <h1 className="text-4xl font-bold text-brand-dark mb-8">Shipping Policy</h1>

      <div className="prose prose-lg max-w-none text-brand-gray space-y-6">
        <p className="text-lg">Last updated: January 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Shipping Rates & Delivery Times</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-brand-beige">
                  <th className="border border-gray-200 px-4 py-3 text-left text-brand-dark">Method</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-brand-dark">Delivery Time</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-brand-dark">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Standard Shipping</td>
                  <td className="border border-gray-200 px-4 py-3">5-7 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$4.99 (Free over $49)</td>
                </tr>
                <tr className="bg-brand-cream">
                  <td className="border border-gray-200 px-4 py-3">Express Shipping</td>
                  <td className="border border-gray-200 px-4 py-3">2-3 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$9.99</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Overnight Shipping</td>
                  <td className="border border-gray-200 px-4 py-3">1 business day</td>
                  <td className="border border-gray-200 px-4 py-3">$19.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Shipping Terms</h2>
          <p>All orders are shipped FOB Ningbo, China. International shipping costs are borne by the buyer. Shipping rates and delivery times vary by location and will be calculated at checkout or quoted separately for bulk orders.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">International Shipping</h2>
          <p>We currently ship to select international destinations. International shipping rates and delivery times vary by location and will be calculated at checkout.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Canada: 7-14 business days, rates starting at $14.99</li>
            <li>Europe: 10-20 business days, rates starting at $24.99</li>
            <li>Asia-Pacific: 14-25 business days, rates starting at $29.99</li>
          </ul>
          <p className="mt-4">Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Order Processing</h2>
          <p>Orders are processed within 1-2 business days (excluding weekends and holidays). You will receive a confirmation email with tracking information once your order has shipped.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Tracking Your Order</h2>
          <p>Once your order ships, you will receive an email with a tracking number. You can use this number to track your package on our website or the carrier&apos;s website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Damaged or Lost Packages</h2>
          <p>If your package arrives damaged or doesn&apos;t arrive at all, please contact us at <strong className="text-brand-dark">hello@loyalbondpet.com</strong> within 7 days of the expected delivery date. We will work with the carrier to resolve the issue and send a replacement if necessary.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Contact Us</h2>
          <p>For shipping questions, please contact us at <strong className="text-brand-dark">hello@loyalbondpet.com</strong> or visit our <Link href="/contact" className="text-brand-green hover:underline">Contact page</Link>.</p>
        </section>
      </div>
    </div>
  );
}
