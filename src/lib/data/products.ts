export interface SizeVariant {
  label: string;
  dimensions: string;
  weight: string;
  price: number;
}

export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  priceRange?: string;
  description: string;
  shortDescription: string;
  collection: string;
  collectionSlug: string;
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: string;
  sizes?: string[];
  colors?: string[];
  sizeVariants?: SizeVariant[];
  colorOptions?: ColorOption[];
  features: string[];
  specifications: Record<string, string>;
  bestSeller?: boolean;
  wholesaleInfo?: {
    moq: string;
    leadTime: string;
    payment: string;
    shipping: string;
    note: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'lift-assist-harness',
    name: 'Adjustable Dog Lift-Assist Harness',
    price: 0,
    priceRange: '$5.00 – $8.50',
    description: `The LoyalBond Lift-Assist Harness is designed to help you support your aging or mobility-limited dog through daily activities with comfort and confidence.

The wide wrap-around panel distributes your dog's weight evenly across the chest and belly, rather than concentrating pressure on a single point. This balanced support helps when assisting your dog with stairs, getting into vehicles, standing up from a seated position, or navigating uneven surfaces.

The main cushion is crafted from lightweight, breathable hollow mesh fabric that promotes air circulation and reduces stuffiness during extended wear — important for dogs who need daily, long-hour support. Multiple layers of reinforced stitching on the webbing handles ensure stable load bearing for medium and large senior dogs.

The extended padded handle keeps your body upright while lifting, helping you maintain proper posture and reducing strain on your own back when assisting your pet repeatedly throughout the day. Reflective stitching supports better visibility during early morning or evening walks.

The entire harness is machine washable for easy maintenance, and includes a convenient storage bag for portability.`,
    shortDescription: 'Breathable mesh lift harness with adjustable padded handle and reinforced webbing straps. Supports front or hind leg weakness. Machine washable with reflective stitching for visibility.',
    collection: 'Travel & Car',
    collectionSlug: 'travel-car',
    images: [
      '/images/products/lift-assist-harness/01-main.jpg',
      '/images/products/lift-assist-harness/02-action.jpg',
      '/images/products/lift-assist-harness/03-feature.jpg',
      '/images/products/lift-assist-harness/04-detail.jpg',
      '/images/products/lift-assist-harness/05-wearing.jpg',
      '/images/products/lift-assist-harness/06-color.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Dual-Side Support Design — Works for both front and hind leg weakness',
      'Breathable Mesh Padding — Lightweight hollow mesh fabric for all-day comfort',
      'Reinforced Webbing Straps — Multi-layer stitched handles with stable load bearing',
      'Extended Padded Handle — Ergonomic grip for pet owners',
      'Wide Weight Distribution Panel — Spreads pressure across chest and belly',
      'Reflective Stitching — Better visibility in low light',
      'Machine Washable & Portable — Easy care with storage bag',
    ],
    specifications: {
      'Material': 'Lightweight breathable hollow mesh fabric with reinforced webbing',
      'Design': 'Dual-side support (front & hind leg)',
      'Handle': 'Extended padded handle with adjustable length',
      'Closure': 'Adjustable straps with quick-release buckles',
      'Safety': 'Reflective stitching for low-light visibility',
      'Washable': 'Yes, machine washable',
      'Includes': 'Storage bag',
      'MOQ': '50 pieces (mixed sizes/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed sizes/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Price varies by size, color, and order quantity. Contact us via email (sales@loyalbondpet.com) or WhatsApp (+8615706802495) for a detailed quote. FOB Ningbo available.',
    },
  },
  {
    id: '2',
    slug: 'hind-leg-support-harness',
    name: 'Senior Dog Hind Leg Support Harness',
    price: 0,
    priceRange: '$3.50 – $5.00',
    description: `The LoyalBond Hind Leg Support Harness provides targeted rear-end assistance for dogs experiencing back leg weakness, balance challenges, or mobility limitations.

Unlike full-body support slings, this focused hind leg design uses an ergonomic mesh panel that wraps comfortably around the lower torso and upper hind legs. Two precisely sized leg openings ensure a secure, natural fit without restricting movement or affecting your dog's natural bodily functions.

The breathable mesh fabric promotes continuous air circulation, making this harness suitable for warm weather and extended daily wear — a key advantage over fully enclosed support designs that can cause overheating and skin irritation.

The adjustable padded handle features multiple length settings, allowing you to customize the lift height to match your dog's size and your own comfort. A quick-release buckle closure makes it easy to put on and take off in seconds — simply step in and clip, no complex threading required.

Lightweight construction (68–76g depending on size) adds minimal burden to dogs with low stamina. Available in 4 sizes (S, M, L, XL) to accommodate breeds from small terriers to large dogs.`,
    shortDescription: 'Lightweight breathable mesh hind leg support harness with adjustable padded handle and dual leg openings. Designed for rear-end mobility assistance. Quick on/off with buckle closure. Available in S–XL.',
    collection: 'Travel & Car',
    collectionSlug: 'travel-car',
    images: [
      '/images/products/hind-leg-harness/01-main.jpg',
      '/images/products/hind-leg-harness/02-detail.jpg',
      '/images/products/hind-leg-harness/03-size-chart.jpg',
      '/images/products/hind-leg-harness/04-handle-modes.jpg',
      '/images/products/hind-leg-harness/05-flat-lay.jpg',
      '/images/products/hind-leg-harness/06-ergonomic.jpg',
      '/images/products/hind-leg-harness/07-material.jpg',
      '/images/products/hind-leg-harness/08-variant.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S (Waist 11"–14")', 'M (Waist 14"–18")', 'L (Waist 17"–21")', 'XL (Waist 19"–24")'],
    features: [
      'Targeted Hind Leg Support — Focused rear-end lift design',
      'Breathable Mesh Construction — Air-circulating fabric for all-day wear',
      'Dual Leg Opening Design — Ergonomic cutouts for natural leg movement',
      'Quick Buckle Closure — Easy on/off in seconds',
      'Adjustable Padded Handle — Customizable lift height',
      'Ultra-Lightweight Design (68–76g) — Minimal added burden',
      'Ergonomic Physiological Design — Reserved cutout for natural bodily functions',
    ],
    specifications: {
      'Material': 'Breathable mesh fabric',
      'Design': 'Targeted hind leg support with dual leg openings',
      'Handle': 'Adjustable padded handle with multiple length settings',
      'Closure': 'Quick-release buckle',
      'Weight': '68–76g (varies by size)',
      'Sizes': 'S / M / L / XL',
      'Size S': 'Waist 11"–14", Leg Opening 6.7", Handle 11"–21"',
      'Size M': 'Waist 14"–18", Leg Opening 9.4", Handle 12"–22"',
      'Size L': 'Waist 17"–21", Leg Opening 10.6", Handle 7.5"–14"',
      'Size XL': 'Waist 19"–24", Leg Opening 12.2", Handle 6.3"–12.5"',
      'MOQ': '50 pieces (mixed sizes/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed sizes/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Price varies by size, color, and order quantity. Contact us via email (sales@loyalbondpet.com) or WhatsApp (+8615706802495) for a detailed quote. FOB Ningbo available.',
    },
  },
  {
    id: '3',
    slug: 'silicone-paw-protector-boots',
    name: 'Adjustable Silicone Paw Protector Boots',
    price: 0,
    priceRange: '$2.00 – $3.80 / set',
    description: `The LoyalBond Silicone Paw Covers offer a gentle, protective solution for dogs with sensitive paws — especially aging pets, dogs with mobility challenges, and breeds that struggle on smooth indoor surfaces.

Made from flexible, food-grade silicone, each cover stretches naturally to conform to your dog's paw shape. The widened, rounded anti-slip base increases friction on smooth tile, marble, and hardwood floors, helping dogs with weaker balance and slower reflexes walk more steadily around the house.

The full paw coverage design encloses the entire paw, shielding sensitive skin from hot outdoor surfaces, cold floors, and rough ground. The adjustable wide velcro strap lets you customize the fit for a secure hold that stays in place during daily movement — without squeezing the leg or restricting circulation.

Despite the full coverage, the slim silicone structure adds minimal weight, so dogs with low stamina won't feel burdened during regular walks or household activity. The one-piece waterproof silicone is easy to clean: simply rinse after use. It resists dirt buildup, keeping your dog's paws dry and clean after outdoor trips, bathroom visits, or rainy days.

Available in multiple colors to match your style.`,
    shortDescription: 'Food-grade silicone paw covers with anti-slip rounded base and adjustable velcro strap. Full paw coverage protects sensitive pads from hot surfaces and slippery floors. Lightweight, waterproof, and easy to clean.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/images/products/paw-covers/01-lifestyle.jpg',
      '/images/products/paw-covers/02-yellow.jpg',
      '/images/products/paw-covers/03-pink.jpg',
      '/images/products/paw-covers/04-teal.jpg',
      '/images/products/paw-covers/05-antislip-detail.jpg',
      '/images/products/paw-covers/06-fit-demo.jpg',
      '/images/products/paw-covers/07-material.jpg',
      '/images/products/paw-covers/08-strap-adjust.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S', 'M', 'L'],
    colors: ['Yellow', 'Pink', 'Teal'],
    colorOptions: [
      { name: 'Yellow', hex: '#F5D442', image: '/images/products/paw-covers/02-yellow.jpg' },
      { name: 'Pink', hex: '#E88CA5', image: '/images/products/paw-covers/03-pink.jpg' },
      { name: 'Teal', hex: '#5BBCAD', image: '/images/products/paw-covers/04-teal.jpg' },
    ],
    features: [
      'Anti-Slip Rounded Silicone Base — Increased friction on smooth floors',
      'Food-Grade Soft Silicone — Flexible, gentle material',
      'Adjustable Velcro Strap — Customizable secure fit',
      'Full Paw Coverage — Complete protection',
      'Lightweight Build — Minimal added weight',
      'Waterproof & Easy Clean — One-piece rinseable design',
      'Multi-Scenario Versatility — Indoor and outdoor use',
    ],
    specifications: {
      'Material': 'Food-grade flexible silicone',
      'Base': 'Anti-slip rounded design',
      'Closure': 'Adjustable wide velcro strap',
      'Design': 'Full paw coverage',
      'Waterproof': 'Yes, one-piece silicone construction',
      'Washable': 'Yes, rinse after use',
      'MOQ': '50 pieces (mixed sizes/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed sizes/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Price varies by size, color, and order quantity. Contact us via email (sales@loyalbondpet.com) or WhatsApp (+8615706802495) for a detailed quote. FOB Ningbo available.',
    },
  },
  {
    id: '4',
    slug: 'snuffle-mat-set',
    name: 'Interactive Dog Snuffle Mat Set',
    price: 0,
    priceRange: '$3.50 – $5.50',
    description: `The LoyalBond Snuffle Mat Series transforms mealtime into an engaging, mentally stimulating experience for dogs of all ages — with features specifically optimized for senior and mobility-limited pets.

Each mat features multiple independent foraging zones where you can hide kibble and treats, tapping into your dog's natural sniffing and foraging instincts. This engaging activity slows down eating pace, promotes healthier digestion, and provides meaningful mental exercise without requiring running, jumping, or strenuous physical activity.

The mats are crafted from soft, thick fleece fabric that's gentle on paw pads and comfortable for extended sniffing sessions. High-density reinforced construction resists biting and tearing, while the anti-slip bottom layer with raised plastic dots keeps the mat firmly in place on wooden and tile floors.

The entire mat is machine washable and maintains its shape after repeated cleaning. Odor-conscious dyeing ensures a pleasant experience for sensitive noses.

Available in 3 Styles:

Style 1: Bone-Shaped Cloud Mat — 5 functional zones including cylindrical treat pockets, honeycomb flower sniffing area, crescent fold zone, block tug zone, and paw-print feeding zone. Deep cylindrical pockets extend foraging time for patient senior dogs.

Style 2: Plum Blossom Mat (60cm × 60cm) — Symmetrical round design with no sharp corners, safe for dogs with slower reactions. Six variable-size round holes plus a central flower sniffing area deliver balanced, moderate difficulty. Compact 60cm size fits beside dog beds for easy access.

Style 3: Rectangular Carrot & Butterfly Mat (80cm × 48cm) — Large format for big senior dogs and multi-pet households. Decorative carrot and butterfly design doubles as home décor. Gradient-difficulty fold zones allow adjustable training intensity.`,
    shortDescription: '3-style interactive snuffle mat series with multiple treat-hiding zones. Slow-feeding design promotes healthy eating pace. Soft fleece construction, anti-slip bottom, machine washable. Ideal for senior dogs, all breeds, and multi-pet homes.',
    collection: 'Feeding Aids',
    collectionSlug: 'feeding-aids',
    images: [
      '/images/products/snuffle-mat/01-lifestyle.jpg',
      '/images/products/snuffle-mat/02-bone-style.jpg',
      '/images/products/snuffle-mat/03-rectangular-style.jpg',
      '/images/products/snuffle-mat/04-problem-solution.jpg',
      '/images/products/snuffle-mat/05-engagement.jpg',
      '/images/products/snuffle-mat/06-antislip-detail.jpg',
      '/images/products/snuffle-mat/07-slow-feeding.jpg',
      '/images/products/snuffle-mat/08-how-to.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: [
      'Style 1: Bone-Shaped Cloud Mat',
      'Style 2: Plum Blossom Mat (60cm × 60cm)',
      'Style 3: Rectangular Carrot & Butterfly Mat (80cm × 48cm)',
    ],
    features: [
      'Multi-Zone Foraging Design — Multiple independent treat-hiding areas in one mat',
      'Slow-Feeding Function — Extends mealtime naturally',
      'Low-Intensity Mental Exercise — No running or jumping required',
      'Soft Thick Fleece Fabric — Gentle on paws and comfortable',
      'Anti-Slip Bottom — Raised plastic dot base',
      'Machine Washable — Easy to clean and maintain',
      '3 Style Options — Bone-shaped, Plum Blossom, Rectangular',
    ],
    specifications: {
      'Material': 'Soft thick fleece fabric with raised plastic dot anti-slip base',
      'Style 1': 'Bone-Shaped Cloud Mat — 5 functional zones',
      'Style 2': 'Plum Blossom Mat — 60cm × 60cm, symmetrical round design',
      'Style 3': 'Rectangular Carrot & Butterfly Mat — 80cm × 48cm',
      'Washable': 'Yes, machine washable',
      'Anti-Slip': 'Raised plastic dot bottom layer',
      'MOQ': '50 pieces (mixed styles/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed styles/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Price varies by size, color, and order quantity. Contact us via email (sales@loyalbondpet.com) or WhatsApp (+8615706802495) for a detailed quote. FOB Ningbo available.',
    },
  },
  {
    id: '11',
    slug: 'orthopedic-bolster-dog-bed',
    name: 'Orthopedic Bolster Dog Bed',
    price: 0,
    priceRange: '$14.00 – $28.00',
    description: `Give your senior dog a comfortable, supportive resting space with the LoyalBond Orthopedic Bolster Dog Bed.

Built with high-density supportive foam that distributes weight evenly to support comfortable rest.

The low-profile entry allows dogs with weak hind legs, reduced flexibility or limited mobility to climb in effortlessly without jumping or straining.

Raised surrounding bolster creates a cozy resting border for head and neck support. It also shields pets from direct cold airflow from air conditioners, ideal for year-round use.

Reversible inner mat: Soft plush fleece side for warmth; breathable oxford fabric side for hotter summer days.
Fully removable outer cover with zipper, machine washable for easy cleanup of fur and stains.
Durable scratch-resistant exterior fabric for long-term daily use.
Anti-slip bottom keeps the bed stable on slippery tile, vinyl and wooden floors, preventing slips when your dog stands up.

Designed for senior dogs, older pets and dogs experiencing mobility challenges.

Available in multiple sizes and colors to match your home decor.`,
    shortDescription: 'Supportive orthopedic bolster dog bed engineered for aging dogs. Low entry design avoids hard jumping; surrounding rim offers neck support and blocks cold air drafts. Removable washable cover & anti-slip base perfect for tile and hardwood floors.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/images/products/orthopedic-bed/01-yellow-front.jpg',
      '/images/products/orthopedic-bed/07-shiba-navy-scene.jpg',
      '/images/products/orthopedic-bed/03-golden-retriever-indoor.jpg',
      '/images/products/orthopedic-bed/04-olive-green-front.jpg',
      '/images/products/orthopedic-bed/05-golden-retriever-living.jpg',
      '/images/products/orthopedic-bed/06-yellow-angle.jpg',
      '/images/products/orthopedic-bed/02-dark-gray-side.jpg',
    ],
    rating: 4.8,
    reviewCount: 87,
    badge: 'New Arrival',
    sizeVariants: [
      { label: 'S', dimensions: '60 x 47 x 17 cm', weight: '4.00 kg', price: 0 },
      { label: 'M', dimensions: '73 x 57 x 18 cm', weight: '9.00 kg', price: 0 },
      { label: 'L', dimensions: '92 x 72 x 19 cm', weight: '8.00 kg', price: 0 },
    ],
    colorOptions: [
      { name: 'Dark Gray', hex: '#4A4A4A', image: '/images/products/orthopedic-bed/02-dark-gray-side.jpg' },
      { name: 'Denim Blue', hex: '#5B7FA5', image: '/images/products/orthopedic-bed/07-shiba-navy-scene.jpg' },
      { name: 'Navy Blue', hex: '#1B2A4A', image: '/images/products/orthopedic-bed/07-shiba-navy-scene.jpg' },
      { name: 'Olive Green', hex: '#6B7F3A', image: '/images/products/orthopedic-bed/04-olive-green-front.jpg' },
      { name: 'Peacock Blue', hex: '#006D77', image: '/images/products/orthopedic-bed/07-shiba-navy-scene.jpg' },
      { name: 'Yellow', hex: '#E8B931', image: '/images/products/orthopedic-bed/01-yellow-front.jpg' },
    ],
    features: [
      'High-density orthopedic foam for balanced weight distribution & everyday support',
      'Low entry access for senior dogs with limited mobility',
      'Surround bolster rim for neck support & wind protection',
      'Dual-sided reversible mattress for all seasons',
      'Zippered removable washable cover',
      'Non-slip base prevents sliding on smooth flooring',
    ],
    specifications: {
      'Material': 'High-density supportive foam + Oxford fabric exterior',
      'Inner Mat': 'Dual-sided (plush fleece + breathable oxford)',
      'Cover': 'Fully removable, zippered, machine washable',
      'Base': 'Anti-slip fabric bottom',
      'Design': 'Low entry with raised bolster rim',
      'Target': 'Senior dogs, older pets, dogs with limited mobility',
      'MOQ': '50 pieces (mixed sizes/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed sizes/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Price varies by size, color, and order quantity. Contact us via email (sales@loyalbondpet.com) or WhatsApp (+8615706802495) for a detailed quote. FOB Ningbo available.',
    },
  },
  {
    id: '5',
    slug: 'drying-towel',
    name: 'Pet Quick-Dry Coral Fleece Towel',
    price: 0,
    priceRange: '$0.14 – $0.27',
    description: `The LoyalBond Quick-Dry Coral Fleece Towel offers efficient moisture absorption for your pet's daily care routine — whether after bath time, rainy walks, or swimming sessions.

Crafted from high-density coral fleece microfiber, this towel absorbs water quickly and holds more moisture than standard cotton, helping you dry your pet faster with less rubbing. The soft, plush texture is gentle on sensitive skin and paw pads, making bath time more comfortable for dogs and cats of all sizes.

Available in two sizes to match different breeds:
- Small (30×30cm): Ideal for cats, small dogs, and targeted drying of paws, face, or belly
- Large (30×60cm): Suitable for medium to large dogs, full-body drying

Despite its high absorbency, the towel remains lightweight (100g per piece) and easy to handle. The quick-dry fabric releases moisture efficiently when hung, reducing musty odors and bacterial growth potential between uses.

Machine washable and durable — maintains softness and absorbency wash after wash. The compact folded size makes it convenient to store in grooming kits or travel bags.

Ideal for pet groomers, boarding facilities, and pet owners who prioritize efficient, gentle drying.`,
    shortDescription: 'High-absorbency coral fleece microfiber towel for pets. Two sizes (30×30cm / 30×60cm) for cats and dogs. Quick-dry, machine washable, gentle on skin. Perfect for bath time, rainy walks, and grooming.',
    collection: 'Grooming & Bath',
    collectionSlug: 'grooming-bath',
    images: [
      '/images/products/drying-towel/01-main.jpg',
      '/images/products/drying-towel/02-yellow.jpg',
      '/images/products/drying-towel/03-gray.jpg',
      '/images/products/drying-towel/04-size-compare.jpg',
      '/images/products/drying-towel/05-absorbency.jpg',
      '/images/products/drying-towel/06-texture.jpg',
      '/images/products/drying-towel/07-pet-usage.jpg',
      '/images/products/drying-towel/08-folded.jpg',
      '/images/products/drying-towel/09-colors.jpg',
      '/images/products/drying-towel/10-bath-scene.jpg',
      '/images/products/drying-towel/11-detail.jpg',
      '/images/products/drying-towel/12-packaging.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['Small (30×30cm)', 'Large (30×60cm)'],
    colors: ['Mustard Yellow', 'Gray'],
    colorOptions: [
      { name: 'Mustard Yellow', hex: '#D4A537', image: '/images/products/drying-towel/02-yellow.jpg' },
      { name: 'Gray', hex: '#9E9E9E', image: '/images/products/drying-towel/03-gray.jpg' },
    ],
    features: [
      'High-Density Coral Fleece — Absorbs water faster than standard cotton',
      'Two Size Options — 30×30cm for small pets / 30×60cm for medium-large dogs',
      'Quick-Dry Fabric — Releases moisture efficiently to reduce odors',
      'Soft & Gentle — Plush texture safe for sensitive skin',
      'Lightweight (100g) — Easy to handle and store',
      'Machine Washable — Durable, maintains softness wash after wash',
      'Versatile Use — Bath time, rainy walks, swimming, grooming',
    ],
    specifications: {
      'Material': 'High-density coral fleece microfiber',
      'Size S': '30×30cm, approx. 100g',
      'Size L': '30×60cm, approx. 100g',
      'Weight': '100g per piece',
      'Colors': 'Mustard Yellow / Gray',
      'Packaging': '100 pieces per carton',
      'Washable': 'Yes, machine washable',
      'Dry Time': 'Quick-dry fabric',
      'MOQ': '50 pieces (mixed sizes/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed sizes/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Price varies by size, color, and order quantity. Contact us via email (sales@loyalbondpet.com) or WhatsApp (+8615706802495) for a detailed quote. FOB Ningbo available.',
    },
  }
];

