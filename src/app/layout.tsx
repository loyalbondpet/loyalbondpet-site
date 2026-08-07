import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider } from '@/contexts/CartContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.loyalbondpet.com'),
  title: {
    default: 'LoyalBond | Senior Dog Products & Pet Essentials',
    template: '%s | LoyalBond',
  },
  description:
    'LoyalBond offers thoughtfully designed functional products for senior dogs and pets. Shop orthopedic beds, mobility aids, travel accessories, and daily care essentials. Non-toxic, safe materials.',
  keywords: [
    'senior dog products',
    'orthopedic dog bed',
    'dog mobility aids',
    'non-toxic pet products',
    'pet supplies',
    'senior dog care',
    'dog harness',
    'pet travel accessories',
  ],
  authors: [{ name: 'LoyalBond', url: 'https://www.loyalbondpet.com' }],
  openGraph: {
    title: 'LoyalBond | Loyal Companionship for Every Stage of Life',
    description:
      'Functional pet products designed for senior dogs. Thoughtfully designed, non-toxic materials. Quality craftsmanship.',
    url: 'https://www.loyalbondpet.com',
    siteName: 'LoyalBond',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.loyalbondpet.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'LoyalBond - Senior Dog Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoyalBond | Senior Dog Products & Pet Essentials',
    description: 'Functional pet products designed for senior dogs. Thoughtfully designed, non-toxic materials.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans ${inter.variable}`}>
        <CartProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </CartProvider>
      </body>
    </html>
  );
}
