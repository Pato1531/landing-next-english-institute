const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#elearning', label: 'E-Learning' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-border bg-white">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-5 px-6 py-4"
      >
        <a href="#inicio" className="flex flex-col gap-0.5">
          <span className="text-lg font-bold text-violet">Next English</span>
          <span className="text-[11px] text-ink-secondary">Sede Ezeiza Sur · La Unión</span>
        </a>

        <ul className="hidden flex-1 justify-center gap-6 text-sm font-semibold text-violet-darker md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-b-2 border-transparent pb-1 transition-colors hover:text-violet"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="shrink-0 rounded-lg bg-violet px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
        >
          Anotate ahora
        </a>
      </nav>
    </header>
  );
}
