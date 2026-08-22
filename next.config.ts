import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Sin remotePatterns: todas las imágenes ahora se sirven localmente desde
     /public. Antes esta config apuntaba a tunegocioenclips.com/wp-content/...
     (sitio original en SiteGround) — se quitó porque, al mover el DNS del
     dominio a este mismo proyecto de Vercel (21-ago-2026), esa ruta remota
     empezó a resolver contra este sitio en vez del hosting viejo y esas
     imágenes se rompieron en producción. */
};

export default nextConfig;
