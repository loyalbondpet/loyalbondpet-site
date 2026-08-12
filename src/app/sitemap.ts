import { MetadataRoute } from 'next';
import { products } from '@/lib/data/products';
import { blogPosts } from '@/lib/data/blog';
import { getAllSolutionSlugs } from '@/lib/data/solutions';
import { getAllCareGuideSlugs } from '@/lib/data/careGuides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.loyalbondpet.com';

  // lastmod dates based on actual content update history
  const staticPages = [
    { url: baseUrl, lastModified: new Date('2026-08-09'), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-08-07'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-08-08'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: new Date('2026-08-07'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-08-07'), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/wholesale`, lastModified: new Date('2026-08-07'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date('2026-08-07'), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/collections`, lastModified: new Date('2026-08-07'), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  // Collections (6 scenarios) - product pages went live 2026-08-07
  const collectionPages = [
    'home-safety',
    'feeding-aids',
    'travel-car',
    'grooming-bath',
    'oral-care',
    'seasonal',
  ].map(slug => ({
    url: `${baseUrl}/collections/${slug}`,
    lastModified: new Date('2026-08-07'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Solutions pages (4 B2B) - created during site launch 2026-08-07
  const solutionPages = getAllSolutionSlugs().map(slug => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date('2026-08-07'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Care Guide pages (8 audience) - created during site launch 2026-08-07
  const careGuidePages = getAllCareGuideSlugs().map(slug => ({
    url: `${baseUrl}/care-guide/${slug}`,
    lastModified: new Date('2026-08-07'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Product pages - FDA vocabulary fix applied 2026-08-09
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date('2026-08-09'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog pages - use actual post date from blog data (already dynamic)
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...collectionPages, ...solutionPages, ...careGuidePages, ...productPages, ...blogPages];
}
