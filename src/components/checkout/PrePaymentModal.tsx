'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/gtag';

/**
 * Modal de captura de datos pre-pago.
 *
 * - Un solo paso, 2 campos visibles (nombre, email): minimiza fricción,
 *   que es el mayor riesgo de abandono en checkouts de e-learning.
 * - role="dialog" + aria-modal + foco atrapado + cierre con Escape: WCAG 2.1
 *   AA para componentes modales.
 * - Validación on-blur (no en cada tecla): feedback inmediato sin ser intrusivo.
 * - Usa exclusivamente los tokens de marca ya definidos en tailwind.config
 *   (violet, violet-dark, violet-border, ink-secondary) y font-sans
 *   (Open Sans, ya aplicada globalmente en <body>) — sin colores ni
 *   tipografías nuevas.
 */

interface PrePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseSlug: string;
  courseTitle: string;
  coursePrice: number;
  courseCurrency: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function PrePaymentModal({
  isOpen,
  onClose,
  courseSlug,
  courseTitle,
  coursePrice,
  courseCurrency,
}: PrePaymentModalProps) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Honeypot: invisible para personas, atractivo para bots. Filtra envíos
  // automatizados sin sumar fricción ni recurrir a un captcha.
  const [honeypot, setHoneypot] = useState('');

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstFieldRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'input, button:not([disabled])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function validate(): boolean {
    const next: FormErrors = {};
    if (nombre.trim().length < 3) {
      next.nombre = 'Ingresá tu nombre completo.';
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      next.email = 'Ingresá un email válido.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (honeypot) return; // bot detectado, fallamos en silencio

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim().toLowerCase(),
          cursoSlug: courseSlug,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.initPoint) {
        throw new Error(data.error || 'No pudimos iniciar el pago.');
      }

      trackEvent('begin_checkout', {
        currency: courseCurrency,
        value: coursePrice,
        items: courseTitle,
      });

      window.location.href = data.initPoint;
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Ocurrió un error inesperado. Probá de nuevo.'
      );
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-violet-darker/60 px-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="prepayment-modal-title"
        className="w-full rounded-t-2xl bg-white p-6 shadow-2xl sm:max-w-md sm:rounded-2xl sm:p-8"
      >
        <div className="mb-1 flex items-start justify-between">
          <h2 id="prepayment-modal-title" className="text-xl font-bold text-violet-darker sm:text-2xl">
            Un último paso
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="-mr-1 p-1 text-ink-secondary transition-colors hover:text-violet"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="mb-6 text-sm text-ink-secondary">
          Completá tus datos para inscribirte en <span className="font-bold text-violet">{courseTitle}</span>.
          Te vamos a llevar a Mercado Pago para finalizar la compra.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot: oculto visualmente y para lectores de pantalla */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">No completar</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nombre" className="mb-1.5 block text-sm font-bold text-violet-darker">
              Nombre completo
            </label>
            <input
              ref={firstFieldRef}
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onBlur={validate}
              aria-invalid={!!errors.nombre}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              className="w-full rounded-xl border border-violet-border px-4 py-3 text-violet-darker outline-none transition-colors focus:border-violet focus:ring-2 focus:ring-violet/20"
              placeholder="Nombre y apellido"
            />
            {errors.nombre && (
              <p id="nombre-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.nombre}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-violet-darker">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validate}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-xl border border-violet-border px-4 py-3 text-violet-darker outline-none transition-colors focus:border-violet focus:ring-2 focus:ring-violet/20"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.email}
              </p>
            )}
            <p className="mt-1.5 text-xs text-ink-secondary">
              Con este email vas a acceder al campus después de tu inscripción.
            </p>
          </div>

          {submitError && (
            <p role="alert" className="mb-4 text-sm text-red-600">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-violet px-6 py-3.5 font-bold text-white transition-colors hover:bg-violet-dark disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
          >
            {isSubmitting ? 'Redirigiendo a Mercado Pago…' : 'Continuar al pago'}
          </button>

          <p className="mt-3 text-center text-xs text-ink-secondary">
            Pago 100% seguro procesado por Mercado Pago.
          </p>
        </form>
      </div>
    </div>
  );
}
