export type Curso = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  imageAlt: string;
  imagePrompt: string;
};

/**
 * Cursos por nivel — se mantienen exactamente los presentes en el HTML original.
 */
export const cursos: Curso[] = [
  {
    slug: 'principiante',
    tag: 'Desde cero',
    title: 'Principiante',
    description:
      'Vocabulario, gramática base y pronunciación. Ideal si nunca estudiaste inglés o necesitás retomarlo desde el inicio.',
    imageAlt: 'Alumnos principiantes en clase de inglés practicando vocabulario básico',
    imagePrompt:
      'Modern english classroom, beginner students writing vocabulary, warm lighting, premium education environment, Argentina, candid photography, natural expressions, shallow depth of field',
  },
  {
    slug: 'intermedio',
    tag: 'Conversación',
    title: 'Intermedio',
    description:
      'Foco en fluidez oral, comprensión auditiva y expresión escrita para el día a día y situaciones reales.',
    imageAlt: 'Grupo de alumnos intermedios conversando en inglés en ronda',
    imagePrompt:
      'Small group of teenagers having an english conversation class, sitting in a circle, teacher facilitating, warm natural light, candid photography, premium education environment, Argentina',
  },
  {
    slug: 'avanzado',
    tag: 'Cambridge / FCE',
    title: 'Avanzado',
    description:
      'Entrenamiento intensivo con material oficial, pensado para quienes ya manejan el idioma y buscan perfeccionarlo.',
    imageAlt: 'Alumno avanzado resolviendo material de preparación Cambridge FCE',
    imagePrompt:
      'Advanced english students reviewing Cambridge FCE exam material, focused expressions, modern classroom, natural lighting, candid photography, Argentina, shallow depth of field',
  },
  {
    slug: 'certificacion',
    tag: 'Certificación',
    title: 'Preparación para exámenes',
    description:
      'Cambridge, TOEFL e IELTS. Preparación dirigida con simulacros y seguimiento personalizado hasta el examen.',
    imageAlt: 'Docente guiando a un alumno en un simulacro de examen internacional de inglés',
    imagePrompt:
      'Teacher helping a student prepare for an international english exam, one-on-one tutoring, papers and laptop on desk, warm premium lighting, candid photography, Argentina',
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
      'Vocabulario técnico y de atención al pasajero orientado a quienes se forman como TCP o ya trabajan en la industria.',
    imageAlt: 'Estudiante de Tripulación de Cabina practicando inglés técnico aeronáutico',
    imagePrompt:
      'Flight attendant student practicing technical aviation english, uniform, classroom setting, professional warm lighting, candid photography, Argentina',
  },
  {
    slug: 'negocios',
    tag: 'Negocios',
    title: 'Inglés de negocios',
    description:
      'Comunicación profesional: mails, reuniones, presentaciones y negociación en entornos corporativos.',
    imageAlt: 'Profesionales practicando una presentación de negocios en inglés',
    imagePrompt:
      'Young professionals practicing a business english presentation, modern office-style classroom, natural light, candid photography, premium corporate environment, Argentina',
  },
  {
    slug: 'a-medida',
    tag: 'A medida',
    title: 'Talleres a pedido',
    description:
      '¿Tu equipo o grupo necesita algo específico? Armamos talleres temáticos a medida, consultanos.',
    imageAlt: 'Docente diseñando un taller de inglés personalizado junto a un grupo pequeño',
    imagePrompt:
      'Teacher designing a custom english workshop with a small group, whiteboard with notes, warm collaborative atmosphere, candid photography, Argentina',
  },
];
