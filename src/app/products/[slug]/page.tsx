import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getProductsByCollection } from '@/lib/data/products';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductDetailClient from './ProductDetailClient';
import ProductSchema from '@/components/ProductSchema';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  // Build price range for products with size variants
  const priceDisplay = product.sizeVariants
    ? `$${Math.min(...product.sizeVariants.map(v => v.price)).toFixed(2)} - $${Math.max(...product.sizeVariants.map(v => v.price)).toFixed(2)}`
    : `$${product.price.toFixed(2)}`;

  return {
    title: `${product.name} | LoyalBond`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - LoyalBond`,
      description: product.shortDescription,
      url: `https://www.loyalbondpet.com/products/${slug}`,
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getProductsByCollection(product.collectionSlug).filter(p => p.id !== product.id).slice(0, 4);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.loyalbondpet.com' },
      { '@type': 'ListItem', position: 2, name: product.collection, item: `https://www.loyalbondpet.com/collections/${product.collectionSlug}` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.loyalbondpet.com/products/${slug}` },
    ],
  };

  return (
    <>
      <ProductSchema product={product} slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-brand-gray mb-8">
          <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/collections/${product.collectionSlug}`} className="hover:text-brand-green transition-colors">{product.collection}</Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-brand-dark font-medium">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <ProductDetailClient product={product} />

        {/* Tabbed Content */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Description</h2>
                <p className="text-brand-gray leading-relaxed whitespace-pre-line">{product.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Specifications</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="bg-brand-beige/50 rounded-lg p-4">
                      <dt className="text-sm font-medium text-brand-gray">{key}</dt>
                      <dd className="mt-1 text-brand-dark font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Packaging Information Table */}
                {product.sizeVariants && product.colorOptions && (
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">Packaging Information</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-200 text-sm">
                        <thead>
                          <tr className="bg-brand-beige/70">
                            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-brand-dark">Color</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Spec</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Length (cm)</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Width (cm)</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Height (cm)</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Volume (m³)</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Weight (kg)</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-brand-dark">Pkg Spec</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.colorOptions.map((color) =>
                            product.sizeVariants!.map((variant, vIdx) => {
                              const dims = variant.dimensions.split(' x ').map(d => parseFloat(d));
                              const length = dims[0];
                              const width = dims[1];
                              const height = dims[2];
                              const volume = (length * width * height / 1000000).toFixed(3);
                              const weight = (length * 0.015).toFixed(1);
                              const pkgLength = length + 2;
                              const pkgWidth = width + 2;
                              const pkgHeight = height + 1;
                              return (
                                <tr key={`${color.name}-${variant.label}`} className="hover:bg-brand-beige/30 transition-colors">
                                  {vIdx === 0 && (
                                    <td className="border border-gray-200 px-4 py-3 font-medium text-brand-dark" rowSpan={product.sizeVariants!.length}>
                                      {color.name}
                                    </td>
                                  )}
                                  <td className="border border-gray-200 px-4 py-3 text-center font-medium text-brand-dark">{variant.label}</td>
                                  <td className="border border-gray-200 px-4 py-3 text-center text-brand-gray">{length}</td>
                                  <td className="border border-gray-200 px-4 py-3 text-center text-brand-gray">{width}</td>
                                  <td className="border border-gray-200 px-4 py-3 text-center text-brand-gray">{height}</td>
                                  <td className="border border-gray-200 px-4 py-3 text-center text-brand-gray">{volume}</td>
                                  <td className="border border-gray-200 px-4 py-3 text-center text-brand-gray">{weight}</td>
                                  <td className="border border-gray-200 px-4 py-3 text-center text-brand-gray">{pkgLength}×{pkgWidth}×{pkgHeight}cm</td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Size Chart Image */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Size Guide</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                    <img
                      src="/images/products/orthopedic-bed/08-size-chart.jpg"
                      alt="Orthopedic Bolster Dog Bed Size Chart - M, L, XL dimensions with weight recommendations"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-brand-gray mt-3 text-center">
                    Choose the right size based on your dog's weight. Measure your dog from nose to tail base for the best fit.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Shipping Info</h2>
                <div className="prose text-brand-gray">
                  <ul className="space-y-2">
                    {product.wholesaleInfo ? (
                      <>
                        <li><strong>Shipping Term:</strong> {product.wholesaleInfo.shipping}</li>
                        <li><strong>Lead Time:</strong> {product.wholesaleInfo.leadTime}</li>
                        <li><strong>MOQ:</strong> {product.wholesaleInfo.moq}</li>
                        <li>International shipping available</li>
                        <li>All orders include tracking information</li>
                      </>
                    ) : (
                      <>
                        <li>International shipping available (buyer pays shipping)</li>
                        <li>Standard shipping (5-7 business days): $4.99</li>
                        <li>Express shipping (2-3 business days): $9.99</li>
                        <li>International shipping available to select countries</li>
                        <li>All orders include tracking information</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">FAQ</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is this product suitable for all dog breeds?', a: 'Yes, our products are designed to accommodate all breeds. Please check the size guide to select the best fit for your dog.' },
                    { q: 'Are the materials safe for pets?', a: 'Absolutely. All LoyalBond products use non-toxic, pet-safe materials that have been independently tested and certified.' },
                    { q: 'How do I clean this product?', a: 'Most of our products feature removable, machine-washable covers. Specific care instructions are included with each product.' },
                  ].map((faq) => (
                    <details key={faq.q} className="group bg-brand-beige/30 rounded-lg">
                      <summary className="cursor-pointer px-6 py-4 font-medium text-brand-dark flex items-center justify-between">
                        {faq.q}
                        <svg className="w-5 h-5 text-brand-gray group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="px-6 pb-4 text-brand-gray">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wholesale Pricing Section */}
          {product.wholesaleInfo && (
            <div className="mt-12 p-6 sm:p-8 bg-brand-beige/60 rounded-2xl border border-brand-green/10">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Wholesale & Bulk Orders</h2>
              <p className="text-brand-gray mb-6">{product.wholesaleInfo.note}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <dt className="text-sm font-medium text-brand-gray">Minimum Order Quantity</dt>
                  <dd className="mt-1 text-brand-dark font-semibold">{product.wholesaleInfo.moq}</dd>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <dt className="text-sm font-medium text-brand-gray">Lead Time</dt>
                  <dd className="mt-1 text-brand-dark font-semibold">{product.wholesaleInfo.leadTime}</dd>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <dt className="text-sm font-medium text-brand-gray">Payment Terms</dt>
                  <dd className="mt-1 text-brand-dark font-semibold">{product.wholesaleInfo.payment}</dd>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <dt className="text-sm font-medium text-brand-gray">Shipping Term</dt>
                  <dd className="mt-1 text-brand-dark font-semibold">{product.wholesaleInfo.shipping}</dd>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us for Wholesale Pricing
              </a>
            </div>
          )}
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Frequently Bought Together</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">Customer Reviews</h2>
          <div className="flex items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-dark">{product.rating}</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-brand-gray mt-1">Based on {product.reviewCount} reviews</p>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Happy Dog Mom', rating: 5, text: 'My senior dog loves this! It has made such a difference in his daily comfort.', date: '2 weeks ago' },
              { name: 'Pet Lover 2024', rating: 5, text: 'Great quality and fast shipping. The non-toxic materials give me peace of mind.', date: '1 month ago' },
              { name: 'Dog Dad', rating: 4, text: 'Solid product. My 12-year-old uses it every day. Would recommend to other senior dog owners.', date: '2 months ago' },
            ].map((review) => (
              <div key={review.name} className="border-b border-gray-100 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium text-brand-dark">{review.name}</span>
                  <span className="text-sm text-brand-gray">{review.date}</span>
                </div>
                <p className="text-brand-gray">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
