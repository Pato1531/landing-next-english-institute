export type Curso = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  imageAlt: string;
  imagePrompt: string;
  /** Ruta de la foto real en /public. Si no está definida, se muestra el placeholder. */
  image?: string;
};

/**
 * Cursos por nivel — se mantienen exactamente los presentes en el HTML original.
 */
export const cursos: Curso[] = [
  {
    slug: 'Nivel Inicial',
    tag: 'Nivel Inicial',
    title: 'Principiante',
    description:
      'Ideal si nunca estudiaste inglés o necesitás retomarlo desde el inicio.',
    imageAlt: 'Alumnos principiantes en clase de inglés practicando vocabulario básico',
    imagePrompt:
      'Modern english classroom, beginner students writing vocabulary, warm lighting, premium education environment, Argentina, candid photography, natural expressions, shallow depth of field',
    image: '/images/cursos/nivel-inicial.jpg',
  },
  {
    slug: 'Básico',
    tag: 'Herramientas básicas',
    title: 'Básico',
    description:
      'Vocabulario y Gramática base. Se comienza a trabajar en la fluidez oral, comprensión auditiva y expresión escrita para el día a día.',
    imageAlt: 'Grupo de alumnos básicos conversando en inglés en ronda',
    imagePrompt:
      'Small group of teenagers having an english conversation class, sitting in a circle, teacher facilitating, warm natural light, candid photography, premium education environment, Argentina',
    image: '/images/cursos/basico.jpg',
  },
  {
    slug: 'Intermedio',
    tag: 'Fortaleciendo el idioma',
    title: 'Intermedio',
    description:
      'Se trabaja con material específico, Se comienza a manejar el idioma en todas sus habilidades.',
    imageAlt: 'Alumno intermedio',
    imagePrompt:
      'Advanced english students reviewing Cambridge FCE exam material, focused expressions, modern classroom, natural lighting, candid photography, Argentina, shallow depth of field',
    image: '/images/cursos/intermedio.jpg',
  },
  {
    slug: 'certificacion',
    tag: 'Certificación',
    title: 'Preparación para exámenes',
    description:
      'Cambridge, Oxford, TOEFL e IELTS. Preparación dirigida con simulacros y seguimiento personalizado hasta el examen.',
    imageAlt: 'Docente guiando a un alumno en un simulacro de examen internacional de inglés',
    imagePrompt:
      'Teacher helping a student prepare for an international english exam, one-on-one tutoring, papers and laptop on desk, warm premium lighting, candid photography, Argentina',
    image: '/images/cursos/certificacion.jpg',
  },
];

/**
 * Talleres temáticos — se mantienen exactamente los presentes en el HTML original.
 */
export const talleres: Curso[] = [
  {
    slug: 'viajes',
    tag: 'Viajes',
    title: 'Inglés para viajar',
    description:
      'Vocabulario y frases clave para aeropuertos, hoteles, restaurantes y situaciones cotidianas en el exterior.',
    imageAlt: 'Persona practicando frases de inglés para viajar con una maleta',
    imagePrompt:
      'Young adult practicing travel english phrases, suitcase and passport on table, warm natural light, candid photography, premium lifestyle, Argentina',
  },
  {
    slug: 'tcp',
    tag: 'TCP',
    title: 'Inglés para Tripulantes de Cabina',
    description:
      'Inglés para aspirantes a Tripulantes de Cabina, Vocabulario básico del lenguaje y de atención al pasajero.',
    imageAlt: 'Estudiante de Tripulación de Cabina practicando inglés técnico aeronáutico',
    imagePrompt:
      'Flight attendant student practicing technical aviation english, uniform, classroom setting, professional warm lighting, candid photography, Argentina',
  },
  {
    slug: 'Entrevistas',
    tag: 'Entrevistas',
    title: 'Preparación para entrevistas en inglés y armados de CV',
    description:
      'Persona en Preparación para entrevistas en inglés y armados de CV.',
    imageAlt: 'Profesionales practicando una presentación de preparación en inglés',
    imagePrompt:
      'Profesionales practicando una presentación de preparación en inglés',
  },
  {
    slug: 'Fonética',
    tag: 'Fonética',
    title: 'Taller de fonética',
    description:
      'Taller orientado a corregir errores de pronunciación.',
    imageAlt: 'Docente brindando Taller orientado a corregir errores de pronunciación junto a un grupo de estudio',
    imagePrompt:
      'Docente brindando Taller orientado a corregir errores de pronunciación junto a un grupo de estudio',
  },
];
