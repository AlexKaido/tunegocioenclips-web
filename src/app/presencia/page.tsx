import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Presencia digital — Tu negocio en Clips",
  description:
    "Catálogo digital, sitio completo o tienda en línea. El nivel correcto lo decide un diagnóstico, no una lista de precios.",
};

const TIERS = [
  {
    name: "Catálogo digital",
    price: "desde $2,995",
    description:
      "Negocios que necesitan estar encontrables y presentables ya — sin necesidad de contar una historia de marca extensa.",
    features: [
      "Mini-sitio navegable con tus productos o servicios",
      "Diseño mobile-first (donde te va a ver el 90% de tus clientes)",
      "Fotos, información y contacto organizados",
      "Dominio y hosting incluidos",
      "Tracking de visitas y conversiones (GTM/GA4): add-on +$500",
    ],
    highlighted: false,
  },
  {
    name: "Sitio completo",
    price: "desde $4,995",
    description:
      "Negocios que necesitan narrativa de marca completa: quién eres, por qué confiar en ti, qué te hace distinto.",
    features: [
      "Todo lo del catálogo digital",
      "Páginas de marca: historia, nosotros, casos de uso",
      "Espacio para testimonios y prueba social",
      "Tracking de conversiones (GTM/GA4) incluido",
      "3 meses de mantenimiento incluidos",
    ],
    highlighted: true,
  },
  {
    name: "Tienda en línea",
    price: "desde $8,995",
    description:
      "Negocios operativamente listos para vender directo: inventario consolidado, provisión de producto y capacidad real de cumplir pedidos.",
    features: [
      "Todo lo del sitio completo",
      "Carrito y checkout",
      "Gestión de pagos integrada",
      "Tracking de conversiones e-commerce incluido",
      "Filtro de logística antes de cotizar (ver FAQ)",
    ],
    highlighted: false,
  },
];

const FAQ_ITEMS = [
  {
    question: "¿Cómo sé qué nivel me conviene?",
    answer:
      "No lo eliges a ciegas de una lista de precios. Antes de cotizar, reviso tu negocio con criterio de KAIDO — es una conversación corta, no una auditoría de semanas. Por ejemplo: si pides tienda en línea, primero reviso si tienes inventario consolidado y capacidad real de cumplir pedidos. Sin eso, una tienda en línea no falla por el diseño — falla en la primera semana por operación, y te lo voy a decir antes de venderte algo que no vas a poder sostener.",
  },
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "Depende del nivel y de qué tan lista esté tu información (fotos, textos, catálogo de productos). Te doy un cronograma exacto después del diagnóstico, no antes.",
  },
  {
    question: "¿El tracking (GTM/GA4) para qué sirve realmente?",
    answer:
      "Para que no tengas que creerme cuando te diga que algo está funcionando. Con tu sitio instrumentado y, si además trabajas contenido conmigo, puedo mostrarte el embudo completo: cuánta gente llegó por un clip, cuánta entró de verdad a tu sitio, y cuánta te contactó.",
  },
];

export default function PresenciaPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteNav />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
            Capa 1 · Proyecto de precio fijo, sin compromiso
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Presencia digital
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Catálogo, sitio completo o tienda en línea. El nivel correcto no
            lo eliges tú a ciegas — lo decide un diagnóstico de tu operación,
            no lo que se ve mejor en un portafolio.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
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
                Empezar diagnóstico
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-2xl border border-accent/30 bg-surface p-8">
            <p className="font-display text-lg font-bold text-foreground">
              Tu proyecto no termina cuando entrego tu sitio.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Si dentro de los primeros 30 días de recibir tu catálogo, sitio
              o tienda entras a un plan de{" "}
              <a
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                href="/contenido"
              >
                Contenido
              </a>
              , te acredito el costo completo de tu presencia digital al
              primer mes de retainer.
            </p>
          </div>
        </div>
      </section>

      <Faq items={FAQ_ITEMS} />

      <SiteFooter />
    </div>
  );
}
