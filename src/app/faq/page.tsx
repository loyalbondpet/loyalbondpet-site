import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Wholesale Ordering & Product Information',
  description:
    'FAQ about LoyalBond wholesale orders, shipping, products, and compliance. Serving pet stores, vet clinics, and rescue organizations.',
  openGraph: {
    title: 'FAQ - Wholesale Ordering & Product Information | LoyalBond',
    description:
      'Answers to common questions about wholesale ordering, shipping, product categories, and compliance.',
    url: 'https://www.loyalbondpet.com/faq',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you offer wholesale bulk orders for pet mobility products?',
    a: 'Yes. Our minimum order quantity (MOQ) is 50 pieces per product, with mixed sizes and colors accepted within the same order. This flexibility is ideal for independent pet stores, vet clinics, and boarding facilities testing new product lines.',
  },
  {
    q: 'What is your MOQ for independent pet store buyers?',
    a: '50 pieces per product. You can mix sizes (S/M/L/XL) and colors to match your customer demand. We understand that independent stores need flexibility, so we don\u2019t require large single-SKU commitments.',
  },
  {
    q: 'Can you provide custom private label branding?',
    a: 'Yes, we offer private label services including custom packaging, hang tags, and branding. Please contact us with your requirements for a detailed quote.',
  },
  {
    q: 'What shipping terms do you offer?',
    a: 'We ship FOB Ningbo, China. We accept T/T payment: 50% deposit to confirm the order, 50% balance before shipment. For larger orders, we can discuss alternative payment arrangements.',
  },
  {
    q: 'What is your lead time for bulk shipments?',
    a: 'Standard lead time is 25\u201335 days after order confirmation and deposit receipt. This includes production, quality inspection, and packaging. Rush orders may be available \u2014 please inquire for specific timelines.',
  },
  {
    q: 'Are your products compliant with US textile safety standards?',
    a: 'Yes. Our textile products (harnesses, beds, towels) comply with US Consumer Product Safety Commission (CPSC) textile standards. Our silicone products use food-grade materials. We work with certified manufacturers and can provide compliance documentation upon request.',
  },
  {
    q: 'What product categories do you specialize in?',
    a: 'We specialize in daily care products for senior dogs and dogs with mobility challenges: lift-assist harnesses, hind leg support harnesses, orthopedic bolster beds, silicone paw covers, interactive snuffle mats, and quick-dry grooming towels. All products are non-medical daily care items \u2014 no FDA registration required.',
  },
  {
    q: 'How do I get a detailed quote?',
    a: 'Email us at sales@loyalbondpet.com or WhatsApp +8615706802495. Please include: product names/quantities, target sizes/colors, destination port, and any customization requirements. We typically respond within 24 hours.',
  },
];

export default function FAQPage() {
  const baseUrl = 'https://www.loyalbondpet.com';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Answers to common questions about wholesale ordering, shipping, and our product line.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 list-none">
                <span className="text-base sm:text-lg font-semibold text-brand-dark pr-4">
                  {faq.q}
                </span>
                <svg
                  className="w-5 h-5 text-brand-green flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-brand-gray leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-brand-beige/60 rounded-2xl p-8 border border-brand-green/10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">
            Still have questions?
          </h2>
          <p className="text-brand-gray mb-6">
            We&apos;re happy to help. Reach out to our sales team for detailed product information, pricing, or customization options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:sales@loyalbondpet.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              sales@loyalbondpet.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-green text-brand-green font-semibold rounded-lg hover:bg-brand-green hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
