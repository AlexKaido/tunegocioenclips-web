import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Tu negocio en Clips — Presencia digital + contenido que vende",
  description:
    "Primero construimos dónde te encuentran — tu catálogo o tu sitio — y después el contenido que hace que no dejen de llegar.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1fr_1fr] md:items-center md:pt-24">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
              Presencia + contenido, en ese orden
            </span>
            <h1 className="max-w-xl font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl">
              No te falta calidad.
              <br />
              Te falta que se note{" "}
              <span className="text-accent">en el celular.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Primero construimos dónde te encuentran — tu catálogo o tu
              sitio — y después el contenido que hace que no dejen de llegar.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/presencia"
                className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
              >
                Arma tu presencia digital
              </Link>
              <Link
                href="/contenido"
                className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
              >
                ¿Ya tienes sitio? Ve los planes de contenido →
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface md:translate-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/camera-stock.webp"
              alt="Producción de video para negocios"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Funnel strip: Presencia -> Contenido */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-14">
          <Link className="group" href="/presencia">
            <span className="mb-2 block font-display text-sm font-bold text-accent">
              01
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Presencia
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Catálogo digital, sitio completo o tienda en línea — según lo
              que tu negocio realmente necesite, no según lo que se ve mejor
              en un portafolio.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Ver niveles y precios
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <Link className="group" href="/contenido">
            <span className="mb-2 block font-display text-sm font-bold text-accent">
              02
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Contenido
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Retainer mensual de video vertical que mantiene tu presencia
              llena de gente nueva cada semana. Cupo limitado — trabajo
              solo, sin equipo.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Ver planes de contenido
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </section>

      {/* Equipo: Alex + Hector */}
      <section id="equipo" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/alex-portrait.jpg"
                  alt="Alex Espinosa"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <p className="mt-6 font-display text-lg font-bold">
                Alex Espinosa
              </p>
              <p className="text-sm text-muted">
                Fundador · creador de KAIDO
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Antes de recomendarte un catálogo, un sitio o una tienda en
                línea, corro tu negocio por{" "}
                <span className="font-semibold text-foreground">KAIDO</span>,
                mi modelo propio de diagnóstico en nueve dimensiones.
              </p>
              <Link
                href="/metodo"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
              >
                Conoce el método →
              </Link>
            </div>
            <div>
              <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hector-church-photo.jpg"
                  alt="Hector Flores operando cámara con Steadicam dentro de un templo, foto en blanco y negro."
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <p className="mt-6 font-display text-lg font-bold">
                Hector Flores
              </p>
              <p className="text-sm text-muted">
                Operador de Steadicam y Cámara
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Acreditado en el departamento de cámara de producciones
                reales para Netflix, HBO y estudios de Hollywood — Narcos
                México, Elysium, Radical, entre otras. Cuando tu proyecto pide
                más que un clip vertical, es la persona que trae ese nivel.
              </p>
              <Link
                href="/produccion"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
              >
                Conoce Producción →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
