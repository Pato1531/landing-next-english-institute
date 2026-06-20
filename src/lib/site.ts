export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://www.nextenglishezeiza.com.ar';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491155805810';

export const INSTAGRAM_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? 'nextezeiza.sur';

export const SITE = {
  name: 'NEXT English Institute',
  shortName: 'Next English',
  sede: 'Sede Ezeiza Sur · La Unión',
  address: {
    street: 'Av. El Trébol 31',
    neighborhood: 'La Unión',
    city: 'Ezeiza',
    region: 'Buenos Aires',
    country: 'AR',
  },
  phoneDisplay: '11 5580-5810',
  instagramHandle: INSTAGRAM_HANDLE,
  instagramUrl: `https://instagram.com/${INSTAGRAM_HANDLE}`,
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: (text: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Av.+El+Tr%C3%A9bol+31,+Ezeiza,+Buenos+Aires&output=embed',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+El+Tr%C3%A9bol+31+Ezeiza',
};
