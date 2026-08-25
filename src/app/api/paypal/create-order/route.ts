import { NextResponse } from 'next/server';
import { createPayPalOrder } from '@/lib/paypal/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface CreateOrderBody {
  items: Array<{ productId: string; name: string; quantity: number; unitAmount: number | string; }>;
  shipping: number | string;
  shippingAddress?: {
    name?: string; addressLine1?: string; addressLine2?: string;
    adminArea2?: string; adminArea1?: string; postalCode?: string; countryCode?: string;
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreateOrderBody;
    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }
    const order = await createPayPalOrder({
      items: body.items.map(it => ({
        productId: String(it.productId),
        name: String(it.name),
        quantity: Math.max(1, Math.floor(Number(it.quantity) || 1)),
        unitAmount: Number(it.unitAmount).toFixed(2),
      })),
      shipping: (Number(body.shipping) || 0).toFixed(2),
      shippingAddress: body.shippingAddress ? {
        name: body.shippingAddress.name,
        addressLine1: body.shippingAddress.addressLine1,
        addressLine2: body.shippingAddress.addressLine2,
        adminArea2: body.shippingAddress.adminArea2,
        adminArea1: body.shippingAddress.adminArea1,
        postalCode: body.shippingAddress.postalCode,
        countryCode: body.shippingAddress.countryCode || 'US',
      } : undefined,
    });
    return NextResponse.json({ id: order.id, status: order.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[paypal/create-order]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
