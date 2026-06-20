export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * FAQ — se mantienen exactamente las presentes en el HTML original.
 */
export const faqItems: FaqItem[] = [
  {
    question: '¿Necesito saber algo de inglés para empezar?',
    answer:
      'No, tenemos cursos desde nivel cero absoluto. El test de nivel gratuito te ubica automáticamente en el grupo que te corresponde, sin importar tu punto de partida.',
  },
  {
    question: '¿Las clases son online, presenciales o ambas?',
    answer:
      'Ofrecemos las dos modalidades. Podés cursar 100% presencial en nuestra sede de La Unión, Ezeiza, 100% online, o combinar ambas según tu semana.',
  },
  {
    question: '¿A partir de qué edad pueden anotarse?',
    answer:
      'Tenemos grupos desde los 6 años, con propuestas adaptadas a cada etapa: niños, adolescentes y adultos cursan por separado, con material y dinámicas pensadas para cada edad.',
  },
  {
    question: '¿Las certificaciones tienen validez internacional?',
    answer:
      'Sí, preparamos para exámenes internacionales reconocidos como Cambridge (FCE y otros), además de certificar tu progreso interno en cada nivel que completes con nosotros.',
  },
  {
    question: '¿Cómo son los grupos y cuántos alumnos hay por clase?',
    answer:
      'Trabajamos con grupos reducidos, de hasta 8 alumnos por clase, para garantizar seguimiento personalizado y más oportunidades de práctica oral para cada uno.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos tarjetas de débito y crédito (Visa, Mastercard, Cabal, Naranja), pagos con QR y Mercado Pago. Consultá por planes de cuotas en recepción.',
  },
];
