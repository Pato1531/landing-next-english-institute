export type Testimonio = {
  initials: string;
  avatarClass: 'av-b' | 'av-g' | 'av-p' | 'av-r';
  name: string;
  date: string;
  text: string;
};

/**
 * Reviews reales de Google — se mantienen exactamente las presentes en el HTML original.
 */
export const testimonios: Testimonio[] = [
  {
    initials: 'JA',
    avatarClass: 'av-b',
    name: 'Javier Arenas',
    date: 'hace 3 años',
    text: 'Nivel intensivo que cumplió con mis expectativas. La profe Sofi Menta tiene toda la paciencia y profesionalismo.',
  },
  {
    initials: 'AM',
    avatarClass: 'av-g',
    name: 'Adriana Mabel',
    date: 'hace 3 años',
    text: 'Un ambiente educativo agradable, trabajo grupal y compañerismo. Se aprende mucho y se pasa bien.',
  },
  {
    initials: 'PC',
    avatarClass: 'av-p',
    name: 'Paloma Cánovas',
    date: 'hace 3 años',
    text: 'Súper recomendable, las profesoras son muy profesionales y enseñan con mucha paciencia y dedicación.',
  },
  {
    initials: 'ML',
    avatarClass: 'av-r',
    name: 'Marcos L.',
    date: 'hace 1 año',
    text: 'Empecé sin saber nada y en un año ya puedo mantener conversaciones. Grupos reducidos y método muy efectivo.',
  },
  {
    initials: 'LG',
    avatarClass: 'av-b',
    name: 'Laura G.',
    date: 'hace 8 meses',
    text: 'Hice inglés para viajar y fue increíble. En dos meses tenía el vocabulario y confianza para hablar en el exterior.',
  },
  {
    initials: 'RP',
    avatarClass: 'av-g',
    name: 'Roberto P.',
    date: 'hace 5 meses',
    text: 'Excelente instituto, muy buen clima de trabajo y profes comprometidos. Ya anoté a mi hija también.',
  },
];
