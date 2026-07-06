'use client';

import { useEffect, useRef, useState } from 'react';

type CounterStat = {
  type: 'counter';
  value: number;
  suffix: string;
  label: string;
};

type TextStat = {
  type: 'text';
  display: string;
  label: string;
};

type Stat = CounterStat | TextStat;

const stats: Stat[] = [
  { type: 'counter', value: 1000, suffix: '', label: 'alumnos formados' },
  { type: 'counter', value: 3, suffix: '', label: 'años de experiencia' },
  { type: 'text', display: '✓', label: 'Validez internacional' },
];

function useCountUp(target: number, active: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return value;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.type === 'counter' ? stat.value : 0, active);
  const display = stat.type === 'counter' ? `+${count}${stat.suffix}` : stat.display;

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-violet-border bg-violet-light px-4 py-7 text-center">
      <p className="text-3xl font-bold text-violet" aria-hidden="true">
        {display}
      </p>
      <p className="mt-1.5 text-sm text-ink-secondary">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="group"
      aria-label="+1000 alumnos formados, +3 años de experiencia, validez internacional"
      className="mx-auto flex max-w-wrap gap-4 border-b border-violet-border px-6 py-10 sm:gap-5"
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`min-w-0 flex-1 ${active ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: `${i * 120}ms` }}
        >
          <StatCard stat={stat} active={active} />
        </div>
      ))}
    </div>
  );
}
