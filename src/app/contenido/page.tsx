import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { TikTokEmbed } from "@/components/tiktok-embed";
import { Reveal } from "@/components/interactions";
import { SitesCarousel } from "@/components/sites-carousel";
import { PodcastPlayer } from "@/components/podcast-player";

export const metadata: Metadata = {
  title: "Servicios y precios — Tu negocio en Clips",
  description:
    "Cuatro servicios con precio en la mesa y horas estimadas: foto de producto, sesión de clips, cadencia quincenal y sitio web.",
};

const CLIENTS = [
  {
    name: "Manolo's Salon",
    description:
      "Salón de belleza — clips semanales que convierten seguidores en citas agendadas.",
    tiktokUrl: "https://www.tiktok.com/@manolossalon",
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
    tiktokUrl: "https://www.tiktok.com/@chiquitrips",
    videoIds: [
      "7626517193215331605",
      "7617842758299946261",
      "7617145915127729429",
    ],
  },
];

const SITES = [
  {
    name: "Vital Green",
    description:
      "Tienda en línea de desodorantes de cristal — catálogo, carrito y checkout funcionando de verdad.",
    url: "https://www.vitalgreen.co",
    image: "/site-vitalgreen.jpg",
  },
  {
    name: "Megalimpio Xochimilco",
    description:
      "Venta mayorista de químicos de limpieza — catálogo con precio por litro, claro para cerrar por WhatsApp.",
    url: "https://www.megalimpioxochimilco.com",
    image: "/site-megalimpioxochimilco.jpg",
  },
  {
    name: "Madness Clean",
    description: "Limpieza profesional · Sitio en línea publicado.",
    url: "https://www.madnessclean.com.mx",
    image: "/site-madnessclean.jpg",
  },
  {
    name: "Manolo's Cuidado Capilar",
    description: "Cuidado capilar · Sitio en línea publicado.",
    url: "https://www.manoloscuidadocapilar.com",
    image: "/site-manoloscuidadocapilar.jpg",
  },
];

type Tier = {
  name: string;
  price: string;
  description?: string;
  features: string[];
  effort: string;
  highlighted?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Catálogo Digitalizado",
    price: "$9,900",
    description:
      "Esto se ofrece a aquellos clientes que todavía no cuentan con un catalogo con fotos de producto profesionales.",
    features: [
      "Foto de producto (Cotizado para 50 productos)",
      "Diseño Editorial incluído",
      "Codificación",
      "Presentación en PDF",
    ],
    effort: "20 horas",
  },
  {
    name: "One Time sesion",
    price: "$14,900",
    description:
      "Es una sesión de 4 horas en la que se filma previa aprobación de storyboard y formato de producción. El compromiso es generar al menos 20 clips editados y producidos para su publicación en redes sociales.",
    features: [
      "La entrega es en 5 días hábiles.",
      "El material se entrega en un dispositivo de almacenamiento.",
      "No está incluída la administración de las redes sociales del cliente.",
    ],
    effort: "30 horas",
  },
  {
    name: "Twice a Month",
    price: "$24,900",
    description:
      "Incluye una sesión de 4 horas quincenal en la que se filma previa aprobación de storyboard y formato de producción. El compromiso es generar al menos 40 clips editados y producidos para su publicación en redes sociales.",
    features: [
      "La entrega es en 10 días hábiles.",
      "El material se entrega en un dispositivo de almacenamiento.",
      "No está incluída la administración de las redes sociales del cliente.",
    ],
    effort: "50 horas",
  },
  {
    name: "Website",
    price: "$12,900",
    features: [
      "Incluye Dominio por un año y servicio de Hosting y correo institucional.",
      "Incluye una Landing Page funcional con formulario e integración con WhatsApp.",
    ],
    effort: "25 horas",
  },
];

const FAQ_ITEMS = [
  {
    question: "¿Los precios ya incluyen IVA?",
    answer:
      "No. Los cuatro precios son antes de impuestos: $9,900, $14,900, $24,900 y $12,900 más IVA. Lo digo aquí para que el número que ves sea el número que negocias, y la factura no traiga sorpresas.",
  },
  {
    question: "¿Qué es la estimación de esfuerzo?",
    answer:
      "Las horas de trabajo real que lleva cada servicio: 20 en el catálogo, 30 en la sesión única, 50 en la cadencia quincenal, 25 en el sitio web. La pongo a la vista porque el precio no sale de un tabulador — sale del tiempo que cuesta hacerlo bien.",
  },
  {
    question: "¿Twice a Month es un compromiso recurrente?",
    answer:
      "Sí, es mensual recurrente: una sesión de 4 horas cada quincena y al menos 40 clips editados y producidos, con entrega en 10 días hábiles. Cada sesión se filma previa aprobación de storyboard y formato de producción, así que nunca grabas a ciegas.",
  },
  {
    question: "¿Publican el contenido en mis redes?",
    answer:
      "No. El material se entrega editado y producido en un dispositivo de almacenamiento, listo para subir. La administración de tus redes sociales no está incluida en ninguno de los cuatro servicios.",
  },
];

