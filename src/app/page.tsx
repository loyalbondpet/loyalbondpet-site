import type { Metadata } from 'next';
import Link from 'next/link';
import { getBestSellers } from '@/lib/data/products';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'LoyalBond | Senior Pet Wellness — Care & Mobility Aids',
  description:
    'Functional comfort products for dogs at every life stage — senior mobility, joint comfort, and daily calm. Thoughtfully designed, non-toxic, and made with care.',
  openGraph: {
    title: 'LoyalBond | Senior Pet Wellness — Care & Mobility Aids',
    description: 'Functional comfort products for dogs at every life stage — from senior care to everyday support. Thoughtfully designed, non-toxic.',
    url: 'https://www.loyalbondpet.com',
    type: 'website',
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoyalBond',
  alternateName: 'LoyalBond Pet',
  url: 'https://www.loyalbondpet.com',
  logo: 'https://www.loyalbondpet.com/logo.png',
  description: 'Specialized supplier of functional pet comfort products for dogs at every life stage, including senior care, mobility aids, and everyday support. Quality craftsmanship with certified manufacturers.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sales@loyalbondpet.com',
    contactType: 'customer service',
    url: 'https://www.loyalbondpet.com/contact',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LoyalBond',
  url: 'https://www.loyalbondpet.com',
  description: 'Functional wellness products for senior dogs — mobility aids, orthopedic beds, and daily care essentials.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.loyalbondpet.com/products?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const sceneIcons = [
  { slug: 'home-safety', name: 'Home Safety', emoji: '🏠', desc: 'Orthopedic beds, supportive foam, comfort essentials' },
  { slug: 'feeding-aids', name: 'Feeding Aids', emoji: '🍽️', desc: 'Slow feeders, puzzle toys, feeding essentials' },
  { slug: 'travel-car', name: 'Travel & Car', emoji: '🚗', desc: 'Harnesses, paw covers, travel comfort' },
  { slug: 'grooming-bath', name: 'Grooming & Bath', emoji: '🛁', desc: 'Quick-dry towels, coat care, daily grooming' },
  { slug: 'oral-care', name: 'Oral Care', emoji: '🦷', desc: 'Dental comfort essentials' },
  { slug: 'seasonal', name: 'Seasonal', emoji: '❄️', desc: 'Seasonal comfort & daily living essentials' },
];

export default function HomePage() {
  const bestSellers = getBestSellers();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* 6 Scene Icons Entry */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">Shop by Life Scenario</h2>
            <p className="text-brand-gray">6 specialized collections for every aspect of your dog&apos;s daily life</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sceneIcons.map((scene) => (
              <Link
                key={scene.slug}
                href={`/collections/${scene.slug}`}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-brand-beige/50 hover:bg-brand-green/10 border border-transparent hover:border-brand-green/30 transition-all duration-200"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{scene.emoji}</span>
                <div className="text-center">
                  <p className="font-semibold text-brand-dark text-sm">{scene.name}</p>
                  <p className="text-xs text-brand-gray mt-0.5 line-clamp-1">{scene.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-beige py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { icon: '✓', text: 'Thoughtfully Designed' },
              { icon: '🛡', text: 'Non-Toxic Materials' },
              { icon: '🏆', text: 'Quality Craftsmanship' },
              { icon: '📦', text: 'FOB Ningbo Shipping' },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-dark">
                <span className="text-brand-green font-bold">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
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
              Every product is designed around the real daily needs of dogs with special requirements and their families.
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
                description: 'Our products are tested with real dogs in real homes. We understand the messes, the wear and tear, and the love that comes with pet ownership.',
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
              Curated essentials for dogs at every life stage and their families.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/collections"
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

      {/* Brand Story */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/brand-story.jpg"
                alt="LoyalBond founder with a senior dog"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-wide mb-2">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">Loyal Companionship, Every Step of the Way</h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  LoyalBond was born from a simple truth: the bond between humans and their pets is one of life&apos;s greatest gifts. When our own senior dog started struggling with everyday movements, we realized how few quality options existed for pets with special needs — whether aging, recovering, or living with mobility challenges.
                </p>
                <p>
                  That frustration became our mission. We partnered with certified manufacturers to create thoughtfully designed, non-toxic products that genuinely improve daily life for dogs at every life stage — from senior companions to post-surgery recovery, joint support, and beyond. Every product is tested with real pets — because your companion deserves nothing less.
                </p>
                <p>
                  Today, LoyalBond offers thoughtfully designed essentials for dogs at every life stage — from senior mobility and joint comfort to grooming, feeding, travel, and everyday comfort.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Read Our Full Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Scenarios */}
      <section className="py-16 sm:py-20 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Designed for Every Scenario</h2>
            <p className="text-lg text-brand-gray">How LoyalBond products support dogs in different settings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Clinical Settings',
                description: 'Our orthopedic beds and lift-assist harnesses support dogs with mobility challenges and senior dogs in examination and resting environments. Non-slip paw covers provide stability on clinic floors, while drying towels keep grooming areas clean between uses.',
                stat: 'Designed with comfort and safety in mind for dogs of all ages',
              },
              {
                icon: '🏪',
                title: 'Retail Partnership',
                description: 'LoyalBond products are built for retail display with professional packaging and competitive margins. Our product range covers functional comfort essentials for daily comfort, mobility support, and recovery — ideal for pet stores serving the growing market of dogs with special needs.',
                stat: 'Wholesale and private-label partnerships welcome',
              },
              {
                icon: '🏠',
                title: 'At-Home Comfort',
                description: 'Our product line helps maintain quality of life for dogs at home. The Lift-Assist Harness helps dogs with mobility challenges navigate stairs and car rides. Orthopedic bolster beds provide supportive rest for senior and recovering dogs. Silicone paw covers prevent slips on hardwood floors — giving every dog confidence to move freely.',
                stat: 'Designed for dogs with mobility, comfort, and daily living needs at every life stage',
              },
            ].map((scenario) => (
              <div key={scenario.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{scenario.icon}</span>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{scenario.title}</h3>
                <p className="text-brand-gray leading-relaxed mb-4">{scenario.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-brand-green">{scenario.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Solutions for Partners */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">Solutions for Every Partner</h2>
            <p className="text-brand-gray">Tailored product programs for professionals who care for dogs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Vet Clinics', href: '/solutions/vet-clinics', emoji: '🏥', desc: 'Functional comfort products for senior dogs and resting pets' },
              { name: 'Pet Stores', href: '/solutions/pet-stores', emoji: '🏪', desc: 'High-demand functional pet care products' },
              { name: 'Boarding Facilities', href: '/solutions/boarding-facilities', emoji: '🏨', desc: 'Durable comfort for senior and special-needs boarders' },
              { name: 'Rescue Organizations', href: '/solutions/rescue-organizations', emoji: '❤️', desc: 'Affordable comfort for rescue dogs of all ages' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center gap-2 p-5 rounded-xl bg-brand-beige/30 hover:bg-brand-green/10 border border-transparent hover:border-brand-green/30 transition-all duration-200"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                <p className="font-semibold text-brand-dark text-sm">{item.name}</p>
                <p className="text-xs text-brand-gray text-center">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get 15% Off Your First Order</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join our newsletter for expert pet wellness tips, new product launches, and exclusive offers.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
