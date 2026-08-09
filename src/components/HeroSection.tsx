import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[75vh] py-12 lg:py-0">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full text-brand-green text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              Functional Wellness for Every Dog | From Senior Care to Recovery Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
              Give Every Dog the{' '}
              <span className="text-brand-green">Comfort</span> They Deserve
            </h1>
            <p className="text-lg sm:text-xl text-brand-gray mb-8 max-w-lg mx-auto lg:mx-0">
              From senior mobility to post-surgery recovery, joint support to everyday calm support — thoughtfully designed, non-toxic products for dogs with special needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/wholesale"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-coral/20 text-lg"
              >
                Wholesale Inquiry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-green/20 text-lg"
              >
                Shop Retail Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-senior-dog.jpg"
                alt="Happy senior dog enjoying comfort at home with loving owner"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm">Functional Pet Wellness</p>
                <p className="text-xs text-brand-gray">Non-Toxic · Thoughtfully Designed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
