'use client';

import { useId, useState } from 'react';
import { faqItems } from '@/data/faq';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto max-w-wrap scroll-mt-20 border-b border-violet-border px-6 py-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Antes de empezar</p>
      <h2 className="mb-1.5 text-2xl font-bold text-violet-darker sm:text-3xl">
        Preguntas frecuentes
      </h2>
      <p className="mb-7 text-sm text-ink-secondary">
        Las dudas más comunes de quienes están por anotarse.
      </p>

      <div className="flex flex-col gap-2.5">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          const buttonId = `${baseId}-faq-button-${i}`;
          const panelId = `${baseId}-faq-panel-${i}`;

          return (
            <div key={item.question} className="overflow-hidden rounded-xl border border-violet-border bg-white">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3.5 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-bold leading-snug text-violet-darker">
                    {item.question}
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
                className="px-5 pb-5 text-sm leading-relaxed text-ink-secondary"
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
