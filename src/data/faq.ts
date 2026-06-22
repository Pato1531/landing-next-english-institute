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
      'No, tenemos cursos desde nivel inicial. El test de nivel gratuito nos dará el primer diagnóstico para ubicar el grupo que te corresponde.',
  },
  {
    question: '¿Las clases son online, presenciales o ambas?',
    answer:
      'Ofrecemos las dos modalidades. Podés cursar 100% presencial en nuestra sede de La Unión, Ezeiza, 100% online..',
  },
  {
    question: '¿A partir de qué edad pueden anotarse?',
    answer:
      'Tenemos grupos desde los 6 años, con propuestas adaptadas a cada etapa: niños, adolescentes y adultos cursan por separado, con material y dinámicas pensadas para cada edad.',
  },
  {
    question: '¿Las certificaciones tienen validez internacional?',
    answer:
      'Sí, nuestro programa tiene recnocimiento internacional avalado por C.I.O.L ( Instituto Linguistico del Reino Unido ).',
  },
  {
    question: '¿Cómo son los grupos y cuántos alumnos hay por clase?',
    answer:
      'Trabajamos con grupos reducidos, de hasta 10 alumnos por clase, para garantizar seguimiento personalizado y más oportunidades de práctica oral para cada uno.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos tarjetas de débito y crédito, efectivo y pagos con QR y Mercado Pago. Consultá por planes de cuotas en recepción.',
  },
];
