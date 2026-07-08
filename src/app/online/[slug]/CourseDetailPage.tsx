'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE, formatARS } from '@/lib/site';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CourseFaqAccordion from '@/components/CourseFaqAccordion';
import { courseIcons } from '@/components/courseIcons';
import type { ElearningCourse } from '@/data/elearningCourses';

export default function CourseDetailPage({ course }: { course: ElearningCourse }) {
  const priceLabel = `Comprar — ${formatARS(course.price.current)}`;

  return (
    <div className="min-h-screen bg-white font-sans text-violet-darker antialiased">

      {/* Nav mínima */}
      <header className="border-b border-violet-border bg-white">
        <div className="mx-auto flex max-w-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-sm font-bold text-violet hover:text-violet-dark" aria-label="Volver al inicio">
            ← NEXT English Institute
          </Link>
          <a
            href={course.mpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-violet px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
          >
            {priceLabel}
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
            <h1
              id="hero-heading"
              className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: course.heroTitle }}
            />
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-violet-border">
              {course.heroDescription}
            </p>

            {/* Precio */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="text-2xl text-violet-border/50 line-through" aria-label={`Precio original ${formatARS(course.price.original)}`}>
                {formatARS(course.price.original)}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold uppercase text-violet-border/70">{course.price.currency}</span>
                <span className="text-4xl font-bold text-white" aria-label={`Precio de lanzamiento ${formatARS(course.price.current)}`}>
                  {formatARS(course.price.current)}
                </span>
              </div>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-300">
                Precio lanzamiento
              </span>
            </div>

            <a
              href={course.mpLink}
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
              {course.summaryPills.map((p) => (
                <span key={p} className="rounded-full bg-white/8 px-3 py-1.5 text-xs text-violet-border ring-1 ring-white/10">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Imagen del curso */}
        <section className="border-b border-violet-border px-6 py-14" aria-label={`Vista previa del curso ${course.name}`}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl">
            {course.image.src ? (
              <div className="relative aspect-video">
                <Image
                  src={course.image.src}
                  alt={course.image.alt}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <ImagePlaceholder alt={course.image.alt} aspect="video" />
            )}
          </div>
        </section>

        {/* Para quién es */}
        <section className="border-b border-violet-border px-6 py-14" aria-labelledby="para-quien-heading">
          <div className="mx-auto max-w-wrap">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Para quién es</p>
            <h2 id="para-quien-heading" className="mb-8 text-2xl font-bold text-violet-darker sm:text-3xl">
              {course.audienceHeading}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {course.audience.map((item) => (
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
            <div className={`grid gap-6 ${course.modules.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
              {course.modules.map((mod) => (
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
              {course.includes.map((item) => (
                <li key={item.label} className="flex items-start gap-4 rounded-2xl border border-violet-border bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-light text-violet">
                    {courseIcons[item.icon]}
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
              {course.tagline}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-violet-border">
              Un pago único. Acceso por 6 meses. Empezás hoy.
            </p>
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="text-lg text-violet-border/50 line-through" aria-label="Precio original">
                {formatARS(course.price.original)}
              </span>
              <span className="text-3xl font-bold text-white" aria-label="Precio de lanzamiento">
                {formatARS(course.price.current)} {course.price.currency}
              </span>
            </div>
            <a
              href={course.mpLink}
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
            <CourseFaqAccordion faqs={course.faqs} />
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
                href={course.mpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-violet px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
              >
                {priceLabel} {course.price.currency}
              </a>
              <a
                href={SITE.whatsappUrl(course.whatsappMessage)}
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
