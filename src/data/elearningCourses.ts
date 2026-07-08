export type CourseModule = {
  number: string;
  title: string;
  lessons: string[];
};

export type CourseIncludeIcon =
  | 'video'
  | 'slides'
  | 'subtitles'
  | 'pdf'
  | 'practice'
  | 'certificate'
  | 'access';

export type CourseIncludeItem = {
  icon: CourseIncludeIcon;
  label: string;
  desc: string;
};

export type CourseFaq = {
  q: string;
  a: string;
};

export type ElearningCourse = {
  /** Usado en la URL: /online/[slug] */
  slug: string;
  name: string;
  tagline: string;

  /** Descripción corta — tarjeta en la home y en /online */
  cardDescription: string;

  /** Copy del hero de la sub-landing */
  heroTitle: string;
  heroDescription: string;

  image: {
    /** Ruta en /public. Si no está definida, se muestra ImagePlaceholder. */
    src?: string;
    alt: string;
  };

  /** Pills cortas para la tarjeta compacta (home + listado) */
  cardPills: string[];
  /** Pills de resumen debajo del CTA del hero en /online */
  summaryPills: string[];

  level: string;
  language: string;

  price: {
    current: number;
    original: number;
    currency: 'ARS';
  };

  /** Link de pago de Mercado Pago para ESTE curso puntual. */
  mpLink: string;
  whatsappMessage: string;

  audienceHeading: string;
  audience: string[];

  modules: CourseModule[];
  includes: CourseIncludeItem[];
  faqs: CourseFaq[];

  seo: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    schemaDescription: string;
    educationalLevel: string;
  };
};

