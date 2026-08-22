"use client";

import { LetterboxIntro } from "@/components/interactions";

// template.tsx (a diferencia de layout.tsx) se remonta en cada navegación,
// así que el letterbox de apertura vuelve a dispararse en cada cambio de página.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LetterboxIntro />
      {children}
    </>
  );
}
