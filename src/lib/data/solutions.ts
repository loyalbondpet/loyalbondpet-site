export interface SolutionPage {
  slug: string;
  title: string;
  subtitle: string;
  painPoint: string;
  benefits: { icon: string; title: string; description: string }[];
  recommendedProducts: { slug: string; name: string; reason: string }[];
  wholesaleTerms: string[];
  ctaText: string;
}

export const solutionsPages: SolutionPage[] = [
  {
    slug: 'vet-clinics',
    title: 'Senior Dog Care Solutions for Vet Clinics',
    subtitle: 'Complement Your Clinical Care with Everyday Comfort Products',
    painPoint: 'Geriatric patients need more than just medical treatment. Support their comfort between visits with practical, non-toxic products designed for aging dogs. LoyalBond provides vet clinics with a curated range of senior dog care essentials that complement your professional services.',
    benefits: [
      { icon: '📦', title: 'Clinic Pricing Program', description: 'Exclusive wholesale pricing with tiered volume discounts for practices of all sizes.' },
      { icon: '🏷️', title: 'Retail Display Ready', description: 'Products arrive in retail-ready packaging with shelf-stable materials, ideal for clinic waiting areas and lobbies.' },
      { icon: '📋', title: 'Client Education Materials', description: 'Free printed care guides and product recommendation cards for your clients.' },
      { icon: '🔄', title: 'Flexible Reorder', description: 'Low MOQ with fast restocking. Mix and match products across categories to suit your clinic needs.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Ideal for recovery rooms and waiting areas' },
      { slug: 'lift-assist-harness', name: 'Lift-Assist Harness', reason: 'Assists mobility-impaired patients during examinations' },
      { slug: 'drying-towel', name: 'Quick-Dry Coral Fleece Towel', reason: 'Essential for post-examination cleanup and grooming' },
    ],
    wholesaleTerms: [
      'MOQ: 50 pieces (mixed products accepted)',
      'Volume discount: 10% off at 100+ units, 15% off at 300+ units',
      'OEM/Private label available for orders 500+ units',
      'Lead time: 25-35 days after order confirmation',
      'Payment: T/T 50% deposit, 50% before shipment',
      'Shipping: FOB Ningbo, China',
    ],
    ctaText: 'Request Clinic Pricing',
  },
  {
    slug: 'pet-stores',
    title: 'Senior Dog Care Solutions for Pet Stores',
    subtitle: 'Stock High-Demand Senior Products Your Customers Actually Need',
    painPoint: 'The senior pet market is growing fast. Pet parents are actively seeking specialized products for aging dogs but often struggle to find them in stores. LoyalBond gives pet stores a differentiated product line with strong margins and fast turnover.',
    benefits: [
      { icon: '📊', title: 'High Turnover Category', description: 'Senior dog products are among the fastest-growing segments in pet retail, with repeat purchase rates above 60%.' },
      { icon: '💰', title: 'Strong Margins', description: 'Wholesale pricing structured for healthy retail margins. Suggested retail pricing guides included.' },
      { icon: '🎨', title: 'Attractive Packaging', description: 'Clean, premium packaging designed for shelf appeal and gift-giving. Co-branded display stands available.' },
      { icon: '📣', title: 'Marketing Support', description: 'Free product photography, social media assets, and in-store display materials for partners.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Top seller, high margin, strong visual shelf appeal' },
      { slug: 'snuffle-mat-set', name: 'Snuffle Mat Set', reason: 'Trending enrichment product, broad customer appeal' },
      { slug: 'drying-towel', name: 'Quick-Dry Coral Fleece Towel', reason: 'Impulse-buy friendly, great add-on product' },
    ],
    wholesaleTerms: [
      'MOQ: 100 pieces (mixed SKUs accepted)',
      'Volume discount: 12% off at 200+ units, 18% off at 500+ units',
      'OEM/Private label available for orders 1000+ units',
      'Lead time: 25-35 days after order confirmation',
      'Payment: T/T 50% deposit, 50% before shipment',
      'Shipping: FOB Ningbo, China',
    ],
    ctaText: 'Request Store Pricing',
  },
  {
    slug: 'boarding-facilities',
    title: 'Senior Dog Care Solutions for Boarding Facilities',
    subtitle: 'Keep Senior Boarders Comfortable and Reduce Liability',
    painPoint: 'Senior dogs require extra attention during boarding. Slips, falls, and discomfort on unfamiliar surfaces are common concerns. LoyalBond provides boarding facilities with durable, easy-to-clean products that maintain comfort standards and reduce incident risks.',
    benefits: [
      { icon: '🧹', title: 'Easy to Clean & Maintain', description: 'Machine washable covers, wipe-clean surfaces, and durable materials designed for high-turnover environments.' },
      { icon: '🛡️', title: 'Non-Slip Safety', description: 'Anti-slip products for floors and kennels reduce fall risks, supporting your duty of care for senior boarders.' },
      { icon: '📐', title: 'Bulk Consistency', description: 'Uniform sizing and quality across large orders ensure every kennel is equally equipped.' },
      { icon: '⏱️', title: 'Fast Replacement Program', description: 'Quick reorder for high-wear items. Keep your facility fully stocked without long lead times.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Comfortable resting surface with washable cover' },
      { slug: 'lift-assist-harness', name: 'Lift-Assist Harness', reason: 'Safe support for mobility-limited dogs on uneven surfaces' },
      { slug: 'drying-towel', name: 'Quick-Dry Coral Fleece Towel', reason: 'Fast drying after outdoor walks or bath time' },
    ],
    wholesaleTerms: [
      'MOQ: 30 pieces per SKU (minimum 3 SKUs)',
      'Facility discount: 15% off standard wholesale for 5+ facility locations',
      'Replacement guarantee: Defective items replaced free within 90 days',
      'Lead time: 25-35 days after order confirmation',
      'Payment: T/T 50% deposit, 50% before shipment',
      'Shipping: FOB Ningbo, China',
    ],
    ctaText: 'Request Facility Quote',
  },
  {
    slug: 'rescue-organizations',
    title: 'Senior Dog Care Solutions for Rescue Organizations',
    subtitle: 'Affordable Comfort Products for Dogs Who Need It Most',
    painPoint: 'Rescue organizations often take in senior dogs with mobility challenges, injuries, or age-related conditions. Budget constraints make it difficult to provide specialized comfort products. LoyalBond offers rescue-friendly pricing and donation programs.',
    benefits: [
      { icon: '❤️', title: 'Rescue Pricing', description: 'Special discounted pricing exclusively for registered rescue organizations and animal shelters.' },
      { icon: '🎁', title: 'Donation Matching', description: 'Quarterly product donation program. For every bulk order, we contribute additional items for senior rescues.' },
      { icon: '🤝', title: 'Flexible Terms', description: 'Net-30 payment terms for qualifying organizations. Split payments available for large orders.' },
      { icon: '📖', title: 'Adoption Support Kit', description: 'Free product sample kits included with adopted senior dogs, branded with your organization name.' },
    ],
    recommendedProducts: [
      { slug: 'lift-assist-harness', name: 'Lift-Assist Harness', reason: 'Helps mobility-limited rescues during walks and adoption events' },
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Essential comfort for senior dogs in kennel environments' },
    ],
    wholesaleTerms: [
      'MOQ: 20 pieces (rescue-friendly minimum)',
      'Rescue discount: 20% off standard wholesale with proof of 501(c)(3) or equivalent',
      'Donation program: 10% additional products donated with each order',
      'Lead time: 25-35 days after order confirmation',
      'Payment: Net-30 for qualifying organizations',
      'Shipping: FOB Ningbo, China',
    ],
    ctaText: 'Apply for Rescue Pricing',
  },
];

export function getSolutionBySlug(slug: string): SolutionPage | undefined {
  return solutionsPages.find(s => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutionsPages.map(s => s.slug);
}
