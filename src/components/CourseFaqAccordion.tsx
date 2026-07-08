'use client';

import { useId, useState } from 'react';
import type { CourseFaq } from '@/data/elearningCourses';

/**
 * Acordeón de FAQ accesible para las páginas de curso (/online/[slug]).
 * Mismo patrón de interacción que el FAQ de la home (src/components/Faq.tsx):
 * aria-expanded / aria-controls, un solo panel abierto por vez.
 * Reduce la altura de la página frente a la lista estática anterior.
 */
export default function CourseFaqAccordion({ faqs }: { faqs: CourseFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${baseId}-faq-button-${i}`;
        const panelId = `${baseId}-faq-panel-${i}`;

        return (
          <div key={faq.q} className="overflow-hidden rounded-2xl border border-violet-border bg-white">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-3.5 px-6 py-4 text-left"
              >
                <span className="text-sm font-bold leading-snug text-violet-darker">
                  {faq.q}
                </span>
                <span
                  aria-hidden
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-light text-base text-violet transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 text-sm leading-relaxed text-ink-secondary"
            >
              <p>{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
