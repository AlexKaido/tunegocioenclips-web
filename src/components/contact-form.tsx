"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!nombre.trim() || !correo.trim() || !comentario.trim()) {
      setError("Faltan datos: nombre, correo y comentario.");
      return;
    }
    if (!EMAIL_RE.test(correo.trim())) {
      setError("Ese correo no parece válido.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, comentario }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(
          "No pudimos enviar el mensaje: el servicio de contacto todavía no está conectado. Escríbeme a hola@tunegocioenclips.com mientras se resuelve."
        );
      }
    } catch {
      setError(
        "No pudimos enviar el mensaje: el servicio de contacto todavía no está conectado. Escríbeme a hola@tunegocioenclips.com mientras se resuelve."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-b border-border px-[clamp(18px,4vw,56px)] py-[clamp(48px,6vw,100px)]"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <div className="absolute inset-x-0 top-0 mx-auto h-px w-[min(760px,90%)] bg-[linear-gradient(to_right,transparent,var(--accent),transparent)]" />
        <div className="grid gap-12 pt-16 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-16">
          <div>
            <h2 className="font-display text-[clamp(28px,3.4vw,50px)] font-bold leading-[1.05] tracking-[-0.03em]">
              ¿Por dónde <span className="text-accent">empezamos</span>?
            </h2>
            <p className="mt-5 max-w-md text-[clamp(16px,1.3vw,19.5px)] leading-[1.62] text-muted">
              Cuéntame qué vendes y a quién, y te digo qué te conviene:
              catálogo digitalizado, sitio web o sesiones de clips. Si
              necesitas tienda en línea, se cotiza aparte.
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="text-accent">✓</span>
                <span>
                  Respuesta directa mía, no de un formulario automático.
                </span>
              </li>
              <li className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="text-accent">✓</span>
                <span>Diagnóstico corto antes de cualquier cotización.</span>
              </li>
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="rounded-[2px] border border-border bg-surface p-[clamp(24px,3vw,40px)]">
                <span className="inline-flex w-fit rounded-[2px] bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                  Mensaje enviado
                </span>
                <p className="mt-5 font-display text-2xl font-bold tracking-tight">
                  Gracias. Te respondo en menos de 24 horas.
                </p>
                <p className="mt-3 leading-relaxed text-muted">
                  Si es urgente, escríbeme directo y ponemos fecha para la
                  conversación de diagnóstico.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[18px] rounded-[2px] border border-border bg-surface p-[clamp(24px,3vw,40px)]"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contacto-nombre"
                    className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-muted"
                  >
                    Nombre
                  </label>
                  <input
                    id="contacto-nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Cómo te llamas"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="box-border rounded-[2px] border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-[#6b6b6b] focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contacto-correo"
                    className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-muted"
                  >
                    Correo
                  </label>
                  <input
                    id="contacto-correo"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="box-border rounded-[2px] border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-[#6b6b6b] focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contacto-comentario"
                    className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-muted"
                  >
                    Comentario
                  </label>
                  <textarea
                    id="contacto-comentario"
                    rows={5}
                    placeholder="Qué vendes, a quién, y qué necesitas resolver"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    className="box-border resize-y rounded-[2px] border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-[#6b6b6b] focus:border-accent focus:outline-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-[2px] bg-accent px-6 py-[17px] text-base font-bold text-accent-ink transition-transform hover:scale-[1.01] disabled:opacity-70"
                >
                  {sending ? "Enviando…" : "Enviar mensaje"}
                </button>
                <p className="text-center text-[13px] leading-relaxed text-[#6b6b6b]">
                  Tus datos se usan sólo para responderte. Nada de listas de
                  correo.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
