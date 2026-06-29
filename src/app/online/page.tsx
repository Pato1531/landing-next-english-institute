import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import OnlinePage from './OnlinePage';

export const metadata: Metadata = {
  title: 'English for Tourism — Curso Online',
  description:
    'Aprendé inglés para viajar desde cero. Video, subtítulos, PDF descargable y certificado. 3 módulos, ~1 hora. Empezá hoy.',
  alternates: { canonical: '/online' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: `${SITE_URL}/online`,
    title: 'English for Tourism — Curso Online | NEXT English Institute',
    description:
      'Aprendé inglés para viajar desde cero. Video, subtítulos, PDF descargable y certificado. 3 módulos, ~1 hora.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'English for Tourism',
  description:
    'Curso de inglés orientado a viajeros. Aprendé a comunicarte en aeropuertos, hoteles y destinos turísticos del mundo.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'NEXT English Institute',
    url: SITE_URL,
  },
  courseMode: 'online',
  educationalLevel: 'Beginner',
  inLanguage: 'es',
  offers: {
    '@type': 'Offer',
    price: '29000',
    priceCurrency: 'ARS',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/online`,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OnlinePage />
    </>
  );
}
