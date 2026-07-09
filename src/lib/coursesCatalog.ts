import { elearningCourses } from '@/data/elearningCourses';

/**
 * Catálogo de cursos para uso EXCLUSIVO del backend (API Routes).
 *
 * El precio que se cobra en Mercado Pago NUNCA debe salir del cliente.
 * Por eso /api/create-preference recibe solo el "slug" del curso y busca
 * acá el precio real — así nadie puede manipular el monto desde el navegador.
 *
 * No se duplican los precios a mano: se derivan directamente de
 * elearningCourses.ts, que ya es la fuente de verdad usada en toda la
 * landing (tarjetas, hero de cada curso, etc). Un curso nuevo agregado ahí
 * queda disponible acá automáticamente, sin tocar este archivo.
 */

export interface CourseCatalogEntry {
  title: string;
  priceARS: number;
}

export const COURSES_CATALOG: Record<string, CourseCatalogEntry> = Object.fromEntries(
  elearningCourses.map((course) => [
    course.slug,
    { title: course.name, priceARS: course.price.current },
  ])
);

/** Devuelve el curso del catálogo o null si el slug no existe (evita pagos "fantasma"). */
export function getCourseBySlug(slug: string): CourseCatalogEntry | null {
  return COURSES_CATALOG[slug] ?? null;
}
