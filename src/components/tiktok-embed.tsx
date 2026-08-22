"use client";

import { useEffect, useRef, useState } from "react";

// Cada iframe de TikTok solo se monta cuando entra al viewport (IntersectionObserver)
// y con un delay escalonado por índice global, para no disparar varios embeds al
// mismo tiempo — TikTok responde con "overload-protect triggered" en vez de
// renderizar el reproductor si se cargan ~5+ embeds simultáneos en una sola página.
// Ver hallazgo documentado en el proyecto (claude/stack-tecnico-y-build.md).
export function TikTokEmbed({
  embedUrl,
  title,
  delayMs = 0,
}: {
  embedUrl: string;
  title: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setShouldLoad(true), delayMs);
    return () => clearTimeout(timer);
  }, [visible, delayMs]);

  return (
    <div
      ref={ref}
      className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-surface-2"
    >
      {shouldLoad ? (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="encrypted-media"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-8 w-8 animate-pulse rounded-full bg-border" />
        </div>
      )}
    </div>
  );
}
