import Image from 'next/image';
import type { Curso } from '@/data/cursos';
import ImagePlaceholder from './ImagePlaceholder';

const tagClass: Record<string, string> = {
  'Desde cero': 'bg-violet-light text-violet',
  Conversación: 'bg-violet-light text-violet',
  'Cambridge / FCE': 'bg-violet-light2 text-violet-dark',
  Certificación: 'bg-violet-light2 text-violet-dark',
  Viajes: 'bg-violet-light text-violet',
  TCP: 'bg-violet-light text-violet',
  Negocios: 'bg-violet-light2 text-violet-dark',
  'A medida': 'bg-violet-light2 text-violet-dark',
};

export default function CursoCard({ curso }: { curso: Curso }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-violet-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet hover:shadow-lg hover:shadow-violet/10">
      <div className="relative aspect-video overflow-hidden">
        {curso.image ? (
          <Image
            src={curso.image}
            alt={curso.imageAlt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder
            alt={curso.imageAlt}
            aspect="video"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <span
          className={`mb-2.5 inline-block rounded-full px-3 py-1 text-xs font-bold ${
            tagClass[curso.tag] ?? 'bg-violet-light text-violet'
          }`}
        >
          {curso.tag}
        </span>
        <h3 className="mb-1.5 text-base font-bold text-violet-darker">{curso.title}</h3>
        <p className="text-sm leading-relaxed text-ink-secondary">{curso.description}</p>
        <a
          href="#contacto"
          className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-violet transition-colors group-hover:text-violet-dark"
        >
          Quiero anotarme →
        </a>
      </div>
    </article>
  );
}
