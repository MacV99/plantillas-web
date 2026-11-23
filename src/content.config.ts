import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Artículos: un archivo .md por artículo en src/content/articulos/.
// borrador: true = solo se ve en desarrollo (pnpm dev), no se publica.
const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    tema: z.string().optional(),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { articulos };
