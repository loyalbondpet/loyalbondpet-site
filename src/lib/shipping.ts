/**
 * LoyalBond Shipping Calculator
 *
 * Calculates real-time shipping costs based on chargeable weight and destination
 * country, using 云途 (YunTu) logistics rates.
 *
 * Chargeable weight = max(actual weight, volumetric weight)
 * Volumetric weight = L × W × H ÷ 8000  (cm → kg)
 * Canada special: if volume weight < 2× actual weight, use actual weight.
 * Japan minimum chargeable weight: 0.5 kg.
 *
 * Rates include a 5% buffer for packaging, fuel surcharge variance, and FX.
 * Final price rounded up to the nearest $0.99.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PackageSpec {
  /** Actual product + packaging weight in kg */
  weight: number;
  /** Shipping carton dimensions in cm */
  length: number;
  width: number;
  height: number;
}

export interface ShippingQuote {
  cost: number;
  currency: string;
  method: string;
  minDays: number;
  maxDays: number;
  chargeableWeight: number;
  breakdown?: string;
}

// ─── Product Package Data ────────────────────────────────────────────────────
//
// Package dimensions are for the outermost shipping carton / mailer.
// For products sold in multiple sizes, key by variant label.
// Products with no size variant use 'Default' key.
//
// NOTE: Dog bed compressed dimensions are estimates.
// TODO: Confirm exact compressed carton sizes and dog bed M weight (9kg seems anomalous).

const PRODUCT_PACKAGES: Record<string, Record<string, PackageSpec>> = {
  // id 2 — Hind Leg Support Harness (poly mailer)
  '2': {
    Default: { weight: 0.10, length: 20, width: 15, height: 3 },
  },
  // id 3 — Flower Snuffle Mat (folded/rolled in poly mailer)
  '3': {
    Small: { weight: 0.30, length: 25, width: 18, height: 6 },
    Large: { weight: 0.45, length: 30, width: 22, height: 8 },
  },
  // id 6 — Fleece-Lined Dog Support Harness (poly mailer)
  '6': {
    S: { weight: 0.28, length: 24, width: 16, height: 4 },
    M: { weight: 0.33, length: 28, width: 19, height: 4 },
    L: { weight: 0.38, length: 30, width: 22, height: 4 },
    XL: { weight: 0.43, length: 34, width: 26, height: 4 },
  },
  // id 11 — Gel Memory Foam Dog Sofa Bed (CF3609, Dongyang Kuangchou)
  '11': {
    S: { weight: 1.0, length: 31, width: 21, height: 12 },
    M: { weight: 2.1, length: 35, width: 25, height: 7 },
    L: { weight: 2.9, length: 35, width: 25, height: 10 },
    XL: { weight: 4.75, length: 35, width: 25, height: 18 },
  },
// id 22 — Elevated Slow Feeder Bowl (folded flat in carton)
  '22': {
    Default: { weight: 1.20, length: 44, width: 24, height: 8 },
  },
  // id 23 — Folding Pet Stairs (folded in carton)
  '23': {
    Default: { weight: 3.60, length: 42.5, width: 33, height: 11 },
  },
  // id 24 — Snowflake Cooling Mat (flat in poly mailer/carton)
  '24': {
    S: { weight: 0.85, length: 42, width: 32, height: 3 },
    M: { weight: 1.40, length: 52, width: 42, height: 3 },
    L: { weight: 2.20, length: 62, width: 52, height: 3 },
  },
  // id 25 — Anti-Choke Slow Feeder Bowl (in carton)
  '25': {
    Default: { weight: 0.145, length: 22.5, width: 18, height: 5 },
  },
  // id 26 — Silicone Dog Rain Boots (in poly bag/carton)
  '26': {
    XS: { weight: 0.20, length: 15, width: 12, height: 4 },
    S: { weight: 0.25, length: 15, width: 12, height: 4 },
    M: { weight: 0.28, length: 17, width: 14, height: 4 },
    L: { weight: 0.30, length: 19, width: 16, height: 4 },
    XL: { weight: 0.32, length: 21, width: 18, height: 4 },
  },
  // id 27 — Pet Paw Cleaner Cup (individual poly bag + carton)
  '27': {
    S: { weight: 0.20, length: 12, width: 12, height: 16 },
    M: { weight: 0.30, length: 14, width: 14, height: 19 },
  },
  // id 28 — Inflatable Dog Recovery Collar (deflated, poly mailer)
  '28': {
    XS: { weight: 0.09, length: 14, width: 11, height: 3 },
    S: { weight: 0.12, length: 16, width: 13, height: 3 },
    M: { weight: 0.14, length: 18, width: 15, height: 3 },
    'M+': { weight: 0.15, length: 19, width: 16, height: 3 },
    L: { weight: 0.25, length: 22, width: 18, height: 4 },
    XL: { weight: 0.29, length: 25, width: 20, height: 4 },
  },
  // id 29 — Non-Woven Dog Recovery Collar (flattened, poly bag)
  '29': {
    'Size 1': { weight: 0.08, length: 15, width: 15, height: 2 },
    'Size 2': { weight: 0.10, length: 19, width: 19, height: 2 },
    'Size 3': { weight: 0.11, length: 23, width: 23, height: 2 },
    'Size 4': { weight: 0.13, length: 29, width: 29, height: 3 },
    'Size 5': { weight: 0.17, length: 34, width: 34, height: 3 },
  },
  // id 30 — Side-Grip Pet Pill Dispenser (poly bag)
  '30': {
    Default: { weight: 0.06, length: 24, width: 10, height: 3 },
  },
  // id 31 — Silicone Lick Mat (OPP bag; size/weight estimates pending sample confirmation)
  '31': {
    Default: { weight: 0.08, length: 16, width: 16, height: 2 },
  },
  // id 32 — Portable Hind Leg Support Belt (poly bag)
  '32': {
    S: { weight: 0.085, length: 18, width: 12, height: 3 },
    M: { weight: 0.105, length: 20, width: 14, height: 3 },
    L: { weight: 0.125, length: 22, width: 15, height: 4 },
    XL: { weight: 0.15, length: 24, width: 17, height: 4 },
  },
};

