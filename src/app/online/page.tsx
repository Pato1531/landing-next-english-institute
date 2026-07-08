import { permanentRedirect } from 'next/navigation';

/**
 * /online pasa a ser un índice de un solo curso histórico por razones de SEO:
 * esta URL ya está indexada y compartida (WhatsApp, redes, campañas).
 * En vez de romperla al pasar a un modelo multi-curso, redirige de forma
 * permanente (308) al detalle de English for Tourism, preservando casi toda
 * la señal de posicionamiento acumulada. Los cursos nuevos viven directamente
 * en /online/[slug] — ver src/data/elearningCourses.ts.
 */
export default function OnlineIndexRedirect() {
  permanentRedirect('/online/english-for-tourism');
}
