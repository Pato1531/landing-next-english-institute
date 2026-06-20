export type Slide = {
  badge: string;
  heading: string;
  sub: string;
  ctaLabel: string;
  ctaHref: string;
  imageAlt: string;
  imagePrompt: string;
};

/**
 * Hero slider — se mantiene el mismo mensaje y orden del HTML original.
 *
 * IMAGEN — Hero Slide 1
 * Foto real. Escenario: aula moderna del instituto en Ezeiza.
 * Sujetos: docente interactuando con alumnos en clase presencial.
 * Estilo: natural, iluminación cálida, premium, espontánea, evitar fotos stock.
 * Orientación: 16:9 — Tamaño: 1920x1080.
 *
 * IMAGEN — Hero Slide 2
 * Foto real. Escenario: taller temático (inglés de negocios / viajes / TCP).
 * Sujetos: alumnos jóvenes y adultos en dinámica grupal.
 * Estilo: natural, iluminación cálida, premium, espontánea.
 * Orientación: 16:9 — Tamaño: 1920x1080.
 *
 * IMAGEN — Hero Slide 3
 * Foto real. Escenario: alumno haciendo el test de nivel en una notebook/tablet.
 * Sujetos: alumno solo, concentrado, ambiente luminoso.
 * Estilo: natural, iluminación cálida, premium, espontánea.
 * Orientación: 16:9 — Tamaño: 1920x1080.
 */
export const heroSlides: Slide[] = [
  {
    badge: '📍 Ezeiza Sur · La Unión',
    heading: 'Clases online y presenciales en La Unión, Ezeiza',
    sub: 'Clases para todos los niveles y edades desde los 6 años con certificación internacional.',
    ctaLabel: 'Quiero empezar →',
    ctaHref: '#contacto',
    imageAlt: 'Docente interactuando con alumnos en un aula moderna del instituto',
    imagePrompt:
      'Modern english classroom, teacher helping students, teenagers learning english, warm lighting, premium education environment, Argentina, candid photography, natural expressions, shallow depth of field',
  },
  {
    badge: '🎯 Propuesta especializada',
    heading: 'Cursos y talleres temáticos: inglés para viajar, TCP, inglés de negocios',
    sub: 'Inglés con propósito. Aprendés lo que realmente vas a usar.',
    ctaLabel: 'Ver cursos →',
    ctaHref: '#cursos',
    imageAlt: 'Grupo de alumnos participando de un taller temático de inglés',
    imagePrompt:
      'Diverse group of young adults in a themed english workshop, business and travel vocabulary on whiteboard, warm natural light, candid photography, premium education environment, Argentina',
  },
  {
    badge: '✅ Gratis · Sin compromiso',
    heading: 'Test de nivel gratuito online',
    sub: 'Hacé el test en línea y te ayudamos a elegir el curso ideal para vos.',
    ctaLabel: 'Hacer el test gratis →',
    ctaHref: '#contacto',
    imageAlt: 'Alumno concentrado realizando el test de nivel de inglés en una notebook',
    imagePrompt:
      'Student taking an online english level test on a laptop, focused and relaxed expression, bright natural light, candid photography, premium education environment, Argentina',
  },
];
