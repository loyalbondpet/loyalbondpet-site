import { NextResponse } from 'next/server';
import { getPayPalOrder } from '@/lib/paypal/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('orderId');
    if (!orderId) return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });

    const order = await getPayPalOrder(orderId);
    const total = order.purchase_units?.[0]?.amount?.value;
    const email = order.payer?.email_address;
    return NextResponse.json({ id: order.id, status: order.status, total, email });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[paypal/verify-order]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
