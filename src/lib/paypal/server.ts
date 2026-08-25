/** Server-side PayPal helper (Live). */
const PAYPAL_API = process.env.PAYPAL_API_BASE || 'https://api-m.paypal.com';

let cachedToken: { token: string; expiresAt: number } | null = null;

export async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 30_000) return cachedToken.token;

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error('PayPal credentials not configured.');

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal auth failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  cachedToken = { token: data.access_token, expiresAt: now + (data.expires_in ?? 3200) * 1000 };
  return cachedToken.token;
}

export interface PayPalPurchaseItem {
  productId: string;
  name: string;
  quantity: number;
  unitAmount: string;
  description?: string;
}

export interface CreateOrderInput {
  items: PayPalPurchaseItem[];
  shipping: string;
  currencyCode?: string;
  referenceId?: string;
  shippingAddress?: {
    name?: string;
    addressLine1?: string;
    addressLine2?: string;
    adminArea2?: string;
    adminArea1?: string;
    postalCode?: string;
    countryCode: string;
  };
}

export async function createPayPalOrder(input: CreateOrderInput) {
  const token = await getAccessToken();
  const currency = input.currencyCode || 'USD';
  const subtotal = input.items.reduce((sum, it) => sum + Number(it.unitAmount) * it.quantity, 0);
  const shippingAmt = Number(input.shipping || 0);
  const total = subtotal + shippingAmt;

  const body: Record<string, unknown> = {
    intent: 'CAPTURE',
    purchase_units: [{
      reference_id: input.referenceId || 'ORDER-' + Date.now(),
      amount: {
        currency_code: currency,
        value: total.toFixed(2),
        breakdown: {
          item_total: { currency_code: currency, value: subtotal.toFixed(2) },
          shipping: { currency_code: currency, value: shippingAmt.toFixed(2) },
        },
      },
      items: input.items.map(it => ({
        name: (it.name || 'Product').slice(0, 127),
        quantity: String(it.quantity),
        unit_amount: { currency_code: currency, value: Number(it.unitAmount).toFixed(2) },
        sku: it.productId.slice(0, 127),
        ...(it.description ? { description: it.description.slice(0, 127) } : {}),
      })),
      custom_id: `LB-${Date.now()}`,
      ...(input.shippingAddress ? {
        shipping: {
          name: { full_name: input.shippingAddress.name || 'Customer' },
          address: {
            address_line_1: input.shippingAddress.addressLine1 || '',
            ...(input.shippingAddress.addressLine2 ? { address_line_2: input.shippingAddress.addressLine2 } : {}),
            admin_area_2: input.shippingAddress.adminArea2 || '',
            admin_area_1: input.shippingAddress.adminArea1 || '',
            postal_code: input.shippingAddress.postalCode || '',
            country_code: input.shippingAddress.countryCode || 'US',
          },
        },
      } : {}),
    }],
    application_context: {
      brand_name: 'LoyalBond',
      landing_page: 'NO_PREFERENCE',
      shipping_preference: input.shippingAddress ? 'SET_PROVIDED_ADDRESS' : 'GET_FROM_FILE',
      user_action: 'PAY_NOW',
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.loyalbondpet.com'}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.loyalbondpet.com'}/checkout/cancel`,
    },
  };

  const res = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Prefer: 'return=representation' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal create-order failed: ${res.status} ${text}`);
  }
  return res.json();
}

export async function capturePayPalOrder(orderId: string) {
  const token = await getAccessToken();
  const res = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Prefer: 'return=representation' },
    cache: 'no-store',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal capture failed: ${res.status} ${text}`);
  }
  return res.json();
}

export async function getPayPalOrder(orderId: string) {
  const token = await getAccessToken();
  const res = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal get-order failed: ${res.status} ${text}`);
  }
  return res.json();
}
