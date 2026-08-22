"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Envuelve contenido que debe revelarse al entrar al viewport (patrón
 * data-reveal del handoff): opacity 0 + translateY(26px) -> su posición
 * natural, vía IntersectionObserver con un pequeño escalonado opcional.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          const timer = setTimeout(() => setRevealed(true), delay);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${revealed ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Cursor magnético: el elemento sigue ligeramente al cursor dentro de un
 * radio, y regresa a su posición natural fuera de él. Desactivado en
 * táctiles (sin hover fino) y con prefers-reduced-motion.
 */
export function Magnetic({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    function onMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(rect.width, rect.height) * 1.4 + 120;
      if (dist < radius) {
        const pull = 1 - dist / radius;
        el.style.transform = `translate(${dx * 0.3 * pull}px, ${
          dy * 0.3 * pull
        }px) scale(1.06)`;
      } else {
        el.style.transform = "";
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (el) el.style.transform = "";
    };
  }, []);

  return (
    <div ref={ref} data-magnetic="" className={className}>
      {children}
    </div>
  );
}

/** Barra de progreso de scroll, fija arriba de la página. */
export function ScrollProgress() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      if (fillRef.current) fillRef.current.style.width = `${pct}%`;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div ref={fillRef} className="scroll-progress-fill" />
    </div>
  );
}

/**
 * Letterbox de apertura: dos paneles que cubren la pantalla y se retiran
 * al montar. Vive en template.tsx para volver a dispararse en cada
 * navegación (a diferencia de layout.tsx, que no se remonta).
 */
export function LetterboxIntro() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setMounted(false);
      return;
    }
    const timer = setTimeout(() => setMounted(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <div className="letterbox-top absolute inset-x-0 top-0 h-[52vh] bg-background" />
      <div className="letterbox-bottom absolute inset-x-0 bottom-0 h-[52vh] bg-background" />
    </div>
  );
}
