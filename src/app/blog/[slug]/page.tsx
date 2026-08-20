import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getPostBySlug } from '@/lib/data/blog';
import { getProductBySlug } from '@/lib/data/products';
import BlogPostClient from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.loyalbondpet.com/blog/${slug}`,
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
      images: [{ url: post.image.startsWith('http') ? post.image : `https://www.loyalbondpet.com${post.image}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.startsWith('http') ? post.image : `https://www.loyalbondpet.com${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter(p => p.slug !== slug && p.categorySlug === post.categorySlug).slice(0, 3);
  const relatedProducts = post.relatedProducts
    .map(slug => getProductBySlug(slug))
    .filter(Boolean);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `https://www.loyalbondpet.com${post.image}`,
    author: {
      '@type': 'Organization',
      name: 'LoyalBond',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LoyalBond',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.loyalbondpet.com/favicon.ico',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.loyalbondpet.com/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.loyalbondpet.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.loyalbondpet.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.loyalbondpet.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-beige py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6">
            <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand-dark font-medium truncate">{post.title}</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-brand-gray mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-brand-gray">
            <span className="font-medium text-brand-dark">{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-brand-beige">
          <img
            src={post.image}
            alt={post.title}
            width={1200}
            height={674}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPostClient content={post.content} />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-brand-beige text-brand-brown text-sm rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-brand-dark">Share this article:</span>
          <div className="flex gap-3">
            {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
              <button
                key={platform}
                className="w-10 h-10 rounded-full bg-brand-beige hover:bg-brand-green/10 flex items-center justify-center text-brand-gray hover:text-brand-green transition-colors"
                aria-label={`Share on ${platform}`}
              >
                <span className="text-xs font-medium">{platform[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Related Products CTA */}
      {relatedProducts.length > 0 && (
        <section className="bg-brand-beige py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Products Mentioned in This Article</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((product) => product && (
                <Link key={product.id} href={`/products/${product.slug}`} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow flex gap-3 items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-brand-beige/30 shrink-0">
                    {product.images && product.images.length > 0 && (
                      <img src={product.images[0]} alt={product.name} width={400} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-dark text-sm mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-brand-green font-bold text-sm">{product.priceRange || 'Request Quote'}</p>
                    <span className="text-xs text-brand-coral font-medium mt-1 inline-block">Shop Now →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-brand-beige">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-brand-dark group-hover:text-brand-green transition-colors line-clamp-2">{rp.title}</h3>
                  <p className="text-sm text-brand-gray mt-1">{rp.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}