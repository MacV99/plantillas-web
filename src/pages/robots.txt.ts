// Indicaciones para buscadores. Toma el dominio de cliente.ts.
import type { APIRoute } from "astro";
import { cliente } from "../data/cliente";

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /estilos\nDisallow: /mantenimiento\n\nSitemap: ${cliente.url}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain" },
  });