// ─── Country Shipping Methods ────────────────────────────────────────────────

interface CountryRate {
  method: string;
  minDays: number;
  maxDays: number;
  maxWeight: number; // kg
  /** Weight brackets: [upper bound kg, rate per kg in RMB, registration fee in RMB] */
  brackets: [number, number, number][];
  /** If true, uses Canada 2× actual weight rule for chargeable weight */
  canadaRule?: boolean;
  /** Minimum chargeable weight in kg */
  minChargeWeight?: number;
}

const COUNTRY_RATES: Record<string, CountryRate> = {
  US: {
    method: 'YunTu US Express (TKZMKS)',
    minDays: 8, maxDays: 10, maxWeight: 10,
    brackets: [
      [0.1, 99, 23],
      [0.2, 99, 23],
      [0.3, 98, 23],
      [0.45, 97, 26],
      [0.7, 96, 26],
      [2, 95, 29],
      [10, 89, 29],
    ],
  },
  CA: {
    method: 'YunTu Canada Express (ETTHPHR)',
    minDays: 10, maxDays: 14, maxWeight: 30,
    canadaRule: true,
    brackets: [
      [0.15, 89, 21],
      [0.3, 90, 21],
      [0.45, 90, 21],
      [0.75, 91, 22],
      [1, 92, 22],
      [1.5, 92, 23],
      [2, 92, 23],
      [30, 96, 23],
    ],
  },
  DE: {
    method: 'YunTu EU Express (TKTHPHR)',
    minDays: 9, maxDays: 15, maxWeight: 30,
    brackets: [
      [0.1, 59, 22],
      [0.3, 59, 21],
      [2, 56, 22],
      [30, 56, 22],
    ],
  },
  FR: {
    method: 'YunTu EU Express (TKTHPHR)',
    minDays: 9, maxDays: 15, maxWeight: 30,
    brackets: [
      [0.2, 57, 20],
      [0.5, 58, 20],
      [2, 57, 23],
      [30, 56, 23],
    ],
  },
  GB: {
    method: 'YunTu UK Tracked (YODEL / USPS)',
    minDays: 9, maxDays: 15, maxWeight: 5,
    brackets: [
      [0.3, 58, 16],
      [0.5, 60, 16],
      [1, 60, 16],
      [3, 65, 16],
      [5, 89, 16], // USPSBKPHR for >3kg
    ],
  },
  AU: {
    method: 'YunTu Australia Standard (QYTHPH)',
    minDays: 8, maxDays: 15, maxWeight: 20,
    brackets: [
      [0.3, 40, 21],
      [0.5, 40, 24],
      [1, 40, 25],
      [3, 40, 27],
      [20, 40, 42],
    ],
  },
  JP: {
    method: 'YunTu Japan Express (YRGRS)',
    minDays: 9, maxDays: 12, maxWeight: 10,
    minChargeWeight: 0.5,
    brackets: [
      [2, 34, 4],
      [10, 34, 5],
    ],
  },
};

// ─── Constants ───────────────────────────────────────────────────────────────

const VOLUMETRIC_DIVISOR = 8000;
const RMB_TO_USD = 7.2;
const BUFFER_MULTIPLIER = 1.05; // 5% buffer for packaging + FX variance

// Free shipping promotion: US orders with goods subtotal >= this threshold ship free.
const FREE_SHIPPING: Record<string, number> = {
  US: 29,
};

/** Whether a cart qualifies for free shipping to the given country */
export function isFreeShippingEligible(countryCode: string, goodsSubtotalUSD: number): boolean {
  const threshold = FREE_SHIPPING[countryCode];
  return threshold !== undefined && goodsSubtotalUSD >= threshold;
}

/** Free shipping threshold for a country, or null if no promotion */
export function getFreeShippingThreshold(countryCode: string): number | null {
  return FREE_SHIPPING[countryCode] ?? null;
}

// ─── Calculation ─────────────────────────────────────────────────────────────

