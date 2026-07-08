import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { elearningCourses } from '@/data/elearningCourses';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...elearningCourses.map((course) => ({
      url: `${SITE_URL}/online/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
