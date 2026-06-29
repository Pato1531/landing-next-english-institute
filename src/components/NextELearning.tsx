'use client';

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

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left — texto e íconos */}
          <div>
            <h2
              id="elearning-heading"
              className="mb-3 text-2xl font-bold leading-snug text-white sm:text-3xl"
            >
              Aprendé inglés<br />desde donde estés
            </h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-violet-border">
              Cursos 100% online con video, material descargable y certificado.
              A tu ritmo, cuando quieras.
            </p>

            <ul className="flex flex-col gap-5" role="list">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-border"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{f.label}</p>
                    <p className="text-xs leading-relaxed text-violet-border/70">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — card del curso */}
          <div>
            <article
              className="overflow-hidden rounded-2xl bg-white/8 ring-1 ring-white/12"
              aria-label="Curso English for Tourism"
            >
              {/* Imagen placeholder del curso */}
              <div
                className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-dark via-violet-darker to-[#1a3a6b]"
                aria-hidden="true"
              >
                <div className="flex flex-col items-center gap-2 opacity-70">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M5 17.5L12 3l7 14.5M9 12h6" />
                    <path d="M3 21h18" />
                  </svg>
                  <span className="text-xs uppercase tracking-widest text-white/60">E-Learning</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-1.5 text-lg font-bold text-white">English for Tourism</h3>
                <p className="mb-4 text-sm leading-relaxed text-violet-border/80">
                  Comunicarte con confianza en aeropuertos, hoteles y destinos del mundo.
                </p>

                {/* Meta pills */}
                <div className="mb-5 flex flex-wrap gap-2" aria-label="Detalles del curso">
                  {pills.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-white/8 px-3 py-1 text-xs text-violet-border ring-1 ring-white/10"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/online"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver curso
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>

                <p className="mt-3 text-center text-xs text-violet-border/50">
                  Más cursos próximamente
                </p>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}

const features = [
  {
    label: 'Video + slides',
    desc: 'Explicaciones claras con material visual en cada lección.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    label: 'PDF descargable',
    desc: 'Material de estudio para repasar cuando quieras.',
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
    desc: 'Emitido y verificado digitalmente al completar el curso.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

const pills = ['~1 hora', '3 módulos', 'Subtítulos'];
