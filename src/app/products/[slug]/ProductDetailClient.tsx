'use client';

import { useState, useMemo } from 'react';
import type { Product, SizeVariant, ColorOption } from '@/lib/data/products';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const hasSizeVariants = product.sizeVariants && product.sizeVariants.length > 0;
  const hasColorOptions = product.colorOptions && product.colorOptions.length > 0;

  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

  // Determine current price based on size variant or base price
  const currentPrice = useMemo(() => {
    if (hasSizeVariants && product.sizeVariants![selectedSizeIdx]) {
      return product.sizeVariants![selectedSizeIdx].price;
    }
    return product.price;
  }, [selectedSizeIdx, hasSizeVariants, product.price, product.sizeVariants]);

  const displayPrice = currentPrice;

  // Use product images as the gallery (7 product photos)
  const displayImages = product.images;

  // When color changes, find matching image in gallery
  const handleColorChange = (idx: number) => {
    setSelectedColorIdx(idx);
    if (hasColorOptions && product.colorOptions![idx]?.image) {
      const colorImage = product.colorOptions![idx].image;
      const imgIdx = displayImages.indexOf(colorImage);
      if (imgIdx >= 0) setSelectedImage(imgIdx);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <div>
        <div className="aspect-square bg-brand-beige rounded-2xl overflow-hidden mb-4 border border-gray-100">
          <img
            src={displayImages[selectedImage] || product.images[0]}
            alt={`${product.name} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {displayImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`aspect-square rounded-lg border-2 overflow-hidden transition-all ${
                selectedImage === i
                  ? 'border-brand-green ring-2 ring-brand-green/20'
                  : 'border-gray-200 hover:border-brand-green/50'
              }`}
            >
              <img
                src={img}
                alt={`${product.name} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        {product.badge && (
          <span className="inline-block px-3 py-1 bg-brand-coral/10 text-brand-coral text-sm font-semibold rounded-full mb-3">
            {product.badge}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark mb-2 leading-tight">
          {product.name}
        </h1>
        {hasSizeVariants && (
          <p className="text-sm text-brand-gray mb-2">
            Low Entry Support Bed for Senior Dogs with Limited Mobility
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {product.reviewCount > 0 ? (
            <span className="text-sm text-brand-gray">({product.reviewCount} reviews)</span>
          ) : (
            <span className="text-sm text-brand-gray italic">Be the first to review</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-brand-green">
            {currentPrice === 0 ? (
              product.priceRange ? (
                product.priceRange
              ) : (
                "Request Quote"
              )
            ) : (
              <>$
                {displayPrice.toFixed(2)}
                {hasSizeVariants && <span className="text-sm font-normal text-brand-gray ml-1">/ unit</span>}
              </>
            )}
          </span>


        </div>



        {/* Color selector - visual swatches */}
        {hasColorOptions && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Color: <span className="font-normal text-brand-gray">{product.colorOptions![selectedColorIdx]?.name}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {product.colorOptions!.map((color: ColorOption, idx: number) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(idx)}
                  className={`group relative w-10 h-10 rounded-full transition-all duration-200 ${
                    selectedColorIdx === idx
                      ? 'ring-2 ring-brand-green ring-offset-2 scale-110'
                      : 'ring-1 ring-gray-200 hover:ring-brand-green/50 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                >
                  {selectedColorIdx === idx && (
                    <svg
                      className="absolute inset-0 m-auto w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={isLightColor(color.hex) ? '#1A1A1A' : '#FFFFFF'}
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size selector - with dimensions and pricing */}
        {hasSizeVariants && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-dark mb-2">Size</label>
            <div className="grid grid-cols-3 gap-3">
              {product.sizeVariants!.map((variant: SizeVariant, idx: number) => (
                <button
                  key={variant.label}
                  onClick={() => setSelectedSizeIdx(idx)}
                  className={`relative py-3 px-3 rounded-lg border-2 text-center transition-all ${
                    selectedSizeIdx === idx
                      ? 'border-brand-green bg-brand-green/5'
                      : 'border-gray-200 hover:border-brand-green/50'
                  }`}
                >
                  <div className={`text-lg font-bold ${selectedSizeIdx === idx ? 'text-brand-green' : 'text-brand-dark'}`}>
                    {variant.label}
                  </div>
                  <div className="text-xs text-brand-gray mt-0.5">{variant.dimensions}</div>
                  <div className="text-sm font-semibold text-brand-dark mt-1">{variant.price > 0 ? `$${variant.price.toFixed(2)}` : "Request Quote"}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fallback: simple size selector (for products without sizeVariants) */}
        {!hasSizeVariants && product.sizes && product.sizes.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-dark mb-2">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSizeIdx(product.sizes!.indexOf(size))}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedSizeIdx === product.sizes!.indexOf(size)
                      ? 'border-brand-green bg-brand-green/5 text-brand-green'
                      : 'border-gray-200 text-brand-gray hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fallback: simple color selector (for products without colorOptions) */}
        {!hasColorOptions && product.colors && product.colors.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-dark mb-2">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColorIdx(product.colors!.indexOf(color))}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedColorIdx === product.colors!.indexOf(color)
                      ? 'border-brand-green bg-brand-green/5 text-brand-green'
                      : 'border-gray-200 text-brand-gray hover:border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <button className="w-full py-4 bg-brand-coral hover:bg-brand-coral/90 text-white font-bold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-coral/20 mb-4">
          Add to Cart
        </button>

        {/* Wholesale inquiry button */}
        {product.wholesaleInfo && (
          <a
            href="/contact"
            className="block w-full py-3 border-2 border-brand-green text-brand-green font-semibold text-center rounded-lg hover:bg-brand-green/5 transition-all duration-200 mb-6"
          >
            Wholesale Inquiry
          </a>
        )}

        {/* Trust badges */}
        <div className="flex flex-wrap gap-4 p-4 bg-brand-beige/50 rounded-lg">
          {[
            { icon: '🐾', text: 'Senior Dog Specialists' },
            { icon: '✅', text: 'Quality Tested' },
            { icon: '📦', text: 'FOB Ningbo Shipping' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-brand-dark">
              <span>{badge.icon}</span>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-brand-dark mb-3">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-brand-gray">
                <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper: determine if a hex color is light (for checkmark contrast)
function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
}