function getPackageSpec(productId: string, size?: string): PackageSpec | null {
  const productPkgs = PRODUCT_PACKAGES[productId];
  if (!productPkgs) return null;

  // Try exact size match first
  if (size && productPkgs[size]) return productPkgs[size];

  // Fallback keys for products without variants
  return productPkgs['Default'] || productPkgs['One Size'] || Object.values(productPkgs)[0] || null;
}

function volumetricWeight(pkg: PackageSpec): number {
  return (pkg.length * pkg.width * pkg.height) / VOLUMETRIC_DIVISOR;
}

function chargeableWeightForItem(pkg: PackageSpec, canadaRule: boolean): number {
  const volWt = volumetricWeight(pkg);
  if (canadaRule) {
    // Canada: if volume weight < 2× actual weight → use actual weight
    return volWt >= 2 * pkg.weight ? volWt : pkg.weight;
  }
  return Math.max(pkg.weight, volWt);
}

function findBracket(weight: number, brackets: [number, number, number][]): [number, number, number] {
  for (const bracket of brackets) {
    if (weight <= bracket[0]) return bracket;
  }
  // Fall through to last bracket if weight somehow exceeds max
  return brackets[brackets.length - 1];
}

function roundTo99(amount: number): number {
  const cents = Math.ceil(amount * 100);
  const remainder = cents % 100;
  if (remainder === 0) return amount; // already whole dollar
  if (remainder <= 99) {
    return Math.floor(cents / 100) + 0.99;
  }
  return amount;
}

export interface CartItemLike {
  productId: string;
  quantity: number;
  size?: string;
}

/**
 * Calculate shipping cost for a cart.
 *
 * @param items - Cart items with productId, quantity, and optional size
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns ShippingQuote with cost in USD, or null if shipping unavailable
 */
export function calculateShipping(
  items: CartItemLike[],
  countryCode: string,
  goodsSubtotalUSD?: number,
): ShippingQuote | null {
  const rate = COUNTRY_RATES[countryCode];
  if (!rate) return null;

  // Free shipping promotion (US only, based on goods subtotal)
  const freeThreshold = goodsSubtotalUSD !== undefined ? FREE_SHIPPING[countryCode] : undefined;
  if (freeThreshold !== undefined && goodsSubtotalUSD! >= freeThreshold) {
    return {
      cost: 0,
      currency: 'USD',
      method: rate.method + ' — FREE SHIPPING',
      minDays: rate.minDays,
      maxDays: rate.maxDays,
      chargeableWeight: 0,
      breakdown: `FREE shipping on orders over $${freeThreshold} · ${rate.method} · ${rate.minDays}–${rate.maxDays} business days`,
    };
  }

  // Sum chargeable weights across all items
  let totalChargeWeight = 0;
  let totalActualWeight = 0;

  for (const item of items) {
    const pkg = getPackageSpec(item.productId, item.size);
    if (!pkg) {
      console.warn(`[shipping] No package spec for product ${item.productId} (size: ${item.size})`);
      continue;
    }
    const cw = chargeableWeightForItem(pkg, !!rate.canadaRule);
    totalChargeWeight += cw * item.quantity;
    totalActualWeight += pkg.weight * item.quantity;
  }

  // Apply minimum chargeable weight (e.g. Japan 0.5kg)
  if (rate.minChargeWeight && totalChargeWeight < rate.minChargeWeight) {
    totalChargeWeight = rate.minChargeWeight;
  }

  // Check max weight
  if (totalChargeWeight > rate.maxWeight) {
    return {
      cost: -1,
      currency: 'USD',
      method: rate.method,
      minDays: 0,
      maxDays: 0,
      chargeableWeight: totalChargeWeight,
      breakdown: `Combined package weight (${totalChargeWeight.toFixed(2)}kg) exceeds the ${rate.maxWeight}kg limit for this destination. Please split your order or contact us for a custom shipping quote.`,
    };
  }

  // Find applicable bracket
  const [upperBound, ratePerKg, regFee] = findBracket(totalChargeWeight, rate.brackets);

  // Calculate cost in RMB
  const costRmb = ratePerKg * totalChargeWeight + regFee;
  const costRmbWithBuffer = costRmb * BUFFER_MULTIPLIER;

  // Convert to USD
  const costUsd = costRmbWithBuffer / RMB_TO_USD;
  const roundedCost = roundTo99(costUsd);

  return {
    cost: roundedCost,
    currency: 'USD',
    method: rate.method,
    minDays: rate.minDays,
    maxDays: rate.maxDays,
    chargeableWeight: totalChargeWeight,
    breakdown: `${rate.method} · ${totalChargeWeight.toFixed(2)}kg chargeable · ${rate.minDays}–${rate.maxDays} business days`,
  };
}

/** Get list of countries we ship to */
export function getShippableCountries(): string[] {
  return Object.keys(COUNTRY_RATES);
}

/** Get estimated delivery window for a country */
export function getDeliveryWindow(countryCode: string): { minDays: number; maxDays: number } | null {
  const rate = COUNTRY_RATES[countryCode];
  if (!rate) return null;
  return { minDays: rate.minDays, maxDays: rate.maxDays };
}
