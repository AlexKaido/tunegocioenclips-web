import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Ruta de contacto — ver README del handoff ("Tareas pendientes (bloqueantes)").
//
// Requisito explícito del cliente: la dirección de destino nunca debe llegar
// al navegador. Vive únicamente aquí, del lado del servidor, leída de una
// variable de entorno de Vercel (CONTACT_TO). No se incrusta en componentes
// de React ni en un mailto.
//
// Servicio de envío: Resend, con la API key en RESEND_API_KEY (env var).
// Mientras esas variables no estén configuradas en Vercel, este endpoint
// responde 503 y el formulario del cliente muestra el mensaje de fallback
// ya previsto en el ContactForm.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Límite de tasa por IP, en memoria del proceso. Es una mitigación básica,
// no distribuida: se reinicia con cada cold start / instancia serverless.
// Suficiente para frenar abuso trivial; no sustituye un servicio dedicado
// (p. ej. Vercel Firewall / Upstash) si el volumen de abuso lo justifica.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en un momento." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const { nombre, correo, comentario } = (body ?? {}) as Record<
    string,
    unknown
  >;

  if (
    typeof nombre !== "string" ||
    typeof correo !== "string" ||
    typeof comentario !== "string" ||
    !nombre.trim() ||
    !correo.trim() ||
    !comentario.trim()
  ) {
    return NextResponse.json(
      { error: "Faltan datos: nombre, correo y comentario." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(correo.trim())) {
    return NextResponse.json(
      { error: "Ese correo no parece válido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !to) {
    console.error(
      "/api/contacto: faltan variables de entorno RESEND_API_KEY y/o CONTACT_TO en Vercel."
    );
    return NextResponse.json(
      { error: "El servicio de contacto todavía no está conectado." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM || "Tu negocio en Clips <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: correo,
      subject: `Nuevo contacto de ${nombre} — tunegocioenclips.com`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nComentario:\n${comentario}`,
    });

    if (error) {
      console.error("/api/contacto: error de Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("/api/contacto: excepción al enviar:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
