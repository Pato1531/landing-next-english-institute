import type { Metadata, Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { SITE, SITE_URL } from '@/lib/site';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const title = 'NEXT English Institute | Instituto de inglés en Ezeiza, La Unión';
const description =
  'Clases de inglés presenciales y online en Ezeiza, La Unión, Buenos Aires. Grupos reducidos, docentes certificados y preparación para Cambridge, TOEFL e IELTS. Test de nivel gratuito.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | NEXT English Institute',
  },
  description,
  keywords: [
    'instituto de inglés Ezeiza',
    'clases de inglés Ezeiza',
    'inglés La Unión Ezeiza',
    'curso de inglés Buenos Aires',
    'inglés para viajar',
    'inglés de negocios',
    'preparación Cambridge FCE',
    'test de nivel de inglés gratis',
    'academia de inglés Ezeiza Sur',
  ],
  authors: [{ name: 'NEXT English Institute' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: SITE.name,
    title,
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXT English Institute — Ezeiza, La Unión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-192.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#62377c',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE.name,
  alternateName: 'Next English',
  description,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: '+541155805810',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.neighborhood + ', ' + SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  sameAs: [SITE.instagramUrl],
  areaServed: {
    '@type': 'City',
    name: 'Ezeiza',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={openSans.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white font-sans text-violet-darker antialiased">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
