'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Carga Google Analytics 4 (gtag.js) y trackea:
 * - La primera carga de página (vía el propio config() inicial del script).
 * - Las navegaciones posteriores dentro de la SPA (Next.js App Router no
 *   recarga la página al cambiar de ruta, así que hay que avisarle a GA
 *   manualmente cada vez que cambia el pathname).
 *
 * No envía ningún dato personal (nombre, email, etc.) — solo la ruta visitada.
 * Si no hay NEXT_PUBLIC_GA_MEASUREMENT_ID configurado, no renderiza nada
 * (así funciona sin romper en preview deployments sin la env var).
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      // El primer page_view ya lo dispara el gtag('config', ...) inicial.
      isFirstLoad.current = false;
      return;
    }
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
