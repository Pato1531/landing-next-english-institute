import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/site';
import { elearningCourses, getElearningCourse } from '@/data/elearningCourses';
import CourseDetailPage from './CourseDetailPage';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return elearningCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getElearningCourse(slug);
  if (!course) return {};

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    alternates: { canonical: `/online/${course.slug}` },
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: `${SITE_URL}/online/${course.slug}`,
      title: `${course.seo.metaTitle} | NEXT English Institute`,
      description: course.seo.ogDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const course = getElearningCourse(slug);
  if (!course) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.seo.schemaDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'NEXT English Institute',
      url: SITE_URL,
    },
    courseMode: 'online',
    educationalLevel: course.seo.educationalLevel,
    inLanguage: 'es',
    offers: {
      '@type': 'Offer',
      price: String(course.price.current),
      priceCurrency: course.price.currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/online/${course.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailPage course={course} />
    </>
  );
}
