import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCareGuideBySlug, getAllCareGuideSlugs } from '@/lib/data/careGuides';

export async function generateStaticParams() {
  return getAllCareGuideSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCareGuideBySlug(slug);
  if (!guide) return { title: 'Not Found' };
  return {
    title: guide.title + ' | LoyalBond',
    description: guide.description.slice(0, 160),
  };
}

export default async function CareGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getCareGuideBySlug(slug);
  if (!guide) notFound();

  const baseUrl = 'https://www.loyalbondpet.com';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Care Guides', item: `${baseUrl}/care-guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `${baseUrl}/care-guide/${slug}` },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: guide.title,
    description: guide.description,
    url: `${baseUrl}/care-guide/${slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'LoyalBond',
      url: baseUrl,
    },
    about: {
      '@type': 'Thing',
      name: guide.subtitle,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-brand-green hover:text-brand-green/80 font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">{guide.title}</h1>
            <p className="text-xl text-brand-green font-semibold mb-6">{guide.subtitle}</p>
            <p className="text-lg text-brand-gray leading-relaxed">{guide.description}</p>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Common Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guide.challenges.map((challenge, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-beige/40 border border-brand-beige">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-green font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-2">{challenge.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guide.recommendedProducts.map(product => (
              <Link key={product.slug} href={`/products/${product.slug}`}
                className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-full aspect-square rounded-xl bg-brand-beige mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-brand-dark group-hover:text-brand-green transition-colors">{product.name}</h3>
                <p className="text-sm text-brand-gray mt-1">{product.reason}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {guide.relatedBlogLinks.map((link, i) => (
              <Link key={i} href={link.href}
                className="group flex items-center gap-4 p-5 rounded-xl bg-brand-beige/30 hover:bg-brand-beige/60 transition-colors">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="font-medium text-brand-dark group-hover:text-brand-green transition-colors">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Support Your Dog?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Explore our collection of products designed to support comfort for dogs with these specific needs.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-semibold rounded-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Shop Products
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
