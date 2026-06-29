'use client';

import Link from 'next/link';
import { SITE } from '@/lib/site';

const MP_LINK = 'https://mpago.li/1QN6N6w';

const modules = [
  {
    number: '01',
    title: 'En el aeropuerto y el hotel',
    lessons: [
      'Check-in y check-out: frases clave',
      'Preguntas en migraciones y aduana',
      'Pedir información y orientarte',
      'Hablar con el personal del hotel',
    ],
  },
  {
    number: '02',
    title: 'Moverse, comer y explorar',
    lessons: [
      'Transporte: taxi, metro, bus',
      'Pedir comida en restaurantes',
      'Compras y regateo básico',
      'Actividades turísticas y paseos',
    ],
  },
  {
    number: '03',
    title: 'Situaciones reales e imprevistas',
    lessons: [
      'Pedir ayuda y reportar problemas',
      'En la farmacia o ante una emergencia',
      'Conversación casual con nativos',
      'Vocabulario de viaje esencial',
    ],
  },
];

const includes = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    label: 'Video con explicaciones',
    desc: '12 lecciones en video, claras y directas',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    label: 'Slides por lección',
    desc: 'Material visual para acompañar cada video',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: 'Subtítulos en español',
    desc: 'Para que no se te escape ningún detalle',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 18 15 15" />
      </svg>
    ),
    label: 'PDF de material de estudio',
    desc: 'Descargable, para repasar cuando quieras',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    label: 'Certificado al finalizar',
    desc: 'Emitido y verificado digitalmente por NEI',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Acceso de por vida',
    desc: 'Volvé a verlo cuando lo necesites',
  },
];

const faqs = [
  {
    q: '¿Necesito saber inglés para hacer este curso?',
    a: 'No. Está diseñado para principiantes y personas con conocimiento muy básico. Arrancás desde cero.',
  },
  {
    q: '¿Cuánto tiempo lleva completarlo?',
    a: 'Aproximadamente 1 hora en total, dividida en 3 módulos de 4 lecciones cada uno. Podés hacerlo a tu ritmo.',
  },
  {
    q: '¿Desde qué dispositivos puedo verlo?',
    a: 'Desde cualquier dispositivo con conexión a internet: celular, tablet o computadora.',
  },
  {
    q: '¿Por cuánto tiempo tengo acceso?',
    a: 'El acceso es de por vida. Pagás una vez y podés volver a verlo cuando quieras.',
  },
  {
    q: '¿El certificado tiene validez?',
    a: 'Es un certificado emitido por NEXT English Institute, con verificación digital. No reemplaza certificaciones internacionales como Cambridge, pero acredita la finalización del curso.',
  },
  {
    q: '¿Cómo accedo después de pagar?',
    a: 'Una vez confirmado el pago, recibís un email con tus credenciales de acceso al campus online.',
  },
];

