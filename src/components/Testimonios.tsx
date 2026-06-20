'use client';

import { useRef, useState } from 'react';
import { testimonios } from '@/data/testimonios';

const avatarBg: Record<string, string> = {
  'av-b': 'bg-violet',
  'av-g': 'bg-violet-dark',
  'av-p': 'bg-violet-darker',
  'av-r': 'bg-[#7a4a96]',
};

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
    <path
      fill="#4285F4"
      d="M23.52 12.27c0-.85-.07-1.47-.23-2.12H12v3.99h6.61c-.13 1.1-.85 2.76-2.45 3.87l-.02.15 3.55 2.75.25.02c2.26-2.08 3.58-5.15 3.58-8.66"
    />
    <path
      fill="#34A853"
      d="M12 24c2.97 0 5.46-.98 7.28-2.66l-3.55-2.75c-.95.66-2.22 1.13-3.73 1.13-2.86 0-5.29-1.93-6.16-4.53l-.14.01-3.7 2.86-.05.13C3.62 21.62 7.5 24 12 24"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.19a7.27 7.27 0 0 1-.39-2.34c0-.81.14-1.6.38-2.34l-.01-.15-3.75-2.91-.12.06A11.94 11.94 0 0 0 .5 11.85c0 1.94.47 3.78 1.3 5.39l4.04-3.05"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c2.06 0 3.45.89 4.25 1.64l3.1-3.02C17.45 1.6 14.97.5 12 .5 7.5.5 3.62 2.88 1.85 6.46l3.99 3.1C6.71 6.96 9.14 4.75 12 4.75"
    />
  </svg>
);

export default function Testimonios() {
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const perPage = 3;
  const pages = Math.ceil(testimonios.length / perPage);

  return (
    <section
      id="testimonios"
      className="mx-auto max-w-wrap scroll-mt-20 border-b border-violet-border px-6 py-12"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Reviews de Google</p>
      <h2 className="mb-1.5 text-2xl font-bold text-violet-darker sm:text-3xl">
        Lo que dicen nuestros alumnos
      </h2>
      <p className="mb-7 text-sm text-ink-secondary">Opiniones reales verificadas en Google.</p>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-400 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: pages }).map((_, pageIndex) => (
            <ul
              key={pageIndex}
              className="grid min-w-full grid-cols-1 gap-4 sm:grid-cols-3"
              aria-hidden={pageIndex !== page}
            >
              {testimonios.slice(pageIndex * perPage, pageIndex * perPage + perPage).map((t) => (
                <li
                  key={t.name}
                  className="flex flex-col items-center rounded-2xl border border-violet-border bg-white p-6 text-center animate-fade-up"
                >
                  <div className="relative mb-3.5">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white ${avatarBg[t.avatarClass]}`}
                      aria-hidden
                    >
                      {t.initials}
                    </div>
                    <div className="absolute bottom-0 right-0 flex h-5.5 w-5.5 items-center justify-center rounded-full border border-violet-border bg-white">
                      <GoogleIcon />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-violet-darker">{t.name}</p>
                  <p className="mb-2.5 text-[11px] text-ink-secondary">{t.date}</p>
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="text-base text-amber-500" aria-hidden>
                      ★★★★★
                    </span>
                    <span className="sr-only">5 de 5 estrellas, opinión verificada</span>
                    <span className="text-violet" aria-hidden>
                      ✔
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-ink-secondary">&ldquo;{t.text}&rdquo;</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Ver testimonios página ${i + 1}`}
              aria-current={i === page}
              className={`h-2 w-2 rounded-full transition-transform ${
                i === page ? 'scale-125 bg-violet' : 'bg-violet-border'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            aria-label="Testimonios anteriores"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-border text-lg text-violet hover:bg-violet-light"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => (p + 1) % pages)}
            aria-label="Siguientes testimonios"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-border text-lg text-violet hover:bg-violet-light"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
