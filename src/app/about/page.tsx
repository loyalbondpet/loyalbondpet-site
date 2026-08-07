import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about LoyalBond (恒伴), founded by pet lovers who understand the bond between humans and their aging pets. Our mission: quality, safety, and compassion for every pet.',
  openGraph: {
    title: 'About Us - LoyalBond',
    description: 'Founded by pet lovers. Driven by compassion. Creating safe, quality products for senior dogs and beyond.',
    url: 'https://loyalbondpet.com/about',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://loyalbondpet.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://loyalbondpet.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">Our Story</h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              LoyalBond (恒伴) was born from a simple truth: the bond between humans and their pets is one of life&apos;s greatest gifts, and we believe every pet deserves comfort, safety, and love at every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">How It All Started</h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  It started with our own senior dog, Buddy. At 12 years old, we noticed him struggling with things he used to do effortlessly — jumping onto the couch, walking on our slippery floors, climbing into the car for adventures.
                </p>
                <p>
                  We searched for products that could help, but too often we found poor quality, unsafe materials, or designs that didn&apos;t truly understand what senior dogs need. We knew we could do better.
                </p>
                <p>
                  LoyalBond was founded with a mission to create functional, high-quality pet products that actually make a difference in the lives of aging pets and their families. Starting with senior dog essentials, we&apos;re growing into a one-stop shop for all pet supplies — including exotic pets — always guided by our core values.
                </p>
                <p>
                  Today, thousands of pet families trust LoyalBond to provide safe, effective products that help their beloved companions live more comfortable, happier lives. Every product we create is tested with real pets and designed with real love.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-brand-green/10 to-brand-beige rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="text-brand-green/40 text-sm mt-2">Founder with Senior Dog</p>
                <p className="text-brand-green/30 text-xs">Team Photo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            To provide every pet family with safe, functional, and beautifully designed products that enhance the quality of life for aging pets. We believe that loyalty deserves loyalty back — and that starts with the products we choose for our companions.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-brand-coral font-semibold">
            <span>Loyal companionship for every stage of life</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                title: 'Quality',
                description: 'We never cut corners. Every product is built with premium materials and rigorous testing to ensure it stands up to real life with pets. Quality isn\'t a feature — it\'s our foundation.',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Safety',
                description: 'Every material we use is non-toxic and independently tested. We believe pet parents should never have to worry about what their pets are exposed to. Safety is non-negotiable.',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: 'Compassion',
                description: 'We\'re pet parents first. Every decision we make is guided by empathy for the animals we serve and the families who love them. Compassion drives everything we do.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-brand-beige rounded-full flex items-center justify-center text-brand-green">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-brand-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Founder */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Alex Chen', role: 'Founder & CEO', bio: 'Lifelong dog lover and former veterinary technician. Founded LoyalBond after seeing too many senior dogs struggle with poor-quality products.' },
              { name: 'Dr. Sarah Mitchell', role: 'Veterinary Advisor', bio: 'DVM with 15 years of experience in geriatric pet care. Ensures every product meets the highest standards for pet health and safety.' },
              { name: 'Emily Rodriguez', role: 'Product Design Lead', bio: 'Industrial designer and cat mom. Specializes in creating products that are both functional for pets and beautiful in homes.' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-brand-beige rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="font-bold text-brand-dark text-lg">{member.name}</h3>
                <p className="text-brand-green text-sm font-medium mb-2">{member.role}</p>
                <p className="text-brand-gray text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Ready to Help Your Senior Dog?</h2>
          <p className="text-brand-gray mb-8">Explore our thoughtfully designed products and give your companion the comfort they deserve.</p>
          <Link
            href="/collections/senior-mobility"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold rounded-lg transition-colors"
          >
            Shop Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
