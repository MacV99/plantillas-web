// @ts-check
import { defineConfig } from "astro/config";

// Sitio estático: se publica gratis en Vercel, Netlify o Cloudflare Pages.
export default defineConfig({
  output: "static",
  // Los estilos propios de cada página (pocos) viajan dentro de ella: así solo se pide un archivo de estilos, el común
  vite: { build: { target: "es2022", assetsInlineLimit: 16000 } },
});
