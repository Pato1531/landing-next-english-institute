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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-darker via-violet-dark to-violet px-6 py-7 text-center sm:px-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 h-28 w-28 rounded-full bg-white/10 sm:h-32 sm:w-32"
      />
      <p className="relative z-10 text-3xl font-bold text-white sm:text-4xl" aria-hidden="true">
        {display}
      </p>
      <p className="relative z-10 mt-1.5 text-sm text-white/85">{stat.label}</p>
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
      className="mx-auto flex max-w-wrap flex-col gap-4 border-b border-violet-border px-6 py-10 sm:gap-5"
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={active ? 'animate-fade-up' : 'opacity-0'}
          style={{ animationDelay: `${i * 120}ms` }}
        >
          <StatCard stat={stat} active={active} />
        </div>
      ))}
    </div>
  );
}
