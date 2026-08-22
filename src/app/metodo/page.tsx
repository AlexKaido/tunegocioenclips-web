import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

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
    <div className="flex flex-col flex-1">
      <SiteNav />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1fr_1.3fr] md:items-end md:pt-24">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-surface md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/alex-portrait.jpg"
              alt="Alex Espinosa"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="md:order-1">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
              El método
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              KAIDO no es un discurso de venta.
              <br />
              <span className="text-accent">
                Es cómo decido qué necesitas.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Antes de recomendarte un catálogo, un sitio o una tienda en
              línea, reviso tu negocio contra un marco de nueve dimensiones —
              no es una auditoría de semanas, es una conversación corta que
              evita que compres algo que tu operación no puede sostener. No
              es intuición: es el mismo sistema que he aplicado en más de 400
              casos reales.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
            &ldquo;Después de analizar empresas descubrí que la mayoría de
            los problemas de negocio dejan señales mucho antes de convertirse
            en crisis. KAIDO fue creado para detectar esas señales a
            tiempo.&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted">
            Alex Espinosa · creador de KAIDO
          </p>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">
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
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-accent md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Nueve dimensiones. Un mismo diagnóstico.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            No eliges catálogo, sitio o tienda en línea a ciegas. Corro tu
            negocio por estas nueve dimensiones, y de ahí sale la
            recomendación.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {DIMENSIONS.map((dim, i) => (
              <div key={dim} className="flex gap-4">
                <span className="font-display text-3xl font-bold text-border">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 font-display text-lg font-semibold leading-snug">
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
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
            Ejemplo real
          </span>
          <p className="text-lg leading-relaxed text-muted">
            Alguien me pide &ldquo;quiero una tienda en línea&rdquo;. Antes
            de cotizar, reviso si su negocio tiene la logística resuelta:
            inventario consolidado, provisión de producto, capacidad real de
            cumplir pedidos. Sin eso, una tienda en línea no falla por el
            diseño — falla en la primera semana por operación.
          </p>
          <p className="mt-4 font-display text-lg font-semibold text-foreground">
            Ese filtro es rápido — no necesita semanas de análisis — y es lo
            que aporto antes de vender cualquier proyecto.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-lg leading-relaxed text-muted">
            Y a diferencia de la mayoría, te lo puedo mostrar con datos:
            cuánta gente llegó por el contenido, cuánta entró de verdad a tu
            sitio, y cuánta terminó contactándote. No es una promesa — lo
            medimos juntos.
          </p>
          <p className="mt-6 font-display text-xl font-semibold text-foreground">
            La mayoría de los negocios que conozco no tienen un problema de
            calidad. Tienen un problema de que nadie se entera. A eso me
            dedico.
          </p>
          <Link
            href="/presencia"
            className="mt-10 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
          >
            Empezar diagnóstico
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
