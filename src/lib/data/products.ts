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
    shortDescription: 'Ultra-lightweight 48g hind leg support sling with soft coral fleece lining and adjustable straps. One-size fits 40–70cm. Supports rear mobility. and Black.',
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
    name: 'Flower Snuffle Mat for Dogs',
    bestSeller: true,
    price: 12.99,
    compareAtPrice: 19.99,
    priceRange: '$12.99 - $16.99',
    description: `The LoyalBond Flower Snuffle Mat turns mealtime into a rewarding foraging adventure. Designed in a playful flower shape with layered petals, this interactive mat encourages your dog's natural sniffing instincts while slowing down fast eaters.

Hide kibble or treats among the soft fleece petals and watch your dog sniff, nudge, and explore — providing valuable mental stimulation that reduces boredom, anxiety, and destructive behavior. Just 10 minutes of sniffing can equal the mental exercise of a 30-minute walk.

Available in two sizes and five vibrant colors, each mat features a built-in squeaker for extra engagement, a non-slip bottom to stay securely in place, and durable stitching that withstands daily use. The soft fleece fabric is gentle on noses and paws, and the entire mat is machine washable for easy cleaning.

Perfect for puppies, adult dogs, and seniors alike — low-impact sniffing requires no running or jumping, making it ideal for older or mobility-limited pets.`,
    shortDescription: 'Flower-shaped interactive snuffle mat with treat-hiding petals. Built-in squeaker, non-slip bottom, machine washable. 2 sizes, 5 colors. Mental enrichment for all dogs.',
    collection: 'Feeding Aids',
    collectionSlug: 'feeding-aids',
    images: [
      '/products/snuffle-mat-01.jpg',
      '/products/snuffle-mat-02.jpg',
      '/products/snuffle-mat-03.jpg',
      '/products/snuffle-mat-04.jpg',
      '/products/snuffle-mat-05.jpg',
      '/products/snuffle-mat-06.jpg',
      '/products/snuffle-mat-07.jpg',
      '/products/snuffle-mat-08.jpg',
      '/products/snuffle-mat-09.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    colors: ['Red', 'Yellow-Green', 'Yellow', 'Orange-Green', 'Green'],
    sizes: ['Small', 'Large'],
    sizeVariants: [
      { label: 'Small (Red / Yellow-Green)', dimensions: '300g', weight: '0.30 kg', price: 12.99 },
      { label: 'Large (Yellow / Orange-Green / Green)', dimensions: '440g', weight: '0.45 kg', price: 16.99 }],
    features: [
      'Flower-Shaped Design — Layered fleece petals create multiple treat-hiding zones',
      'Built-In Squeaker — Adds auditory stimulation and extends playtime',
      'Slow Feeding — Encourages natural foraging and reduces gulping',
      'Mental Enrichment — 10 min sniffing ≈ 30 min walk in mental exercise',
      'Non-Slip Bottom — Raised plastic dots keep the mat securely in place',
      'Machine Washable — Easy to clean, maintains shape after repeated washes',
      '2 Sizes & 5 Colors — Small (Red, Yellow-Green) and Large (Yellow, Orange-Green, Green)',
      'All Breeds — Low-impact activity suitable for puppies, adults, and seniors'],
    specifications: {
      'Material': 'Soft polar fleece with non-slip plastic dot base',
      'Small Weight': '300g (Red, Yellow-Green)',
      'Large Weight': '440g (Yellow, Orange-Green, Green)',
      'Feature': 'Built-in squeaker',
      'Washable': 'Yes, machine washable',
      'Anti-Slip': 'Yes, raised plastic dot bottom',
      'Colors': 'Red, Yellow-Green, Yellow, Orange-Green, Green',
      'MOQ': '1 piece',
      'Carton': '40 pieces/carton',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '1 piece',
      leadTime: '3-7 days for stock items',
      payment: 'T/T, PayPal',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Yiwu Senye Pet Products Co., Ltd. (义乌森烨宠物用品有限公司). 1688: https://detail.1688.com/offer/869532348826.html. Cross-border export qualified. 40 pcs/carton. Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '11',
    slug: 'orthopedic-bolster-dog-bed',
    name: 'Gel Memory Foam Dog Sofa Bed',
    bestSeller: true,
    price: 39.99,
    compareAtPrice: 54.99,
    priceRange: '$39.99 - $89.99',
    description: `The LoyalBond Gel Memory Foam Dog Sofa Bed delivers premium orthopedic comfort for dogs of all sizes and ages.

The cooling gel-infused memory foam core conforms to your dog's body, relieving pressure points on joints and muscles while regulating temperature for restful sleep.

A three-sided raised bolster rim provides head, neck and spine support, giving your dog a secure, nest-like feeling. The low-front entry design makes it easy for senior dogs, puppies and pets with mobility issues to step in without jumping.

The soft plush sleeping surface is gentle on paws and noses, while the durable, scratch-resistant exterior stands up to daily use. A non-slip dotted bottom keeps the bed firmly in place on tile, hardwood and vinyl floors.

The zippered outer cover is fully removable and machine washable, making cleanup of fur, dirt and accidents quick and hassle-free.

Available in four neutral colors — Light Gray, Dark Gray, Khaki and Beige — to complement any home decor. Four sizes from S to XL fit small breeds through extra-large dogs.`,
    shortDescription: 'Gel memory foam dog sofa bed with cooling gel layer, 3-sided bolster support, removable washable cover and anti-slip bottom. 4 sizes, 4 colors.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/products/dog-bed-01.jpg',
      '/products/dog-bed-02.jpg',
      '/products/dog-bed-03.jpg',
      '/products/dog-bed-04.jpg',
      '/products/dog-bed-05.jpg',
      '/products/dog-bed-06.jpg',
      '/products/dog-bed-07.jpg',
      '/products/dog-bed-08.jpg'],
    rating: 4.8,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S', 'M', 'L', 'XL'],
    sizeVariants: [
      { label: 'S', dimensions: '50 x 40 x 12 cm', weight: '1.00 kg', price: 39.99 },
      { label: 'M', dimensions: '75 x 50 x 16 cm', weight: '2.10 kg', price: 54.99 },
      { label: 'L', dimensions: '90 x 65 x 16 cm', weight: '2.90 kg', price: 69.99 },
      { label: 'XL', dimensions: '105 x 75 x 20 cm', weight: '4.75 kg', price: 89.99 }],
    colorOptions: [
      { name: 'Light Gray', hex: '#B8B8B8', image: '/products/dog-bed-01.jpg' },
      { name: 'Dark Gray', hex: '#5A5A5A', image: '/products/dog-bed-01.jpg' },
      { name: 'Khaki', hex: '#C3B091', image: '/products/dog-bed-01.jpg' },
      { name: 'Beige', hex: '#E8DCC8', image: '/products/dog-bed-01.jpg' }],
    features: [
      'Gel-Infused Memory Foam — Cooling comfort that relieves joint pressure',
      '3-Sided Bolster Rim — Head, neck and spine support with a secure nest feel',
      'Low-Front Entry — Easy access for seniors, puppies and mobility-impaired dogs',
      'Removable Washable Cover — Zippered design for quick machine washing',
      'Non-Slip Dotted Bottom — Stays put on tile, hardwood and vinyl floors',
      'Durable Scratch-Resistant Exterior — Built for long-term daily use',
      '4 Sizes & 4 Colors — S to XL in Light Gray, Dark Gray, Khaki and Beige'],
    specifications: {
      'Material': 'Gel memory foam core + plush fleece top + oxford fabric sides',
      'Colors': 'Light Gray, Dark Gray, Khaki, Beige',
      'Sizes': 'S, M, L, XL',
      'S Dimensions': '50 x 40 x 12 cm (1.0 kg)',
      'M Dimensions': '75 x 50 x 16 cm (2.1 kg)',
      'L Dimensions': '90 x 65 x 16 cm (2.9 kg)',
      'XL Dimensions': '105 x 75 x 20 cm (4.75 kg)',
      'Cover': 'Fully removable, zippered, machine washable',
      'Base': 'Anti-slip dotted fabric bottom',
      'MOQ': '1 piece',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '1 piece',
      leadTime: '3-7 days for stock items',
      payment: 'T/T, PayPal',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Dongyang Baiyun Kuangchou Pet Products Factory (东阳市白云狂丑宠物用品厂), Zhejiang. 11-year factory, 99.8% rating. S: 16 pcs/carton (53x40x44cm, 16.9kg); M: 10 pcs/carton (53x40x37cm, 21.9kg); L: 8 pcs/carton (53x40x37cm, 24.1kg); XL: 6 pcs/carton (53x40x37cm, 29.4kg). Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '6',
    slug: 'mesh-support-sling',
    name: 'Fleece-Lined Dog Support Harness',
    bestSeller: false,
    price: 15.99,
    compareAtPrice: 24.99,
    priceRange: '$15.99 - $21.99',
    description: `The LoyalBond Fleece-Lined Dog Support Harness provides gentle, reliable assistance for senior, injured, or post-surgery dogs. Whether your dog needs help climbing stairs, getting into vehicles, or going for walks, this harness distributes weight evenly across the chest and belly for comfortable lifting.

The soft coral fleece lining keeps your dog warm and protects sensitive skin, while the adjustable webbing strap with a quick-release buckle ensures a secure, custom fit. The wide strap design reduces pressure on both you and your pet during use.

Lightweight and portable, the harness folds flat for easy storage or travel. Durable stitching and reinforced stress points ensure long-lasting use, even with daily support needs. The neutral gray color suits all breeds and coats.

Available in four sizes to fit small, medium, large, and extra-large dogs — from puppies to giant breeds. Each size is clearly labeled with length and width measurements for accurate sizing.`,
    shortDescription: 'Fleece-lined dog support harness for senior, injured or post-surgery pets. Adjustable buckle, soft coral fleece, 4 sizes. Helps with stairs, walking and recovery.',
    collection: 'Support & Mobility',
    collectionSlug: 'support-mobility',
    images: [
      '/products/support-sling-01.jpg',
      '/products/support-sling-02.jpg',
      '/products/support-sling-03.jpg',
      '/products/support-sling-04.jpg',
      '/products/support-sling-05.jpg',
      '/products/support-sling-06.jpg',
      '/products/support-sling-07.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S', 'M', 'L', 'XL'],
    sizeVariants: [
      { label: 'S', dimensions: '54 x 14.5 cm', weight: '0.25 kg', price: 15.99 },
      { label: 'M', dimensions: '65 x 17 cm', weight: '0.30 kg', price: 17.99 },
      { label: 'L', dimensions: '70 x 20 cm', weight: '0.35 kg', price: 19.99 },
      { label: 'XL', dimensions: '80 x 24 cm', weight: '0.40 kg', price: 21.99 }],
    features: [
      'Fleece-Lined Comfort — Soft coral fleece lining keeps dogs warm and protects skin',
      'Adjustable Fit — Quick-release buckle and webbing strap for a secure, custom fit',
      'Even Weight Distribution — Wide strap reduces pressure on pet and owner',
      'Multipurpose Support — Ideal for stairs, vehicles, walking, and post-surgery recovery',
      'Durable Construction — Reinforced stitching at stress points for long-lasting use',
      'Portable & Lightweight — Folds flat for easy storage and travel',
      '4 Sizes Available — S to XL fits small through extra-large breeds',
      'Neutral Gray — Complements all coat colors and breeds'],
    specifications: {
      'Material': 'Coral fleece with polypropylene webbing strap',
      'Color': 'Gray',
      'Sizes': 'S, M, L, XL',
      'S Dimensions': '54 x 14.5 cm',
      'M Dimensions': '65 x 17 cm',
      'L Dimensions': '70 x 20 cm',
      'XL Dimensions': '80 x 24 cm',
      'Buckle': 'Quick-release plastic buckle',
      'Washable': 'Yes, hand wash recommended',
      'MOQ': '1 piece',
      'Carton': '100 pieces/carton',
      'Item No.': 'Y-24',
      'Shipping': 'FOB Ningbo',
    },
    wholesaleInfo: {
      moq: '1 piece',
      leadTime: '3-7 days for stock items',
      payment: 'T/T, PayPal',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Pingyang Changbao Crafts Factory (平阳县常宝工艺品厂), Wenzhou, Zhejiang. Item Y-24. 100 pcs/carton. Cross-border export qualified. Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '22',
    slug: 'elevated-slow-feeder-bowl',
    name: '5-Height Adjustable Elevated Dog Bowl with Slow Feeder',
    price: 22.99,
    description: `The LoyalBond 5-Height Adjustable Elevated Dog Bowl grows with your pet from puppyhood through the senior years. With five height settings — 3.3, 6.3, 9.1, 12.2, and 13.6 inches (8.5–34.5 cm) — this dual-bowl feeder adapts to small, medium, and large breeds, promoting a comfortable dining posture that reduces neck strain.

Each set includes two stainless steel bowls: one maze-pattern slow feeder that encourages paced eating for better digestive comfort, and one open bowl for water or regular food. Both bowls lift out effortlessly for quick cleaning.

The ABS frame features a foldable, trapezoidal design with non-slip pads that keep the feeder stable during meals while protecting floors. The entire unit weighs 1.25 kg and folds flat for storage or travel. Available in Black or Grey.`,
    shortDescription: '5-height adjustable elevated dog bowl with dual stainless steel bowls — slow feeder maze and water bowl. Foldable frame, non-slip base, easy clean. Black or Grey.',
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
      'Weight': '1,100 g (standard) / 1,200 g (triple-bowl) (2.4–2.6 lb)',
      'Bowls': '2 stainless steel (1 slow feeder + 1 open bowl)',
      'Colors': 'Black / Grey',
      'Assembly': 'No tools required; foldable design',
      'Care': 'Bowls are removable and washable; wipe frame clean',
    },
    wholesaleInfo: {
      moq: '1 piece',
      leadTime: '7 days for sample order; 15–20 days for bulk order',
      payment: 'PayPal / T/T (XTransfer)',
      shipping: 'FOB Ningbo',
      note: 'Supplier: Yongkang Pailide Hardware Manufacturing (永康市派力德五金制造厂, Model PB006, Yongkang, Zhejiang). 1688: detail.1688.com/offer/916659928825.html. MOQ 1 pc. 6 variants: Grey/Black × (dual stainless bowls / stainless + slow feeder / dual + slow feeder). Purchase price ¥36–39 + ¥5 domestic shipping = ¥41–44/pc. 14 pcs/carton, packed 44×24×8 cm, 1.1–1.2 kg. Export-experienced; ships to Amazon, AliExpress, eBay, Lazada, and independent sites. Contact sales@loyalbondpet.com for volume pricing.',
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
    shortDescription: '3-tier folding pet stairs with built-in storage for small dogs and cats. Supports climbing up to 32cm, anti-slip steps, folds flat for storage. for storage, removable washable cover.',
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
      moq: '1 piece',
      leadTime: '1-100 pieces: 24h / 101-500 pieces: 72h / 500+ pieces: ~25 days',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Zhejiang',
      note: 'Supplier: Jinhua Zuona Home Goods (金华佐纳家居, brand: 纳蒂/Nadi, Jinhua, Zhejiang). 1688: detail.1688.com/offer/917874173673.html. MOQ 1 pc. Purchase price ¥50 + ¥10 domestic shipping = ¥60/pc. Cross-border export specialist; primary market North America; sells on Amazon. Contact sales@loyalbondpet.com for volume pricing.',
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
    shortDescription: 'Self-cooling gel pet mat with pressure-activated cooling — no water or electricity needed. Scratch-resistant, waterproof, folds flat. 3 sizes.dium dogs.',
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
      note: 'Supplier: Dongyang Wenda Pet Products Co., Ltd. (东阳文达宠物用品有限公司, Dongyang, Zhejiang). 1688: detail.1688.com/offer/1043630481594.html. MOQ 1 pc. Purchase price: S ¥3.8 / M ¥7.3 / L ¥10.7 + ¥1.8 domestic shipping. Snowflake pattern only. ~20 pcs/carton. Cross-border export ready. Contact sales@loyalbondpet.com for volume pricing.',
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
Available in five modern colors to match any home décor: Pink, Black, Grey, Blue, and Green. Suitable for both dogs and cats of small to medium size.`,
    shortDescription: 'Anti-choke slow feeder bowl extends mealtime from 5 to 20 minutes. BPA-free, non-slip base, easy clean. 5 colors for dogs and cats.',
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
    colors: ['Pink', 'Black', 'Grey', 'Blue', 'Green'],
    features: [
      'Anti-Choke Maze Design — Central dome + fin barriers + nodules slow eating by ~4x',
      'Extends Mealtime to ~20 Minutes — From about 5 minutes in a regular bowl',
      'Supports Healthy Digestion — Reduces gulping, bloat, regurgitation and overeating',
      'Wide Mouth & Elevated Rim — Comfortable access, reduced neck strain',
      'Non-Slip Star Base — Wide five-point base stays put on smooth floors',
      'BPA-Free Food-Safe Plastic — Durable, smooth and easy to rinse clean',
      '5 Color Options — Pink, Black, Grey, Blue and Green',
      'For Dogs & Cats — One size fits small to medium pets'],
    specifications: {
      'Material': 'BPA-free food-safe plastic',
      'Top Diameter': '18 cm (7.1 in)',
      'Bottom Diameter': '22.5 cm (8.9 in)',
      'Height': '5 cm (2.0 in)',
      'Weight': '145 g (5.1 oz)',
      'Bowl Depth': '4.5 cm (1.8 in)',
      'Design': 'Central dome + fin barriers + rounded nodules (maze pattern)',
      'Base': 'Wide star-shaped non-slip base',
      'Colors': 'Pink / Black / Grey / Blue / Green',
      'Suitable For': 'Small to medium dogs and cats',
      'Care': 'Rinse with water or wipe clean',
    },
    wholesaleInfo: {
      moq: '1 piece (mixed colors accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Zhejiang',
      note: 'Supplier: Yongkang Pailide Hardware Manufacturing (永康市派力德五金制造厂, Yongkang, Zhejiang). 1688: detail.1688.com/offer/841032598821.html. MOQ 1 pc. Purchase price ¥3.30 + ¥3 domestic shipping = ¥6.30/pc. 5 colors: Pink/Black/Grey/Blue/Green. 60 pcs/carton, 22.5×18×5 cm, 145 g. Sells on Amazon, Wish, AliExpress, Lazada, independent sites; ships to Europe, South America, SE Asia, North America, NE Asia, Middle East. Contact sales@loyalbondpet.com for volume pricing.',
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
    shortDescription: 'Waterproof silicone dog rain boots with non-slip sole and adjustable straps. 5 sizes, 6 colors. Set of 4. Keeps paws dry in rain, snow, and mud.',
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
      { label: 'S', dimensions: 'Fits 5–7.5 kg (10–15 lb)', weight: '0.25 kg', price: 13.99 },
      { label: 'M', dimensions: 'Fits 7.5–11.5 kg (15–23 lb)', weight: '0.28 kg', price: 14.99 },
      { label: 'L', dimensions: 'Fits 11.5–18 kg (23–36 lb)', weight: '0.30 kg', price: 15.99 },
      { label: 'XL', dimensions: 'Fits 18–25 kg (36–50 lb)', weight: '0.32 kg', price: 16.99 }],
    features: [
      '100% Waterproof Silicone — Premium food-grade silicone keeps paws dry in rain, snow, and mud',
      'Non-Slip Paw-Print Sole — Textured tread grips wet, slippery surfaces for safe walking',
      'Adjustable Hook-and-Loop Strap — Snug, secure fit that stays on during active play',
      '5 Sizes (XS–XL) — Fits dogs from 1.5 to 25 kg (3 to 50 lb)',
      '6 Vibrant Colors — Dark Blue, Light Blue, Red, Orange, Light Pink, Light Green',
      'Set of 4 Boots — One set covers all four paws',
      'Soft & Flexible — Comfortable natural movement, more flexible than rigid plastic boots',
      'Easy to Clean — Simply rinse under water after muddy walks',
      'Lightweight — Only 200–320 g per set (varies by size)',
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
      'Weight per Set': 'XS 200 g / S 250 g / M 280 g / L 300 g / XL 320 g',
      'Closure': 'Adjustable hook-and-loop (Velcro) strap',
      'Sole': 'Non-slip paw-print textured tread',
      'Suitable For': 'Small to large dogs',
      'Care': 'Rinse with water; air dry',
    },
    wholesaleInfo: {
      moq: '1 set (mixed sizes and colors accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Dongguan/Guangdong',
      note: 'Supplier: Dongguan Wenfeng Silicone Products Co., Ltd. (东莞市文锋硅胶制品有限公司, Dongguan, Guangdong). 1688: detail.1688.com/offer/1046516354296.html. MOQ 1 set (4 boots). 6 colors × 5 sizes. Purchase price XS ¥12 / S ¥13 / M ¥14 / L ¥15 / XL ¥16 + ¥5 domestic shipping. Weight-based shipping only. Cross-border export ready. Contact sales@loyalbondpet.com for volume pricing.',
    },
    },
  {
    id: '27',
    slug: 'pet-paw-cleaner-cup',
    name: 'Pet Paw Cleaner Cup',
    price: 9.99,
    compareAtPrice: 14.99,
    priceRange: '$9.99 - $12.99',
    description: `Keep your floors clean and your dog's paws healthy with the LoyalBond Pet Paw Cleaner Cup — the fast, mess-free way to wash muddy, dirty paws after every walk.

Simply add a little water, insert your dog's paw, and gently twist the cup. Soft silicone bristles line the inside, spinning 360 degrees to loosen and lift dirt, mud, sand, and debris from between paw pads and around nails — no bathtub, no towels, no struggle.

The inner silicone brush removes completely from the durable PP plastic shell, making it quick and easy to rinse clean after each use. A snug-fit snap lid keeps water contained and prevents spills, while a built-in hang hole lets you air-dry and store it neatly by the door or in the car.

Lightweight and portable, the Paw Cleaner Cup is perfect for home entryways, travel, camping, beach trips, and post-walk cleanup. It's also gentle enough for cats and small pets who need occasional paw cleaning.

Two sizes are available to fit your pet — Small for toy and small breeds, Medium for small to medium dogs. Available in Blue and Green.`,
    shortDescription: 'Silicone paw cleaner cup with 360° soft bristles. Add water, twist, rinse — clean paws in seconds. 2 sizes, removable & easy to clean.',
    collection: 'Grooming & Bath',
    collectionSlug: 'grooming-bath',
    images: [
      '/products/paw-cleaner-01-hero.jpg',
      '/products/paw-cleaner-02-painpoints.jpg',
      '/products/paw-cleaner-03-details.jpg',
      '/products/paw-cleaner-04-features.jpg',
      '/products/paw-cleaner-05-materials.jpg',
      '/products/paw-cleaner-06-specs.jpg',
      '/products/paw-cleaner-07-colors.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['S', 'M'],
    colors: ['Blue', 'Green'],
    sizeVariants: [
      { label: 'S', dimensions: 'Small breeds, cats & puppies | 80 x 122 mm', weight: '200 g', price: 9.99 },
      { label: 'M', dimensions: 'Small to medium dogs | 94 x 155 mm', weight: '300 g', price: 12.99 }],
    features: [
      '360° Silicone Bristles — Soft, flexible bristles gently scrub every angle of the paw pad',
      'Just Add Water & Twist — No soap needed; a quick twist lifts dirt in seconds',
      'Removable Inner Brush — Detaches from the PP shell for easy rinsing and cleaning',
      'Snap-Fit Lid — Secure lid prevents spills and keeps water contained during use',
      'Built-In Hang Hole — Air-dry and store neatly by the door or in your car',
      '2 Sizes — Small for toy breeds, cats & puppies; Medium for small to medium dogs',
      '2 Colors — Choose Blue or Green',
      'Portable & Lightweight — Only 200 g (S) / 300 g (M); great for home, travel, and outdoor trips',
      'Multi-Pet Use — Gentle enough for dogs, cats, and small pets',
      'Durable Materials — Made from food-grade silicone bristles and sturdy PP plastic'],
    specifications: {
      'Material': 'Food-grade silicone bristles + PP plastic shell',
      'Sizes': 'S / M',
      'Small': 'Ø 80 x 122 mm | 200 g | For small breeds, cats & puppies',
      'Medium': 'Ø 94 x 155 mm | 300 g | For small to medium dogs',
      'Colors': 'Blue / Green',
      'Bristle Type': '360° soft silicone nubs',
      'Lid': 'Snap-fit, removable',
      'Cleaning': 'Remove inner silicone; rinse with water; air dry',
      'Suitable For': 'Dogs, cats, and small pets',
      'Weight (S)': '200 g',
      'Weight (M)': '300 g',
    },
    wholesaleInfo: {
      moq: '1 piece (mixed sizes and colors accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Shanghai',
      note: 'Supplier: Pingyang Changbao Crafts Factory (平阳县常宝工艺品厂, Wenzhou, Zhejiang — same factory as id 2 & 6). 1688: detail.1688.com/offer/1048466218870.html. MOQ 1 pc. Purchase price S ¥5.50 / M ¥7.50 + ¥5 domestic shipping. 2 colors: Blue/Green. 60 pcs/carton. Labeling +¥0.2/pc (MOQ 10). Cross-border export ready. Contact sales@loyalbondpet.com for volume pricing.',
    },
  },
  {
    id: '28',
    slug: 'inflatable-dog-recovery-collar',
    name: 'Inflatable Dog Recovery Collar',
    price: 14.99,
    compareAtPrice: 24.99,
    priceRange: '$14.99 - $19.99',
    description: `The LoyalBond Inflatable Dog Recovery Collar gives your dog a comfortable, stress-free alternative to the traditional hard plastic cone after surgery, injury, or skin treatment.

Unlike rigid Elizabethan collars that block vision, bump into furniture, and cause anxiety, our inflatable collar uses a soft PVC inner tube wrapped in a plush short-pile cover. It gently prevents your dog from reaching wounds, stitches, hot spots, and rashes on the body, legs, and paws — while still allowing them to eat, drink, sleep, and move around naturally.

The adjustable hook-and-loop strap makes it easy to put on and take off, and lets you fine-tune the fit to your dog's neck size. When deflated, the collar folds completely flat for compact storage and ultra-low shipping costs — perfect for travel, vet visits, or keeping a spare on hand.

The zippered plush cover is removable and washable, so it stays fresh through extended recovery periods. Available in six sizes from XS to XL to fit toy breeds through giant breeds, and in two colors: Gray and Blue.`,
    shortDescription: 'Soft inflatable recovery collar — comfortable alternative to the cone. Prevents licking & biting wounds while allowing eating, drinking & sleeping. 6 sizes, 2 colors.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/products/inflatable-collar-main.jpg',
      '/products/inflatable-collar-gallery-1.jpg',
      '/products/inflatable-collar-gallery-2.jpg',
      '/products/inflatable-collar-gallery-3.jpg',
      '/products/inflatable-collar-gallery-4.jpg',
      '/products/inflatable-collar-detail-1-soft.jpg',
      '/products/inflatable-collar-detail-2-features.jpg',
      '/products/inflatable-collar-detail-3-adjustable.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['XS', 'S', 'M', 'M+', 'L', 'XL'],
    colors: ['Gray', 'Blue'],
    sizeVariants: [
      { label: 'XS', dimensions: 'Neck 12-20 cm (4.7-7.9 in)', weight: '64 g', price: 14.99 },
      { label: 'S', dimensions: 'Neck 18-30 cm (7.1-11.8 in)', weight: '95 g', price: 14.99 },
      { label: 'M', dimensions: 'Neck 25-33 cm (9.8-13.0 in)', weight: '118 g', price: 15.99 },
      { label: 'M+', dimensions: 'Neck 33-42 cm (13.0-16.5 in)', weight: '120 g', price: 15.99 },
      { label: 'L', dimensions: 'Neck 38-50 cm (15.0-19.7 in)', weight: '220 g', price: 17.99 },
      { label: 'XL', dimensions: 'Neck 50-65 cm (19.7-25.6 in)', weight: '262 g', price: 19.99 }],
    features: [
      'Comfortable Alternative to the Cone — Soft inflatable design does not block vision or bump into furniture',
      'Prevents Licking & Biting — Gently stops access to wounds, stitches, hot spots, and rashes',
      'Eat, Drink & Sleep Freely — Your dog can perform all daily activities without obstruction',
      'Adjustable Hook-and-Loop Strap — Custom fit for any neck size; easy on and off in seconds',
      'PVC Inflatable Inner Tube — Lightweight and durable; inflate to desired firmness',
      'Removable Plush Cover — Zippered short-pile cover is washable and gentle on skin',
      'Folds Flat When Deflated — Compact for storage, travel, and low-cost shipping',
      '6 Sizes Available — XS through XL to fit toy breeds to giant breeds',
      '2 Colors — Gray and Blue',
      'Cross-Border Export Ready — Suitable for independent sites, Amazon, eBay, and other channels'],
    specifications: {
      'Material': 'PVC inflatable inner tube + plush short-pile removable cover',
      'Sizes': 'XS / S / M / M+ / L / XL',
      'XS': 'Neck 12-20 cm | 64 g',
      'S': 'Neck 18-30 cm | 95 g',
      'M': 'Neck 25-33 cm | 118 g',
      'M+': 'Neck 33-42 cm | 120 g',
      'L': 'Neck 38-50 cm | 220 g',
      'XL': 'Neck 50-65 cm | 262 g',
      'Colors': 'Gray / Blue',
      'Closure': 'Adjustable hook-and-loop (velcro) strap',
      'Cover': 'Zippered, removable, washable plush cover',
      'Inflation': 'Air valve; inflate/deflate as needed',
      'Packaging (XS/S/M+)': '16 x 20 x 3.5 cm per unit (flat/deflated)',
      'Packaging (M)': '16 x 20 x 4.0 cm per unit (flat/deflated)',
      'Packaging (L/XL)': '22 x 20 x 4.5 cm per unit (flat/deflated)',
      'Suitable For': 'Dogs recovering from surgery, injury, or skin treatment',
    },
    wholesaleInfo: {
      moq: '1 piece (mixed sizes and colors accepted)',
      leadTime: '3-7 days for sample; 15-25 days for bulk order',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo/Shanghai',
      note: 'Supplier: Pingyang Changbao Crafts Factory (平阳县常宝工艺品厂, Wenzhou, Zhejiang — same factory as id 2, 6 & 27). 1688 price ¥12.50/pc (all sizes) + ¥5 domestic shipping. 2 colors: Gray/Blue (Pink excluded). Sea freight carton: 96 pcs/carton XS/S/M+ (43x51x59cm), 84 pcs/carton M (43x51x59cm), 54 pcs/carton L/XL (47x63x44cm). Stock: Gray 8227 pcs, Blue 7704 pcs. Cross-border export ready. Contact sales@loyalbondpet.com for volume pricing.',
    },
  }

  {
    id: '29',
    slug: 'non-woven-dog-recovery-collar',
    name: 'Non-Woven Dog Recovery Collar',
    price: 11.99,
    compareAtPrice: 19.99,
    priceRange: '$11.99 - $16.99',
    description: `The LoyalBond Non-Woven Dog Recovery Collar is an ultra-lightweight, splash-proof cone designed for dogs recovering from surgery, injury, or skin treatment. Weighing as little as 60 grams, it is significantly lighter than traditional hard plastic cones, reducing stress on your dog's neck during the healing process.

Made from coated non-woven fabric, this collar is soft yet rigid enough to prevent your dog from licking, biting, or scratching wounds, stitches, hot spots, and rashes. The splash-proof coating repels water and food spills, making it easy to wipe clean after meals or outdoor walks.

The adjustable hook-and-loop closure ensures a secure, comfortable fit around the neck, and the wide brim design does not block your dog's peripheral vision — they can eat, drink, sleep, and navigate around furniture without bumping into things. The collar is also collar-compatible: it features a built-in slot so you can attach a regular collar and leash for walks.

Available in five sizes to fit toy breeds through large breeds. Blue color only. Minimum order: 2 pieces.`,
    shortDescription: 'Ultra-lightweight non-woven recovery cone — featherlight at just 60g, splash-proof, adjustable fit. Does not block vision. 5 sizes, blue.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: [
      '/products/nw-collar-main.jpg',
      '/products/nw-collar-gallery-lifestyle.jpg',
      '/products/nw-collar-detail-1-hero.jpg',
      '/products/nw-collar-detail-2-featherlight.jpg',
      '/products/nw-collar-detail-3-fabric.jpg',
      '/products/nw-collar-detail-4-collar-compatible.jpg',
      '/products/nw-collar-detail-5-specs.jpg'],
    rating: 0,
    reviewCount: 0,
    badge: 'New Arrival',
    sizes: ['Size 1', 'Size 2', 'Size 3', 'Size 4', 'Size 5'],
    colors: ['Blue'],
    sizeVariants: [
      { label: 'Size 1', dimensions: 'Neck 14-19 cm, Depth 12 cm', weight: '60 g', price: 11.99 },
      { label: 'Size 2', dimensions: 'Neck 20-27 cm, Depth 16 cm', weight: '80 g', price: 12.99 },
      { label: 'Size 3', dimensions: 'Neck 22-30 cm, Depth 20 cm', weight: '90 g', price: 13.99 },
      { label: 'Size 4', dimensions: 'Neck 23-35 cm, Depth 27 cm', weight: '110 g', price: 15.99 },
      { label: 'Size 5', dimensions: 'Neck 30-42 cm, Depth 32 cm', weight: '150 g', price: 16.99 }
    ],
    features: [
      'Featherlight design — as light as 60g for minimal neck strain',
      'Splash-proof coated non-woven fabric — easy to wipe clean',
      'Soft yet rigid — prevents licking and biting without discomfort',
      'Does not block peripheral vision — eat, drink, and move freely',
      'Adjustable hook-and-loop closure for a secure, custom fit',
      'Built-in collar slot — attach a regular collar and leash for walks',
      '5 sizes available to fit toy breeds through large breeds'
    ],
    metaTitle: 'Non-Woven Dog Recovery Collar | Lightweight Splash-Proof Cone | LoyalBond',
    metaDescription: 'Ultra-lightweight non-woven recovery collar for dogs. Splash-proof, soft, adjustable — as light as 60g. Does not block vision. 5 sizes. Shop LoyalBond.',
    tags: ['recovery collar', 'dog cone', 'post-surgery', 'non-woven', 'lightweight', 'splash-proof', 'senior dog', 'wound protection'],
    isActive: true,
    internalNotes: 'Supplier: Pingyang Changbao (same factory as id 2/6/27/28). MOQ: 2 pcs. Cost: S1 ¥7, S2 ¥8, S3 ¥10, S4 ¥13.5, S5 ¥16. Sea freight cartons: S1 162pcs, S2 78pcs, S3 56pcs, S4 56pcs, S5 22pcs. Blue only. Price placeholder pending freight quote.'
  },


];

export const collections = [
  {
    slug: 'home-safety',
    name: 'Home Safety',
    title: 'Home Safety',
    description: 'Senior pet home safety essentials — orthopedic beds, pet stairs, and lift aids to prevent accidents and support comfortable aging-in-place.',
    priceRange: '$12.99 – $59.99',
    image: '/collections/home-safety.jpg',
    icon: 'home',
    emoji: '🏠'
  },
  {
    slug: 'feeding-aids',
    name: 'Feeding Aids',
    title: 'Feeding Aids',
    description: 'Comfortable mealtime solutions — slow feeders, snuffle mats, and feeding accessories for senior dogs with limited mobility.',
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
    description: 'Paw cleaners and grooming essentials for quick, stress-free cleanups. Keep your pet fresh and your home spotless after every walk.',
    priceRange: '$9.99 - $12.99',
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

  // Joint care / mobility / post-surgery group
  'inflatable-dog-recovery-collar': ['hind-leg-support-harness', 'mesh-support-sling', 'orthopedic-bolster-dog-bed'],
  'hind-leg-support-harness': ['mesh-support-sling', 'inflatable-dog-recovery-collar', 'orthopedic-bolster-dog-bed'],
  'mesh-support-sling': ['hind-leg-support-harness', 'inflatable-dog-recovery-collar', 'orthopedic-bolster-dog-bed'],
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
  'waterproof-silicone-dog-rain-boots': ['pet-paw-cleaner-cup', 'orthopedic-bolster-dog-bed', 'snuffle-mat-set'],
  // Grooming / paw care group
  'pet-paw-cleaner-cup': ['waterproof-silicone-dog-rain-boots', 'orthopedic-bolster-dog-bed'],
  '29': ['28', '2', '6', '27'],
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

