import { SITE } from '@/lib/site';

export default function WhatsAppFloat() {
  const href = SITE.whatsappUrl('Hola! Quiero más información sobre Next English.');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 motion-reduce:transition-none"
    >
      <span
        aria-hidden
        className="absolute h-14 w-14 rounded-full bg-[#25D366] opacity-50 motion-safe:animate-pulse-ring"
      />
      <svg viewBox="0 0 32 32" fill="white" className="relative h-7 w-7" aria-hidden>
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.86.752 5.54 2.067 7.868L.06 31.94l8.27-2.17C10.59 31.05 13.22 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.97 22.59c-.38 1.07-2.24 2.05-3.1 2.17-.86.13-1.6.18-2.45-.15-.56-.21-1.29-.45-2.22-.87-3.92-1.7-6.48-5.7-6.68-5.97-.2-.27-1.6-2.13-1.6-4.06 0-1.94.99-2.89 1.34-3.28.35-.4.77-.5 1.02-.5.26 0 .51 0 .74.01.24.01.55-.09.86.65.31.75 1.07 2.61 1.16 2.8.09.2.15.43.03.69-.12.27-.18.43-.36.66-.18.23-.38.51-.54.69-.18.2-.37.41-.16.78.21.37.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.93 1.81.37.18.59.16.81-.06.22-.22.94-1.1 1.19-1.48.25-.37.5-.31.84-.18.34.13 2.18 1.03 2.55 1.21.37.18.62.27.71.43.09.16.09.93-.29 2.01z" />
      </svg>
    </a>
  );
}
