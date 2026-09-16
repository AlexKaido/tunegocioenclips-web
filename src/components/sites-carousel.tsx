"use client";

import { useState } from "react";

export type CarouselSite = {
  name: string;
  description: string;
  url: string;
  image: string;
};

/**
 * Carrusel de sitios web publicados — navegación 100% manual (flechas +
 * puntos, sin auto-avance, por decisión explícita del cliente). Las
 * imágenes son capturas reales de cada sitio, no un mockup de navegador.
 */
export function SitesCarousel({ sites }: { sites: CarouselSite[] }) {
  const [index, setIndex] = useState(0);
  const total = sites.length;

  function go(delta: number) {
    setIndex((i) => (i + delta + total) % total);
  }

  return (
    <div>
      <div className="relative">
        <div className="overflow-hidden rounded-[2px] border border-border bg-surface">
          <div
            className="flex transition-transform duration-[620ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {sites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full flex-none"
                tabIndex={
                  sites[index] === site ? undefined : -1
                }
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2 sm:aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={site.image}
                    alt={`Captura de pantalla del sitio web de ${site.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-[2px] border border-border bg-background/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur-sm sm:left-5 sm:top-5">
                    {site.url.replace(/^https?:\/\//, "")}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-[2px] bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-ink sm:right-5 sm:top-5">
                    Sitio en línea
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-[clamp(24px,3.4vw,44px)] sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-[clamp(26px,3vw,42px)] font-bold tracking-tight">
                      {site.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-muted">
                      {site.description}
                    </p>
                  </div>
                  <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent">
                    Ver sitio →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Flechas — superpuestas sobre el área de la imagen, centradas verticalmente */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex aspect-[4/3] items-center justify-between px-2 sm:aspect-[16/9] sm:px-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Sitio anterior"
            className="pointer-events-auto flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-ink sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Sitio siguiente"
            className="pointer-events-auto flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-ink sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Puntos + contador */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {sites.map((site, i) => (
            <button
              key={site.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir al sitio de ${site.name}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-[width,background-color] ${
                i === index
                  ? "w-7 bg-accent"
                  : "w-2.5 bg-numeral-dim hover:bg-numeral-soft"
              }`}
            />
          ))}
        </div>
        <span className="font-display text-sm font-bold text-numeral-soft">
          {String(index + 1).padStart(2, "0")}
          <span className="text-numeral-dim"> / {String(total).padStart(2, "0")}</span>
        </span>
      </div>
    </div>
  );
}
