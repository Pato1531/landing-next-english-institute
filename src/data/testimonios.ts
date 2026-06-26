export type Testimonio = {
  initials: string;
  avatarClass: 'av-b' | 'av-g' | 'av-p' | 'av-r';
  name: string;
  date: string;
  text: string;
};

/**
 * Reviews reales de Google Maps — Next English Institute Ezeiza Sur / La Unión.
 * Última actualización: junio 2026.
 */
export const testimonios: Testimonio[] = [
  {
    initials: 'JS',
    avatarClass: 'av-p',
    name: 'Juli Sanchez',
    date: 'dic 2024',
    text: 'Lindo espacio para aprender inglés, buenos profes y grandes grupos de personas aprendiendo. La administración y los profes se encuentran atentos siempre a los estudiantes, brindándoles la mejor atención y disposición siempre.',
  },
  {
    initials: 'FG',
    avatarClass: 'av-g',
    name: 'Fernanda Gómez',
    date: 'dic 2024',
    text: 'Excelente instituto, mi hija estudia ahí y la verdad excelente atención, sin ninguna queja, muy buenos profesores. Mi hija aprendió muchísimo.',
  },
  {
    initials: 'SY',
    avatarClass: 'av-b',
    name: 'Sandra Yoeslebert',
    date: 'dic 2024',
    text: 'Recomiendo el instituto, mi nena fue este año y seguirá el próximo. Muy lindo lugar y excelente atención con los alumnos y padres. ¡Gracias!',
  },
  {
    initials: 'AZ',
    avatarClass: 'av-r',
    name: 'Alvaro J. Zamo',
    date: 'hace 4 días',
    text: 'Buena gente. Buenos profesores.',
  },
  {
    initials: 'CS',
    avatarClass: 'av-g',
    name: 'Cecilia Gabriela Silva',
    date: 'dic 2023',
    text: 'Hermoso lugar, y súper atentos con los chicos.',
  },
  {
    initials: 'RC',
    avatarClass: 'av-r',
    name: 'Rosa Analia Chiuchiolo',
    date: 'dic 2023',
    text: 'Excelente lugar y estoy muy conforme con la educación y el trato a los niños.',
  },
];
