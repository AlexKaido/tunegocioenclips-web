import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Producción — Tu negocio en Clips",
  description:
    "Cuando el proyecto pide más que un clip vertical: producción de nivel profesional respaldada por créditos reales en cine, streaming y TV.",
};

const CAMERA_CREDITS = [
  "Narcos México (Netflix)",
  "Elysium (Sony Pictures)",
  "Radical (Eugenio Derbez)",
  "Sr. Ávila (HBO)",
  "No Tengo Miedo (Netflix)",
  "Rescate Imposible",
  "Colosio",
  "Camino a Marte",
];

const FILM_GEAR = ["ARRI Alexa", "Steadicam", "Cabezales O'Connor"];

export default function ProduccionPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteNav />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.2fr_1fr] md:items-center md:pt-24">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
              Capacidad adicional · Cotización por proyecto
            </span>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Cuando tu proyecto necesita más que un clip vertical.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Esto no reemplaza tu retainer de Contenido — lo complementa
              cuando el alcance pide otro nivel: comerciales, video
              institucional, producciones de mayor volumen o cámara en
              movimiento. Para eso, traigo a un aliado con créditos reales en
              cine y streaming, no solo experiencia con redes sociales.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hector-church-photo.jpg"
              alt="Hector Flores operando cámara con Steadicam dentro de un templo, foto en blanco y negro."
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
            El aliado
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Hector Flores — Operador de Steadicam y Cámara
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Acreditado en el departamento de cámara de producciones reales
            para Netflix, HBO y estudios de Hollywood — no es un freelancer
            con cámara de redes, es alguien que ha operado en sets
            profesionales, con el equipo que eso exige.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/6FFh1Evi37o"
                title="Reel de cinematografía — Hector Flores"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hector-credits-image.jpg"
              alt="Créditos de departamento de cámara de Hector Flores: Narcos México, Elysium, Radical, Sr. Ávila, No Tengo Miedo, Rescate Imposible, Colosio, Camino a Marte y más."
              className="w-full"
            />
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-muted">
                Créditos de cámara
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {CAMERA_CREDITS.map((credit) => (
                  <li key={credit} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{credit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-muted">
                Equipo de cine
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {FILM_GEAR.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-5 rounded-2xl border border-border bg-surface-2/40 p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/chimino-logo.png"
              alt="Logo de Chimino Films"
              className="h-20 w-20 shrink-0 rounded-2xl sm:h-24 sm:w-24"
            />
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Alex y Héctor también co-dirigen y producen juntos{" "}
              <span className="font-semibold text-foreground">
                Chimino Films
              </span>
              , su propia productora de cortometrajes — la misma exigencia de
              nivel cinematográfico, aplicada también a sus proyectos
              personales.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Qué cambia cuando entra Hector
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Cámara en movimiento fluida (Steadicam), sensores y ópticas de
            cine (ARRI Alexa) y control de encuadre que viene de años
            operando en sets con presupuesto y exigencia real — el tipo de
            producción que separa un anuncio que se ve como anuncio de uno
            que se ve como contenido de plataforma o cine.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
            ¿Cuándo tiene sentido?
          </span>
          <p className="text-lg leading-relaxed text-muted">
            Cuando el proyecto sale del formato de clip vertical recurrente:
            un comercial, un video institucional, una producción de mayor
            volumen, una toma que necesita cámara en movimiento en vez de un
            teléfono en la mano. Si tu negocio todavía no llegó a ese punto,
            tu retainer de Contenido sigue siendo la opción correcta — esta
            capacidad está aquí para cuando sí lo necesites.
          </p>
          <a
            href="mailto:hola@tunegocioenclips.com?subject=Cotización%20de%20producción"
            className="mt-10 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
          >
            Cotiza tu proyecto
          </a>
          <p className="mt-4 text-sm text-muted">
            Cada producción de este tipo se cotiza según alcance — no hay un
            precio de lista.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
