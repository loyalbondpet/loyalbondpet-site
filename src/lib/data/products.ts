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
    bestSeller: true,
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
      'Reinforced Padded Handle — Multi-layer stitched with stable load-bearing capacity',
      'Adjustable Chest Plate — Velcro closure for quick on/off and custom fit',
      'Breathable Mesh Body — Lightweight hollow mesh fabric for all-day comfort',
      'Reflective Safety Strips — Enhanced visibility during early morning or evening walks',
      'Wide Weight Distribution Panel — Spreads pressure evenly across chest and belly',
      'Machine Washable — Easy care, lightweight and portable',
    ],
    specifications: {
      'Material': 'Breathable hollow mesh fabric with reinforced webbing',
      'Design': 'One-piece full-body support (chest, belly & hip)',
      'Handle': 'Padded lift handle with reinforced stitching',
      'Closure': 'Adjustable Velcro chest plate + side buckles',
      'Safety': 'Reflective strips for low-light visibility',
      'Sizes': 'S / M / L / XL',
      'Weight Capacity': '1.5 – 30 kg (3 – 66 lbs)',
      'Colors': 'Black',
      'Washable': 'Yes, machine washable',
    },
    wholesaleInfo: {
      moq: '1 piece (sample order welcome)',
      leadTime: '3-5 days for sample; 15-25 days for bulk order',
      payment: 'Alibaba Trade Assurance / T/T',
      shipping: 'FOB Foshan, Guangdong',
      note: 'Supplier: Foshan Ha pier Pet Products Co., Ltd. (14-year factory, Guangdong). Export experience: Amazon, eBay, Wish, AliExpress, independent e-commerce sites. Price varies by size. Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '2',
    slug: 'hind-leg-support-harness',
    name: 'Senior Dog Hind Leg Support Harness',
    price: 0,
    priceRange: '$3.50 – $5.00',
    description: `The LoyalBond Hind Leg Support Harness is a lightweight rear-end sling designed to assist dogs with back leg weakness, balance issues, or mobility challenges during daily activities.

The sling uses a dual-ring design — two soft coral fleece rings wrap gently around your dog's hind legs while an adjustable webbing strap runs along the spine. A padded top handle lets you provide targeted lift exactly when your dog needs it, such as climbing stairs, getting into the car, or standing up after rest.

The coral fleece lining is soft against your dog's skin and prevents chafing from the webbing edges. The 2cm-wide nylon webbing is strong and durable while remaining flexible enough to adjust to different body shapes. Adjustable slider buckles on both sides let you fine-tune the strap length (40–70cm range) to fit your dog comfortably.

At just 48g, this sling adds virtually no burden to dogs with low stamina. The one-size adjustable design accommodates a wide range of breeds — from small terriers to medium and large dogs — eliminating the need to guess sizing. Available in Orange and Black.`,
    shortDescription: 'Ultra-lightweight (48g) hind leg support sling with soft coral fleece rings and adjustable webbing straps. One-size adjustable fit (40–70cm). Coral fleece lining prevents chafing. Available in Orange and Black.',
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
    sizes: ['One Size'],
    colors: ['Orange', 'Black'],
    features: [
      'Dual-Ring Sling Design — Soft coral fleece rings support both hind legs comfortably',
      'Coral Fleece Lining — Gentle on skin, prevents webbing edge chafing',
      'Adjustable Webbing Straps — Slider buckles adjust strap length from 40cm to 70cm',
      'Padded Top Handle — Targeted lift assistance when your dog needs it most',
      'Ultra-Lightweight (48g) — Negligible added weight for dogs with low stamina',
      'One-Size Adjustable Fit — Fits small to large breeds with a single adjustable design',
      'Quick On/Off — Step-in ring design, no complex threading or multiple buckles',
    ],
    specifications: {
      'Material': 'Coral fleece lining + 2cm nylon webbing',
      'Design': 'Hind leg sling with dual fleece rings and adjustable spine strap',
      'Handle': 'Padded coral fleece top handle',
      'Closure': 'Adjustable slider buckles on both sides',
      'Weight': '48g',
      'Adjustment Range': '40–70cm (webbing strap length)',
      'Webbing Width': '2cm',
      'Fit': 'One Size — adjustable for small to large breeds',
      'Colors': 'Orange / Black',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Pingyang Changbao Crafts Factory (17-year factory, Zhejiang). Price varies by color and order quantity. Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '3',
    slug: 'snuffle-mat-set',
    name: 'Interactive Dog Snuffle Mat Set',
    bestSeller: true,
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
      '/images/products/snuffle-mat-new/01-main-product.jpg',
      '/images/products/snuffle-mat-new/02-size-bone-62x42.jpg',
      '/images/products/snuffle-mat-new/03-size-plum-60x60.jpg',
      '/images/products/snuffle-mat-new/04-size-rect-80x48.jpg',
      '/images/products/snuffle-mat-new/05-easy-clean.jpg',
      '/images/products/snuffle-mat-new/06-soft-fleece.jpg',
      '/images/products/snuffle-mat-new/07-anti-slip.jpg',
      '/images/products/snuffle-mat-new/08-craftsmanship.jpg',
      '/images/products/snuffle-mat-new/09-10min-sniffing.jpg',
      '/images/products/snuffle-mat-new/10-10min-exercise.jpg',
      '/images/products/snuffle-mat-new/11-how-to-use.jpg',
      '/images/products/snuffle-mat-new/12-never-lonely.jpg',
      '/images/products/snuffle-mat-new/13-burn-energy.jpg',
      '/images/products/snuffle-mat-new/14-are-you-worried.jpg',
      '/images/products/snuffle-mat-new/15-slows-down-eating.jpg',
      '/images/products/snuffle-mat-new/16-walk-at-home.jpg',
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
    bestSeller: true,
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
      '/images/products/orthopedic-bed/01-main.jpg',
      '/images/products/orthopedic-bed/02-lifestyle.jpg',
      '/images/products/orthopedic-bed/03-bolster-detail.jpg',
      '/images/products/orthopedic-bed/04-removable-cover.jpg',
      '/images/products/orthopedic-bed/05-dog-on-bed.jpg',
      '/images/products/orthopedic-bed/06-color-peacock-blue.jpg',
      '/images/products/orthopedic-bed/07-size-chart.jpg',
    ],
    rating: 4.8,
    reviewCount: 0,
    badge: 'New Arrival',
    sizeVariants: [
      { label: 'S', dimensions: '60 x 47 x 17 cm', weight: '4.00 kg', price: 0 },
      { label: 'M', dimensions: '73 x 57 x 18 cm', weight: '9.00 kg', price: 0 },
      { label: 'L', dimensions: '92 x 72 x 19 cm', weight: '8.00 kg', price: 0 },
    ],
    colorOptions: [
      { name: 'Dark Gray', hex: '#4A4A4A', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Denim Blue', hex: '#5B7FA5', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Navy Blue', hex: '#1B2A4A', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Olive Green', hex: '#6B7F3A', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Peacock Blue', hex: '#006D77', image: '/images/products/orthopedic-bed/06-color-peacock-blue.jpg' },
      { name: 'Yellow', hex: '#E8B931', image: '/images/products/orthopedic-bed/01-main.jpg' },
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
  },
  {
    id: '6',
    slug: 'mesh-support-sling',
    name: 'Mesh Shoulder Sling Support Harness',
    price: 0,
    priceRange: '$4.50 – $6.50',
    description: `The LoyalBond Mesh Shoulder Sling is a lightweight support sling designed for dogs with mobility challenges, aging joints, or recovering from injury.

The sling wraps gently around your dog's belly and lower torso, while the adjustable shoulder straps let you carry part of your dog's weight on your own shoulders — keeping your back upright and reducing strain during walks, stair climbing, or car boarding.

The outer shell is made from durable Oxford fabric that holds its shape under load, while the inner lining uses soft air mesh to promote airflow and keep your dog comfortable during extended use. Reflective strips run along all webbing straps for better visibility during early morning or evening outings.

A padded top handle gives you extra control when you need to lift or steady your dog. The shoulder straps feature smooth-adjusting buckles so you can quickly set the right height for your body and your dog's size.

Available in four colors — Pink, Blue, Navy, and Black — and folds flat into the included storage bag for easy transport.`,
    shortDescription: 'Shoulder-sling support harness with Oxford fabric shell and breathable air mesh lining. Reflective webbing, padded handle, and adjustable straps. Folds into included storage bag. Available in 4 colors.',
    collection: 'Travel & Car',
    collectionSlug: 'travel-car',
    images: [
      '/images/products/mesh-support-sling/01-main.jpg',
      '/images/products/mesh-support-sling/02-feature.jpg',
      '/images/products/mesh-support-sling/03-detail.jpg',
      '/images/products/mesh-support-sling/04-detail2.jpg',
      '/images/products/mesh-support-sling/05-detail3.jpg',
      '/images/products/mesh-support-sling/06-scene1.jpg',
      '/images/products/mesh-support-sling/07-scene2.jpg',
      '/images/products/mesh-support-sling/08-scene3.jpg',
      '/images/products/mesh-support-sling/09-size-chart.png',
      '/images/products/mesh-support-sling/10-colors.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Blue', 'Navy', 'Black'],
    features: [
      'Shoulder-Sling Design — Owner wears adjustable shoulder straps; sling supports dog\'s belly and lower torso',
      'Oxford Fabric Shell — Durable outer layer maintains shape under load',
      'Breathable Air Mesh Lining — Soft inner layer promotes airflow for extended comfort',
      'Reflective Webbing — Enhanced visibility during low-light walks',
      'Padded Top Handle — Extra control for lifting and steadying your dog',
      'Adjustable Buckle Straps — Quick height adjustment to fit your body and dog size',
      'Includes Storage Bag — Folds flat for portable storage and travel',
    ],
    specifications: {
      'Material': 'Oxford fabric outer shell with air mesh inner lining',
      'Design': 'Shoulder-sling style; supports belly and lower torso',
      'Handle': 'Padded top handle with reflective stitching',
      'Straps': 'Adjustable nylon webbing with smooth-sliding buckles',
      'Safety': 'Reflective strips on all webbing for low-light visibility',
      'Sizes': 'S / M / L / XL',
      'Recommended Weight': 'S: 2-9 kg (4-18 lbs) / M: 7.5-25 kg (15-50 lbs) / L: 22.5-40 kg (45-80 lbs) / XL: 37.5-65 kg (75-130 lbs)',
      'Product Weight': 'S: 170g / M: 220g / L: 250g / XL: 300g',
      'Colors': 'Pink / Blue / Navy / Black',
      'Includes': 'Storage bag',
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
    description: 'Transform your home into a safe haven for your senior pet. Orthopedic beds and lift aids help prevent accidents and support comfortable living for aging companions.',
    priceRange: '$2.00 – $28.00',
    image: '/collections/home-safety.jpg',
    icon: 'home',
    emoji: '🏠'
  },
  {
    slug: 'feeding-aids',
    name: 'Feeding Aids',
    title: 'Feeding Aids',
    description: 'Make mealtime comfortable with slow feeders, snuffle mats, and feeding accessories designed for senior dogs with limited mobility or changing nutritional needs.',
    priceRange: '$3.50 – $5.50',
    image: '/collections/feeding-aids.jpg',
    icon: 'feeding',
    emoji: '🍽️'
  },
  {
    slug: 'travel-car',
    name: 'Travel & Car',
    title: 'Travel & Car',
    description: 'Make every journey comfortable for your senior dog. Supportive harnesses and non-slip paw covers for safe, comfortable travel with aging pets.',
    priceRange: '$3.50 – $8.50',
    image: '/collections/travel-car.jpg',
    icon: 'travel',
    emoji: '🚗'
  },
  {
    slug: 'grooming-bath',
    name: 'Grooming & Bath',
    title: 'Grooming & Bath',
    description: 'Quick-dry towels and gentle coat care accessories for senior dogs. Efficient bath-time essentials for stress-free grooming routines.',
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
    description: 'Seasonal comfort essentials for senior dogs. Supportive accessories for summer heat and winter chill — comfort all year round.',
    priceRange: 'Contact for pricing',
    image: '/collections/seasonal.jpg',
    icon: 'seasonal',
    emoji: '❄️'
  }
];

// Cross-sell product recommendations (curated groups)
export const crossSellMap: Record<string, string[]> = {
  // Joint care group
  'lift-assist-harness': ['hind-leg-support-harness', 'mesh-support-sling'],
  'hind-leg-support-harness': ['lift-assist-harness', 'mesh-support-sling'],
  'mesh-support-sling': ['lift-assist-harness', 'hind-leg-support-harness'],
  // Daily care group
  // Comfort living group
  'snuffle-mat-set': ['orthopedic-bolster-dog-bed'],
  'orthopedic-bolster-dog-bed': ['snuffle-mat-set'],
};

export function getRelatedProducts(slug: string): Product[] {
  const crossSlugs = crossSellMap[slug] || [];
  const crossProducts = crossSlugs
    .map(s => products.find(p => p.slug === s))
    .filter((p): p is Product => !!p);
  
  // Also include same-collection products (excluding self and already-added cross-sell)
  const crossSet = new Set(crossSlugs);
  crossSet.add(slug);
  const product = products.find(p => p.slug === slug);
  const sameCollection = product
    ? products.filter(p => p.collectionSlug === product.collectionSlug && !crossSet.has(p.slug))
    : [];
  
  return [...crossProducts, ...sameCollection].slice(0, 4);
}

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

