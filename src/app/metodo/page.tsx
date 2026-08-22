import type { Metadata } from "next";
import { Reveal } from "@/components/interactions";

export const metadata: Metadata = {
  title: "Método — KAIDO — Tu negocio en Clips",
  description:
    "KAIDO: el marco de diagnóstico en nueve dimensiones que decide qué necesita tu negocio, antes de venderte nada.",
};

const STATS = [
  { value: "25+", label: "años de experiencia" },
  { value: "400+", label: "casos documentados" },
  { value: "100+", label: "proyectos ejecutados" },
  { value: "6", label: "libros publicados" },
];

const DIMENSIONS = [
  "Organización y stakeholders",
  "Procesos",
  "Recursos financieros, humanos y materiales",
  "Costos y pricing",
  "Análisis estratégico de la oferta de valor",
  "Características del producto o servicio",
  "Automatización",
  "Medios y administración del cliente",
  "Cliente",
];

export default function MetodoPage() {
  return (
    <>
      <section className="relative grid min-h-[min(88vh,860px)] grid-cols-1 gap-0 overflow-hidden border-b border-border md:grid-cols-[minmax(0,1.3fr)_clamp(240px,32%,500px)] md:items-center">
        <div className="order-1 flex flex-col justify-center px-[clamp(18px,4vw,56px)] py-10 md:order-1 md:py-[clamp(48px,8vw,120px)]">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            El método
          </span>
          <h1 className="font-display text-[clamp(34px,6.4vw,94px)] font-bold leading-[0.96] tracking-[-0.04em]">
            KAIDO no es un discurso de venta.
            <br />
            <span className="text-accent">Es cómo decido qué necesitas.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[clamp(16px,1.35vw,20px)] leading-[1.55] text-muted">
            Antes de recomendarte un catálogo, un sitio o una tienda en línea,
            reviso tu negocio contra un marco de nueve dimensiones — no es
            una auditoría de semanas, es una conversación corta que evita que
            compres algo que tu operación no puede sostener. No es intuición:
            es el mismo sistema que he aplicado en más de 400 casos reales.
          </p>
        </div>
        <div className="relative order-0 h-[62vw] max-h-[400px] min-h-[240px] overflow-hidden md:order-2 md:h-full md:max-h-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/alex-portrait.jpg"
            alt="Alex Espinosa"
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </section>

      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[900px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <p className="font-display text-[clamp(22px,2.8vw,38px)] font-medium leading-[1.28] tracking-[-0.02em] text-foreground">
            &ldquo;Después de analizar empresas descubrí que la mayoría de los
            problemas de negocio dejan señales mucho antes de convertirse en
            crisis. KAIDO fue creado para detectar esas señales a
            tiempo.&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">
            Alex Espinosa · creador de KAIDO
          </p>
          <p className="mt-8 max-w-2xl text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            Antes de KAIDO desarrollé{" "}
            <span className="font-semibold text-foreground">
              ADN Estratégico
            </span>
            , una metodología propia construida a partir de años analizando
            negocios reales. KAIDO es esa metodología convertida en un
            sistema aplicable: nueve dimensiones que van de la organización y
            sus recursos, pasando por procesos y producto, hasta llegar al
            cliente.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)] lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-[clamp(38px,4.4vw,62px)] font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <h2 className="max-w-xl font-display text-[clamp(28px,3.4vw,50px)] font-bold tracking-[-0.03em]">
            Nueve dimensiones. Un mismo diagnóstico.
          </h2>
          <p className="mt-4 max-w-xl text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            No eliges catálogo, sitio o tienda en línea a ciegas. Corro tu
            negocio por estas nueve dimensiones, y de ahí sale la
            recomendación.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {DIMENSIONS.map((dim, i) => (
              <div key={dim} className="border-t border-border pt-4">
                <span className="font-display text-[26px] font-bold text-numeral-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-[17.5px] font-semibold leading-snug">
                  {dim}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted">
            Este es el marco que aplico a tu negocio. Si quieres profundizar
            en el sistema completo (incluida la versión personal, IKIGAI
            KAIDŌ), tiene su propio sitio:{" "}
            <a
              href="https://www.ikigaikaido.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              ikigaikaido.com
            </a>
            .
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto max-w-[900px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <span className="mb-6 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-accent">
            Ejemplo real
          </span>
          <p className="text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            Alguien me pide &ldquo;quiero una tienda en línea&rdquo;. Antes de
            cotizar, reviso si su negocio tiene la logística resuelta:
            inventario consolidado, provisión de producto, capacidad real de
            cumplir pedidos. Sin eso, una tienda en línea no falla por el
            diseño — falla en la primera semana por operación.
          </p>
          <p className="mt-4 font-display text-[clamp(18px,1.6vw,23px)] font-semibold text-foreground">
            Ese filtro es rápido — no necesita semanas de análisis — y es lo
            que aporto antes de vender cualquier proyecto.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[900px] px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
          <p className="text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
            Y a diferencia de la mayoría, te lo puedo mostrar con datos:
            cuánta gente llegó por el contenido, cuánta entró de verdad a tu
            sitio, y cuánta terminó contactándote. No es una promesa — lo
            medimos juntos.
          </p>
          <p className="mt-6 font-display text-[clamp(22px,2.4vw,34px)] font-bold text-foreground">
            La mayoría de los negocios que conozco no tienen un problema de
            calidad. Tienen un problema de que nadie se entera. A eso me
            dedico.
          </p>
          <a
            href="https://www.ikigaikaido.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-[2px] bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.02]"
          >
            Empezar diagnóstico →
          </a>
        </div>
      </Reveal>
    </>
  );
}
