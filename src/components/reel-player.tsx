"use client";

import { useState } from "react";

// Fachada carátula → iframe: evita el peso del embed de YouTube en la carga
// inicial. Al hacer clic se sustituye la miniatura por el iframe real.
export function ReelPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 overflow-hidden rounded-[2px] border border-border">
      <div className="relative aspect-video w-full bg-surface-2">
        {open ? (
          <iframe
            src="https://www.youtube.com/embed/6FFh1Evi37o?autoplay=1&rel=0"
            title="Reel de cinematografía — Héctor Flores"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group absolute inset-0 h-full w-full text-left"
            aria-label="Reproducir reel de cinematografía"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.youtube.com/vi/6FFh1Evi37o/maxresdefault.jpg"
              alt="Carátula del reel de cinematografía de Héctor Flores"
              className="h-full w-full object-cover"
              style={{
                filter: "saturate(0.7) contrast(1.06) brightness(0.72)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.85),transparent_50%)]" />
            <span className="absolute left-1/2 top-1/2 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent shadow-[0_20px_50px_-14px_rgba(232,255,47,0.6)] transition-transform group-hover:scale-105">
              <span className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-[#0a0a0a]" />
            </span>
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3 text-sm">
              <span className="text-foreground">Reel de cinematografía</span>
              <span className="font-semibold text-accent">Ver en YouTube</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
