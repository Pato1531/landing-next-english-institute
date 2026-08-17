import Image from 'next/image';

const featureCards = [
  {
    title: 'Inglés para todas las edades',
    desc: 'Propuestas para niños, adolescentes y adultos, adaptadas a cada etapa.',
  },
  {
    title: 'Presencial + online',
    desc: 'Podés elegir la modalidad que mejor se adapte a tus tiempos y necesidades.',
  },
  {
    title: 'Certificación internacional',
    desc: 'Somos centro Oxford, con preparación para el Oxford Test of English y respaldo del C.I.O.L.',
  },
];

const metodo: { title: string; desc: string; icon: React.ReactNode }[] = [
  {
    title: 'Clases dinámicas',
    desc: 'Aprendemos usando el idioma en situaciones reales, con actividades participativas.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a8 8 0 1 1-3.2-6.4M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: 'Aprendizaje práctico',
    desc: 'Actividades diseñadas para participar, comprender y comunicarse.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5c3 0 6 1 8 3 2-2 5-3 8-3v13c-3 0-6 1-8 3-2-2-5-3-8-3V5z" />
      </svg>
    ),
  },
  {
    title: 'Tecnología educativa',
    desc: 'Herramientas digitales que complementan y potencian el aprendizaje.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    title: 'Aprender haciendo',
    desc: 'Juegos, canciones y dinámicas para estimular la participación.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V6l10 6-10 6z" />
      </svg>
    ),
  },
  {
    title: 'Docentes que acompañan',
    desc: 'Profesionales que siguen de cerca el proceso de cada estudiante.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.8 8.5c0 4.5-8.8 9.5-8.8 9.5s-8.8-5-8.8-9.5a4.3 4.3 0 0 1 8.8-2 4.3 4.3 0 0 1 8.8 2z" />
      </svg>
    ),
  },
];

/**
 * IMAGEN — Nosotros (imagen principal): resuelta con foto real (/images/nosotros/main.jpg).
 * Reemplazo completo de la sección (16/08), basado en mockup HTML provisto por Patricio.
 * Adaptado a los tokens de marca del sitio (violet / violet-dark / violet-darker, Open Sans)
 * en vez de la paleta y tipografías propias del mockup (Sora/Inter), para mantener la
 * identidad visual del resto de la landing.
 */
export default function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto max-w-wrap scroll-mt-20 border-b border-violet-border px-6 py-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Quiénes somos</p>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <h2 className="mb-5 text-2xl font-bold leading-tight text-violet-darker sm:text-3xl lg:text-4xl">
            Más que un instituto, una comunidad que aprende inglés
          </h2>

          <p className="mb-4 max-w-xl text-base leading-relaxed text-ink-secondary">
            Hace más de <strong className="font-bold text-violet-darker">3 años que estamos en La
            Unión, Ezeiza</strong>, formando a chicos, adolescentes y adultos en inglés. Somos
            parte de la <strong className="font-bold text-violet-darker">red de institutos Next</strong>,
            con presencia en todo el país, con experiencia, educación de calidad y{' '}
            <strong className="font-bold text-violet-darker">acompañamiento personalizado</strong>.
          </p>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-ink-secondary">
            Además, contamos con <strong className="font-bold text-violet-darker">certificación
            internacional</strong>, que permite validar el nivel de inglés y sumar una credencial
            reconocida que puede abrir{' '}
            <strong className="font-bold text-violet-darker">
              nuevas oportunidades académicas y laborales para el futuro
            </strong>
            .
          </p>

          <div className="flex items-center gap-2.5 text-sm text-ink-secondary">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-light text-violet">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" />
              </svg>
            </span>
            Director: <strong className="font-semibold text-violet-darker">Patricio Manganella</strong>
          </div>
        </div>

        <div className="relative aspect-[4/3.1] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/nosotros/main.jpg"
            alt="Sede de Next English Institute en La Unión, Ezeiza"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl bg-violet-darker/90 px-3.5 py-2 text-white shadow-lg backdrop-blur-sm">
            <span aria-hidden className="h-2 w-2 rounded-full bg-white" />
            <div className="leading-tight">
              <p className="text-[13px] font-bold">NEXT</p>
              <p className="text-[10px] text-violet-light2">English Institute</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {featureCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-violet-border bg-white px-6 py-8 text-center">
            <h3 className="mb-2 text-[16.5px] font-bold text-violet-darker">{card.title}</h3>
            <p className="text-sm leading-relaxed text-ink-secondary">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <h2 className="mb-10 text-2xl font-bold text-violet-darker sm:text-3xl">¿Cómo enseñamos?</h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {metodo.map((item) => (
            <div key={item.title} className="text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-light text-violet">
                {item.icon}
              </span>
              <h3 className="mb-1.5 text-sm font-bold text-violet-darker">{item.title}</h3>
              <p className="text-xs leading-relaxed text-ink-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-darker via-violet to-violet px-8 py-12 sm:px-12">
        <span aria-hidden className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/[0.06]" />
        <span aria-hidden className="pointer-events-none absolute -left-10 -bottom-20 h-40 w-40 rounded-full bg-white/[0.05]" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-violet-light2">
              Somos una comunidad
            </p>
            <h2 className="mb-3 text-xl font-bold leading-tight text-white sm:text-2xl">
              Más que aprender inglés, formamos comunidad
            </h2>
            <p className="text-sm leading-relaxed text-violet-light2">
              Organizamos actividades, encuentros y proyectos para que nuestros estudiantes
              practiquen, se conozcan y vivan el inglés.
            </p>
          </div>

          <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg">
            <p className="text-sm font-bold text-violet-darker">NEXT</p>
            <p className="mt-0.5 text-[9px] font-semibold text-violet">English Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}
