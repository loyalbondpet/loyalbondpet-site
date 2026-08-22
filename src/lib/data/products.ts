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
      '/images/products/hind-leg-harness/08-variant.jpg'],
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
      'Quick On/Off — Step-in ring design, no complex threading or multiple buckles'],
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
      '/images/products/snuffle-mat-new/16-walk-at-home.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: [
      'Style 1: Bone-Shaped Cloud Mat',
      'Style 2: Plum Blossom Mat (60cm × 60cm)',
      'Style 3: Rectangular Carrot & Butterfly Mat (80cm × 48cm)'],
    features: [
      'Multi-Zone Foraging Design — Multiple independent treat-hiding areas in one mat',
      'Slow-Feeding Function — Extends mealtime naturally',
      'Low-Intensity Mental Exercise — No running or jumping required',
      'Soft Thick Fleece Fabric — Gentle on paws and comfortable',
      'Anti-Slip Bottom — Raised plastic dot base',
      'Machine Washable — Easy to clean and maintain',
      '3 Style Options — Bone-shaped, Plum Blossom, Rectangular'],
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
      '/images/products/orthopedic-bed/07-size-chart.jpg'],
    rating: 4.8,
    reviewCount: 0,
    badge: 'New Arrival',
    sizeVariants: [
      { label: 'S', dimensions: '60 x 47 x 17 cm', weight: '4.00 kg', price: 39.99 },
      { label: 'M', dimensions: '73 x 57 x 18 cm', weight: '9.00 kg', price: 49.99 },
      { label: 'L', dimensions: '92 x 72 x 19 cm', weight: '8.00 kg', price: 59.99 }],
    colorOptions: [
      { name: 'Dark Gray', hex: '#4A4A4A', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Denim Blue', hex: '#5B7FA5', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Navy Blue', hex: '#1B2A4A', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Olive Green', hex: '#6B7F3A', image: '/images/products/orthopedic-bed/01-main.jpg' },
      { name: 'Peacock Blue', hex: '#006D77', image: '/images/products/orthopedic-bed/06-color-peacock-blue.jpg' },
      { name: 'Yellow', hex: '#E8B931', image: '/images/products/orthopedic-bed/01-main.jpg' }],
    features: [
      'High-density orthopedic foam for balanced weight distribution & everyday support',
      'Low entry access for senior dogs with limited mobility',
      'Surround bolster rim for neck support & wind protection',
      'Dual-sided reversible mattress for all seasons',
      'Zippered removable washable cover',
      'Non-slip base prevents sliding on smooth flooring'],
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
    description: `The LoyalBond Mesh Shoulder Sling is a lightweight support sling designed for dogs with mobility challenges, aging joints, or adjusting to limited mobility.

The sling wraps gently around your dog's belly and lower torso, while the adjustable shoulder straps let you carry part of your dog's weight on your own shoulders — keeping your back upright and reducing strain during walks, stair climbing, or car boarding.

The outer shell is made from durable Oxford fabric that holds its shape under load, while the inner lining uses soft air mesh to promote airflow and keep your dog comfortable during extended use. Reflective strips run along all webbing straps for better visibility during early morning or evening outings.

A padded top handle gives you extra control when you need to lift or steady your dog. The shoulder straps feature smooth-adjusting buckles so you can quickly set the right height for your body and your dog's size.

Available in four colors — Pink, Blue, Navy, and Black — and folds flat into the included storage bag for easy transport.`,
    shortDescription: 'Shoulder-sling support harness with Oxford fabric shell and breathable air mesh lining. Reflective webbing, padded handle, and adjustable straps. Folds into included storage bag. Available in 4 colors.',
    collection: 'Travel & Car',
    collectionSlug: 'travel-car',
    images: [
      '/images/products/mesh-support-sling/01-main.jpg',
      '/images/products/mesh-support-sling/06-scene1.jpg',
      '/images/products/mesh-support-sling/07-scene2.jpg',
      '/images/products/mesh-support-sling/08-scene3.jpg',
      '/images/products/mesh-support-sling/09-size-chart.png',
      '/images/products/mesh-support-sling/10-colors.jpg'],
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
      'Includes Storage Bag — Folds flat for portable storage and travel'],
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
    id: '22',
    slug: 'elevated-slow-feeder-bowl',
    name: '5-Height Adjustable Elevated Dog Bowl with Slow Feeder',
    price: 24.99,
    description: `The LoyalBond 5-Height Adjustable Elevated Dog Bowl grows with your pet from puppyhood through the senior years. With five height settings — 3.3, 6.3, 9.1, 12.2, and 13.6 inches (8.5–34.5 cm) — this dual-bowl feeder adapts to small, medium, and large breeds, promoting a comfortable dining posture that reduces neck strain.

Each set includes two stainless steel bowls: one maze-pattern slow feeder that encourages paced eating for better digestive comfort, and one open bowl for water or regular food. Both bowls lift out effortlessly for quick cleaning.

The ABS frame features a foldable, trapezoidal design with non-slip pads that keep the feeder stable during meals while protecting floors. The entire unit weighs 1.25 kg and folds flat for storage or travel. Available in Black or Grey.`,
    shortDescription: '5-height adjustable elevated dog bowl (3.3–13.6 in) with dual stainless steel bowls — one slow feeder maze bowl and one water/food bowl. Foldable ABS frame, non-slip base, easy-clean removable bowls. Black or Grey.',
    collection: 'Feeding Aids',
    collectionSlug: 'feeding-aids',
    images: [
      '/images/products/elevated-slow-feeder/01-main.jpg',
      '/images/products/elevated-slow-feeder/02-comfort.jpg',
      '/images/products/elevated-slow-feeder/03-detachable.jpg',
      '/images/products/elevated-slow-feeder/04-heights.jpg',
      '/images/products/elevated-slow-feeder/05-specs.jpg',
      '/images/products/elevated-slow-feeder/06-colors.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['5 height settings: 3.3 / 6.3 / 9.1 / 12.2 / 13.6 in (8.5 / 16 / 23 / 31 / 34.5 cm)'],
    colors: ['Black', 'Grey'],
    features: [
      '5 Adjustable Heights — 8.5 to 34.5 cm, suitable for small to large breeds at every life stage',
      'Dual Stainless Steel Bowls — One maze slow feeder + one open bowl for water or food',
      'Maze Slow-Feed Pattern — Encourages paced eating for better digestive comfort',
      'Foldable ABS Frame — Trapezoidal design folds flat for storage and travel',
      'Removable & Easy-Clean Bowls — Lift out for quick washing; hygienic stainless steel',
      'Non-Slip Stable Base — Padded feet minimize sliding and protect floors'],
    specifications: {
      'Material': 'ABS frame + stainless steel bowls',
      'Height Settings': '8.5 / 16 / 23 / 31 / 34.5 cm (3.3 / 6.3 / 9.1 / 12.2 / 13.6 in)',
      'Product Dimensions': '43 × 24 × 24.5 cm (17 × 9.4 × 9.6 in, max height)',
      'Weight': '1,250 g (2.76 lb)',
      'Bowls': '2 stainless steel (1 slow feeder + 1 open bowl)',
      'Colors': 'Black / Grey',
      'Assembly': 'No tools required; foldable design',
      'Care': 'Bowls are removable and washable; wipe frame clean',
    },
    wholesaleInfo: {
      moq: '2 pieces',
      leadTime: '7 days for sample order; 15–20 days for bulk order',
      payment: 'PayPal / T/T (XTransfer)',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Yongkang Pailide Industry & Trade Co., Ltd. (永康派力德, Model PB006, Zhejiang Jinhua). Purchase price: ¥36/piece. Custom labeling (+¥0.5/pc), carton marking (+¥0.3/pc), English manual (+¥0.1/pc, MOQ 1000). 12 pcs/carton, carton size 46×61×48 cm. Export-experienced; ships to eBay, Amazon, AliExpress, Lazada, and independent sites worldwide. Contact sales@loyalbondpet.com for volume pricing.',
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
      '/images/products/folding-pet-stairs/06-lifestyle.jpg'],
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
      'No Assembly Required — Unfold and ready to use'],
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
    '/images/products/snowflake-cooling-mat/06-construction.jpg',
  ],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizeVariants: [
      { label: 'S', dimensions: '40 x 30 cm', weight: '0.85 kg', price: 12.99 },
      { label: 'M', dimensions: '50 x 40 cm', weight: '1.40 kg', price: 17.99 },
      { label: 'L', dimensions: '60 x 50 cm', weight: '2.20 kg', price: 22.99 }],
    features: [
      'Instant Self-Cooling — Pressure-activated core absorbs body heat on contact',
      'No Water or Electricity — No filling, no charging, no refrigeration needed',
      'Soft & Highly Elastic — Premium surface that stays comfortable and won\'t crack',
      'Scratch & Bite Resistant — Durable material built for everyday pet use',
      'Waterproof Backing — Protects floors, sofas, and car seats from leaks',
      'Easy to Clean — Wipe or rinse, dries fast, no deformation after washing',
      'Folds Flat for Storage — Lightweight and portable for home or travel',
      'Multi-Purpose — Use on floors, sofas, in crates, car seats, and patios'],
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
      '/images/products/anti-choke-slow-feeder-bowl/06-dimensions.jpg'],
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
      'For Dogs & Cats — One size fits small to medium pets'],
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
  {
    id: '26',
    slug: 'waterproof-silicone-dog-rain-boots',
    name: 'Waterproof Silicone Dog Rain Boots',
    price: 12.99,
    compareAtPrice: 16.99,
    priceRange: '$12.99 – $16.99',
    description: `Keep your dog's paws clean, dry, and protected in any weather with the LoyalBond Waterproof Silicone Rain Boots.

Made from premium food-grade silicone, these boots form a flexible yet durable waterproof barrier that keeps mud, rain, snow, slush, and puddles away from your dog's paws. The thick, non-slip sole has a textured paw-print tread that grips wet pavement, tile, wood floors, and slippery surfaces, helping prevent slips and falls during daily walks or outdoor adventures.

Each set includes four boots in a matching color with adjustable hook-and-loop straps at the top opening. Simply slide the boot over the paw and fasten the strap for a snug, secure fit that stays on even during active walking, running, and playing. The soft silicone material flexes naturally with your dog's movement, making the boots far more comfortable than rigid plastic alternatives.

From tiny teacup breeds to medium and large dogs, five sizes are available based on your pet's body weight. Choose from six vibrant colors — Dark Blue, Light Blue, Red, Orange, Light Pink, and Light Green — to match your dog's style. After a muddy walk, simply rinse the boots under running water and they're ready for the next outing.

Ideal for rainy walks, snowy days, beach trips, sensitive paw protection, and keeping floors clean after outdoor play. Suitable for small to large dogs.`,
    shortDescription: 'Waterproof silicone dog rain boots with non-slip sole and adjustable straps. 5 sizes (XS-XL), 6 colors. Set of 4. Keeps paws dry, clean, and protected in rain, snow, and mud.',
    collection: 'Travel & Car',
    collectionSlug: 'travel-car',
    images: [
      '/images/products/waterproof-silicone-dog-rain-boots/01-main.jpg',
      '/images/products/waterproof-silicone-dog-rain-boots/02-waterproof.jpg',
      '/images/products/waterproof-silicone-dog-rain-boots/03-orange.jpg',
      '/images/products/waterproof-silicone-dog-rain-boots/04-pink.jpg',
      '/images/products/waterproof-silicone-dog-rain-boots/05-green.jpg',
      '/images/products/waterproof-silicone-dog-rain-boots/06-features.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Dark Blue', 'Light Blue', 'Red', 'Orange', 'Light Pink', 'Light Green'],
    sizeVariants: [
      { label: 'XS', dimensions: 'Fits 1.5–5.5 kg (3–11 lb)', weight: '0.20 kg', price: 12.99 },
      { label: 'S', dimensions: 'Fits 5–7.5 kg (10–15 lb)', weight: '0.20 kg', price: 13.99 },
      { label: 'M', dimensions: 'Fits 7.5–11.5 kg (15–23 lb)', weight: '0.20 kg', price: 14.99 },
      { label: 'L', dimensions: 'Fits 11.5–18 kg (23–36 lb)', weight: '0.20 kg', price: 15.99 },
      { label: 'XL', dimensions: 'Fits 18–25 kg (36–50 lb)', weight: '0.20 kg', price: 16.99 }],
    features: [
      '100% Waterproof Silicone — Premium food-grade silicone keeps paws dry in rain, snow, and mud',
      'Non-Slip Paw-Print Sole — Textured tread grips wet, slippery surfaces for safe walking',
      'Adjustable Hook-and-Loop Strap — Snug, secure fit that stays on during active play',
      '5 Sizes (XS–XL) — Fits dogs from 1.5 to 25 kg (3 to 50 lb)',
      '6 Vibrant Colors — Dark Blue, Light Blue, Red, Orange, Light Pink, Light Green',
      'Set of 4 Boots — One set covers all four paws',
      'Soft & Flexible — Comfortable natural movement, more flexible than rigid plastic boots',
      'Easy to Clean — Simply rinse under water after muddy walks',
      'Lightweight — Only 200 g per set (all sizes)',
      'Multi-Season Use — Rain, snow, beach trips, sensitive paw protection, and floor protection'],
    specifications: {
      'Material': 'Premium food-grade silicone',
      'Sizes': 'XS / S / M / L / XL',
      'XS': 'Fits 1.5–5.5 kg (3–11 lb)',
      'S': 'Fits 5–7.5 kg (10–15 lb)',
      'M': 'Fits 7.5–11.5 kg (15–23 lb)',
      'L': 'Fits 11.5–18 kg (23–36 lb)',
      'XL': 'Fits 18–25 kg (36–50 lb)',
      'Colors': 'Dark Blue / Light Blue / Red / Orange / Light Pink / Light Green',
      'Set Includes': '4 boots per set',
      'Weight per Set': '200 g (all sizes)',
      'Closure': 'Adjustable hook-and-loop (Velcro) strap',
      'Sole': 'Non-slip paw-print textured tread',
      'Suitable For': 'Small to large dogs',
      'Care': 'Rinse with water; air dry',
    },
    wholesaleInfo: {
      moq: '10 sets (mixed sizes and colors accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Shenzhen/Guangdong',
      note: 'FOB tier pricing: XS $1.80/set, S $1.95/set, M $2.10/set, L $2.25/set, XL $2.40/set (10-49 sets); 10% off for 50-99 sets; 15% off for 100-499 sets. Orders of 500+ sets: contact sales@loyalbondpet.com for custom bulk pricing. Factory-direct from Dongguan, Guangdong. Cross-border export ready. OEM/custom packaging and custom colors available.',
    },
  }];

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
  'hind-leg-support-harness': ['mesh-support-sling', 'orthopedic-bolster-dog-bed'],
  'mesh-support-sling': ['hind-leg-support-harness', 'orthopedic-bolster-dog-bed'],
  // Comfort living group
  'snuffle-mat-set': ['orthopedic-bolster-dog-bed'],
  'orthopedic-bolster-dog-bed': ['snuffle-mat-set', 'folding-pet-stairs'],
  // Feeding group
  'elevated-slow-feeder-bowl': ['anti-choke-slow-feeder-bowl', 'snuffle-mat-set'],
  'folding-pet-stairs': ['orthopedic-bolster-dog-bed', 'snuffle-mat-set'],
  // Seasonal
  'snowflake-cooling-mat': ['orthopedic-bolster-dog-bed'],
  'anti-choke-slow-feeder-bowl': ['elevated-slow-feeder-bowl', 'snuffle-mat-set'],
  // Outdoor / travel group
  'waterproof-silicone-dog-rain-boots': ['orthopedic-bolster-dog-bed', 'snuffle-mat-set', 'folding-pet-stairs'],
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

