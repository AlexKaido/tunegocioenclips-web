import type { Metadata } from "next";
import { Reveal } from "@/components/interactions";
import { ReelPlayer } from "@/components/reel-player";

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
    <>
      <section className="relative grid min-h-[min(84vh,820px)] grid-cols-1 gap-0 overflow-hidden border-b border-border md:grid-cols-[minmax(0,1.25fr)_clamp(240px,34%,540px)] md:items-center">
        <div className="order-1 flex flex-col justify-center px-[clamp(18px,4vw,56px)] py-10 md:order-1 md:py-[clamp(48px,8vw,120px)]">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            Capacidad adicional · Cotización por proyecto
          </span>
          <h1 className="max-w-2xl font-display text-[clamp(34px,6.4vw,94px)] font-bold leading-[0.96] tracking-[-0.04em]">
            Cuando tu proyecto
            <br />
            necesita <span className="text-accent">más que un clip vertical.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(16px,1.35vw,20px)] leading-[1.55] text-muted">
            Esto no reemplaza tu retainer de Contenido — lo complementa
            cuando el alcance pide otro nivel: comerciales, video
            institucional, producciones de mayor volumen o cámara en
            movimiento. Para eso entra un socio dedicado al cine profesional,
            con créditos reales en cine y streaming, no solo experiencia con
            redes sociales.
          </p>
        </div>
        <div className="relative order-0 h-[62vw] max-h-[400px] min-h-[240px] overflow-hidden md:order-2 md:h-full md:max-h-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hector-church-photo.jpg"
            alt="Héctor Flores operando cámara con Steadicam dentro de un templo, foto en blanco y negro."
            className="h-full w-full object-cover grayscale"
          />
          <span className="mark-in absolute right-4 top-4 h-[26px] w-[26px] border-r-2 border-t-2 border-accent" />
          <span className="mark-in absolute bottom-4 right-4 h-[26px] w-[26px] border-b-2 border-r-2 border-accent" />
        </div>
      </section>

      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <span className="mb-6 inline-flex items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            El Artista
          </span>
          <h2 className="max-w-2xl font-display text-[clamp(28px,3.4vw,50px)] font-bold tracking-[-0.03em]">
            Héctor Flores — Screenplay Director &amp; Steadycam
          </h2>
          <p className="mt-6 max-w-2xl text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            Acreditado en el departamento de cámara de producciones reales
            para Netflix, HBO y estudios de Hollywood — no es un freelancer
            con cámara de redes, es alguien que ha operado en sets
            profesionales, con el equipo que eso exige.
          </p>

          <ReelPlayer />

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="border-b border-border pb-3 text-[13px] font-bold uppercase tracking-wider text-muted">
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
              <p className="border-b border-border pb-3 text-[13px] font-bold uppercase tracking-wider text-muted">
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

          <div className="mt-10 flex items-center gap-5 rounded-[2px] border border-border bg-surface-2 p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/chimino-logo.png"
              alt="Logo de Chimino Films"
              className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
              style={{ width: "clamp(140px,14vw,190px)", height: "auto" }}
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
      </Reveal>

      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto max-w-[900px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <h2 className="font-display text-[clamp(28px,3.4vw,50px)] font-bold tracking-[-0.03em]">
            Qué cambia cuando entra Héctor
          </h2>
          <p className="mt-4 text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            Cámara en movimiento fluida (Steadicam), sensores y ópticas de
            cine (ARRI Alexa) y control de encuadre que viene de años operando
            en sets con presupuesto y exigencia real — el tipo de producción
            que separa un anuncio que se ve como anuncio de uno que se ve
            como contenido de plataforma o cine.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[900px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <span className="mb-6 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-accent">
            ¿Cuándo tiene sentido?
          </span>
          <p className="text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            Cuando el proyecto sale del formato de clip vertical recurrente:
            un comercial, un video institucional, una producción de mayor
            volumen, una toma que necesita cámara en movimiento en vez de un
            teléfono en la mano. Si tu negocio todavía no llegó a ese punto,
            tu retainer de Contenido sigue siendo la opción correcta — esta
            capacidad está aquí para cuando sí lo necesites.
          </p>
          <a
            href="mailto:hola@tunegocioenclips.com?subject=Cotización%20de%20producción"
            className="mt-10 inline-flex rounded-[2px] bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.02]"
          >
            Cotiza tu proyecto →
          </a>
          <p className="mt-4 text-sm text-muted">
            Cada producción de este tipo se cotiza según alcance — no hay un
            precio de lista.
          </p>
        </div>
      </Reveal>
    </>
  );
}