export const elearningCourses: ElearningCourse[] = [
  {
    slug: 'english-from-zero',
    name: 'English from Zero',
    tagline: 'Desde cero hasta poder presentarte, contar tu día y describir tu mundo en inglés',

    cardDescription:
      'Gramática y vocabulario esencial en 12 lecciones bilingües, paso a paso, con Anna y Tom.',

    heroTitle: 'Desde cero hasta<br />hablar de vos en inglés',
    heroDescription:
      'El punto de partida ideal si nunca estudiaste inglés o querés reforzar las bases: gramática fundamental y vocabulario esencial en 12 lecciones bilingües, cada una construida sobre la anterior, para que nunca sientas que perdiste el hilo.',

    image: {
      alt: 'Curso online English from Zero, inglés desde cero con lecciones bilingües guiadas por Anna y Tom',
    },

    cardPills: ['12 lecciones', '3 módulos', 'Nivel A1'],
    summaryPills: ['3 módulos', '12 lecciones', 'Inglés británico', 'Acceso por 6 meses'],

    level: 'Principiante absoluto (A1)',
    language: 'Inglés británico',

    price: { current: 29000, original: 48000, currency: 'ARS' },
    mpLink: 'https://mpago.la/2LKDYgc',
    whatsappMessage: 'Hola, tengo una consulta sobre el curso English from Zero',

    audienceHeading: 'Este curso es para vos si…',
    audience: [
      'Nunca estudiaste inglés y no sabés por dónde empezar',
      'Estudiaste hace mucho y sentís que tenés que arrancar de cero otra vez',
      'Te da vergüenza empezar un curso "para principiantes" y no entender igual',
      'Preferís avanzar despacio y seguro, sin saltarte las bases',
      'Pensás anotarte después en un curso más específico (viajes, entrevistas) pero primero querés la gramática de base',
      'Te sirve seguir una historia con personajes en vez de frases sueltas sin contexto',
    ],

    modules: [
      {
        number: '01',
        title: 'Los Cimientos',
        lessons: [
          'Alphabet, Numbers & Basic Greetings',
          'The Verb "To Be"',
          'Personal Pronouns & Possessives',
          'Articles & Basic Nouns',
        ],
      },
      {
        number: '02',
        title: 'Hablar del Presente',
        lessons: [
          'Present Simple — Rutinas y hábitos',
          'Common Verbs (have, like, want, need, go)',
          'Questions & Question Words',
          'Negatives & Short Answers',
        ],
      },
      {
        number: '03',
        title: 'El Mundo Alrededor',
        lessons: [
          'Family & People',
          'Time, Days & Numbers en contexto',
          'Colours, Adjectives & Descriptions',
          'Everyday Objects & "There is / There are"',
        ],
      },
    ],

    includes: [
      {
        icon: 'video',
        label: 'Video con guion bilingüe',
        desc: 'Explicaciones en español, práctica y diálogos en inglés con Anna y Tom',
      },
      {
        icon: 'subtitles',
        label: 'Voz nativa británica',
        desc: 'Con subtítulos, para entrenar el oído desde la primera lección',
      },
      {
        icon: 'pdf',
        label: 'Material descargable en PDF',
        desc: 'Vocabulario, frases clave y diálogo modelo de cada lección',
      },
      {
        icon: 'practice',
        label: 'Mini test de 10 preguntas',
        desc: 'Con hoja de respuestas separada, para practicar sin presión',
      },
      {
        icon: 'certificate',
        label: 'Certificado al finalizar',
        desc: 'Emitido y verificado digitalmente',
      },
      {
        icon: 'access',
        label: 'Acceso por 6 meses',
        desc: 'Repasá cualquier lección las veces que necesites',
      },
    ],

    faqs: [
      {
        q: '¿Necesito saber algo de inglés para hacer este curso?',
        a: 'No, es justamente el punto de partida: está pensado para quien nunca estudió inglés o quiere reforzar las bases desde cero.',
      },
      {
        q: '¿Quiénes son Anna y Tom?',
        a: 'Son los personajes que acompañan las 12 lecciones. Vas siguiendo su historia mientras practicás presentarte, hablar de tu rutina, tu familia y más, en situaciones cotidianas reales.',
      },
      {
        q: '¿Cuánto tiempo lleva completarlo?',
        a: 'Son 3 módulos con 12 lecciones de 3 a 5 minutos cada una. Cada lección retoma lo aprendido en la anterior, así que rinde ir a tu propio ritmo.',
      },
      {
        q: '¿Desde qué dispositivos puedo verlo?',
        a: 'Desde cualquier dispositivo con conexión a internet: celular, tablet o computadora.',
      },
      {
        q: '¿Por cuánto tiempo tengo acceso?',
        a: 'El acceso es por 6 meses. Pagás una vez y podés volver a verlo las veces que quieras.',
      },
      {
        q: '¿El certificado tiene validez?',
        a: 'Es un certificado emitido por NEXT English Institute, que acredita la finalización del curso.',
      },
      {
        q: '¿Cómo accedo después de pagar?',
        a: 'Una vez confirmado el pago, recibís un email con tus credenciales de acceso al campus online.',
      },
    ],

    seo: {
      metaTitle: 'English from Zero — Curso Online de Inglés desde Cero',
      metaDescription:
        'Aprendé inglés desde cero: gramática y vocabulario esencial en 12 lecciones bilingües con Anna y Tom. Nivel A1, sin conocimientos previos. Certificado incluido.',
      ogDescription:
        'Aprendé inglés desde cero: gramática y vocabulario esencial en 12 lecciones bilingües con Anna y Tom. Nivel A1, sin conocimientos previos.',
      schemaDescription:
        'Curso de inglés para principiantes absolutos: gramática fundamental y vocabulario esencial construidos de forma progresiva en 12 lecciones bilingües.',
      educationalLevel: 'Beginner',
    },
  },
  {
    slug: 'english-for-tourism',
    name: 'English for Tourism',
    tagline: 'Inglés para viajar, sin excusas',

    cardDescription:
      'Comunicarte con confianza en aeropuertos, hoteles y destinos del mundo.',

    heroTitle: 'Inglés para viajar,<br />sin excusas',
    heroDescription:
      'Un curso corto, claro y práctico para que puedas comunicarte con confianza en aeropuertos, hoteles y destinos de todo el mundo.',

    image: {
      src: '/images/elearning/english-for-tourism.jpg',
      alt: 'Clase online de inglés para turismo, con vocabulario para el check-in del aeropuerto en pantalla',
    },

    cardPills: ['12 lecciones', '3 módulos', 'Nivel A1-B1'],
    summaryPills: ['3 módulos', 'Subtítulos', 'Certificado', 'Acceso por 6 meses'],

    level: 'Principiante',
    language: 'Inglés general',

    price: { current: 29000, original: 48000, currency: 'ARS' },
    mpLink: 'https://mpago.li/1QN6N6w',
    whatsappMessage: 'Hola, tengo una consulta sobre el curso English for Tourism',

    audienceHeading: 'Este curso es para vos si…',
    audience: [
      'Tenés un viaje planeado y el inglés te genera inseguridad',
      'Estudiaste inglés hace años y necesitás refrescar lo práctico',
      'Querés poder manejarte solo sin depender de traductores',
      'No tenés tiempo para un curso largo, pero sí querés aprender',
      'Vas a viajar por primera vez al exterior y querés ir preparado',
      'Querés hablar con más soltura en situaciones cotidianas de viaje',
    ],

    modules: [
      {
        number: '01',
        title: 'En el aeropuerto y el hotel',
        lessons: [
          'Check-in y check-out: frases clave',
          'Preguntas en migraciones y aduana',
          'Pedir información y orientarte',
          'Hablar con el personal del hotel',
        ],
      },
      {
        number: '02',
        title: 'Moverse, comer y explorar',
        lessons: [
          'Transporte: taxi, metro, bus',
          'Pedir comida en restaurantes',
          'Compras y regateo básico',
          'Actividades turísticas y paseos',
        ],
      },
      {
        number: '03',
        title: 'Situaciones reales e imprevistas',
        lessons: [
          'Pedir ayuda y reportar problemas',
          'En la farmacia o ante una emergencia',
          'Conversación casual con nativos',
          'Vocabulario de viaje esencial',
        ],
      },
    ],

    includes: [
      {
        icon: 'video',
        label: 'Video con explicaciones',
        desc: 'Explicaciones claras y directas, organizadas en 3 módulos',
      },
      {
        icon: 'slides',
        label: 'Slides por lección',
        desc: 'Material visual para acompañar cada video',
      },
      {
        icon: 'subtitles',
        label: 'Subtítulos en español',
        desc: 'Para que no se te escape ningún detalle',
      },
      {
        icon: 'pdf',
        label: 'PDF de material de estudio',
        desc: 'Descargable, para repasar cuando quieras',
      },
      {
        icon: 'certificate',
        label: 'Certificado al finalizar',
        desc: 'Emitido y verificado digitalmente',
      },
      {
        icon: 'access',
        label: 'Acceso por 6 meses',
        desc: 'Volvé a verlo cuando lo necesites',
      },
    ],

    faqs: [
      {
        q: '¿Necesito saber inglés para hacer este curso?',
        a: 'No. Está diseñado para principiantes y personas con conocimiento muy básico. Arrancás desde cero.',
      },
      {
        q: '¿Cuánto tiempo lleva completarlo?',
        a: 'El curso está diseñado para que lo realices a tus tiempos, está dividido en 3 módulos.',
      },
      {
        q: '¿Desde qué dispositivos puedo verlo?',
        a: 'Desde cualquier dispositivo con conexión a internet: celular, tablet o computadora.',
      },
      {
        q: '¿Por cuánto tiempo tengo acceso?',
        a: 'El acceso es por 6 meses. Pagás una vez y podés volver a verlo las veces que quieras.',
      },
      {
        q: '¿El certificado tiene validez?',
        a: 'Es un certificado emitido por NEXT English Institute, que acredita la finalización del curso.',
      },
      {
        q: '¿Cómo accedo después de pagar?',
        a: 'Una vez confirmado el pago, recibís un email con tus credenciales de acceso al campus online.',
      },
    ],

    seo: {
      metaTitle: 'English for Tourism — Curso Online',
      metaDescription:
        'Aprendé inglés para viajar desde cero. Video, subtítulos, PDF descargable y certificado. 3 módulos, ~1 hora. Empezá hoy.',
      ogDescription:
        'Aprendé inglés para viajar desde cero. Video, subtítulos, PDF descargable y certificado. 3 módulos, ~1 hora.',
      schemaDescription:
        'Curso de inglés orientado a viajeros. Aprendé a comunicarte en aeropuertos, hoteles y destinos turísticos del mundo.',
      educationalLevel: 'Beginner',
    },
  },
  {
    slug: 'job-ready-english',
    name: 'Job Ready English',
    tagline: 'Preparate para tu próxima entrevista de trabajo en inglés',

    cardDescription:
      'Curso práctico de inglés británico para rendir una entrevista laboral con confianza.',

    heroTitle: 'Tu entrevista en inglés,<br />sin sorpresas',
    heroDescription:
      'Preparate para tu próxima entrevista de trabajo en inglés en menos de una semana: de la presentación personal al cierre y seguimiento post-entrevista, con tus propias respuestas ya armadas.',

    image: {
      src: '/images/elearning/job-ready-english.jpg',
      alt: 'Simulación de entrevista laboral en inglés entre estudiante y profesor en el aula de Next English Institute',
    },

    cardPills: ['8 lecciones', '2 módulos', 'Nivel A2-B1'],
    summaryPills: ['2 módulos', '8 lecciones', 'Inglés británico', 'Acceso por 6 meses'],

    level: 'Principiante a pre-intermedio (A2 → B1)',
    language: 'Inglés británico',

    price: { current: 29000, original: 48000, currency: 'ARS' },
    mpLink: 'https://mpago.la/2EtErSm',
    whatsappMessage: 'Hola, tengo una consulta sobre el curso Job Ready English',

    audienceHeading: 'Este curso es para vos si…',
    audience: [
      'Tenés una entrevista laboral en inglés a la vuelta de la esquina',
      'Sabés inglés básico pero te bloqueás al hablar de vos en una entrevista',
      'Ya te rechazaron una postulación por no manejarte bien en inglés',
      'Necesitás hablar de tu experiencia y tus fortalezas sin sonar memorizado',
      'Te da inseguridad la pregunta por el salario o los vacíos laborales',
      'Preferís practicar con situaciones reales y no con teoría de gramática',
    ],

    modules: [
      {
        number: '01',
        title: 'Getting Ready — La preparación',
        lessons: [
          'Hablar de vos: presentación personal',
          'Tu CV y tu experiencia laboral',
          'Preguntas frecuentes de entrevista',
          'Investigar la empresa y qué preguntar vos',
        ],
      },
      {
        number: '02',
        title: 'In the Interview & Closing — La entrevista y el cierre',
        lessons: [
          'Fortalezas y debilidades (método STAR)',
          'Cómo hablar de salario',
          'Preguntas difíciles y vacíos laborales',
          'Cerrar la entrevista y los próximos pasos',
        ],
      },
    ],

    includes: [
      {
        icon: 'video',
        label: 'Video con guion bilingüe',
        desc: 'Explicaciones en español, práctica y diálogos en inglés',
      },
      {
        icon: 'subtitles',
        label: 'Voz nativa británica',
        desc: 'Con subtítulos, para entrenar el oído real',
      },
      {
        icon: 'pdf',
        label: 'Material descargable en PDF',
        desc: 'Vocabulario, frases clave y diálogo modelo de cada lección',
      },
      {
        icon: 'practice',
        label: 'Ejercicio de práctica guiado',
        desc: 'Escribís tu propia respuesta, no elegís opción múltiple',
      },
      {
        icon: 'certificate',
        label: 'Certificado al finalizar',
        desc: 'Emitido y verificado digitalmente',
      },
      {
        icon: 'access',
        label: 'Acceso por 6 meses',
        desc: 'Volvé a repasar antes de cada entrevista',
      },
    ],

    faqs: [
      {
        q: '¿Necesito un inglés avanzado para hacer este curso?',
        a: 'No. Está pensado para nivel principiante a pre-intermedio (A2 → B1). Salís del curso con tus propias respuestas ya armadas, no con un nivel de inglés distinto.',
      },
      {
        q: '¿Cuánto tiempo lleva completarlo?',
        a: 'Son 2 módulos con 8 lecciones de 3 a 5 minutos cada una. Podés terminarlo en menos de una semana yendo a tu ritmo.',
      },
      {
        q: '¿Desde qué dispositivos puedo verlo?',
        a: 'Desde cualquier dispositivo con conexión a internet: celular, tablet o computadora.',
      },
      {
        q: '¿Por cuánto tiempo tengo acceso?',
        a: 'El acceso es por 6 meses. Pagás una vez y podés repasar antes de cada entrevista las veces que quieras.',
      },
      {
        q: '¿El certificado tiene validez?',
        a: 'Es un certificado emitido por NEXT English Institute, que acredita la finalización del curso.',
      },
      {
        q: '¿Cómo accedo después de pagar?',
        a: 'Una vez confirmado el pago, recibís un email con tus credenciales de acceso al campus online.',
      },
    ],

    seo: {
      metaTitle: 'Job Ready English — Curso Online de Inglés para Entrevistas',
      metaDescription:
        'Preparate para tu entrevista de trabajo en inglés. Inglés británico, guiones bilingües y ejercicios prácticos. 2 módulos, 8 lecciones. Empezá hoy.',
      ogDescription:
        'Preparate para tu entrevista de trabajo en inglés en menos de una semana. Inglés británico, guiones bilingües y ejercicios prácticos.',
      schemaDescription:
        'Curso práctico de inglés británico para rendir una entrevista laboral: presentación personal, experiencia, preguntas difíciles, salario y cierre.',
      educationalLevel: 'Beginner to Intermediate',
    },
  },
];

export function getElearningCourse(slug: string): ElearningCourse | undefined {
  return elearningCourses.find((course) => course.slug === slug);
}