export default function OnlinePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-violet-darker antialiased">

      {/* Nav mínima */}
      <header className="border-b border-violet-border bg-white">
        <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-bold text-violet hover:text-violet-dark" aria-label="Volver al inicio">
            ← NEXT English Institute
          </Link>
          <a
            href={MP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-violet px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
          >
            Comprar — $29.000
          </a>
        </div>
      </header>

      <main id="main-content">

        {/* Hero */}
        <section className="border-b border-violet-border bg-violet-darker px-6 py-16 text-center" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-2xl">
            <span className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-border">
              Next E-Learning
            </span>
            <h1 id="hero-heading" className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Inglés para viajar,<br />sin excusas
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-violet-border">
              Un curso corto, claro y práctico para que puedas comunicarte con confianza
              en aeropuertos, hoteles y destinos de todo el mundo.
            </p>

            {/* Precio */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="text-2xl text-violet-border/50 line-through" aria-label="Precio original 48.000 pesos">
                $48.000
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold uppercase text-violet-border/70">ARS</span>
                <span className="text-4xl font-bold text-white" aria-label="Precio de lanzamiento 29.000 pesos">
                  $29.000
                </span>
              </div>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-300">
                Precio lanzamiento
              </span>
            </div>

            <a
              href={MP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-violet transition-all hover:bg-violet-border hover:scale-[1.02]"
            >
              Comprar ahora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <p className="mt-4 text-xs text-violet-border/50">
              Pago seguro vía Mercado Pago · Acceso inmediato
            </p>

            {/* Pills de resumen */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3" aria-label="Características del curso">
              {['~1 hora', '3 módulos', '12 lecciones', 'Subtítulos', 'Certificado', 'Acceso de por vida'].map((p) => (
                <span key={p} className="rounded-full bg-white/8 px-3 py-1.5 text-xs text-violet-border ring-1 ring-white/10">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Para quién es */}
        <section className="border-b border-violet-border px-6 py-14" aria-labelledby="para-quien-heading">
          <div className="mx-auto max-w-wrap">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Para quién es</p>
            <h2 id="para-quien-heading" className="mb-8 text-2xl font-bold text-violet-darker sm:text-3xl">
              Este curso es para vos si…
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {[
                'Tenés un viaje planeado y el inglés te genera inseguridad',
                'Estudiaste inglés hace años y necesitás refrescar lo práctico',
                'Querés poder manejarte solo sin depender de traductores',
                'No tenés tiempo para un curso largo, pero sí querés aprender',
                'Vas a viajar por primera vez al exterior y querés ir preparado',
                'Querés hablar con más soltura en situaciones cotidianas de viaje',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-violet-border bg-white p-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet text-xs text-white" aria-hidden="true">✓</span>
                  <span className="text-sm leading-relaxed text-ink-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Módulos */}
        <section className="border-b border-violet-border bg-violet-light px-6 py-14" aria-labelledby="modulos-heading">
          <div className="mx-auto max-w-wrap">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Contenido</p>
            <h2 id="modulos-heading" className="mb-8 text-2xl font-bold text-violet-darker sm:text-3xl">
              Qué vas a aprender
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {modules.map((mod) => (
                <article key={mod.number} className="rounded-2xl border border-violet-border bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-bold text-violet/40">{mod.number}</span>
                    <h3 className="text-base font-bold text-violet-darker">{mod.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5" role="list">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/40" aria-hidden="true" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="border-b border-violet-border px-6 py-14" aria-labelledby="incluye-heading">
          <div className="mx-auto max-w-wrap">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Formato</p>
            <h2 id="incluye-heading" className="mb-8 text-2xl font-bold text-violet-darker sm:text-3xl">
              Todo lo que incluye
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {includes.map((item) => (
                <li key={item.label} className="flex items-start gap-4 rounded-2xl border border-violet-border bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-light text-violet">
                    {item.icon}
                  </span>
                  <div>
                    <p className="mb-0.5 text-sm font-bold text-violet-darker">{item.label}</p>
                    <p className="text-xs leading-relaxed text-ink-secondary">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="border-b border-violet-border bg-violet-darker px-6 py-14 text-center" aria-label="Llamado a la acción">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Tu próximo viaje, con más confianza
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-violet-border">
              Un pago único. Acceso de por vida. Empezás hoy.
            </p>
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="text-lg text-violet-border/50 line-through" aria-label="Precio original">$48.000</span>
              <span className="text-3xl font-bold text-white" aria-label="Precio de lanzamiento">$29.000 ARS</span>
            </div>
            <a
              href={MP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-violet transition-all hover:bg-violet-border hover:scale-[1.02]"
            >
              Comprar ahora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <p className="mt-3 text-xs text-violet-border/50">Pago seguro vía Mercado Pago</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-violet-border px-6 py-14" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-2xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Preguntas frecuentes</p>
            <h2 id="faq-heading" className="mb-8 text-2xl font-bold text-violet-darker sm:text-3xl">
              Todo lo que necesitás saber
            </h2>
            <dl className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-violet-border bg-white p-6">
                  <dt className="mb-2 text-sm font-bold text-violet-darker">{faq.q}</dt>
                  <dd className="text-sm leading-relaxed text-ink-secondary">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Footer CTA final */}
        <section className="px-6 py-14 text-center" aria-label="Acción final">
          <div className="mx-auto max-w-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Empezá hoy</p>
            <h2 className="mb-3 text-2xl font-bold text-violet-darker sm:text-3xl">
              ¿Tenés alguna duda?
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-ink-secondary">
              Escribinos por WhatsApp y te respondemos al instante.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={MP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-violet px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
              >
                Comprar — $29.000 ARS
              </a>
              <a
                href={SITE.whatsappUrl('Hola, tengo una consulta sobre el curso English for Tourism')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-border px-7 py-3.5 text-sm font-bold text-violet transition-colors hover:bg-violet-light"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer mínimo */}
      <footer className="border-t border-violet-border bg-violet-light px-6 py-6 text-center">
        <p className="text-xs text-ink-secondary">
          © {new Date().getFullYear()} NEXT English Institute · Ezeiza, Buenos Aires
          {' · '}
          <Link href="/" className="text-violet hover:underline">
            Volver al sitio principal
          </Link>
        </p>
      </footer>

    </div>
  );
}