export const collections = [
  {
    slug: 'home-safety',
    name: 'Home Safety',
    title: 'Home Safety',
    description: 'Transform your home into a safe haven for your senior pet. Orthopedic beds, non-slip pads, ramps, and lift aids help prevent accidents and support comfortable living for aging companions.',
    priceRange: '$2.00 – $28.00',
    image: '/collections/home-safety.jpg',
    icon: 'home',
    emoji: '🏠'
  },
  {
    slug: 'feeding-aids',
    name: 'Feeding Aids',
    title: 'Feeding Aids',
    description: 'Make mealtime comfortable with elevated bowls, slow feeders, and snuffle mats designed for senior dogs with limited mobility or changing nutritional needs.',
    priceRange: '$3.50 – $5.50',
    image: '/collections/feeding-aids.jpg',
    icon: 'feeding',
    emoji: '🍽️'
  },
  {
    slug: 'travel-car',
    name: 'Travel & Car',
    title: 'Travel & Car',
    description: 'Make every journey comfortable for your senior dog. Car seat protectors, supportive harnesses, and portable hydration solutions for safe travel with aging pets.',
    priceRange: '$3.50 – $8.50',
    image: '/collections/travel-car.jpg',
    icon: 'travel',
    emoji: '🚗'
  },
  {
    slug: 'grooming-bath',
    name: 'Grooming & Bath',
    title: 'Grooming & Bath',
    description: 'Gentle grooming tools and quick-dry towels for senior dogs. Efficient bath-time essentials and coat care accessories for stress-free grooming routines.',
    priceRange: '$0.14 – $0.27',
    image: '/collections/grooming-bath.jpg',
    icon: 'grooming',
    emoji: '🛁'
  },
  {
    slug: 'oral-care',
    name: 'Oral Care',
    title: 'Oral Care',
    description: 'Coming soon — oral care products specially selected for senior dogs. Maintaining dental comfort is an important part of overall well-being.',
    priceRange: 'Coming Soon',
    image: '/collections/oral-care.jpg',
    icon: 'oral',
    emoji: '🦷'
  },
  {
    slug: 'seasonal',
    name: 'Seasonal',
    title: 'Seasonal',
    description: 'Season-specific products for senior dogs. Cooling mats for summer heat, warming accessories for winter chill — comfort all year round.',
    priceRange: 'Contact for pricing',
    image: '/collections/seasonal.jpg',
    icon: 'seasonal',
    emoji: '❄️'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(p => p.collectionSlug === collectionSlug);
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.bestSeller);
}

export function getCollectionBySlug(slug: string) {
  return collections.find(c => c.slug === slug);
}
