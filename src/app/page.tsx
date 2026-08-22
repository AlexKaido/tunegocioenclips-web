import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, Magnetic } from "@/components/interactions";

export const metadata: Metadata = {
  title: "Tu negocio en Clips — Presencia digital + contenido que vende",
  description:
    "Primero construimos dónde te encuentran — tu catálogo o tu sitio — y después el contenido que hace que no dejen de llegar.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative grid min-h-[min(92vh,900px)] grid-cols-1 gap-0 overflow-hidden border-b border-border md:grid-cols-[minmax(0,1fr)_clamp(260px,40%,700px)] md:items-end">
        <div className="relative order-1 flex flex-col justify-end px-[clamp(18px,4vw,56px)] py-10 md:order-1 md:py-[clamp(48px,8vw,120px)]">
          <div className="eyebrow-line mb-6 h-0.5 w-10 bg-accent" />
          <span className="mb-6 block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-accent">
            Primero el sitio, después los clips
          </span>
          <h1 className="rise-line font-display text-[clamp(40px,8.2vw,116px)] font-extrabold leading-[0.92] tracking-[-0.035em]">
            <span className="block overflow-hidden">
              <span style={{ animationDelay: "240ms" }}>No te falta</span>
            </span>
            <span className="block overflow-hidden">
              <span style={{ animationDelay: "360ms" }}>calidad.</span>
            </span>
            <span className="block overflow-hidden text-[#7e8b92]">
              <span style={{ animationDelay: "480ms" }}>
                Te falta que se note{" "}
                <span className="text-foreground">en el celular.</span>
              </span>
            </span>
          </h1>
          <p className="mt-8 max-w-md text-[clamp(16px,1.35vw,20px)] leading-[1.55] text-muted">
            Primero construimos dónde te encuentran — tu catálogo o tu sitio —
            y después el contenido que hace que no dejen de llegar.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Magnetic>
              <Link
                href="/presencia"
                className="rounded-[2px] bg-accent px-7 py-3.5 text-center text-sm font-semibold text-accent-ink transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(232,255,47,0.55)]"
              >
                Arma tu presencia digital
              </Link>
            </Magnetic>
            <Link
              href="/contenido"
              className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
            >
              ¿Ya tienes sitio? Ve los planes de contenido →
            </Link>
          </div>
        </div>

        <div className="relative order-0 h-[62vw] max-h-[400px] min-h-[240px] overflow-hidden md:order-2 md:h-full md:max-h-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/camera-stock.webp"
            alt="Producción de video para negocios"
            className="kb-slow h-full w-full object-cover"
            style={{
              filter: "saturate(0.55) contrast(1.12) brightness(0.8)",
            }}
          />
          <div className="scanlines pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,transparent_62%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--background)_0%,transparent_40%)]" />

          {/* Marcas de encuadre */}
          <span
            className="mark-in absolute left-4 top-4 h-[26px] w-[26px] border-l-2 border-t-2 border-accent"
            style={{ animationDelay: "1450ms" }}
          />
          <span
            className="mark-in absolute right-4 top-4 h-[26px] w-[26px] border-r-2 border-t-2 border-accent"
            style={{ animationDelay: "1530ms" }}
          />
          <span
            className="mark-in absolute bottom-4 left-4 h-[26px] w-[26px] border-b-2 border-l-2 border-accent"
            style={{ animationDelay: "1610ms" }}
          />
          <span
            className="mark-in absolute bottom-4 right-4 h-[26px] w-[26px] border-b-2 border-r-2 border-accent"
            style={{ animationDelay: "1690ms" }}
          />

          <div className="absolute right-5 top-5 flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <span className="rec-dot h-[7px] w-[7px] rounded-full bg-accent" />
              <span className="text-xs font-semibold text-foreground">
                Grabando ahora
              </span>
            </div>
            <span className="text-[11px] text-muted">
              9:16 · vertical · semanal
            </span>
          </div>
        </div>
      </section>

      {/* Dos tarjetas de servicio */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2">
          <Link
            href="/contenido"
            className="group border-b border-border p-[clamp(18px,4vw,56px)] py-16 transition-colors hover:bg-surface-2 sm:border-b-0 sm:border-r"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold text-numeral-soft">
                01
              </span>
              <span className="text-lg text-numeral-soft transition-colors group-hover:text-accent">
                ↗
              </span>
            </div>
            <h3 className="mt-6 font-display text-[21px] font-bold leading-[1.05] tracking-[-0.02em]">
              Catálogo y sitio
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-muted">
              Foto de producto profesional, catálogo digitalizado y tu sitio
              web con dominio, hosting y WhatsApp. Lo que hace que te
              encuentren, y que se vea serio cuando llegan.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Ver niveles y precios →
            </span>
          </Link>
          <Link
            href="/contenido"
            className="group p-[clamp(18px,4vw,56px)] py-16 transition-colors hover:bg-surface-2"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-2xl font-bold text-numeral-soft">
                02
              </span>
              <span className="text-lg text-numeral-soft transition-colors group-hover:text-accent">
                ↗
              </span>
            </div>
            <h3 className="mt-6 font-display text-[21px] font-bold leading-[1.05] tracking-[-0.02em]">
              Clips
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-muted">
              Sesiones de 4 horas con storyboard aprobado y clips editados,
              listos para publicar: 20 en una sesión única, 40 al mes en
              cadencia quincenal.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Ver planes de contenido →
            </span>
          </Link>
        </div>
      </section>

      {/* Bloque de Alex */}
      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)] md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          <div className="group relative aspect-[3/4] w-full max-w-[320px] overflow-hidden bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/alex-portrait.jpg"
              alt="Alex Espinosa"
              className="h-full w-full object-cover grayscale contrast-[1.08] transition-[filter] duration-700 group-hover:grayscale-0"
            />
            <span className="absolute bottom-3 left-3 font-display text-xs font-bold tracking-[0.1em] text-accent">
              KAIDO
            </span>
          </div>
          <div>
            <span className="block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              El método
            </span>
            <h2 className="mt-3 font-display text-[clamp(30px,3.6vw,50px)] font-bold tracking-[-0.03em]">
              Alex Espinosa
            </h2>
            <p className="mt-1 text-sm font-semibold text-accent">
              Fundador · creador de KAIDO
            </p>
            <p className="mt-6 max-w-md text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
              Antes de recomendarte un catálogo, un sitio o una tienda en
              línea, corro tu negocio por{" "}
              <span className="font-semibold text-foreground">KAIDO</span>,
              mi modelo propio de diagnóstico en nueve dimensiones.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["25+", "años"],
                ["400+", "casos"],
                ["100+", "proyectos"],
                ["6", "libros"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-accent">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/metodo"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              Conoce el método completo →
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Bloque de Héctor */}
      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)] md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16">
          <div>
            <span className="block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              El Artista
            </span>
            <h2 className="mt-3 font-display text-[clamp(30px,3.6vw,50px)] font-bold tracking-[-0.03em]">
              Héctor Flores
            </h2>
            <p className="mt-1 text-sm font-semibold text-accent">
              Screenplay Director & Steadycam
            </p>
            <p className="mt-6 max-w-md text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
              Acreditado en el departamento de cámara de producciones reales
              para Netflix, HBO y estudios de Hollywood — Narcos México,
              Elysium, Radical, entre otras. Cuando tu proyecto pide más que
              un clip vertical, es la persona que trae ese nivel.
            </p>
            <Link
              href="/produccion"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              Ver capacidad de producción →
            </Link>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden bg-surface-2 md:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hector-church-photo.jpg"
              alt="Héctor Flores operando cámara con Steadicam dentro de un templo, foto en blanco y negro."
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </Reveal>
    </>
  );
}
