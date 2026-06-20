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
        <div className="flex flex-col items-end gap-2 text-right text-sm font-semibold text-violet-darker">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-violet"
          >
            <span aria-hidden>📷</span> @{SITE.instagramHandle}
          </a>
          <a
            href={SITE.whatsappUrl('Hola! Quiero más información sobre Next English.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-violet"
          >
            <span aria-hidden>📞</span> {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-violet"
          >
            <span aria-hidden>📍</span> {SITE.address.street}, {SITE.address.neighborhood}
          </a>
        </div>
      </div>
      <p className="pt-4 text-xs text-ink-secondary">
        © {year} {SITE.name} · Todos los derechos reservados
      </p>
    </footer>
  );
}
