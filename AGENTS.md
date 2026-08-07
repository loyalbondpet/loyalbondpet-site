# AGENTS.md - LoyalBond Pet Products Website

## Project Overview

LoyalBond (恒伴) is a modern, SEO-optimized static showcase website for a pet products brand specializing in senior dog functional products. Built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom brand tokens
- **UI Components**: shadcn/ui
- **Font**: Inter (via next/font/google)

## Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with metadata, font, header/footer
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles, brand tokens, animations
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Robots.txt configuration
│   ├── about/page.tsx            # About Us page
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Dynamic blog post pages
│   ├── collections/
│   │   └── [slug]/page.tsx       # Dynamic collection pages
│   ├── contact/page.tsx          # Contact form page
│   ├── products/
│   │   └── [slug]/page.tsx       # Dynamic product detail pages
│   ├── shipping-policy/page.tsx
│   ├── return-policy/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms-of-service/page.tsx
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── Header.tsx                # Sticky nav with mobile menu
│   ├── Footer.tsx                # Footer with newsletter signup
│   ├── BackToTop.tsx             # Scroll-to-top button
│   ├── HeroSection.tsx           # Homepage hero with carousel
│   ├── ProductCard.tsx           # Reusable product card
│   └── NewsletterForm.tsx        # Newsletter signup form (client)
├── lib/
│   ├── utils.ts                  # Utility functions (cn)
│   └── data/
│       ├── products.ts           # Product & collection data
│       └── blog.ts               # Blog post data with full content
```

## Brand Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand-beige` | #F5F0E8 | Backgrounds, warm accents |
| `--color-brand-green` | #2D5F3F | Primary brand color, CTAs |
| `--color-brand-brown` | #8B6F4E | Secondary text, accents |
| `--color-brand-coral` | #E07A5F | CTA buttons, highlights |
| `--color-brand-cream` | #FDFBF7 | Light backgrounds |
| `--color-brand-dark` | #1A1A1A | Headings, primary text |
| `--color-brand-gray` | #6B7280 | Body text, secondary |

## Key Commands

- `pnpm dev` - Start dev server (HMR)
- `pnpm build` - Production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm ts-check` - TypeScript type checking

## Data-Driven Pages

- **Products**: Defined in `src/lib/data/products.ts` with collections, slugs, and metadata
- **Blog Posts**: Defined in `src/lib/data/blog.ts` with full article content (800+ words each)
- **Collections**: 4 collections (senior-mobility, home-safety, travel-comfort, daily-care)

## SEO Features

- Unique metadata per page (title, description, OG tags)
- JSON-LD structured data (Organization, Product, Article, BreadcrumbList)
- Auto-generated sitemap.xml
- robots.txt configuration
- Semantic HTML5 with proper heading hierarchy
- Font preloading via next/font

## Important Notes

- All interactive components (forms, buttons with state) use `'use client'` directive
- Server Components are used for pages with metadata exports
- NewsletterForm is extracted as a client component for use in both homepage and footer
- Product images use placeholder SVGs (ready for real image integration)
- Blog content uses a simple markdown-like renderer in BlogPostClient
