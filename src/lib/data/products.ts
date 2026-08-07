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
    slug: 'senior-support-harness',
    name: 'Senior Support Harness',
    price: 34.99,
    description: 'Give your aging dog the support they need with our Senior Support Harness. Designed with wide, padded straps that distribute pressure evenly across the chest and torso, this harness helps lift and stabilize senior dogs during walks, stairs, and car rides. The breathable mesh lining prevents overheating while the adjustable fit grows with your dog through weight changes common in older pets. A rear handle gives you full control for quick assists, while the soft, non-chafing edges protect delicate senior skin.',
    shortDescription: 'Padded lift harness for aging dogs with breathable mesh and adjustable fit.',
    collection: 'Senior Mobility',
    collectionSlug: 'senior-mobility',
    images: ['/products/harness-1.jpg', '/products/harness-2.jpg', '/products/harness-3.jpg'],
    rating: 4.8,
    reviewCount: 234,
    badge: 'Best Seller',
    sizes: ['S (10-15 lbs)', 'M (15-30 lbs)', 'L (30-50 lbs)', 'XL (50-80 lbs)'],
    colors: ['Forest Green', 'Soft Brown', 'Charcoal'],
    features: [
      'Wide padded straps for even pressure distribution',
      'Breathable mesh lining prevents overheating',
      'Rear handle for quick assistance and control',
      'Adjustable fit accommodates weight changes',
      'Soft non-chafing edges protect senior skin',
      'Machine washable cover'
    ],
    specifications: {
      'Material': 'Breathable mesh with neoprene padding',
      'Closure': 'Quick-release buckles',
      'Washable': 'Yes, machine wash cold',
      'Weight': '0.6 lbs',
      'Origin': 'Designed in USA'
    },
    bestSeller: true
  },
  {
    id: '2',
    slug: 'orthopedic-memory-foam-bed',
    name: 'Orthopedic Memory Foam Bed',
    price: 59.99,
    description: 'Our Orthopedic Memory Foam Bed is engineered specifically for senior dogs who need extra joint support. The 4-inch high-density memory foam base contours to your dog\'s body, relieving pressure on hips, elbows, and other sensitive joints. The bolstered edges provide a secure, nest-like feeling that reduces anxiety, while the low-profile entry makes it easy for stiff-legged dogs to climb in. The waterproof inner liner protects the foam from accidents, and the removable cover is machine washable for easy maintenance.',
    shortDescription: '4-inch memory foam bed with bolstered edges for joint relief and anxiety reduction.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: ['/products/bed-1.jpg', '/products/bed-2.jpg', '/products/bed-3.jpg'],
    rating: 4.9,
    reviewCount: 412,
    badge: 'Top Rated',
    sizes: ['Small (24"x18")', 'Medium (36"x24")', 'Large (44"x30")', 'XL (52"x36")'],
    colors: ['Warm Beige', 'Soft Gray', 'Forest Green'],
    features: [
      '4-inch high-density memory foam base',
      'Bolstered edges for security and head support',
      'Low-profile entry for easy access',
      'Waterproof inner liner',
      'Removable, machine washable cover',
      'Non-slip bottom prevents sliding'
    ],
    specifications: {
      'Foam Type': 'High-density memory foam',
      'Cover Material': 'Soft plush fabric',
      'Waterproof': 'Inner liner only',
      'Washable': 'Cover is machine washable',
      'Non-slip': 'Yes, rubber dots on bottom'
    },
    bestSeller: true
  },
  {
    id: '3',
    slug: 'non-slip-pet-ramp',
    name: 'Non-Slip Pet Ramp',
    price: 49.99,
    description: 'The Non-Slip Pet Ramp helps your senior dog safely access furniture, beds, and vehicles without the strain of jumping. The high-traction walking surface features a textured carpet tread that provides secure footing even for dogs with mobility issues. Adjustable height settings accommodate couches, beds, and SUVs, while the foldable design allows for easy storage. Side rails keep your dog centered and secure during use, and the lightweight yet sturdy construction supports dogs up to 150 lbs.',
    shortDescription: 'Adjustable foldable ramp with high-traction surface for safe furniture and vehicle access.',
    collection: 'Home Safety',
    collectionSlug: 'home-safety',
    images: ['/products/ramp-1.jpg', '/products/ramp-2.jpg', '/products/ramp-3.jpg'],
    rating: 4.7,
    reviewCount: 189,
    sizes: ['One Size (Adjustable)'],
    features: [
      'High-traction textured carpet surface',
      'Adjustable height for furniture and vehicles',
      'Foldable design for easy storage',
      'Side rails for safety and centering',
      'Supports dogs up to 150 lbs',
      'Lightweight yet sturdy construction'
    ],
    specifications: {
      'Material': 'Wood frame with carpet tread',
      'Weight Capacity': '150 lbs',
      'Dimensions (folded)': '32"x16"x4"',
      'Dimensions (open)': '60"x16"xadjustable',
      'Weight': '10 lbs'
    }
  },
  {
    id: '4',
    slug: 'elevated-slow-feeder-bowl',
    name: 'Elevated Slow Feeder Bowl',
    price: 24.99,
    description: 'Our Elevated Slow Feeder Bowl combines two essential features for senior dog health: elevated positioning and slow feeding design. The raised platform reduces neck and joint strain during meals, making eating more comfortable for dogs with arthritis or neck pain. The built-in maze pattern slows eating speed by up to 10x, preventing bloat, regurgitation, and digestive discomfort. The stainless steel bowl is removable for easy cleaning, and the non-slip base keeps everything stable during meals.',
    shortDescription: 'Raised slow feeder bowl that reduces neck strain and prevents bloat.',
    collection: 'Daily Care',
    collectionSlug: 'daily-care',
    images: ['/products/bowl-1.jpg', '/products/bowl-2.jpg', '/products/bowl-3.jpg'],
    rating: 4.6,
    reviewCount: 156,
    sizes: ['Small (2 cup)', 'Medium (4 cup)', 'Large (6 cup)'],
    colors: ['Warm Beige', 'Soft Gray'],
    features: [
      'Elevated design reduces neck strain',
      'Built-in maze slows eating by up to 10x',
      'Removable stainless steel bowl',
      'Non-slip base for stability',
      'BPA-free and food-safe materials',
      'Easy to clean, dishwasher safe'
    ],
    specifications: {
      'Bowl Material': '304 stainless steel',
      'Base Material': 'BPA-free ABS plastic',
      'Height': '6 inches',
      'Dishwasher Safe': 'Yes (bowl only)',
      'Non-slip': 'Yes, rubber feet'
    }
  },
  {
    id: '5',
    slug: 'car-seat-protector',
    name: 'Car Seat Protector',
    price: 39.99,
    description: 'Keep your car seats clean and your dog safe during travel with our Car Seat Protector. The heavy-duty 600D Oxford fabric is waterproof, scratch-proof, and built to withstand even the most enthusiastic travelers. The universal fit design works with any vehicle\'s back seat, attaching securely via headrest anchors and seat anchors. A built-in seat belt opening allows you to safely tether your dog\'s harness, while the mesh window lets your pet see you and reduces anxiety. When the trip is over, simply wipe clean or toss in the washing machine.',
    shortDescription: 'Waterproof, scratch-proof back seat cover with safety harness opening.',
    collection: 'Travel Comfort',
    collectionSlug: 'travel-comfort',
    images: ['/products/carseat-1.jpg', '/products/carseat-2.jpg', '/products/carseat-3.jpg'],
    rating: 4.7,
    reviewCount: 298,
    badge: 'Popular',
    sizes: ['Standard (54"x58")', 'XL (60"x64")'],
    colors: ['Black', 'Charcoal'],
    features: [
      'Heavy-duty 600D Oxford waterproof fabric',
      'Universal fit for any vehicle back seat',
      'Built-in seat belt opening for harness tether',
      'Mesh window reduces pet anxiety',
      'Scratch-proof and hair-resistant',
      'Machine washable for easy cleaning'
    ],
    specifications: {
      'Material': '600D Oxford cloth with PP cotton fill',
      'Waterproof': 'Yes, full waterproof coating',
      'Attachment': 'Headrest clips + seat anchors',
      'Washable': 'Machine wash cold',
      'Universal Fit': 'Fits most sedans, SUVs, trucks'
    },
    bestSeller: true
  },
  {
    id: '6',
    slug: 'cooling-mat',
    name: 'Cooling Mat',
    price: 29.99,
    description: 'Our Cooling Mat provides instant, soothing relief for senior dogs who struggle with temperature regulation. The pressure-activated gel core automatically activates when your dog lies down, drawing heat away from their body without refrigeration, electricity, or water. The durable nylon exterior resists scratching and biting, while the smooth surface is easy to wipe clean. Available in multiple sizes to fit any bed, crate, or favorite resting spot. Perfect for summer months, warm climates, or dogs with thick coats.',
    shortDescription: 'Pressure-activated self-cooling gel mat that requires no electricity or water.',
    collection: 'Daily Care',
    collectionSlug: 'daily-care',
    images: ['/products/cooling-1.jpg', '/products/cooling-2.jpg', '/products/cooling-3.jpg'],
    rating: 4.5,
    reviewCount: 178,
    sizes: ['Small (17"x20")', 'Medium (26"x16")', 'Large (36"x20")', 'XL (44"x28")'],
    colors: ['Blue', 'Gray'],
    features: [
      'Pressure-activated gel cooling technology',
      'No refrigeration, electricity, or water needed',
      'Durable nylon exterior resists scratching',
      'Easy to wipe clean surface',
      'Recharges automatically when not in use',
      'Lightweight and portable'
    ],
    specifications: {
      'Cooling Duration': '3-4 hours per activation',
      'Recharge Time': '15-20 minutes without use',
      'Material': 'Nylon exterior, gel interior',
      'Non-toxic': 'Yes, pet-safe gel formula',
      'Wipe Clean': 'Yes'
    }
  },
  {
    id: '7',
    slug: 'elbow-protector-pads',
    name: 'Elbow Protector Pads (Pair)',
    price: 19.99,
    description: 'Our Elbow Protector Pads are specifically designed for senior dogs who develop painful calluses and sores from lying on hard surfaces. The soft, cushioned neoprene wraps gently around your dog\'s elbow, providing a protective barrier that prevents and heals pressure sores. The breathable material allows air circulation while the secure Velcro closure keeps pads in place during activity. Many veterinary professionals recommend elbow protectors for large breed seniors prone to hygromas and elbow dysplasia.',
    shortDescription: 'Soft neoprene wraps that prevent and heal pressure sores on elbows.',
    collection: 'Senior Mobility',
    collectionSlug: 'senior-mobility',
    images: ['/products/elbow-1.jpg', '/products/elbow-2.jpg', '/products/elbow-3.jpg'],
    rating: 4.6,
    reviewCount: 145,
    sizes: ['S (for breeds under 25 lbs)', 'M (for breeds 25-60 lbs)', 'L (for breeds over 60 lbs)'],
    colors: ['Black', 'Forest Green'],
    features: [
      'Soft cushioned neoprene padding',
      'Prevents and heals pressure sores',
      'Breathable material for air circulation',
      'Secure Velcro closure stays in place',
      'Vet-recommended for large breed seniors',
      'Sold as a pair for both elbows'
    ],
    specifications: {
      'Material': 'Medical-grade neoprene',
      'Closure': 'Adjustable Velcro',
      'Sold As': 'Pair (2 pads)',
      'Washable': 'Hand wash recommended',
      'Breathable': 'Yes'
    }
  },
  {
    id: '8',
    slug: 'portable-travel-water-bowl',
    name: 'Portable Travel Water Bowl',
    price: 14.99,
    description: 'Keep your senior dog hydrated on every adventure with our Portable Travel Water Bowl. The innovative collapsible silicone design folds flat to just 1.5 inches, fitting easily into pockets, bags, and car compartments. The leak-proof lid prevents spills in your bag or car, while the wide, shallow design makes it easy for senior dogs with limited mobility to drink comfortably. The food-grade silicone is BPA-free and dishwasher safe. A built-in carabiner clips to backpacks, leashes, or belt loops for hands-free carrying.',
    shortDescription: 'Collapsible leak-proof water bowl that folds flat for easy carrying.',
    collection: 'Travel Comfort',
    collectionSlug: 'travel-comfort',
    images: ['/products/waterbowl-1.jpg', '/products/waterbowl-2.jpg', '/products/waterbowl-3.jpg'],
    rating: 4.4,
    reviewCount: 267,
    sizes: ['One Size (12 oz capacity)'],
    colors: ['Forest Green', 'Coral', 'Sky Blue'],
    features: [
      'Collapses flat to 1.5 inches',
      'Leak-proof lid prevents spills',
      'Wide shallow design for easy drinking',
      'Food-grade BPA-free silicone',
      'Built-in carabiner for clipping',
      'Dishwasher safe'
    ],
    specifications: {
      'Capacity': '12 oz (350ml)',
      'Material': 'Food-grade silicone',
      'Folded Size': '5.5" x 5.5" x 1.5"',
      'Expanded Size': '5.5" x 5.5" x 3"',
      'Weight': '3.2 oz'
    }
  },
  {
    id: '9',
    slug: 'non-slip-paw-grip-pads',
    name: 'Non-Slip Paw Grip Pads (4-Pack)',
    price: 12.99,
    description: 'Help your senior dog regain confidence on slippery floors with our Non-Slip Paw Grip Pads. These soft, flexible silicone grips attach to your dog\'s paws, providing essential traction on hardwood, tile, and laminate floors that can be treacherous for aging dogs. The breathable design allows natural paw movement and sensation, while the gentle adhesive keeps pads secure without irritation. Each pack includes four pads that are reusable after washing. Many customers report immediate improvement in their dog\'s willingness to walk and stand.',
    shortDescription: 'Reusable silicone paw grips that provide traction on slippery floors.',
    collection: 'Senior Mobility',
    collectionSlug: 'senior-mobility',
    images: ['/products/pawgrip-1.jpg', '/products/pawgrip-2.jpg', '/products/pawgrip-3.jpg'],
    rating: 4.3,
    reviewCount: 198,
    sizes: ['S (for small breeds)', 'M (for medium breeds)', 'L (for large breeds)'],
    colors: ['Clear', 'Gray'],
    features: [
      'Provides traction on slippery surfaces',
      'Soft flexible silicone for natural movement',
      'Breathable design prevents irritation',
      'Gentle adhesive stays secure',
      'Reusable and washable',
      '4-pack covers all paws'
    ],
    specifications: {
      'Material': 'Medical-grade silicone',
      'Adhesive': 'Gentle, skin-safe',
      'Reusable': 'Yes, wash and reapply',
      'Pack Size': '4 pads',
      'Disposable': 'No, reusable'
    }
  },
  {
    id: '10',
    slug: 'gentle-grooming-brush',
    name: 'Gentle Grooming Brush',
    price: 16.99,
    description: 'Our Gentle Grooming Brush is designed with senior dogs\' sensitive skin in mind. The soft, rounded stainless steel bristles glide through fur without scratching or pulling, making grooming a relaxing bonding experience rather than a stressful chore. The ergonomic handle reduces hand fatigue for caregivers, while the self-cleaning button retracts bristles for easy hair removal. Regular brushing stimulates blood circulation and distributes natural oils, promoting a healthier coat for your aging companion.',
    shortDescription: 'Soft-bristle brush designed for senior dogs\' sensitive skin and easy grooming.',
    collection: 'Daily Care',
    collectionSlug: 'daily-care',
    images: ['/products/brush-1.jpg', '/products/brush-2.jpg', '/products/brush-3.jpg'],
    rating: 4.7,
    reviewCount: 213,
    sizes: ['Small (for short coats)', 'Large (for long/thick coats)'],
    colors: ['Forest Green', 'Soft Brown'],
    features: [
      'Soft rounded bristles for sensitive skin',
      'Self-cleaning button for easy hair removal',
      'Ergonomic handle reduces hand fatigue',
      'Stimulates blood circulation',
      'Distributes natural coat oils',
      'Suitable for all coat types'
    ],
    specifications: {
      'Bristle Material': 'Stainless steel with rounded tips',
      'Handle': 'Non-slip rubber grip',
      'Self-cleaning': 'Yes, retract button',
      'Suitable For': 'All coat types',
      'Weight': '4.2 oz'
    }
  },
  {
    id: '11',
    slug: 'orthopedic-bolster-dog-bed',
    name: 'Orthopedic Bolster Dog Bed',
    price: 4.00,
    description: `Give your senior dog a comfortable, supportive resting space with the LoyalBond Orthopedic Bolster Dog Bed.

Built with high-density supportive foam that evenly distributes your pet's body weight to reduce pressure on hips, elbows and joints.

The low-profile entry allows dogs with weak hind legs, joint stiffness or limited mobility to climb in effortlessly without jumping or straining.

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
      { label: 'S', dimensions: '60 x 47 x 17 cm', weight: '4.00 kg', price: 4.00 },
      { label: 'M', dimensions: '73 x 57 x 18 cm', weight: '9.00 kg', price: 9.00 },
      { label: 'L', dimensions: '92 x 72 x 19 cm', weight: '8.00 kg', price: 8.00 },
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
      'High-density orthopedic foam for balanced weight distribution & joint support',
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
      'Target': 'Senior dogs, arthritic dogs, mobility-impaired dogs',
      'MOQ': '50 pieces (mixed sizes/colors accepted)',
      'Lead Time': '25-35 days after order confirmation',
      'Payment': 'T/T 50% deposit, 50% before shipment',
      'Shipping': 'FOB Ningbo, China',
    },
    wholesaleInfo: {
      moq: '50 pieces (mixed sizes/colors accepted)',
      leadTime: '25-35 days after order confirmation',
      payment: 'T/T 50% deposit, 50% before shipment',
      shipping: 'FOB Ningbo, China',
      note: 'For bulk orders and mixed size/color combinations, please contact us for customized pricing.',
    },
  }
];

export const collections = [
  {
    slug: 'senior-mobility',
    name: 'Senior Mobility',
    title: 'Senior Mobility Kit',
    description: 'Help your aging dog stay active and comfortable with mobility aids designed for senior dogs. From supportive harnesses to paw grips, every product helps your companion maintain their independence and quality of life.',
    priceRange: '$12.99 - $34.99',
    image: '/collections/senior-mobility.jpg',
    icon: 'mobility'
  },
  {
    slug: 'home-safety',
    name: 'Home Safety',
    title: 'Home Safety Kit',
    description: 'Transform your home into a safe haven for your senior pet. Non-slip solutions, orthopedic support, and accessible designs help prevent accidents and keep your aging companion comfortable in their favorite spaces.',
    priceRange: '$24.99 - $59.99',
    image: '/collections/home-safety.jpg',
    icon: 'home'
  },
  {
    slug: 'travel-comfort',
    name: 'Travel Comfort',
    title: 'Travel Comfort Kit',
    description: 'Make every journey comfortable for your senior dog. From car seat protection to portable hydration, our travel essentials ensure your aging pet stays safe, comfortable, and happy on every adventure.',
    priceRange: '$14.99 - $39.99',
    image: '/collections/travel-comfort.jpg',
    icon: 'travel'
  },
  {
    slug: 'daily-care',
    name: 'Daily Care',
    title: 'Daily Care Kit',
    description: 'Everyday essentials for your senior dog\'s health and happiness. Cooling mats, grooming tools, and comfortable feeding solutions make daily routines easier and more enjoyable for both you and your pet.',
    priceRange: '$16.99 - $29.99',
    image: '/collections/daily-care.jpg',
    icon: 'care'
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
