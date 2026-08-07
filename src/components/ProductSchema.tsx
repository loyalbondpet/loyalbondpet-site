import { Product } from '@/lib/data/products';

interface ProductSchemaProps {
  product: Product;
  slug: string;
}

function parsePriceRange(priceRange: string | undefined): { low: number; high: number } | null {
  if (!priceRange) return null;
  const matches = priceRange.match(/\$([0-9]+(?:\.[0-9]+)?)/g);
  if (!matches || matches.length < 2) return null;
  const prices = matches.map(m => parseFloat(m.replace('$', '')));
  return { low: Math.min(...prices), high: Math.max(...prices) };
}

export default function ProductSchema({ product, slug }: ProductSchemaProps) {
  const baseUrl = 'https://www.loyalbondpet.com';

  // Determine price/offer structure
  let offers: Record<string, unknown>;

  if (product.sizeVariants && product.sizeVariants.length > 0) {
    const prices = product.sizeVariants.map(v => v.price).filter(p => p > 0);
    if (prices.length > 0) {
      offers = {
        '@type': 'AggregateOffer',
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        offerCount: prices.length,
        url: `${baseUrl}/products/${slug}`,
      };
    } else {
      // Price is 0 in sizeVariants, try parsing priceRange string
      const parsed = parsePriceRange(product.priceRange);
      if (parsed) {
        offers = {
          '@type': 'AggregateOffer',
          lowPrice: parsed.low,
          highPrice: parsed.high,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${baseUrl}/products/${slug}`,
        };
      } else {
        offers = {
          '@type': 'Offer',
          price: 0,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${baseUrl}/products/${slug}`,
        };
      }
    }
  } else if (product.priceRange) {
    // No sizeVariants, but has priceRange string like "$5.00 – $8.50"
    const parsed = parsePriceRange(product.priceRange);
    if (parsed) {
      offers = {
        '@type': 'AggregateOffer',
        lowPrice: parsed.low,
        highPrice: parsed.high,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/products/${slug}`,
      };
    } else {
      offers = {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/products/${slug}`,
      };
    }
  } else {
    offers = {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/products/${slug}`,
    };
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images.map(img =>
      img.startsWith('http') ? img : `${baseUrl}${img}`
    ),
    brand: {
      '@type': 'Brand',
      name: 'LoyalBond',
    },
    offers,
  };

  // Only include aggregateRating if the product has reviews
  if (product.rating > 0 && product.reviewCount > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
