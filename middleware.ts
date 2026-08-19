import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Old product slug -> new product slug redirects
const PRODUCT_REDIRECTS: Record<string, string> = {
  '/products/orthopedic-bed': '/products/orthopedic-bolster-dog-bed',
  '/products/gel-cooling-mat': '/products/pet-gel-cooling-mat',
  '/products/hind-leg-harness': '/products/hind-leg-support-harness',
  '/products/drying-towel': '/products/snuffle-mat-set',
  '/products/snuffle-mat': '/products/snuffle-mat-set',
};

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const { pathname, search } = request.nextUrl;

  // Redirect non-www to www
  if (host === 'loyalbondpet.com') {
    const url = new URL(`https://www.loyalbondpet.com${pathname}${search}`);
    return NextResponse.redirect(url, 308);
  }

  // Redirect old product slugs to new ones
  if (PRODUCT_REDIRECTS[pathname]) {
    const url = new URL(`https://www.loyalbondpet.com${PRODUCT_REDIRECTS[pathname]}${search}`);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
