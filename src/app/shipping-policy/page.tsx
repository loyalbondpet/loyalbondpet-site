import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy - Delivery Info & Rates',
  description: 'LoyalBond shipping policy: standard delivery 13-23 business days from China, express 8-13 business days via DHL/FedEx. Shipping calculated at checkout based on weight and destination.',
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
        <p className="text-lg">Last updated: August 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Shipping Rates & Delivery Times</h2>
          <p>All orders ship directly from our warehouse in China via tracked international logistics. Please allow extra time for customs clearance.</p>
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
                  <td className="border border-gray-200 px-4 py-3">13-23 business days</td>
                  <td className="border border-gray-200 px-4 py-3">Calculated at checkout based on weight &amp; destination</td>
                </tr>
                <tr className="bg-brand-cream">
                  <td className="border border-gray-200 px-4 py-3">Express Shipping (DHL/FedEx)</td>
                  <td className="border border-gray-200 px-4 py-3">8-13 business days</td>
                  <td className="border border-gray-200 px-4 py-3">Calculated at checkout based on weight &amp; destination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">International Shipping</h2>
          <p>We currently ship to the following international destinations. Delivery times include customs processing and may vary depending on your local postal service.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>United States: 13-23 business days (standard), 8-13 business days (express)</li>
            <li>Canada: 15-27 business days, calculated at checkout</li>
            <li>Europe (UK, Germany, France, etc.): 15-30 business days, calculated at checkout</li>
            <li>Australia & New Zealand: 17-30 business days, calculated at checkout</li>
            <li>Other Asia-Pacific: 13-25 business days, calculated at checkout</li>
          </ul>
          <p className="mt-4">Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient. These charges are not included in the product price or shipping cost.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Order Processing</h2>
          <p>Orders are processed within 1-3 business days (excluding weekends and Chinese public holidays). You will receive a confirmation email with tracking information once your order has shipped.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Tracking Your Order</h2>
          <p>Once your order ships, you will receive an email with a tracking number. You can use this number to track your package on our website or the carrier&apos;s website. Tracking information may take 24-48 hours to update after shipment.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Shipping Terms</h2>
          <p>All orders are shipped FOB Ningbo, China. Risk of loss transfers to the buyer upon delivery to the carrier. International shipping costs are borne by the buyer. For bulk or wholesale orders, shipping will be quoted separately based on volume and destination — contact us at sales@loyalbondpet.com for a freight quote.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Delays</h2>
          <p>While we strive to meet the delivery times above, actual transit times may vary due to customs inspections, weather conditions, carrier delays, or peak shopping seasons (e.g., Black Friday, Christmas). We appreciate your patience and encourage you to order early during holiday periods.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Damaged or Lost Packages</h2>
          <p>If your package arrives damaged or doesn&apos;t arrive within the estimated delivery window, please contact us at <strong className="text-brand-dark">sales@loyalbondpet.com</strong> within 7 days of the expected delivery date. We will work with the carrier to resolve the issue and send a replacement if necessary.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Contact Us</h2>
          <p>For shipping questions, please contact us at <strong className="text-brand-dark">sales@loyalbondpet.com</strong> or visit our <Link href="/contact" className="text-brand-green hover:underline">Contact page</Link>.</p>
        </section>
      </div>
    </div>
  );
}
