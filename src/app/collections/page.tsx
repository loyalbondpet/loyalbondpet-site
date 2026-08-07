import type { Metadata } from 'next';
import Link from 'next/link';
import { collections } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'All Collections | LoyalBond',
  description: 'Browse our 6 life scenario collections designed for senior dogs. Shop Home Safety, Feeding Aids, Travel & Car, Grooming & Bath, Oral Care, and Seasonal essentials.',
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6">
              <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-brand-dark font-medium">All Collections</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">Shop by Life Scenario</h1>
            <p className="text-lg text-brand-gray leading-relaxed">
              6 specialized collections designed for every aspect of your senior dog&apos;s daily life. Each product is thoughtfully selected to support comfort and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-brand-beige aspect-[4/3] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                  <span className="text-8xl">{collection.emoji}</span>
                </div>
                <div className="relative z-20 mt-auto p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{collection.emoji}</span>
                    <h3 className="text-xl font-bold text-white">{collection.title}</h3>
                  </div>
                  <p className="text-sm text-white/80 mb-3 line-clamp-2">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">{collection.priceRange}</span>
                    <span className="text-sm font-semibold text-brand-coral group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
