import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NEXT English Institute',
    short_name: 'Next English',
    description:
      'Instituto de inglés en Ezeiza, La Unión. Clases presenciales y online para todas las edades, con certificación internacional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#62377c',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
