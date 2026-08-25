import { NextResponse } from 'next/server';
import { capturePayPalOrder } from '@/lib/paypal/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = body?.orderId;
    if (!orderId || typeof orderId !== 'string') {
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
    }
    const result = await capturePayPalOrder(orderId);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[paypal/capture-order]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
