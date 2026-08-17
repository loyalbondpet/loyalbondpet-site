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
    price: 24.99,
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
    sizeVariants: [
      { label: 'S', dimensions: '45-55 cm chest', weight: '0.25 kg', price: 19.99 },
      { label: 'M', dimensions: '55-70 cm chest', weight: '0.30 kg', price: 24.99 },
      { label: 'L', dimensions: '70-85 cm chest', weight: '0.35 kg', price: 29.99 },
      { label: 'XL', dimensions: '85-100 cm chest', weight: '0.40 kg', price: 34.99 },
    ],
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
      shipping: 'FOB Ningbo, Zhejiang',
      note: 'Supplier: Pujiang Aibeiite Pet Products Co., Ltd. (浦江爱贝特宠物用品有限公司, 12-year factory, Zhejiang). 7378㎡ facility, 47 patents, 3.49万 followers on 1688. Export experience: Amazon, eBay, AliExpress. Part of our consolidated 3-factory sourcing plan. Price varies by size. Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '2',
    slug: 'hind-leg-support-harness',
    name: 'Senior Dog Hind Leg Support Harness',
    price: 17.99,
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
    price: 14.99,
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
      note: 'Supplier: Hebei Xingtai Felt Products Factory (河北邢台毛毡厂). Purchase price: ¥12.50/piece. 1-piece MOQ for sample. Part of our consolidated 3-factory sourcing plan (Textile Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '11',
    slug: 'orthopedic-bolster-dog-bed',
    name: 'Orthopedic Bolster Dog Bed',
    bestSeller: true,
    price: 49.99,
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
      { label: 'S', dimensions: '60 x 47 x 17 cm', weight: '4.00 kg', price: 39.99 },
      { label: 'M', dimensions: '73 x 57 x 18 cm', weight: '9.00 kg', price: 49.99 },
      { label: 'L', dimensions: '92 x 72 x 19 cm', weight: '8.00 kg', price: 59.99 },
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
      note: 'Supplier: Nantong Shule Sponge Products Co., Ltd. (南通舒乐海绵制品, Jiangsu). Specialized in sponge/foam products. Purchase price: TBD (requires inquiry). 10-piece MOQ. Part of our consolidated 3-factory sourcing plan (Foam Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '6',
    slug: 'mesh-support-sling',
    name: 'Mesh Shoulder Sling Support Harness',
    price: 15.99,
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
      moq: '2 pieces',
      leadTime: '2-3 days for sample; 15-25 days for bulk order',
      payment: 'Alibaba Trade Assurance / T/T',
      shipping: 'FOB Yiwu, Zhejiang',
      note: 'Supplier: Wenzhou Midali Pet Products Co., Ltd. (温州市米达力宠物用品, 9-year factory, Zhejiang Pingyang). 30-day sales volume: 56,195 units. Purchase price: ¥19/piece. Part of our consolidated 3-factory sourcing plan (Textile Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '18',
    slug: 'foam-dog-stairs',
    name: 'Foldable Foam Pet Stairs & Ramp',
    price: 46.99,
    description: `Help your senior dog safely access beds, sofas, and vehicles with the LoyalBond Foldable Foam Pet Stairs.

Crafted from high-density foam that provides stable, cushioned support — reducing joint strain for dogs with arthritis, hip dysplasia, or general mobility challenges. The gradual incline is more natural and comfortable than jumping, especially for smaller breeds and elderly dogs.

The removable, machine-washable cover is made from soft plush fabric that's gentle on paws and easy to clean. Non-slip bottom keeps the stairs firmly in place on tile, hardwood and laminate floors.

When not in use, the stairs fold flat for convenient storage. The lightweight foam construction makes it easy to move between rooms or take along when traveling with your pet.

Available in 3-step and 4-step configurations to suit different heights.`,
    shortDescription: 'High-density foam pet stairs with removable washable cover. Foldable design for easy storage. Non-slip base safe for tile and hardwood floors. Ideal for senior dogs accessing beds and sofas.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/images/products/foam-dog-stairs/01-main.jpg',
      '/images/products/foam-dog-stairs/02-in-use.jpg',
      '/images/products/foam-dog-stairs/03-folded.jpg',
      '/images/products/foam-dog-stairs/04-non-slip-base.jpg',
      '/images/products/foam-dog-stairs/05-size-chart.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['3-Step (40×35×48cm)', '4-Step (50×40×60cm)'],
    features: [
      'High-Density Foam Core — Provides stable, cushioned support for joints',
      'Gradual Incline Design — Safer and more comfortable than jumping',
      'Removable Machine-Washable Cover — Soft plush fabric, easy to clean',
      'Non-Slip Bottom — Stays firmly in place on smooth floors',
      'Foldable Design — Folds flat for easy storage and travel',
      'Lightweight — Easy to move between rooms',
    ],
    specifications: {
      'Material': 'High-density foam with plush fabric cover',
      '3-Step Dimensions': '40 × 35 × 48 cm',
      '4-Step Dimensions': '50 × 40 × 60 cm',
      'Cover': 'Removable, machine washable',
      'Base': 'Non-slip fabric bottom',
      'Weight Capacity': 'Up to 50 kg (110 lbs)',
      'Target': 'Senior dogs, small breeds, dogs with joint issues',
    },
    wholesaleInfo: {
      moq: '10 pieces',
      leadTime: '15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Nantong Shule Sponge Products Co., Ltd. (南通舒乐海绵制品, Jiangsu). Purchase price: ¥103/piece (3-step). Part of our consolidated 3-factory sourcing plan (Foam Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '19',
    slug: 'anti-slip-dog-socks',
    name: 'Anti-Slip Dog Socks with Paw Protection (4-Pack)',
    price: 12.99,
    description: `Give your senior dog confident footing on slippery floors with LoyalBond Anti-Slip Dog Socks.

Specially designed for dogs with mobility challenges, these lightweight socks feature anti-slip rubber grips on the sole that provide traction on tile, hardwood, and laminate surfaces. The breathable knit fabric keeps paws comfortable while the elastic ankle band holds socks securely in place without restricting circulation.

Beyond anti-slip protection, these socks also shield paw pads from hot pavement in summer, cold floors in winter, and post-surgery licking or scratching. The soft fabric is gentle on sensitive paws and wounds.

Each pack includes 4 socks in your choice of size. Available in multiple colors to match your pet's style.`,
    shortDescription: 'Breathable anti-slip dog socks with rubber grip soles. Protects paws on smooth floors, hot pavement, and cold surfaces. Elastic ankle band for secure fit. 4-pack, multiple sizes.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/images/products/anti-slip-dog-socks/01-main.jpg',
      '/images/products/anti-slip-dog-socks/02-on-paw.jpg',
      '/images/products/anti-slip-dog-socks/03-grip-detail.jpg',
      '/images/products/anti-slip-dog-socks/04-size-chart.jpg',
      '/images/products/anti-slip-dog-socks/05-4pack.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S (for 3-5kg dogs)', 'M (for 5-10kg dogs)', 'L (for 10-20kg dogs)', 'XL (for 20-40kg dogs)'],
    colors: ['Black', 'Gray', 'Pink', 'Blue'],
    features: [
      'Anti-Slip Rubber Grips — Provides traction on smooth floors',
      'Breathable Knit Fabric — Keeps paws comfortable and dry',
      'Elastic Ankle Band — Secure fit without restricting circulation',
      'All-Season Protection — Shields from hot pavement, cold floors, and post-surgery scratching',
      'Soft & Gentle — Safe for sensitive paws and wounds',
      '4-Pack Value — Complete set for all four paws',
    ],
    specifications: {
      'Material': 'Breathable knit fabric with rubber grip sole',
      'Pack': '4 socks per pack',
      'Sizes': 'S / M / L / XL',
      'Colors': 'Black / Gray / Pink / Blue',
      'Washable': 'Yes, machine washable',
      'Target': 'Senior dogs, dogs with mobility issues, post-surgery recovery',
    },
    wholesaleInfo: {
      moq: '50 packs',
      leadTime: '15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Shaoxing Chunjili Pet Products Co., Ltd. (绍兴春及里宠物用品, Zhejiang). Purchase price: ¥4.00/pack (4 socks). Part of our consolidated 3-factory sourcing plan (Textile Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '20',
    slug: 'maze-slow-feeder-bowl',
    name: 'Maze Slow Feeder Dog Bowl',
    price: 11.99,
    description: `Transform mealtime into a healthy, engaging experience with the LoyalBond Maze Slow Feeder Bowl.

The raised ridge pattern creates a maze-like path that naturally slows down eating, promoting better digestion and reducing the risk of bloat — a common concern for deep-chested breeds and senior dogs. The non-slip base keeps the bowl steady during enthusiastic meals.

Made from food-grade melamine material that's BPA-free, durable, and dishwasher safe. The smooth surface is easy to clean and resists odor absorption. The wide, shallow design is accessible for senior dogs with neck or joint stiffness.

Available in multiple colors to match your home décor.`,
    shortDescription: 'Food-grade melamine maze slow feeder bowl with non-slip base. Slows eating pace naturally, promotes healthy digestion. BPA-free, dishwasher safe. Wide shallow design ideal for senior dogs.',
    collection: 'Feeding Aids',
    collectionSlug: 'feeding-aids',
    images: [
      '/images/products/maze-slow-feeder/01-main.jpg',
      '/images/products/maze-slow-feeder/02-maze-pattern.jpg',
      '/images/products/maze-slow-feeder/03-non-slip-base.jpg',
      '/images/products/maze-slow-feeder/04-dog-eating.jpg',
      '/images/products/maze-slow-feeder/05-colors.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['Small (18×18×4cm)', 'Medium (22×22×5cm)', 'Large (26×26×5.5cm)'],
    colors: ['Green', 'Blue', 'Pink', 'Orange'],
    features: [
      'Maze Ridge Pattern — Naturally slows eating pace by 3-5x',
      'Food-Grade Melamine — BPA-free, durable, and odor-resistant',
      'Non-Slip Base — Keeps bowl steady during meals',
      'Wide Shallow Design — Easy access for senior dogs with neck stiffness',
      'Dishwasher Safe — Easy to clean and maintain',
      'Promotes Healthy Digestion — Reduces risk of bloat and regurgitation',
    ],
    specifications: {
      'Material': 'Food-grade melamine (BPA-free)',
      'Small': '18 × 18 × 4 cm',
      'Medium': '22 × 22 × 5 cm',
      'Large': '26 × 26 × 5.5 cm',
      'Base': 'Non-slip rubber bottom',
      'Dishwasher': 'Yes, top rack safe',
      'Colors': 'Green / Blue / Pink / Orange',
    },
    wholesaleInfo: {
      moq: '5 pieces',
      leadTime: '3-5 days for sample; 15-25 days for bulk order',
      payment: 'Alibaba Trade Assurance / T/T',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Shaoxing Bobo Pet Products Factory (绍兴波波宠物用品厂, 24-year factory, Zhejiang). 8600㎡ facility, 30+ patents, melamine specialist. Purchase price: ¥16.2-18/piece. Part of our consolidated 3-factory sourcing plan (Tableware Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '21',
    slug: 'pet-gel-cooling-mat',
    name: 'Self-Cooling Gel Pet Mat',
    price: 16.99,
    description: `Keep your senior dog cool and comfortable during hot weather with the LoyalBond Self-Cooling Gel Mat.

The pressure-activated gel core automatically absorbs and dissipates body heat when your dog lies down — no water, electricity, or refrigeration needed. The cooling effect lasts up to 3 hours per session and the mat recharges itself within 15-20 minutes of non-use.

The durable nylon exterior is scratch-resistant, waterproof, and easy to wipe clean. Rounded corners and soft edges are gentle on aging joints. The mat folds flat for easy storage and portability — take it to the car, crate, or outdoor patio.

Designed for dogs of all ages, but especially beneficial for senior dogs, thick-coated breeds, and dogs with arthritis who suffer in hot weather.`,
    shortDescription: 'Pressure-activated self-cooling gel mat for dogs. No water or electricity needed. Cools for up to 3 hours, recharges in 15 minutes. Waterproof nylon exterior, scratch-resistant. Folds flat for storage.',
    collection: 'Seasonal',
    collectionSlug: 'seasonal',
    images: [
      '/images/products/gel-cooling-mat/01-main.jpg',
      '/images/products/gel-cooling-mat/02-dog-on-mat.jpg',
      '/images/products/gel-cooling-mat/03-gel-core.jpg',
      '/images/products/gel-cooling-mat/04-folded.jpg',
      '/images/products/gel-cooling-mat/05-size-chart.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['Small (40×30cm)', 'Medium (50×40cm)', 'Large (65×50cm)', 'XL (90×65cm)'],
    colors: ['Blue', 'Gray'],
    features: [
      'Pressure-Activated Gel — Automatically cools when your dog lies down',
      'No Water or Electricity Needed — Maintenance-free cooling',
      'Up to 3 Hours Cooling — Recharges in 15-20 minutes',
      'Durable Nylon Exterior — Scratch-resistant and waterproof',
      'Folds Flat — Easy storage and portable',
      'Gentle on Joints — Soft, rounded edges ideal for senior dogs',
    ],
    specifications: {
      'Material': 'Pressure-activated gel core with nylon exterior',
      'Small': '40 × 30 cm',
      'Medium': '50 × 40 cm',
      'Large': '65 × 50 cm',
      'XL': '90 × 65 cm',
      'Cooling Duration': 'Up to 3 hours',
      'Recharge Time': '15-20 minutes',
      'Waterproof': 'Yes',
      'Colors': 'Blue / Gray',
    },
    wholesaleInfo: {
      moq: '1 piece',
      leadTime: '3-5 days for sample; 15-20 days for bulk order',
      payment: 'Alibaba Trade Assurance / T/T',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Pujiang Lele Xin Pet Products Factory (浦江县乐乐欣, 11-year factory, Zhejiang). Monthly sales: 5,800+ units. Purchase price: ¥6.65/piece (Small). Part of our consolidated 3-factory sourcing plan (Tableware Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '22',
    slug: 'elevated-slow-feeder-bowl',
    name: 'Elevated Neck-Protection Slow Feeder Bowl',
    price: 21.99,
    description: `Combine the benefits of slow feeding with ergonomic neck support using the LoyalBond Elevated Slow Feeder Bowl.

The raised stand positions the bowl at a comfortable height that reduces neck strain and promotes natural eating posture — especially important for senior dogs with cervical spine issues, arthritis, or mobility challenges. The elevated design also aids digestion by allowing food to travel more easily from mouth to stomach.

The inner bowl features a maze-style ridge pattern that slows eating pace and reduces the risk of bloat. The stainless steel inner bowl is removable for easy cleaning and can be used separately as a regular water or food bowl.

The sturdy metal frame with non-slip feet keeps the feeder stable during meals. Assembly is tool-free and takes seconds.`,
    shortDescription: 'Elevated slow feeder with stainless steel bowl and neck-protection stand. Reduces neck strain for senior dogs. Maze pattern slows eating. Tool-free assembly, non-slip feet.',
    collection: 'Feeding Aids',
    collectionSlug: 'feeding-aids',
    images: [
      '/images/products/elevated-slow-feeder/01-main.jpg',
      '/images/products/elevated-slow-feeder/02-elevated-view.jpg',
      '/images/products/elevated-slow-feeder/03-maze-bowl.jpg',
      '/images/products/elevated-slow-feeder/04-steel-bowl.jpg',
      '/images/products/elevated-slow-feeder/05-size-chart.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['Small (bowl diameter 16cm, height 10cm)', 'Medium (bowl diameter 20cm, height 15cm)', 'Large (bowl diameter 24cm, height 20cm)'],
    colors: ['Silver/Black', 'Silver/White'],
    features: [
      'Elevated Design — Reduces neck strain and promotes natural eating posture',
      'Maze Slow Feeder Pattern — Slows eating pace, reduces bloat risk',
      'Stainless Steel Bowl — Removable, hygienic, dishwasher safe',
      'Sturdy Metal Frame — Stable construction with non-slip feet',
      'Tool-Free Assembly — Sets up in seconds',
      'Dual Function — Elevated stand + slow feeder in one',
    ],
    specifications: {
      'Stand Material': 'Powder-coated metal frame',
      'Bowl Material': 'Food-grade 304 stainless steel',
      'Small': 'Bowl diameter 16cm, stand height 10cm',
      'Medium': 'Bowl diameter 20cm, stand height 15cm',
      'Large': 'Bowl diameter 24cm, stand height 20cm',
      'Base': 'Non-slip rubber feet',
      'Assembly': 'Tool-free, snap-together design',
      'Colors': 'Silver/Black frame + Silver bowl / Silver/White frame + Silver bowl',
    },
    wholesaleInfo: {
      moq: '2 pieces',
      leadTime: '3-5 days for sample; 15-20 days for bulk order',
      payment: 'Alibaba Trade Assurance / T/T',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Yiwu Miaoxinbao Pet Products Co., Ltd. (义乌市喵心宝宠物用品, 6-year store, Zhejiang Jinhua). Purchase price: ¥10.50/piece. Part of our consolidated 3-factory sourcing plan (Tableware Factory group). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '23',
    slug: 'folding-pet-stairs',
    name: '3-Tier Folding Pet Stairs with Storage',
    price: 34.99,
    compareAtPrice: 39.99,
    description: `Help your dog or cat reach their favorite spots safely and independently with the LoyalBond 3-Tier Folding Pet Stairs.

Designed for sofas, low beds, window perches, and car seats up to 32 cm (12.6 inches) high, these stairs give small breeds, senior pets, and recovering animals a gentle, steady climb — no jumping, no straining.

The sturdy board-and-fabric construction holds its shape step after step, unlike soft foam stairs that can sink underfoot. Each step is covered in durable, textured Oxford fabric with a non-slip surface for confident paw traction. The wide base and anti-slip bottom pads keep the unit stable on tile, hardwood, and laminate floors.

A built-in storage compartment under the top step opens to hold toys, treats, leashes, or grooming supplies — turning a mobility aid into a practical organizer. When not in use, the stairs fold flat to just 11 cm thick for sliding under furniture, tucking beside a cabinet, or taking along when traveling.

The dark grey fabric cover is removable and machine washable for easy maintenance. At only 3.6 kg, the stairs are light enough to move between rooms yet solid enough for daily use.

No assembly required — unfold and ready to use.`,
    shortDescription: '3-tier folding pet stairs with built-in storage for small dogs and cats. Sturdy board-and-fabric construction supports confident climbing on sofas and low beds up to 32cm. Anti-slip steps, folds flat for storage, removable washable cover.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/images/products/folding-pet-stairs/01-main.jpg',
      '/images/products/folding-pet-stairs/02-storage.jpg',
      '/images/products/folding-pet-stairs/03-step-detail.jpg',
      '/images/products/folding-pet-stairs/04-storage-detail.jpg',
      '/images/products/folding-pet-stairs/05-white-bg.jpg',
      '/images/products/folding-pet-stairs/06-lifestyle.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    features: [
      '3-Tier Design — Ideal height for sofas and low beds up to 32 cm (12.6 in)',
      'Built-In Storage — Top step opens to a compartment for toys, treats & accessories',
      'Sturdy Board & Fabric Construction — Firm steps that won\'t sink like foam',
      'Non-Slip Step Surface — Textured Oxford fabric for confident paw traction',
      'Folds Flat — Collapses to 11 cm thick for easy storage and travel',
      'Removable Washable Cover — Zippered dark grey cover, machine washable',
      'Anti-Slip Bottom Pads — Stays firmly in place on tile, hardwood & laminate',
      'No Assembly Required — Unfold and ready to use',
    ],
    specifications: {
      'Material': 'Board frame with Oxford fabric cover',
      'Color': 'Dark Grey',
      'Open Dimensions': '74 × 42 × 32 cm (29.1 × 16.5 × 12.6 in)',
      'Folded Dimensions': '42.5 × 33 × 11 cm (16.7 × 13 × 4.3 in)',
      'Product Weight': '3.6 kg (7.9 lbs)',
      'Step Count': '3 steps',
      'Storage Compartment': 'Yes, under top step',
      'Cover': 'Removable, machine washable',
      'Base': 'Anti-slip bottom pads',
      'Assembly': 'No assembly required',
      'Best For': 'Small dogs, cats, senior & recovering pets',
    },
    wholesaleInfo: {
      moq: '10 pieces',
      leadTime: '1-100 pieces: 24h / 101-500 pieces: 72h / 500+ pieces: ~25 days',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Zhejiang',
      note: 'Wholesale tier pricing: 10-49 pcs at $33.99/pc (15% off), 50-99 pcs at $27.99/pc (30% off). Orders of 100+ pcs: contact sales@loyalbondpet.com for custom bulk pricing. Supplier: Nadi Pet Products (纳蒂, Jinhua Zhejiang), cross-border export specialist, 17,000+ units sold, 46.58% repurchase rate. OEM/custom packaging available.',
    },
  },
  {
    id: '24',
    slug: 'snowflake-cooling-mat',
    name: 'Snowflake Self-Cooling Pet Mat',
    price: 12.99,
    compareAtPrice: 16.99,
    description: `Give your pet a cool place to rest this summer with the LoyalBond Snowflake Self-Cooling Mat.

The pressure-activated cooling core automatically absorbs and dissipates body heat the moment your pet lies down — no water filling, no electricity, no refrigeration required. The cooling effect activates instantly and recharges naturally when your pet steps away, making it a hassle-free solution for hot days.

The premium snowflake-patterned surface is soft yet highly elastic, providing a comfortable resting area that won\'t crack or harden over time. The durable material is scratch-resistant and bite-tough for everyday use, while the waterproof backing prevents leaks and protects floors, sofas, and car seats from spills and accidents.

Cleaning is effortless — simply wipe with a damp cloth or rinse under running water. The mat dries quickly and maintains its shape without deformation after repeated washing. When not in use, it folds flat for compact storage or travel.

Lightweight and versatile, use it anywhere your pet rests: on hardwood floors, tile, inside crates, on sofas, car seats, or outdoor patios. Available in three sizes to accommodate cats, small dogs, and medium breeds.`,
    shortDescription: 'Self-cooling gel pet mat with snowflake pattern. Pressure-activated cooling — no water, electricity or refrigeration needed. Scratch-resistant, waterproof, folds flat. 3 sizes for cats and small to medium dogs.',
    collection: 'Seasonal',
    collectionSlug: 'seasonal',
    images: [
      '/images/products/snowflake-cooling-mat/01-main.jpg',
      '/images/products/snowflake-cooling-mat/02-lifestyle.jpg',
      '/images/products/snowflake-cooling-mat/03-gel-tech.jpg',
      '/images/products/snowflake-cooling-mat/04-features.jpg',
      '/images/products/snowflake-cooling-mat/05-size-guide.jpg',
      '/images/products/snowflake-cooling-mat/06-construction.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizeVariants: [
      { label: 'S', dimensions: '40 x 30 cm', weight: '0.85 kg', price: 12.99 },
      { label: 'M', dimensions: '50 x 40 cm', weight: '1.40 kg', price: 17.99 },
      { label: 'L', dimensions: '60 x 50 cm', weight: '2.20 kg', price: 22.99 },
    ],
    features: [
      'Instant Self-Cooling — Pressure-activated core absorbs body heat on contact',
      'No Water or Electricity — No filling, no charging, no refrigeration needed',
      'Soft & Highly Elastic — Premium surface that stays comfortable and won\'t crack',
      'Scratch & Bite Resistant — Durable material built for everyday pet use',
      'Waterproof Backing — Protects floors, sofas, and car seats from leaks',
      'Easy to Clean — Wipe or rinse, dries fast, no deformation after washing',
      'Folds Flat for Storage — Lightweight and portable for home or travel',
      'Multi-Purpose — Use on floors, sofas, in crates, car seats, and patios',
    ],
    specifications: {
      'Material': 'Self-cooling polymer core with premium PVC/nylon surface',
      'Pattern': 'Blue Snowflake',
      'Cooling Type': 'Pressure-activated physical cooling (imported formula)',
      'Small (S)': '40 × 30 cm — for cats, toy breeds & puppies up to 5 kg (11 lbs)',
      'Medium (M)': '50 × 40 cm — for small dogs & large cats up to 10 kg (22 lbs)',
      'Large (L)': '60 × 50 cm — for medium dogs up to 20 kg (44 lbs)',
      'Product Weight (S)': '850 g',
      'Product Weight (M)': '1,400 g',
      'Product Weight (L)': '2,200 g',
      'Waterproof': 'Yes',
      'Foldable': 'Yes',
      'Care': 'Wipe clean or rinse with water; air dry',
      'Safety': 'Non-toxic, pet-safe materials',
    },
    wholesaleInfo: {
      moq: '10 pieces (mixed sizes accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Zhejiang',
      note: 'FOB tier pricing by size: S: $2.50/pc (10-49 pcs), $2.00/pc (50-99 pcs); M: $3.80/pc (10-49 pcs), $3.10/pc (50-99 pcs); L: $5.20/pc (10-49 pcs), $4.20/pc (50-99 pcs). Orders of 100+ pcs: contact sales@loyalbondpet.com for custom bulk pricing. Supplier: Jinhua, Zhejiang factory (镇店之宝, 110,000+ units sold, 24.24% repurchase rate). Cross-border export ready. OEM/custom packaging available.',
    },
  },
  {
    id: '25',
    slug: 'anti-choke-slow-feeder-bowl',
    name: 'Anti-Choke Slow Feeder Bowl',
    price: 9.99,
    compareAtPrice: 13.99,
    description: `Help your dog or cat eat at a healthier pace with the LoyalBond Anti-Choke Slow Feeder Bowl.
The interior is designed with a central raised dome surrounded by radiating fin barriers and rounded nodules. This maze-like obstacle pattern naturally breaks up each mouthful, extending a meal that would take about 5 minutes in a regular bowl to roughly 20 minutes. Slower eating supports better digestion, reduces gulping and choking risk, and helps prevent bloat, regurgitation, and overeating — important for fast eaters, senior pets, and multi-pet households.
The wide-mouth, elevated rim design gives pets comfortable access to every corner without straining their neck, while the bowl depth of 4.5 cm keeps kibble contained and reduces spills. The smooth, food-safe surface is easy to wipe or rinse clean after each meal.
Crafted from durable, BPA-free plastic with a non-slip, wide star-shaped base that stays firmly in place on tile, hardwood, and laminate floors — even during enthusiastic meals. The stackable design makes storage simple when multiple bowls are in use.
Available in five modern colors to match any home décor: Pink, Teal, Mint Green, Grey, and Black. Suitable for both dogs and cats of small to medium size.`,
    shortDescription: 'Anti-choke slow feeder bowl with maze pattern that extends mealtime from ~5 to ~20 minutes. BPA-free plastic, non-slip star base, wide mouth, easy to clean. 5 colors, suitable for dogs and cats.',
    collection: 'Feeding Aids',
    collectionSlug: 'feeding-aids',
    images: [
      '/images/products/anti-choke-slow-feeder-bowl/01-main.jpg',
      '/images/products/anti-choke-slow-feeder-bowl/02-slow-feeder-design.jpg',
      '/images/products/anti-choke-slow-feeder-bowl/03-dogs-cats.jpg',
      '/images/products/anti-choke-slow-feeder-bowl/04-eating-comparison.jpg',
      '/images/products/anti-choke-slow-feeder-bowl/05-colors.jpg',
      '/images/products/anti-choke-slow-feeder-bowl/06-dimensions.jpg',
    ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    colors: ['Pink', 'Teal', 'Mint Green', 'Grey', 'Black'],
    features: [
      'Anti-Choke Maze Design — Central dome + fin barriers + nodules slow eating by ~4x',
      'Extends Mealtime to ~20 Minutes — From about 5 minutes in a regular bowl',
      'Supports Healthy Digestion — Reduces gulping, bloat, regurgitation and overeating',
      'Wide Mouth & Elevated Rim — Comfortable access, reduced neck strain',
      'Non-Slip Star Base — Wide five-point base stays put on smooth floors',
      'BPA-Free Food-Safe Plastic — Durable, smooth and easy to rinse clean',
      '5 Color Options — Pink, Teal, Mint Green, Grey and Black',
      'For Dogs & Cats — One size fits small to medium pets',
    ],
    specifications: {
      'Material': 'BPA-free food-safe plastic',
      'Top Diameter': '18 cm (7.1 in)',
      'Bottom Diameter': '22.5 cm (8.9 in)',
      'Height': '5 cm (2.0 in)',
      'Bowl Depth': '4.5 cm (1.8 in)',
      'Design': 'Central dome + fin barriers + rounded nodules (maze pattern)',
      'Base': 'Wide star-shaped non-slip base',
      'Colors': 'Pink / Teal / Mint Green / Grey / Black',
      'Suitable For': 'Small to medium dogs and cats',
      'Care': 'Rinse with water or wipe clean',
    },
    wholesaleInfo: {
      moq: '10 pieces (mixed colors accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Zhejiang',
      note: 'FOB tier pricing: $2.20/pc (10-49 pcs), $1.80/pc (50-99 pcs), $1.50/pc (100-499 pcs). Orders of 500+ pcs: contact sales@loyalbondpet.com for custom bulk pricing. Factory-direct from Zhejiang with cross-border export experience. OEM/custom packaging and color customization available.',
    },
  },

];

export const collections = [
  {
    slug: 'home-safety',
    name: 'Home Safety',
    title: 'Home Safety',
    description: 'Transform your home into a safe haven for your senior pet. Orthopedic beds, pet stairs, and lift aids help prevent accidents and support comfortable living for aging companions.',
    priceRange: '$12.99 – $59.99',
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
    priceRange: 'Coming Soon',
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
    priceRange: '$12.99 – $22.99',
    image: '/collections/seasonal.jpg',
    icon: 'seasonal',
    emoji: '❄️'
  }
];

// Cross-sell product recommendations (curated groups)
export const crossSellMap: Record<string, string[]> = {
  // Joint care / mobility group
  'lift-assist-harness': ['hind-leg-support-harness', 'mesh-support-sling', 'anti-slip-dog-socks'],
  'hind-leg-support-harness': ['lift-assist-harness', 'mesh-support-sling', 'anti-slip-dog-socks'],
  'mesh-support-sling': ['lift-assist-harness', 'hind-leg-support-harness', 'anti-slip-dog-socks'],
  'anti-slip-dog-socks': ['lift-assist-harness', 'hind-leg-support-harness', 'foam-dog-stairs'],
  'foam-dog-stairs': ['orthopedic-bolster-dog-bed', 'anti-slip-dog-socks', 'folding-pet-stairs'],
  // Comfort living group
  'snuffle-mat-set': ['orthopedic-bolster-dog-bed', 'maze-slow-feeder-bowl'],
  'orthopedic-bolster-dog-bed': ['snuffle-mat-set', 'foam-dog-stairs', 'pet-gel-cooling-mat'],
  // Feeding group
  'maze-slow-feeder-bowl': ['elevated-slow-feeder-bowl', 'snuffle-mat-set'],
  'elevated-slow-feeder-bowl': ['maze-slow-feeder-bowl', 'snuffle-mat-set'],
  'folding-pet-stairs': ['foam-dog-stairs', 'orthopedic-bolster-dog-bed', 'anti-slip-dog-socks'],
  // Seasonal
  'pet-gel-cooling-mat': ['orthopedic-bolster-dog-bed', 'snowflake-cooling-mat'],
  'snowflake-cooling-mat': ['pet-gel-cooling-mat', 'orthopedic-bolster-dog-bed'],
  // Feeding group
  'anti-choke-slow-feeder-bowl': ['maze-slow-feeder-bowl', 'elevated-slow-feeder-bowl', 'snuffle-mat-set'],
  'maze-slow-feeder-bowl': ['elevated-slow-feeder-bowl', 'anti-choke-slow-feeder-bowl', 'snuffle-mat-set'],
  'elevated-slow-feeder-bowl': ['maze-slow-feeder-bowl', 'anti-choke-slow-feeder-bowl', 'snuffle-mat-set'],
};

export function getRelatedProducts(slug: string): Product[] {
  const crossSlugs = crossSellMap[slug] || [];
  const crossProducts: Product[] = crossSlugs
    .map(s => products.find(p => p.slug === s))
    .filter((p): p is Product => !!p);
  
  // Also include same-collection products (excluding self and already-added cross-sell)
  const crossSet = new Set(crossSlugs);
  crossSet.add(slug);
  const product = products.find(p => p.slug === slug);
  const sameCollection: Product[] = product
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

