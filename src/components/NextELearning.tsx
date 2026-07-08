'use client';

import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import { elearningCourses } from '@/data/elearningCourses';

export default function NextELearning() {
  return (
    <section
      id="elearning"
      className="scroll-mt-20 border-b border-violet-border bg-violet-darker"
      aria-labelledby="elearning-heading"
    >
      <div className="mx-auto max-w-wrap px-6 py-14">

        {/* Header */}
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-border">
          Next E-Learning
        </span>

        <div className="mb-9 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2
              id="elearning-heading"
              className="mb-3 text-2xl font-bold leading-snug text-white sm:text-3xl"
            >
              Aprendé inglés<br />desde donde estés
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-violet-border">
              Cursos 100% online con video, material descargable y certificado.
              A tu ritmo, cuando quieras.
            </p>
          </div>

          {/* Features — fila horizontal compacta, no apilada, para no alargar la sección */}
          <ul className="flex flex-wrap gap-x-8 gap-y-4" role="list">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-border"
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <p className="text-sm font-bold text-white">{f.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Cursos — tarjetas compactas lado a lado */}
        <div className="grid gap-5 sm:grid-cols-2" role="list" aria-label="Cursos online disponibles">
          {elearningCourses.map((course) => (
            <article
              key={course.slug}
              role="listitem"
              className="group flex overflow-hidden rounded-2xl bg-white/8 ring-1 ring-white/12 transition-colors hover:ring-white/25"
              aria-label={`Curso ${course.name}`}
            >
              <a href={`/online/${course.slug}`} className="flex w-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <div className="relative aspect-[16/10]">
                  {course.image.src ? (
                    <Image
                      src={course.image.src}
                      alt={course.image.alt}
                      fill
                      sizes="(min-width: 640px) 380px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder alt={course.image.alt} aspect="video" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1.5 text-base font-bold text-white">{course.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-violet-border/80">
                    {course.cardDescription}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2" aria-label="Detalles del curso">
                    {course.cardPills.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-white/8 px-3 py-1 text-xs text-violet-border ring-1 ring-white/10"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto flex items-center gap-2 text-sm font-bold text-white">
                    Ver curso
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-violet-border/50">
          Más cursos próximamente
        </p>

      </div>
    </section>
  );
}

const features = [
  {
    label: 'Video + slides',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    label: 'PDF descargable',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 18 15 15" />
      </svg>
    ),
  },
  {
    label: 'Certificado incluido',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];
