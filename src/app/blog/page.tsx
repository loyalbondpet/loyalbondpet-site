import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, blogCategories } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: 'Blog - Senior Dog Care & Pet Health Tips',
  description: 'Expert advice on senior dog care, product guides, pet health tips, and the latest from LoyalBond. Help your aging companion live their best life.',
  openGraph: {
    title: 'Blog - LoyalBond',
    description: 'Expert advice on senior dog care, product guides, and pet health tips.',
    url: 'https://www.loyalbondpet.com/blog',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.loyalbondpet.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.loyalbondpet.com/blog' },
  ],
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">LoyalBond Blog</h1>
          <p className="text-lg text-brand-gray max-w-2xl">
            Expert advice, product guides, and heartwarming stories to help you care for your aging companion.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[16/10] bg-gradient-to-br from-brand-green/10 to-brand-beige rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <p className="text-brand-green/40 text-sm mt-2">Featured Post Image</p>
                </div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-sm font-medium rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-green transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-brand-gray mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-brand-gray">
                  <span>{featuredPost.author}</span>
                  <span>·</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-brand-green text-white text-sm font-medium rounded-full">All Posts</span>
            {blogCategories.map((cat) => (
              <span key={cat.slug} className="px-4 py-2 bg-brand-beige text-brand-dark text-sm font-medium rounded-full hover:bg-brand-green/10 transition-colors cursor-pointer">
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[16/10] bg-gradient-to-br from-brand-beige to-brand-green/5 flex items-center justify-center">
                    <svg className="w-12 h-12 text-brand-green/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-medium rounded-full mb-3 w-fit">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-brand-gray mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-brand-gray pt-4 border-t border-gray-100">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
