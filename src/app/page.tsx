import type { Metadata } from 'next';
import Link from 'next/link';
import { products, collections, getBestSellers } from '@/lib/data/products';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'LoyalBond | Senior Dog Products & Pet Essentials',
  description:
    'Give your senior dog the comfort they deserve. Shop vet-recommended functional products including orthopedic beds, mobility aids, travel accessories, and daily care essentials. Non-toxic, safe materials.',
  openGraph: {
    title: 'LoyalBond | Senior Dog Products & Pet Essentials',
    description: 'Give your senior dog the comfort they deserve. Vet-recommended, non-toxic products for aging pets.',
    url: 'https://loyalbondpet.com',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoyalBond',
  alternateName: '恒伴',
  url: 'https://loyalbondpet.com',
  logo: 'https://loyalbondpet.com/logo.png',
  description: 'Functional pet products designed for senior dogs and expanding to one-stop pet supplies including exotic pets.',
  sameAs: [
    'https://facebook.com/loyalbondpet',
    'https://instagram.com/loyalbondpet',
    'https://twitter.com/loyalbondpet',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@loyalbondpet.com',
    contactType: 'customer service',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://loyalbondpet.com',
    },
  ],
};

export default function HomePage() {
  const bestSellers = getBestSellers();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <section className="bg-brand-beige py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { icon: '✓', text: 'Vet-Recommended Design' },
              { icon: '🛡', text: 'Non-Toxic Materials' },
              { icon: '🏭', text: 'Direct from Factory' },
              { icon: '↩', text: '30-Day Returns' },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-dark">
                <span className="text-brand-green font-bold">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Shop by Collection</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Thoughtfully curated kits for every aspect of your senior dog&apos;s comfort and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-brand-beige aspect-[4/5] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg className="w-32 h-32 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="relative z-20 mt-auto p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{collection.title}</h3>
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

      {/* Why LoyalBond */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Why LoyalBond?</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              We&apos;re not just another pet brand. Every product is designed with real pets and real families in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: 'Designed for Real Life with Pets',
                description: 'Our products are tested with real dogs in real homes. We understand the messes, the磨损, and the love that comes with pet ownership.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Safe & Non-Toxic Materials',
                description: 'Every material is carefully selected and tested. We use only non-toxic, pet-safe materials because your dog\'s health is non-negotiable.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.44c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.44a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
                title: 'Made to Last',
                description: 'We build products that withstand the daily wear and tear of pet life. Quality construction means fewer replacements and better value.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-beige rounded-full flex items-center justify-center text-brand-green">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Best Sellers</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Loved by thousands of senior dogs and their families.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/collections/senior-mobility"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">What Pet Parents Say</h2>
            <p className="text-lg text-brand-gray">Real stories from real LoyalBond families.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'The Senior Support Harness has been a game-changer for our 13-year-old Lab. She can enjoy walks again without struggling to get up. The quality is outstanding.',
                name: 'Sarah M.',
                pet: 'Max, Labrador Retriever, 13 yrs',
                rating: 5,
              },
              {
                quote: 'We tried many orthopedic beds before finding LoyalBond. The memory foam bed is the only one that hasn\'t flattened after a month. Max sleeps through the night now.',
                name: 'Jennifer K.',
                pet: 'Buddy, Golden Retriever, 11 yrs',
                rating: 5,
              },
              {
                quote: 'The non-slip ramp gives our Dachshund access to the couch safely. The build quality is impressive and it looks great in our home. Highly recommend!',
                name: 'Michael T.',
                pet: 'Charlie, Dachshund, 10 yrs',
                rating: 5,
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-brand-dark leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-brand-gray">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get 15% Off Your First Order</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join our newsletter for expert senior dog care tips, new product launches, and exclusive offers.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
