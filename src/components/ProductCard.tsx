'use client';

import Link from 'next/link';
import type { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/20"
    >
      {/* Product Image */}
      <div className="aspect-square bg-brand-beige/30 relative overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-brand-coral text-white text-xs font-semibold rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-brand-dark text-lg mb-1 group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-brand-gray mb-3 line-clamp-2">{product.shortDescription}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-brand-gray ml-1">({product.reviewCount})</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-brand-green">{product.priceRange || (product.price > 0 ? `$${product.price.toFixed(2)}` : 'Inquire')}</span>
          <button
            className="px-4 py-2 bg-brand-coral hover:bg-brand-coral/90 text-white text-sm font-medium rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Cart functionality placeholder
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