export default function ContenidoPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1100px] px-[clamp(18px,4vw,56px)] pb-16 pt-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            Cuatro servicios · Precio fijo · Horas contadas
          </span>
          <h1 className="max-w-2xl font-display text-[clamp(34px,6.4vw,94px)] font-bold leading-[0.96] tracking-[-0.04em]">
            Aquí está el precio.
            <br />Y exactamente <span className="text-accent">qué recibes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(16px,1.35vw,20px)] leading-[1.55] text-muted">
            Cuatro servicios con precio en la mesa y horas estimadas: foto de
            producto, sesión de clips, cadencia quincenal y sitio web. Eliges
            el que tu negocio necesita hoy y sabes qué se entrega, cuándo y
            cuánto cuesta antes de firmar.
          </p>
        </div>
      </section>

      {/* Sitios en línea — primero: es la puerta de entrada más fácil de contratar */}
      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-[clamp(18px,4vw,56px)] py-[clamp(56px,7vw,120px)]">
          <span className="mb-6 inline-flex items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-accent">
            Sitios publicados · Clientes reales
          </span>
          <h2 className="max-w-2xl font-display text-[clamp(32px,4.2vw,64px)] font-bold leading-[1.02] tracking-[-0.03em]">
            Sitios en línea
          </h2>
          <p className="mt-5 max-w-xl text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted">
            Antes de los clips, esto: un sitio real, publicado, generando
            ventas o citas hoy mismo. Es la puerta de entrada más fácil —
            navega los cuatro ejemplos.
          </p>
          <div className="mt-12">
            <SitesCarousel sites={SITES} />
          </div>
        </div>
      </Reveal>

      {/* Así se ve */}
      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <h2 className="max-w-xl font-display text-[clamp(28px,3.4vw,50px)] font-bold tracking-[-0.03em]">
            Así se ve
          </h2>
          <div className="mt-12 space-y-16">
            {CLIENTS.map((client, clientIndex) => (
              <div key={client.name}>
                <h3 className="font-display text-[21px] font-bold tracking-[-0.02em]">
                  {client.name}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-muted">
                  {client.description}
                </p>
                <a
                  href={client.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-accent"
                >
                  Ver en TikTok →
                </a>
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
      </Reveal>

      {/* Podcast */}
      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto max-w-[1100px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <span className="mb-6 inline-flex items-center gap-2 rounded-[2px] border border-border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            Formato adicional · Podcast en video
          </span>
          <h2 className="max-w-xl font-display text-[clamp(28px,3.4vw,50px)] font-bold tracking-[-0.03em]">
            También hacemos podcast
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.6] text-muted">
            Cuando el tema pide más que un clip vertical, producimos episodios
            de podcast en video — conversación larga, con la misma cámara y
            edición que el resto del contenido. Ejemplo real:{" "}
            <span className="font-semibold text-foreground">
              &ldquo;Hablemos de Cabello&rdquo;
            </span>
            , el podcast de Manolo&apos;s Salón, con episodios sobre mitos,
            ciencia y marketing del cuidado capilar.
          </p>
          <div className="mt-10">
            <PodcastPlayer
              videoId="Zz2a6ZLRCv0"
              listId="UUCShD0yUimHN41vzhV5C6MQ"
              title="Capítulo 8. Hablemos de Cabello — El Marketing vs. La Ciencia"
              channelLabel="Hablemos de Cabello · Manolo's Salón"
              channelUrl="https://www.youtube.com/@manolosalon"
            />
          </div>
        </div>
      </Reveal>

      {/* Precios */}
      <Reveal as="section" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[2px] border p-[28px_26px_26px] transition-transform hover:-translate-y-[3px] ${
                  tier.highlighted
                    ? "border-accent bg-surface-2"
                    : "border-border bg-card-muted"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-[11px] left-[22px] w-fit rounded-[2px] bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                    Más elegido
                  </span>
                )}
                <h3 className="font-display text-[21px] font-bold tracking-[-0.02em]">
                  {tier.name}
                </h3>
                <p className="mt-2 font-display text-[32px] font-bold tracking-[-0.03em] text-accent">
                  {tier.price}
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-muted">
                  + IVA
                </p>
                {tier.description && (
                  <p className="mt-4 text-[14.5px] leading-[1.6] text-muted">
                    {tier.description}
                  </p>
                )}
                <ul className="mt-6 space-y-2.5 text-[14.5px] leading-[1.6] text-muted">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-4 text-xs text-muted" style={{ marginTop: "auto" }}>
                  Esfuerzo estimado: {tier.effort}
                </p>
                <a
                  href="mailto:hola@tunegocioenclips.com"
                  className="mt-6 rounded-[2px] bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.01]"
                >
                  Solicitar cotización
                </a>
              </div>
            ))}
          </div>

          {/* Nota aclaratoria */}
          <div className="mt-12 border-l-2 border-accent bg-card-muted p-6">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-accent">
              Nota aclaratoria
            </span>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              El servicio no incluye le renta del estudio, la filmación se
              lleva a cabo en las instalaciones del cliente, con el reto y
              adaptaciones que esto representa.
            </p>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              La tienda en línea no está en esta lista: se cotiza aparte,
              según tu inventario y tu capacidad real de cumplir pedidos.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Cross-links */}
      <Reveal as="section" className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)] sm:grid-cols-2">
          <div className="rounded-[2px] border border-accent bg-surface p-8">
            <p className="font-display text-lg font-bold text-foreground">
              Los clips llenan el embudo. El sitio lo cierra.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Si todavía no tienes dónde aterrizar a esa gente, el servicio de
              Website está en esta misma página — dominio, hosting, correo y
              landing con WhatsApp.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Ver el servicio de Website →
            </span>
          </div>
          <div className="rounded-[2px] border border-border bg-surface p-8">
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
      </Reveal>

      <Faq items={FAQ_ITEMS} />
    </>
  );
}
