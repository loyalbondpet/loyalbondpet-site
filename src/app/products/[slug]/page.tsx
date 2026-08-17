import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getRelatedProducts } from '@/lib/data/products';
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

  const relatedProducts = getRelatedProducts(slug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.loyalbondpet.com' },
      { '@type': 'ListItem', position: 2, name: product.collection, item: `https://www.loyalbondpet.com/collections/${product.collectionSlug}` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.loyalbondpet.com/products/${slug}` },
    ],
  };

  // Build FAQ list for this product
  const faqList: Array<{ q: string; a: string }> = product.slug === 'lift-assist-harness' ? [
    { q: 'How do I choose the right size for my dog?', a: 'Please refer to the size guide above each product listing. Measure your dog\'s chest girth and weight to select the best fit. If between sizes, we recommend sizing up for comfort.' },
    { q: 'Can this harness be used for both front and hind leg support?', a: 'Yes! The dual-side support design works for both front and hind leg weakness. The wide wrap-around panel distributes weight evenly across the chest and belly.' },
    { q: 'Is the harness machine washable?', a: 'Yes, the entire harness is machine washable for easy maintenance. It also comes with a convenient storage bag for portability.' },
  ] : product.slug === 'hind-leg-support-harness' ? [
    { q: 'How lightweight is this harness?', a: 'Only 68–76g depending on size — minimal added burden for dogs with low stamina. Available in S through XL to fit breeds from small terriers to large dogs.' },
    { q: 'How do I put it on my dog?', a: 'Simply step in and clip! The quick-release buckle closure makes it easy to put on and take off in seconds — no complex threading required.' },
    { q: 'Is it suitable for small breeds?', a: 'Yes, Size S fits waist 11"–14". The ergonomic mesh panel and dual leg openings ensure a secure, natural fit without restricting movement.' },
  ] : product.slug === 'snuffle-mat-set' ? [
    { q: 'Which style is best for my senior dog?', a: 'Style 1 (Bone-Shaped) offers deep cylindrical pockets for patient foraging. Style 2 (Plum Blossom) has a compact 60cm size that fits beside beds. Style 3 (Rectangular) is ideal for large senior dogs and multi-pet homes.' },
    { q: 'Is the mat easy to clean?', a: 'Yes, the entire mat is machine washable and maintains its shape after repeated cleaning. Odor-conscious dyeing ensures a pleasant experience for sensitive noses.' },
    { q: 'Will it help slow down eating?', a: 'Absolutely. Multiple independent foraging zones naturally extend mealtime, promote healthier digestion, and provide meaningful mental exercise without requiring running or jumping.' },
  ] : product.slug === 'orthopedic-bolster-dog-bed' ? [
    { q: 'How do I choose the right size?', a: 'Choose based on your dog\'s weight and sleeping style. The low-entry design allows dogs with weak hind legs to climb in effortlessly. Measure your dog from nose to tail base for the best fit.' },
    { q: 'Is the cover removable and washable?', a: 'Yes. The fully removable outer cover has a zipper and is machine washable for easy cleanup of fur and stains. The reversible inner mat offers plush fleece for warmth and breathable oxford for summer.' },
    { q: 'Is this bed good for dogs with stiff joints?', a: 'The high-density supportive foam distributes weight evenly to support comfortable rest. The surrounding bolster provides neck support, and the anti-slip base prevents sliding on smooth floors.' },
  ] : product.slug === 'foam-dog-stairs' ? [
    { q: 'Are foam stairs safe for heavy dogs?', a: 'The foam stairs support up to 50 kg (110 lbs). The high-density foam core provides stable, cushioned support. The non-slip bottom keeps them firmly in place on tile, hardwood and laminate floors. For dogs over 50 kg, consider our orthopedic bed with reinforced base.' },
    { q: 'How do I clean the foam stairs?', a: 'The removable cover is machine washable. Simply unzip, remove, and wash on a gentle cycle with cold water. The foam base can be spot-cleaned with a damp cloth. Air dry completely before reassembling.' },
    { q: 'Should I choose 3-step or 4-step?', a: 'Choose 3-step (40×35×48cm) for beds and sofas up to 48cm high. Choose 4-step (50×40×60cm) for taller furniture. For senior dogs with limited mobility, the gentler incline of the 4-step is easier despite the same height.' },
  ] : product.slug === 'anti-slip-dog-socks' ? [
    { q: 'Will the socks stay on during walks?', a: 'The elastic ankle band is designed to hold securely without restricting circulation. For active walks, we recommend pairing with our mesh support sling for additional stability. The socks are primarily designed for indoor traction on smooth floors.' },
    { q: 'How do I choose the right size?', a: 'Measure your dog\'s paw width at the widest point. S fits 3-5kg dogs, M fits 5-10kg, L fits 10-20kg, XL fits 20-40kg. If between sizes, size up for comfort.' },
    { q: 'Are these good for post-surgery recovery?', a: 'Yes. The soft fabric protects paws from licking and scratching after surgery, while the anti-slip grips prevent falls on smooth floors. Many customers use them for dogs recovering from ACL surgery, IVDD, or hip replacement.' },
  ] : product.slug === 'maze-slow-feeder-bowl' ? [
    { q: 'How much slower does it make my dog eat?', a: 'The maze ridge pattern naturally slows eating pace by 3-5x. This reduces the risk of bloat (GDV), improves digestion, and provides meaningful mental stimulation during meals.' },
    { q: 'Is it safe for dogs with flat faces (brachycephalic breeds)?', a: 'Yes. The wide, shallow design and smooth ridge pattern are accessible for brachycephalic breeds like Bulldogs, Pugs, and Shih Tzus. The food-grade melamine surface is gentle on sensitive noses.' },
    { q: 'Can I put it in the dishwasher?', a: 'Yes, the bowl is dishwasher safe (top rack recommended). The food-grade melamine material resists odor absorption and maintains its shape after repeated cleaning.' },
  ] : product.slug === 'pet-gel-cooling-mat' ? [
    { q: 'How does the self-cooling gel work?', a: 'The pressure-activated gel core automatically absorbs and dissipates body heat when your dog lies down — no water, electricity, or refrigeration needed. It recharges itself within 15-20 minutes of non-use.' },
    { q: 'How long does the cooling last?', a: 'Up to 3 hours per session, depending on ambient temperature and your dog\'s body heat. The mat recharges automatically when not in use. In hot climates, consider having two mats to rotate.' },
    { q: 'Is it durable enough for dogs that chew?', a: 'The nylon exterior is scratch-resistant and waterproof, designed for normal pet use. However, no product is completely chew-proof. For aggressive chewers, supervise use and consider our elevated slow feeder as an alternative cooling solution.' },
  ] : product.slug === 'elevated-slow-feeder-bowl' ? [
    { q: 'How does elevation help my dog\'s neck?', a: 'The raised stand positions the bowl at a comfortable height that reduces neck strain and promotes natural eating posture. This is especially important for senior dogs with cervical spine issues, arthritis, or large breeds prone to neck stress.' },
    { q: 'Can the stainless steel bowl be used separately?', a: 'Yes! The removable 304 stainless steel inner bowl can be used as a standalone food or water bowl. The slow feeder maze insert can also be removed for regular feeding.' },
    { q: 'Is assembly difficult?', a: 'No tools required. The metal frame uses a snap-together design that sets up in seconds. The non-slip rubber feet keep the feeder stable during meals on any floor surface.' },
  ]   : product.slug === 'folding-pet-stairs' ? [
    { q: 'What furniture height are these stairs suitable for?', a: 'The 3-step design reaches 32 cm (12.6 inches), making them ideal for sofas, low beds, window perches, and car seats. They are not recommended for tall mattresses over 40 cm. For higher furniture, consider our 4-step foam pet stairs.' },
    { q: 'Will the steps support my dog without sinking?', a: 'Yes. Unlike all-foam stairs, these use a sturdy board-and-fabric construction that holds its shape under your pet\'s weight. The wide base and anti-slip bottom pads keep the unit stable on tile, hardwood, and laminate floors.' },
    { q: 'How does the storage compartment work?', a: 'The top step lifts open to reveal a built-in storage compartment — perfect for keeping toys, treats, leashes, or grooming supplies within reach. The lid closes securely so your pet won\'t accidentally access it while climbing.' },
    { q: 'How do I clean the stairs?', a: 'The dark grey fabric cover is removable with a zipper and machine washable. Simply unzip, remove, and wash on a gentle cycle with cold water. The board frame can be wiped clean with a damp cloth. Air dry the cover completely before reassembling.' },
    { q: 'Do the stairs require assembly?', a: 'No assembly is needed. The stairs arrive folded — simply unfold them and they lock into position. When not in use, fold them flat to just 11 cm thick for storage under furniture or in a closet.' },
  ]   : product.slug === 'snowflake-cooling-mat' ? [
    { q: 'How does the self-cooling mat work?', a: 'The mat uses a pressure-activated physical cooling core that automatically absorbs and dissipates body heat when your pet lies down. No water filling, no electricity, and no refrigeration required. It recharges naturally within minutes after your pet steps off.' },
    { q: 'Which size should I choose?', a: 'Small (40×30cm) is ideal for cats, toy breeds, and puppies up to 5 kg. Medium (50×40cm) suits small dogs and large cats up to 10 kg. Large (60×50cm) fits medium dogs up to 20 kg. When in doubt, size up — pets love having extra room to stretch out.' },
    { q: 'Is the mat safe if my pet chews it?', a: 'The mat is made from non-toxic, pet-safe materials with a scratch-resistant and bite-tough surface. However, no product is completely chew-proof. If your pet is an aggressive chewer, supervise initial use and replace the mat if it becomes damaged to prevent ingestion of filling material.' },
    { q: 'How do I clean the mat?', a: 'Simply wipe the surface with a damp cloth or rinse it under running water. The waterproof material dries quickly and maintains its shape without deformation. Do not machine wash or use harsh chemicals.' },
    { q: 'Can I use it outdoors or in the car?', a: 'Absolutely. The mat folds flat for easy transport and works on any flat surface — hardwood floors, tile, sofas, inside crates, car seats, and outdoor patios. The waterproof backing protects surfaces from moisture and spills.' },
  ] : [
    { q: 'Is this product suitable for all dog breeds?', a: 'Yes, our products are designed to accommodate all breeds. Please check the size guide to select the best fit for your dog.' },
    { q: 'Are the materials safe for pets?', a: 'Absolutely. All LoyalBond products use non-toxic, pet-safe materials that have been independently tested and certified.' },
    { q: 'How do I clean this product?', a: 'Most of our products feature removable, machine-washable covers. Specific care instructions are included with each product.' },
  ];

  const faqPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <ProductSchema product={product} slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }} />

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

                {/* Size Chart Image (only for products with size variants) */}
                {product.sizeVariants && (
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
                )}
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
                  {faqList.map((faq) => (
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
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

    </div>
    </>
  );
}
