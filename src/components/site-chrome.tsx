import Link from "next/link";

const NAV_LINKS = [
  { href: "/presencia", label: "Presencia" },
  { href: "/contenido", label: "Contenido" },
  { href: "/produccion", label: "Producción" },
  { href: "/metodo", label: "Método" },
  { href: "/#contacto", label: "Contacto" },
];

function LogoMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-6 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4ff5e" />
          <stop offset="50%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="#a8dc31" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="28" fill="url(#logo-gradient)" />
      <path d="M 38 33 L 38 67 L 66 50 Z" fill="var(--background)" />
    </svg>
  );
}

export function SiteNav() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border bg-surface/90 px-5 py-3 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="flex items-baseline gap-1.5 font-display text-base font-bold tracking-tight">
            Tu negocio en
            <span className="font-script text-[34px] leading-none text-accent">
              Clips
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contacto"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            ¿Empezamos por tu presencia?
          </p>
          <p className="mt-2 max-w-md text-muted">
            Cuéntame qué vendes y a quién, y te digo si te conviene un
            catálogo, un sitio completo o una tienda en línea.
          </p>
        </div>
        <a
          href="mailto:hola@tunegocioenclips.com"
          className="shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
        >
          Contáctanos
        </a>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tu negocio en Clips</p>
          <p>Diseño v0 — pendiente dirección visual final y assets de marca</p>
        </div>
      </div>
    </footer>
  );
}
