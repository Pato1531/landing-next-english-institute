'use client';

import { useState, type FormEvent } from 'react';
import { SITE } from '@/lib/site';

export default function Contacto() {
  const [pending, setPending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get('nombre') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const telefono = String(data.get('telefono') ?? '').trim();
    const mensaje = String(data.get('mensaje') ?? '').trim();
    const honeypot = String(data.get('empresa') ?? '').trim();

    // Honeypot anti-spam: campo oculto que un bot completaría pero una persona no ve.
    if (honeypot) {
      setPending(false);
      return;
    }

    let texto = `Hola! Mi nombre es ${nombre}.`;
    if (email) texto += ` Mi email es ${email}.`;
    if (telefono) texto += ` Mi teléfono es ${telefono}.`;
    if (mensaje) texto += ` ${mensaje}`;

    window.open(SITE.whatsappUrl(texto), '_blank', 'noopener,noreferrer');
    form.reset();
    setPending(false);
  };

  return (
    <section id="contacto" className="mx-auto max-w-wrap scroll-mt-20 px-6 py-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Hablemos</p>
      <h2 className="mb-1.5 text-2xl font-bold text-violet-darker sm:text-3xl">Contacto</h2>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-ink-secondary">
        Escribinos por WhatsApp, completá el formulario o visitanos en la sede. Te esperamos.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-8 flex flex-col gap-3.5 text-sm font-semibold text-violet-darker">
            <a
              href={SITE.whatsappUrl('Hola! Quiero más información sobre Next English.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-violet"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-light" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-violet"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-light" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              {SITE.address.street}, {SITE.address.neighborhood}, {SITE.address.city}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-violet"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-light" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              @{SITE.instagramHandle}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3.5" noValidate>
            {/* Honeypot anti-spam: oculto visualmente y de lectores de pantalla; los bots suelen completar todos los campos. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="empresa">No completar este campo</label>
              <input type="text" id="empresa" name="empresa" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="nombre" className="mb-1 block text-[13px] font-bold text-violet-darker">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                maxLength={80}
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-violet-border px-3.5 py-2.5 text-sm text-violet-darker focus:border-violet focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-[13px] font-bold text-violet-darker">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={120}
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-violet-border px-3.5 py-2.5 text-sm text-violet-darker focus:border-violet focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="mb-1 block text-[13px] font-bold text-violet-darker">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                maxLength={20}
                placeholder="11 1234-5678"
                className="w-full rounded-lg border border-violet-border px-3.5 py-2.5 text-sm text-violet-darker focus:border-violet focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-1 block text-[13px] font-bold text-violet-darker">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                maxLength={500}
                placeholder="Contanos qué estás buscando..."
                className="min-h-[90px] w-full resize-y rounded-lg border border-violet-border px-3.5 py-2.5 text-sm text-violet-darker focus:border-violet focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="w-fit rounded-xl bg-violet px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-dark disabled:opacity-60"
            >
              Enviar por WhatsApp →
            </button>
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl border border-violet-border">
          <iframe
            title={`Ubicación de ${SITE.name} en ${SITE.address.street}`}
            src={SITE.mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
