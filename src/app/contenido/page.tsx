import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Faq } from "@/components/faq";
import { TikTokEmbed } from "@/components/tiktok-embed";

export const metadata: Metadata = {
  title: "Contenido — Retainer de video vertical — Tu negocio en Clips",
  description:
    "Retainer mensual de video vertical que mantiene tu presencia llena de gente nueva cada semana. Cupo limitado — trabajo solo, sin equipo.",
};

const CLIENTS = [
  {
    name: "Manolo's Salon",
    description:
      "Salón de belleza — clips semanales que convierten seguidores en citas agendadas.",
    videoIds: [
      "7675790097899457812",
      "7662911947821681927",
      "7639479843767340308",
    ],
  },
  {
    name: "Chiquitrips",
    description:
      "Agencia de viajes familiares — contenido que convierte curiosidad en reservaciones.",
    videoIds: [
      "7626517193215331605",
      "7617842758299946261",
      "7617145915127729429",
    ],
  },
];

const TIERS = [
  {
    name: "One Time",
    price: "$2,995",
    cadence: "proyecto único",
    description:
      "Para probar el formato antes de comprometerte a un retainer — un lote de contenido, sin permanencia.",
    features: [
      "1 día de grabación",
      "6 clips verticales editados",
      "Guion y dirección incluidos",
      "Entrega en 7 días hábiles",
    ],
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$6,995",
    cadence: "por mes",
    description:
      "Negocios que empiezan a construir presencia constante — cadencia mensual, sin saturar el equipo interno.",
    features: [
      "1 día de grabación al mes",
      "8 clips verticales editados",
      "Guion y dirección incluidos",
      "Publicación asistida",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$9,995",
    cadence: "por mes",
    description:
      "El plan más elegido — volumen suficiente para sostener una cadencia semanal real de contenido nuevo.",
    features: [
      "2 días de grabación al mes",
      "14 clips verticales editados",
      "Guion y dirección incluidos",
      "Reporte mensual de desempeño",
      "Tracking de conversiones (GTM/GA4)",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$13,995",
    cadence: "por mes",
    description:
      "Negocios con varias líneas de producto o ubicaciones que necesitan cobertura de contenido más amplia.",
    features: [
      "3 días de grabación al mes",
      "20+ clips verticales editados",
      "Guion y dirección incluidos",
      "Reporte mensual de desempeño",
      "Tracking de conversiones (GTM/GA4)",
      "Prioridad de agenda",
    ],
    highlighted: false,
  },
];

const FAQ_ITEMS = [
  {
    question: "¿Por qué hay cupo limitado?",
    answer:
      "Porque trabajo solo, sin equipo de producción detrás. Eso es lo que me permite mantener el nivel de dirección y edición en cada clip — pero también significa que solo puedo sostener un número limitado de clientes activos al mismo tiempo.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, es un retainer mes a mes, no un contrato forzoso. Te pido aviso con anticipación para no dejar un mes de grabación a medias, pero no hay penalización por cancelar.",
  },
  {
    question: "¿Necesito ya tener un sitio o catálogo antes de contratar contenido?",
    answer:
      "No es obligatorio, pero sí recomendable — el contenido funciona como el tráfico de entrada; sin un lugar claro a donde llegue ese tráfico (tu catálogo, sitio o tienda), pierdes buena parte de la conversión. Si aún no tienes presencia digital, empieza ahí.",
  },
];

export default function ContenidoPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteNav />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
            Capa 2 · Retainer mensual · Cupo limitado
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Contenido que hace que no dejen de llegar.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Un retainer mensual de video vertical, dirigido y editado por mí
            — sin equipo, sin plantillas genéricas. Cupo limitado porque el
            nivel de atención por cliente es lo que hace que funcione.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Así se ve
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Dos clientes reales, dos industrias distintas. El formato se
            adapta al negocio, no al revés.
          </p>
          <div className="mt-12 space-y-16">
            {CLIENTS.map((client, clientIndex) => (
              <div key={client.name}>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {client.name}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">
                  {client.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {client.videoIds.map((videoId, videoIndex) => (
                    <TikTokEmbed
                      key={videoId}
                      embedUrl={`https://www.tiktok.com/embed/v2/${videoId}`}
                      title={`${client.name} — clip ${videoIndex + 1}`}
                      delayMs={(clientIndex * 3 + videoIndex) * 400}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                tier.highlighted
                  ? "border-accent bg-surface-2"
                  : "border-border bg-surface-2/40"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                  Más elegido
                </span>
              )}
              <h3 className="font-display text-xl font-bold tracking-tight">
                {tier.name}
              </h3>
              <p className="mt-1 font-display text-2xl font-bold text-accent">
                {tier.price}
              </p>
              <p className="text-xs uppercase tracking-wider text-muted">
                {tier.cadence}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hola@tunegocioenclips.com"
                className="mt-8 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
              >
                Reservar cupo
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-4xl gap-6 px-6 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-accent/30 bg-surface-2 p-8">
            <p className="font-display text-lg font-bold text-foreground">
              ¿Todavía no tienes dónde recibir a esa gente nueva?
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              El contenido llena el embudo — pero necesitas un catálogo o
              sitio donde esa gente aterrice y confíe.
            </p>
            <Link
              href="/presencia"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              Ver planes de presencia digital →
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-surface-2/40 p-8">
            <p className="font-display text-lg font-bold text-foreground">
              ¿Tu proyecto pide más que un clip vertical?
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Producción de nivel cine, cámara y Steadicam para proyectos que
              lo necesitan.
            </p>
            <Link
              href="/produccion"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              Conoce Producción →
            </Link>
          </div>
        </div>
      </section>

      <Faq items={FAQ_ITEMS} />

      <SiteFooter />
    </div>
  );
}
