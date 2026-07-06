import { SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-wrap px-6 py-10">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-violet-border pb-6">
        <div>
          <p className="text-lg font-bold text-violet">Next English</p>
          <p className="text-sm text-ink-secondary">{SITE.sede}</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-left text-sm font-semibold text-violet-darker sm:items-end sm:text-right">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-violet"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @{SITE.instagramHandle}
          </a>
          <a
            href={SITE.whatsappUrl('Hola! Quiero más información sobre Next English.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-violet"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-violet"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {SITE.address.street}, {SITE.address.neighborhood}
          </a>
        </div>
      </div>
      <p className="pt-4 text-xs text-ink-secondary">
        © {year} {SITE.name} · Todos los derechos reservados
      </p>
    </footer>
  );
}
