export type Slide = {
  badge: string;
  heading: string;
  sub: string;
  ctaLabel: string;
  ctaHref: string;
  imageAlt: string;
  imagePrompt: string;
  /** Ruta de la foto real en /public. Si no está definida, se muestra el placeholder. */
  image?: string;
  /**
   * Punto de anclaje vertical de la foto dentro del banner (0% = tope, 100% = base).
   * El banner del hero es mucho más ancho/bajo que un 16:9 estándar, así que en
   * pantallas anchas `object-cover` recorta más arriba y abajo de lo que recortamos
   * al procesar la foto. Este valor evita volver a recortar el archivo: solo mueve
   * la "ventana" visible para mantener a las personas en cuadro. Default: 50%.
   */
  focalY?: number;
};

/**
 * Hero slider — se mantiene el mismo mensaje y orden del HTML original.
 *
 * IMAGEN — Hero Slide 1: resuelta con foto real (/images/hero/hero-1.jpg).
 * IMAGEN — Hero Slide 2: resuelta con foto real (/images/hero/hero-2.jpg).
 * IMAGEN — Hero Slide 3: resuelta (/images/hero/hero-3.jpg).
 * Nota: imagen generada con IA (no es foto real del instituto), usando una foto real de la
 * sede como referencia de ambiente/estilo. Igual criterio que talleres sin foto disponible.
 * IMAGEN — Hero Slide 4: resuelta (/images/hero/hero-4.jpg). También generada con IA con el
 * mismo criterio que el Slide 3 (referencia visual real, sin pretender ser foto documental).
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
    image: '/images/hero/hero-1.jpg',
    focalY: 68,
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
    image: '/images/hero/hero-2.jpg',
    focalY: 65,
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
    image: '/images/hero/hero-3.jpg',
    focalY: 40,
  },
  {
    badge: '🌐 Next E-Learning',
    heading: 'Aprendé inglés online, a tu ritmo y desde donde estés',
    sub: 'Cursos 100% online con video, subtítulos, material descargable y certificado. Sin horarios fijos.',
    ctaLabel: 'Ver cursos online →',
    ctaHref: '#elearning',
    imageAlt: 'Persona tomando un curso de inglés online desde su computadora',
    imagePrompt:
      'Person studying english online on a laptop, travel accessories nearby, passport and map on desk, bright natural light, candid photography, premium education environment',
    image: '/images/hero/hero-4.jpg',
    focalY: 35,
  },
];
