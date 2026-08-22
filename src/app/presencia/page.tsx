import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/interactions";

export const metadata: Metadata = {
  title: "Catálogo y sitio web — Tu negocio en Clips",
  description:
    "Catálogo digitalizado o sitio web. El nivel correcto no lo eliges tú a ciegas — lo decide un diagnóstico de tu operación.",
};

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
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1100px] px-[clamp(18px,4vw,56px)] pb-16 pt-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            Precio fijo · Sin compromiso
          </span>
          <h1 className="max-w-2xl font-display text-[clamp(34px,6.4vw,94px)] font-bold leading-[0.96] tracking-[-0.04em]">
            Catálogo y sitio web
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(16px,1.35vw,20px)] leading-[1.55] text-muted">
            Catálogo digitalizado o sitio web. El nivel correcto no lo eliges
            tú a ciegas — lo decide un diagnóstico de tu operación, no lo que
            se ve mejor en un portafolio.
          </p>
        </div>
      </section>

      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <div className="flex flex-col gap-6 rounded-[2px] border border-[rgba(232,255,47,0.3)] bg-surface-2 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-bold text-foreground">
                Todos los precios viven en una sola página.
              </p>
              <p className="mt-2 max-w-lg leading-relaxed text-muted">
                Catálogo digitalizado, sitio web, sesiones de clips y cadencia
                quincenal — con precio fijo y horas estimadas, sin
                cotizaciones infladas.
              </p>
            </div>
            <Link
              href="/contenido"
              className="shrink-0 rounded-[2px] bg-accent px-6 py-3 text-center text-sm font-semibold text-accent-ink transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(232,255,47,0.55)]"
            >
              Ver precios →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <div className="rounded-[2px] border border-accent bg-surface p-8">
            <p className="font-display text-lg font-bold text-foreground">
              Tu proyecto no termina cuando entrego tu sitio.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Si dentro de los primeros 30 días de recibir tu catálogo, sitio
              o tienda entras a un plan de{" "}
              <Link
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                href="/contenido"
              >
                Contenido
              </Link>
              , te acredito el costo completo de tu presencia digital al
              primer mes de retainer.
            </p>
          </div>
        </div>
      </Reveal>

      <Faq items={FAQ_ITEMS} />
    </>
  );
}
