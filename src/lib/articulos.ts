// Artículos que se pueden mostrar, del más nuevo al más viejo.
// Los borradores solo salen mientras se trabaja (pnpm dev); al publicar no entran.
import { getCollection } from "astro:content";

export async function articulosVisibles() {
  const lista = await getCollection("articulos", ({ data }) => import.meta.env.DEV || !data.borrador);
  return lista.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

/** «15 de enero de 2026» */
export const fechaLarga = (fecha: Date) => fecha.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
