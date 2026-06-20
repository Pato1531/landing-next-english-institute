'use client';

import { useId, useState } from 'react';
import { cursos, talleres } from '@/data/cursos';
import CursoCard from './CursoCard';

type TabId = 'cursos' | 'talleres' | 'test';

const tabs: { id: TabId; label: string }[] = [
  { id: 'cursos', label: 'Cursos' },
  { id: 'talleres', label: 'Talleres' },
  { id: 'test', label: 'Test de Nivel' },
];

export default function Cursos() {
  const [active, setActive] = useState<TabId>('cursos');
  const baseId = useId();

  return (
    <section id="cursos" className="mx-auto max-w-wrap scroll-mt-20 border-b border-violet-border px-6 py-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Nuestra propuesta</p>
      <h2 className="mb-1.5 text-2xl font-bold text-violet-darker sm:text-3xl">
        Cursos, talleres y test de nivel
      </h2>
      <p className="mb-7 max-w-xl text-sm leading-relaxed text-ink-secondary">
        Elegí tu camino: cursos por nivel, talleres temáticos especializados, o hacé el test
        gratuito para saber dónde empezar.
      </p>

      <div role="tablist" aria-label="Secciones de cursos" className="mb-8 flex flex-wrap gap-1 border-b border-violet-border">
        {tabs.map((tab) => {
          const tabId = `${baseId}-tab-${tab.id}`;
          const panelId = `${baseId}-panel-${tab.id}`;
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={panelId}
              onClick={() => setActive(tab.id)}
              className={`-mb-px border-b-2 px-4 py-3 text-sm font-bold transition-colors ${
                selected
                  ? 'border-violet text-violet'
                  : 'border-transparent text-ink-secondary hover:text-violet'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel-cursos`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-cursos`}
        hidden={active !== 'cursos'}
      >
        <p className="mb-6 text-sm leading-relaxed text-ink-secondary">
          Grupos reducidos, progresión clara y un método pensado para que avances de verdad, sin
          importar tu punto de partida.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {cursos.map((curso) => (
            <CursoCard key={curso.slug} curso={curso} />
          ))}
        </div>
      </div>

      <div
        id={`${baseId}-panel-talleres`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-talleres`}
        hidden={active !== 'talleres'}
      >
        <p className="mb-6 text-sm leading-relaxed text-ink-secondary">
          Inglés con propósito: aprendés exactamente lo que vas a usar, en formato intensivo y con
          foco práctico.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {talleres.map((taller) => (
            <CursoCard key={taller.slug} curso={taller} />
          ))}
        </div>
      </div>

      <div
        id={`${baseId}-panel-test`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-test`}
        hidden={active !== 'test'}
      >
        <div className="rounded-2xl bg-violet-light px-8 py-10 text-center">
          <p className="mb-2.5 text-xl font-bold text-violet-darker">Test de nivel gratuito</p>
          <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-ink-secondary">
            Hacé el test en línea — tarda 15 minutos — y te ayudamos a elegir el curso ideal para
            vos. Sin compromiso de inscripción.
          </p>
          <a
            href="#contacto"
            className="inline-block rounded-xl bg-violet px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
          >
            Hacer el test gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
