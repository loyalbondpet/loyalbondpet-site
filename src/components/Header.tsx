'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Menu, X, ShoppingBag, Search, ChevronDown } from 'lucide-react';

const shopDropdown = [
  { name: 'Home Safety', href: '/collections/home-safety', emoji: '🏠', desc: 'Orthopedic beds, ramps & non-slip aids' },
  { name: 'Feeding Aids', href: '/collections/feeding-aids', emoji: '🍽️', desc: 'Elevated bowls & slow feeders' },
  { name: 'Travel & Car', href: '/collections/travel-car', emoji: '🚗', desc: 'Car seats, harnesses & portable bowls' },
  { name: 'Grooming & Bath', href: '/collections/grooming-bath', emoji: '🛁', desc: 'Brushes, elbow pads & paw care' },
  { name: 'Oral Care', href: '/collections/oral-care', emoji: '🦷', desc: 'Dental comfort for senior dogs' },
  { name: 'Seasonal', href: '/collections/seasonal', emoji: '❄️', desc: 'Cooling mats & seasonal essentials' },
];

const solutionsDropdown = [
  { name: 'For Vet Clinics', href: '/solutions/vet-clinics', desc: 'Support products for geriatric patients' },
  { name: 'For Pet Stores', href: '/solutions/pet-stores', desc: 'Stock high-demand senior care products' },
  { name: 'For Boarding Facilities', href: '/solutions/boarding-facilities', desc: 'Comfort solutions for boarding seniors' },
  { name: 'For Rescue Organizations', href: '/solutions/rescue-organizations', desc: 'Affordable care for rescue dogs' },
];

const careGuideDropdown = [
  { name: 'Arthritis & Hip Dysplasia', href: '/care-guide/arthritis' },
  { name: 'Post-ACL Surgery Recovery', href: '/care-guide/post-acl-surgery' },
  { name: 'Senior Dogs 10+ Years', href: '/care-guide/senior-10plus' },
  { name: 'Cognitive Dysfunction', href: '/care-guide/cognitive-dysfunction' },
  { name: 'Short-Leg Breeds', href: '/care-guide/short-leg-breeds' },
  { name: 'Brachycephalic Breeds', href: '/care-guide/brachycephalic-breeds' },
  { name: 'Pregnant & Postpartum', href: '/care-guide/pregnant-postpartum' },
  { name: 'Weight Management', href: '/care-guide/weight-management' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  const { totalItems } = useCart();

  const toggleMobileSubmenu = (key: string) => {
    setMobileOpenSubmenu(prev => prev === key ? null : key);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-xl text-brand-dark tracking-tight">LoyalBond</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Shop */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green rounded-lg hover:bg-gray-50 transition-colors">
                Shop
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {shopDropdown.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 px-4 py-2.5 hover:bg-brand-beige/40 transition-colors"
                    >
                      <span className="text-xl mt-0.5">{item.emoji}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green rounded-lg hover:bg-gray-50 transition-colors">
                Solutions
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {solutionsDropdown.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-4 py-2.5 hover:bg-brand-beige/40 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-800">{item.name}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Care Guide */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green rounded-lg hover:bg-gray-50 transition-colors">
                Care Guide
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {careGuideDropdown.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-beige/40 hover:text-brand-green transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green rounded-lg hover:bg-gray-50 transition-colors">
              Blog
            </Link>
            <Link href="/wholesale" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green rounded-lg hover:bg-gray-50 transition-colors">
              Wholesale
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-coral text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-brand-green rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {/* Shop */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('shop')}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Shop
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSubmenu === 'shop' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSubmenu === 'shop' && (
                <div className="ml-4 space-y-1">
                  {shopDropdown.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-brand-green rounded-lg hover:bg-gray-50">
                      <span>{item.emoji}</span> {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('solutions')}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSubmenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSubmenu === 'solutions' && (
                <div className="ml-4 space-y-1">
                  {solutionsDropdown.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-green rounded-lg hover:bg-gray-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Care Guide */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('care')}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Care Guide
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSubmenu === 'care' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSubmenu === 'care' && (
                <div className="ml-4 space-y-1">
                  {careGuideDropdown.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-green rounded-lg hover:bg-gray-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
              Blog
            </Link>
            <Link href="/wholesale" onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
              Wholesale
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
