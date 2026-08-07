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
      url: `https://loyalbondpet.com/blog/${slug}`,
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
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
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'LoyalBond',
      url: 'https://loyalbondpet.com',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://loyalbondpet.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://loyalbondpet.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://loyalbondpet.com/blog/${slug}` },
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
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-green/10 to-brand-beige rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-brand-green/40 text-sm mt-2">Featured Image</p>
          </div>
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
                <Link key={product.id} href={`/products/${product.slug}`} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{product.name}</h3>
                  <p className="text-brand-green font-bold">${product.price.toFixed(2)}</p>
                  <span className="text-xs text-brand-coral font-medium mt-2 inline-block">Shop Now →</span>
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
                  <div className="aspect-[16/10] bg-brand-beige rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-brand-green/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
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
