import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

const footerLinks = {
  shop: {
    title: 'Shop',
    links: [
      { href: '/collections/senior-mobility', label: 'Senior Mobility' },
      { href: '/collections/home-safety', label: 'Home Safety' },
      { href: '/collections/travel-comfort', label: 'Travel Comfort' },
      { href: '/collections/daily-care', label: 'Daily Care' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
      { href: '/wholesale', label: 'Wholesale' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { href: '/shipping-policy', label: 'Shipping Policy' },
      { href: '/return-policy', label: 'Return Policy' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Join the LoyalBond Family</h3>
            <p className="text-gray-300 mb-6">Get 15% off your first order plus expert senior dog care tips delivered to your inbox.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">LoyalBond</span>
                <span className="block text-xs text-gray-300 -mt-0.5">LoyalBond — Loyal companionship for every stage of life</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4 max-w-sm">
              Specialized supplier of functional pet products for senior dogs. We work with certified manufacturers to deliver quality, safety, and comfort in every product.
            </p>
            <p className="text-gray-300 text-sm mb-6 max-w-sm">
              Email: sales@loyalbondpet.com | WhatsApp: +8615706802495
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="white"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FDA Disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            Disclaimer: LoyalBond products are everyday pet accessories and textile goods. They are not medical devices and are not intended to diagnose, treat, cure, or prevent any disease. Consult a licensed veterinarian for medical concerns.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} LoyalBond. All rights reserved.</p>
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-medium">Visa</div>
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-medium">Mastercard</div>
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-medium">Amex</div>
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-medium">PayPal</div>
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-medium">Apple Pay</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
