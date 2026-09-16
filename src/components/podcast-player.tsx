"use client";

import { useState } from "react";

// Misma fachada carátula → iframe que ReelPlayer (evita el peso del embed de
// YouTube en la carga inicial), pero apuntando a la playlist de "subidas" del
// canal (list=UU...) en vez de a un solo video: el reproductor arranca en el
// episodio destacado y expone el resto del canal en el panel de playlist de
// YouTube, así que se mantiene al día solo cuando el cliente sube episodios
// nuevos, sin tocar código.
export function PodcastPlayer({
  videoId,
  listId,
  title,
  channelLabel,
  channelUrl,
}: {
  videoId: string;
  listId: string;
  title: string;
  channelLabel: string;
  channelUrl: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2px] border border-border">
      <div className="relative aspect-video w-full bg-surface-2">
        {open ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?list=${listId}&autoplay=1&rel=0`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group absolute inset-0 h-full w-full text-left"
            aria-label={`Reproducir podcast: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`Carátula del episodio "${title}"`}
              className="h-full w-full object-cover"
              style={{
                filter: "saturate(0.7) contrast(1.06) brightness(0.72)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.85),transparent_50%)]" />
            <span className="absolute left-1/2 top-1/2 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent shadow-[0_20px_50px_-14px_rgba(232,255,47,0.6)] transition-transform group-hover:scale-105">
              <span className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-[#0a0a0a]" />
            </span>
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-3 text-sm">
              <span className="truncate text-foreground">{title}</span>
              <span className="flex-none font-semibold text-accent">
                Reproducir
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface px-5 py-3.5">
        <span className="text-sm text-muted">{channelLabel}</span>
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none text-sm font-semibold text-accent"
        >
          Ver todos los episodios →
        </a>
      </div>
    </div>
  );
}
