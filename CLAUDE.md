# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server en localhost:4321
pnpm build      # build estático a dist/
pnpm preview    # previsualizar build
```

## Arquitectura

Plantilla base de MacV para sitios web de clientes. Solo Astro, sin frameworks adicionales. Al clonar para un nuevo cliente se tocan solo: `src/data/cliente.ts` (todos los textos y datos: nombre, contacto, redes, menú, servicios, etc.), `project.css` (colores) y las imágenes de `public/img/`. Los componentes leen de `cliente.ts` — nunca escribir textos del cliente directo en ellos.

```
src/
├── data/
│   └── cliente.ts      ← ÚNICA fuente de textos/datos del cliente (SEO, contacto, redes, servicios…)
├── styles/
│   ├── global.css      ← resets, utilidades flex, botones, formularios — NO tocar entre proyectos
│   └── project.css     ← variables :root del proyecto (colores, sombras, overlays) — personalizar aquí
├── layouts/
│   └── Layout1.astro   ← único layout; CSS, fuente + íconos (con preconnect), SEO/Open Graph, header + footer
├── sections/
│   ├── hero.astro
│   ├── servicios.astro ← grid de tarjetas (ícono o imagen opcional), #servicios
│   └── footer.astro    ← #contacto
├── components/
│   ├── header.astro    ← sticky, glassmorphism, logo desde /img/logo-png-mini.avif
│   ├── navbar.astro    ← hamburger mobile, inline desktop, Escape cierra
│   ├── caracteristicas.astro
│   └── mision-vision.astro
└── pages/
    ├── index.astro
    └── 404.astro
```

`global.css` solo se importa en `Layout1.astro` — nunca en componentes individuales.

## Sistema de colores (skills: css-order, astro-css-architecture)

Para adaptar al cliente, cambiar en `project.css`:

```css
--clr-primary: #111111;    /* color base — genera primary-mid y primary-light via color-mix */
--clr-accent:  #111111;    /* botón principal, íconos decorativos (hover: --clr-accent-hover) */
--rgb-primary: 17, 17, 17; /* canales RGB del primary — actualizar junto con --clr-primary */
--rgb-accent:  17, 17, 17; /* canales RGB del accent */
```

Por defecto la paleta es escala de grises minimalista. Las variables semánticas derivadas (`--border-soft`, `--border-hover`, `--bg-subtle`, `--hero-overlay`, `--shadow-*`, `--header-bg-*`, etc.) se recalculan solas via `rgba(var(--rgb-primary), opacidad)`. Los neutros (`--clr-dark`, `--clr-gray`, `--clr-white`) rara vez se tocan.

## Reglas CSS obligatorias

**Orden en cada selector:** base → `@media (hover: hover)` → `@media (min-width)`

```css
.elemento { /* base */ }

@media (hover: hover) {
  .elemento:hover { /* nunca :hover directo fuera de este media query */ }
}

@media (min-width: 750px) {
  .elemento { /* responsive al final, mobile-first */ }
}
```

**Dónde van los estilos:**
- `global.css` → resets y utilidades reutilizables en todos los proyectos
- `project.css` → variables `:root` específicas del proyecto
- `<style>` en el `.astro` → estilos del componente (Astro los scopea automáticamente)

Nunca `style=""` inline en etiquetas HTML. Nunca colores hardcodeados — siempre variables CSS. Breakpoint principal: `min-width: 750px`.

## Assets

Logos en `public/img/` en formato `.avif`:
- `logo-png-mini.avif` → header (transparente, mini)
- `logo-png.avif` → footer (transparente, tamaño completo)
- `logo-mini.avif` / `logo.avif` → versiones con fondo
- `og.jpg` → imagen 1200×630 al compartir el enlace (Open Graph)

Bootstrap Icons y Montserrat (pesos 300·400·600·700) vía CDN en Layout1 — no usar `@import` de fuentes en CSS (bloquea la carga). Íconos: variantes `-fill` para decorativos/informativos.

Utilidades en `global.css`: `.flex-row`, `.flex-column`, `.bg-dots` (fondo de puntos), `.button1`, `.button2`, `.sin-scroll`.
