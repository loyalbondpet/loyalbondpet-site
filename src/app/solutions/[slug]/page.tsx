import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSolutionBySlug, getAllSolutionSlugs } from '@/lib/data/solutions';
import { products } from '@/lib/data/products';

export async function generateStaticParams() {
  return getAllSolutionSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: 'Not Found' };
  return {
    title: solution.title + ' | LoyalBond',
    description: solution.subtitle,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/wholesale" className="inline-flex items-center gap-1 text-sm text-brand-green hover:text-brand-green/80 font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Wholesale
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">{solution.title}</h1>
            <p className="text-xl text-brand-green font-semibold mb-4">{solution.subtitle}</p>
            <p className="text-lg text-brand-gray leading-relaxed">{solution.painPoint}</p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Why Partner With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.benefits.map(benefit => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-brand-beige/50 border border-brand-beige hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.recommendedProducts.map(product => {
              const actualProduct = products.find(p => p.slug === product.slug);
              const productImage = actualProduct?.images?.[0] || '/images/products/lift-assist-harness/01-main.jpg';
              return (
                <Link key={product.slug} href={`/products/${product.slug}`}
                  className="group p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="w-full aspect-square rounded-xl bg-brand-beige/30 mb-4 overflow-hidden">
                    <img
                      src={productImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-brand-dark group-hover:text-brand-green transition-colors">{product.name}</h3>
                  <p className="text-sm text-brand-gray mt-1">{product.reason}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wholesale Terms */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Wholesale Terms</h2>
            <div className="bg-brand-beige/50 rounded-2xl p-8">
              <ul className="space-y-3">
                {solution.wholesaleTerms.map((term, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-dark">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Contact us today to discuss pricing, MOQ, and customization options for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-semibold rounded-lg hover:bg-gray-50 transition-colors text-lg"
          >
            {solution.ctaText}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
