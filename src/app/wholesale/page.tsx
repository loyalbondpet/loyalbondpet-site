import type { Metadata } from 'next';
import Link from 'next/link';
import { collections } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Wholesale & Bulk Orders | LoyalBond',
  description:
    'Partner with LoyalBond for wholesale pet products. Flexible MOQ, customization options, and consistent quality for your retail or distribution business.',
  openGraph: {
    title: 'Wholesale & Bulk Orders | LoyalBond',
    description:
      'Quality pet products for wholesale. Flexible MOQ, custom branding, and reliable supply from a specialized senior pet product supplier.',
    url: 'https://www.loyalbondpet.com/wholesale',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.loyalbondpet.com' },
    { '@type': 'ListItem', position: 2, name: 'Wholesale', item: 'https://www.loyalbondpet.com/wholesale' },
  ],
};

export default function WholesalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">
              Wholesale &amp; Bulk Orders
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              Partner with LoyalBond for quality senior pet products. We offer flexible ordering, customization options, and reliable supply for retailers, distributors, and bulk buyers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Quality Assurance',
                desc: 'Every product meets our strict quality standards. We work with certified manufacturers and conduct thorough inspections before shipment.',
              },
              {
                icon: '📦',
                title: 'Flexible MOQ',
                desc: 'We understand different business needs. Enjoy flexible minimum order quantities with mixed sizes and colors accepted.',
              },
              {
                icon: '🎨',
                title: 'Customization',
                desc: 'From custom packaging to branding options, we support your business identity and help you stand out in your market.',
              },
              {
                icon: '🔗',
                title: 'Reliable Supply',
                desc: 'As a specialized supplier, we maintain consistent production capacity and stable lead times so you can plan with confidence.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-brand-beige/30 hover:bg-brand-beige/60 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Inquiry',
                desc: 'Tell us about your needs — products, quantities, customization requirements, and target market.',
              },
              {
                step: '02',
                title: 'Quotation',
                desc: 'We provide a detailed quotation including pricing, MOQ, lead time, and shipping options.',
              },
              {
                step: '03',
                title: 'Sampling',
                desc: 'Request samples to evaluate quality, materials, and packaging before placing a bulk order.',
              },
              {
                step: '04',
                title: 'Production',
                desc: 'Once confirmed, we proceed with production, quality inspection, and arrange shipment.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-green">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-4">
            Product Categories
          </h2>
          <p className="text-brand-gray text-center mb-12 max-w-2xl mx-auto">
            Browse our collections available for wholesale. All products can be ordered in bulk with mixed sizes and colors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-brand-green/30 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm text-brand-gray mb-3">{collection.description}</p>
                <span className="text-sm text-brand-green font-medium inline-flex items-center gap-1">
                  View Products
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General Terms */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            General Terms
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Minimum Order', value: '50 pieces (mixed sizes/colors accepted)' },
              { label: 'Lead Time', value: '25-35 days after order confirmation' },
              { label: 'Payment Terms', value: 'T/T 50% deposit, 50% before shipment' },
              { label: 'Shipping', value: 'FOB Ningbo, China' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg p-6">
                <dt className="text-sm font-medium text-brand-gray mb-1">{item.label}</dt>
                <dd className="text-brand-dark font-semibold">{item.value}</dd>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-gray text-sm mt-6">
            Terms are negotiable for larger orders. Contact us for customized pricing and arrangements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Send us your inquiry and we&apos;ll get back to you within 24 hours with a detailed quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold rounded-lg transition-colors"
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
              Contact for Wholesale
            </Link>
            <a
              href="https://wa.me/8615706802495"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
