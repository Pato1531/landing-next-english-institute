'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlides } from '@/data/hero';
import ImagePlaceholder from './ImagePlaceholder';

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = heroSlides.length;

  const goTo = useCallback((n: number) => {
    setIndex(((n % total) + total) % total);
  }, [total]);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);
  }, [total]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  const handleManual = (n: number) => {
    goTo(n);
    resetAutoplay();
  };

  return (
    <section
      id="inicio"
      aria-roledescription="carrusel"
      aria-label="Presentación de Next English Institute"
      className="relative overflow-hidden"
    >
      <button
        type="button"
        onClick={() => handleManual(index - 1)}
        aria-label="Diapositiva anterior"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-violet/35 text-2xl text-white backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => handleManual(index + 1)}
        aria-label="Siguiente diapositiva"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-violet/35 text-2xl text-white backdrop-blur-sm"
      >
        ›
      </button>

      <div
        className="flex transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.heading}
            className="relative flex min-w-full flex-col justify-end gap-3 px-6 py-10 sm:px-12 sm:py-14"
            aria-hidden={i !== index}
          >
            <div className="absolute inset-0 -z-10">
              <ImagePlaceholder alt={slide.imageAlt} aspect="video" className="h-full w-full" />
            </div>
            <div
              aria-hidden
              className="absolute inset-0 -z-[5] bg-gradient-to-t from-violet-darker/90 via-violet-darker/45 to-violet-darker/10"
            />
            <span className="relative z-10 w-fit rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {slide.badge}
            </span>
            <h1 className="relative z-10 max-w-lg text-2xl font-bold leading-snug text-white drop-shadow sm:text-4xl">
              {slide.heading}
            </h1>
            <p className="relative z-10 max-w-md text-sm leading-relaxed text-white/90 drop-shadow sm:text-base">
              {slide.sub}
            </p>
            <a
              href={slide.ctaHref}
              className="relative z-10 mt-1.5 w-fit rounded-lg bg-white px-7 py-3 text-sm font-bold text-violet transition-transform hover:-translate-y-0.5"
            >
              {slide.ctaLabel}
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 border-b border-violet-border bg-violet-light py-3.5">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.heading}
            type="button"
            onClick={() => handleManual(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-current={i === index}
            className={`h-2 w-2 rounded-full transition-transform ${
              i === index ? 'scale-125 bg-violet' : 'bg-violet-border'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
