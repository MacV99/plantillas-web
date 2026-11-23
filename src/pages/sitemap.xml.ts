// Mapa del sitio para Google: páginas públicas + artículos publicados. Se arma solo.
import type { APIRoute } from "astro";
import { articulosVisibles } from "../lib/articulos";
import { cliente } from "../data/cliente";

// Páginas que no deben salir en buscadores
const OCULTAS = ["/404", "/estilos", "/mantenimiento"];

export const GET: APIRoute = async () => {
  const articulos = (await articulosVisibles()).filter((a) => !a.data.borrador);

  // Todas las páginas .astro de esta carpeta, menos las ocultas y las que dependen de un dato ([id])
  const fijas = Object.keys(import.meta.glob("./**/*.astro"))
    .filter((archivo) => !archivo.includes("["))
    .map((archivo) => archivo.replace(/^\./, "").replace(/\.astro$/, "").replace(/\/index$/, "") || "/")
    .filter((ruta) => !OCULTAS.includes(ruta))
    .filter((ruta) => ruta !== "/articulos" || articulos.length > 0);

  const rutas = [...fijas, ...articulos.map((a) => `/articulos/${a.id}`)].sort();
  const urls = rutas.map((ruta) => `  <url><loc>${new URL(ruta, cliente.url).href}</loc></url>`).join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml" },
  });
};
