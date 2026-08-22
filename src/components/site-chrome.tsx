"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/presencia", label: "Presencia" },
  { href: "/contenido", label: "Contenido" },
  { href: "/produccion", label: "Producción" },
  { href: "/metodo", label: "Método" },
  { href: "#contacto", label: "Contacto" },
];

const FILMOGRAFIA = [
  "Narcos México (Netflix)",
  "Elysium (Sony Pictures)",
  "Radical (Eugenio Derbez)",
  "Sr. Ávila (HBO)",
  "No Tengo Miedo (Netflix)",
  "Rescate Imposible",
  "Colosio",
  "Camino a Marte",
];

function LogoMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-[26px] w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
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
      <path
        className="tri-pulse"
        d="M 38 33 L 38 67 L 66 50 Z"
        fill="var(--background)"
      />
    </svg>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú móvil cada vez que cambia de ruta (no se cierra solo con
  // el evento de click del Link porque la navegación ocurre en el mismo tick).
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/82 px-[clamp(18px,4vw,56px)] py-4 backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <Link href="/" className="flex flex-none items-center gap-2.5">
            <LogoMark />
            <span className="flex items-baseline gap-1.5 font-display text-base font-bold tracking-tight">
              Tu negocio en
              <span className="wipe-in font-script text-[34px] leading-[0.7] text-accent">
                Clips
              </span>
            </span>
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href !== "#contacto" && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded px-2.5 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
                    active
                      ? "bg-accent text-accent-ink"
                      : "text-muted hover:bg-accent hover:text-accent-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href="#contacto"
            className="flex-none whitespace-nowrap rounded-[2px] border border-border px-5 py-2.5 text-[13px] font-semibold transition-colors hover:bg-accent hover:text-accent-ink"
          >
            Contáctanos
          </a>
          {/* Botón de hamburguesa — solo visible por debajo de 1080px (breakpoint lg de Tailwind, 1024px) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="flex flex-none flex-col items-center justify-center gap-[5px] rounded-[2px] border border-border p-2.5 lg:hidden"
          >
            <span
              className={`block h-[2px] w-5 bg-foreground transition-transform ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-foreground transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-foreground transition-transform ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Panel desplegable móvil: enlaces apilados justo debajo del header */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-1 border-t border-border pt-4 lg:hidden">
            {NAV_LINKS.map((link) => {
              const active =
                link.href !== "#contacto" && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded px-3 py-2.5 text-sm font-medium uppercase tracking-[0.1em] transition-colors ${
                    active
                      ? "bg-accent text-accent-ink"
                      : "text-muted hover:bg-accent hover:text-accent-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>
      <FilmStrip />
    </>
  );
}

function FilmStrip() {
  return (
    <div className="flex flex-col border-b border-border bg-surface sm:flex-row sm:overflow-hidden">
      <div className="flex-none border-b border-border px-[18px] py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted sm:border-b-0 sm:border-r sm:px-[22px] sm:py-0">
        Filmografía de Héctor Flores
      </div>
      <div className="flex-1 overflow-hidden py-[15px]">
        <div className="flex w-max gap-8">
          {[0, 1].map((track) => (
            <div
              key={track}
              className="marquee-track flex w-max flex-none gap-8 whitespace-nowrap"
              aria-hidden={track === 1 ? true : undefined}
            >
              {FILMOGRAFIA.map((item, i) => (
                <span key={i} className="text-sm text-muted">
                  {item}
                  <span className="ml-8 text-accent">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525527618089"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-[70] flex h-[58px] w-[58px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-[29px] bg-whatsapp px-0 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.6)] transition-[width] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:w-[272px] hover:px-5"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 flex-none fill-white"
        aria-hidden="true"
      >
        <path d="M12.02 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.24-1.37a9.9 9.9 0 0 0 4.78 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.53 2 12.02 2zm0 18.22c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.11.81.83-3.03-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.56 3.71-8.27 8.27-8.27s8.27 3.71 8.27 8.27-3.71 8.26-8.25 8.26zm4.53-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42-.15 0-.31-.02-.48-.02-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
      </svg>
      <span className="hidden text-sm font-semibold text-white group-hover:inline">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-[clamp(18px,4vw,56px)] py-6 text-[13px] text-muted">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Tu negocio en Clips</p>
        <a href="#contacto" className="text-muted hover:text-foreground">
          Escríbeme
        </a>
      </div>
    </footer>
  );
}
