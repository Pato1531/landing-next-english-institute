declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GtagEventParams = Record<string, string | number | boolean | undefined>;

/**
 * Dispara un evento custom a Google Analytics 4.
 *
 * No hace nada si GA todavía no cargó (usuario con bloqueador de anuncios,
 * o el script de afterInteractive aún no corrió) — falla en silencio, nunca
 * rompe la funcionalidad real del sitio por un evento de tracking.
 *
 * Nunca pasar acá datos personales (nombre, email, teléfono): solo
 * información agregada (montos, nombres de curso, nombres de evento).
 */
export function trackEvent(eventName: string, params?: GtagEventParams): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
