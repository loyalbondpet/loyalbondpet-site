import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collections, getProductsByCollection, getCollectionBySlug } from '@/lib/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: `${collection.title} - Premium Pet Products`,
    description: collection.description,
    openGraph: {
      title: `${collection.title} - LoyalBond`,
      description: collection.description,
      url: `https://loyalbondpet.com/collections/${slug}`,
      type: 'website',
    },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const collectionProducts = getProductsByCollection(slug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://loyalbondpet.com' },
      { '@type': 'ListItem', position: 2, name: 'Collections', item: 'https://loyalbondpet.com/collections' },
      { '@type': 'ListItem', position: 3, name: collection.name, item: `https://loyalbondpet.com/collections/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero Banner */}
      <section className="relative bg-brand-beige py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6">
              <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-brand-dark font-medium">{collection.name}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">{collection.title}</h1>
            <p className="text-lg text-brand-gray leading-relaxed">{collection.description}</p>
            <p className="mt-4 text-brand-green font-semibold">{collection.priceRange}</p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
            <p className="text-sm text-brand-gray">
              Showing <span className="font-semibold text-brand-dark">{collectionProducts.length}</span> products
            </p>
            <div className="flex items-center gap-3">
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20">
                <option>All Sizes</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20">
                <option>All Prices</option>
                <option>Under $20</option>
                <option>$20 - $40</option>
                <option>$40 - $60</option>
                <option>Over $60</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {collectionProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {collectionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-brand-gray text-lg">No products found in this collection yet.</p>
              <Link href="/" className="mt-4 inline-block text-brand-green font-medium hover:underline">
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
