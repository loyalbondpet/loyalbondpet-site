import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy - Delivery Info & Rates',
  description: 'LoyalBond ships to 7 countries with tracked international delivery. Shipping calculated by weight and destination. Delivery in 8-15 business days.',
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
        <p className="text-lg">Last updated: August 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">How Shipping Is Calculated</h2>
          <p>
            Shipping costs are calculated <strong>automatically at checkout</strong> based on your
            delivery country and the total chargeable weight of your order. We do not charge flat
            shipping fees — you only pay the actual logistics cost for your specific package.
          </p>
          <p>
            Chargeable weight is the greater of actual package weight and volumetric weight
            (length × width × height ÷ 8000). This is standard practice in international shipping
            and ensures fair pricing for both lightweight and bulky items.
          </p>
          <p>
            Enter your shipping address during checkout to see the exact shipping cost before
            payment. There are no hidden fees.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Countries We Ship To</h2>
          <p>We currently ship to the following destinations:</p>
          <div className="overflow-x-auto not-prose">
            <table className="w-full border-collapse border border-gray-200 rounded-lg text-sm">
              <thead>
                <tr className="bg-brand-beige">
                  <th className="border border-gray-200 px-4 py-3 text-left text-brand-dark">Country</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-brand-dark">Delivery Time</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-brand-dark">Starting From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">🇺🇸 United States</td>
                  <td className="border border-gray-200 px-4 py-3">8–13 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$4.99</td>
                </tr>
                <tr className="bg-brand-cream/40">
                  <td className="border border-gray-200 px-4 py-3">🇨🇦 Canada</td>
                  <td className="border border-gray-200 px-4 py-3">10–14 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$4.99</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">🇬🇧 United Kingdom</td>
                  <td className="border border-gray-200 px-4 py-3">9–15 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$3.99</td>
                </tr>
                <tr className="bg-brand-cream/40">
                  <td className="border border-gray-200 px-4 py-3">🇩🇪 Germany</td>
                  <td className="border border-gray-200 px-4 py-3">9–15 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$3.99</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">🇫🇷 France</td>
                  <td className="border border-gray-200 px-4 py-3">9–15 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$3.99</td>
                </tr>
                <tr className="bg-brand-cream/40">
                  <td className="border border-gray-200 px-4 py-3">🇦🇺 Australia</td>
                  <td className="border border-gray-200 px-4 py-3">8–15 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$3.99</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">🇯🇵 Japan</td>
                  <td className="border border-gray-200 px-4 py-3">9–12 business days</td>
                  <td className="border border-gray-200 px-4 py-3">$3.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-brand-gray mt-2">
            "Starting from" reflects the minimum shipping cost for our lightest items. Actual cost
            depends on the weight and dimensions of your selected products.
          </p>
          <p className="mt-4">
            Your country not listed? Contact us at <strong>sales@loyalbondpet.com</strong> and we
            will do our best to arrange shipping for you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Order Processing</h2>
          <p>
            Orders are processed within <strong>1–3 business days</strong> (excluding weekends and
            Chinese public holidays). Once your order ships, you will receive a confirmation email
            with a tracking number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Tracking Your Order</h2>
          <p>
            After your order is dispatched, you will receive an email with a tracking number.
            Tracking information may take 24–48 hours to appear in the carrier's system after
            shipment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Customs, Duties & Taxes</h2>
          <p>
            International orders may be subject to customs duties, import taxes, or brokerage fees
            imposed by the destination country. These charges are the <strong>responsibility of
            the recipient</strong> and are not included in the product price or shipping cost.
          </p>
          <p>
            We declare orders at their actual value. For most small consumer shipments under the
            destination country's de minimis threshold (e.g., $800 in the US), no additional
            import duties apply. However, customs policies vary widely by country and we cannot
            guarantee that no charges will apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Shipping Terms</h2>
          <p>
            All orders ship FOB Ningbo, China. Risk of loss transfers to the buyer upon delivery
            to the carrier. For bulk or wholesale orders, shipping is quoted separately based on
            volume and destination — contact us at sales@loyalbondpet.com for a freight quote.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Delays</h2>
          <p>
            Actual transit times may vary due to customs inspections, weather conditions, carrier
            delays, or peak seasons (e.g., Black Friday, Christmas). We appreciate your patience
            and encourage you to order early during holiday periods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Damaged or Lost Packages</h2>
          <p>
            If your package arrives damaged or does not arrive within the estimated delivery
            window, please contact us at <strong className="text-brand-dark">sales@loyalbondpet.com</strong> within
            7 days of the expected delivery date. We will work with the carrier to resolve the
            issue and arrange a replacement if necessary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Contact Us</h2>
          <p>
            For shipping questions, please contact us at{' '}
            <strong className="text-brand-dark">sales@loyalbondpet.com</strong> or visit our{' '}
            <Link href="/contact" className="text-brand-green hover:underline">Contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
