# CLAUDE.md

Plantilla base de MacV para sitios web de clientes. Solo Astro, sin frameworks adicionales.

## Comandos

```bash
pnpm dev        # localhost:4321
pnpm build      # estático a dist/
pnpm preview    # ver el build
pnpm check      # revisar errores
pnpm fuentes    # al usar un ícono bi-* nuevo (recorta letra e íconos; necesita Python con fonttools y brotli)
```

Vista previa: `.claude/launch.json` → `plantilla`. Si se agrega o quita `src/content.config.ts`, reiniciar `pnpm dev`.

## Nuevo cliente: qué se toca

1. `src/data/cliente.ts` — todos los textos y datos. Los componentes leen de ahí: nunca escribir textos del cliente directo en ellos.
2. `src/styles/project.css` — solo el bloque **MARCA** del nivel 1 (6 valores: 2 de tinta y 4 del color de vida).
3. Imágenes de `public/img/`.
4. `src/pages/index.astro` — orden de las secciones (una línea por sección).

**Apagar una sección:** vaciar su lista o su texto en `cliente.ts` (desaparece sola) o borrar su línea en `index.astro`.

## Dónde está todo

```
src/
├── data/cliente.ts        ← ÚNICA fuente de textos/datos del cliente + interruptores (menuEnBarra, whatsappFlotante, analitica)
├── styles/
│   ├── project.css        ← valores en 3 niveles (FUENTE DE VERDAD) + tema claro/oscuro
│   ├── global.css         ← reset, utilidades y TODAS las piezas (botones, campos, listas, ventanas, avisos) — NO tocar entre proyectos
│   └── icons.css          ← generado por `pnpm fuentes`. No editar a mano
├── layouts/Layout1.astro  ← único layout y único que importa los CSS y `lib/ui`. Props: `oculta` (fuera de buscadores), `sola` (sin cabecera ni pie)
├── components/
│   ├── base-head.astro    ← <head>: buscadores, redes, ficha para Google, contador de visitas, precarga, tema sin parpadeo
│   ├── header.astro · navbar.astro · tema.astro · whatsapp.astro
│   ├── titulo-seccion.astro   ← etiqueta + título + texto: así empieza cada sección
│   ├── tarjeta-articulo.astro · mision-vision.astro
│   └── ui/                ← Select, DatePicker, Modal, Menu, PasswordInput, EmailInput
├── lib/
│   ├── ui/                ← comportamiento de las piezas (`<ds-select>`, `<ds-date>`, `<ds-menu>`, ventanas y avisos en `window.ui`)
│   ├── correo.ts          ← reglas del campo de correo
│   └── articulos.ts       ← lee los artículos (borradores solo en `pnpm dev`)
├── sections/              ← hero, cifras, servicios, nosotros, ventajas, galeria, precios, testimonios, marcas, articulos, preguntas, llamada, contacto, footer
├── content/articulos/     ← un `.md` por artículo (`borrador: true` = no se publica)
└── pages/                 ← index, 404, privacidad, mantenimiento, estilos, articulos/, sitemap.xml, robots.txt
scripts/fuentes.py         ← recorta las letras y Bootstrap Icons a lo que se usa → public/fonts/
vercel.json · public/_headers ← seguridad y caché al publicar (mantener los dos iguales)
```

`/estilos` — muestrario con todas las piezas y valores (no sale en el menú ni en buscadores). **Pieza nueva = se agrega ahí.**

## Piezas (clases de `global.css`)

- Botones: `.btn` + `.btn-primary / -accent / -ghost / -subtle / -danger` + `.btn-sm / -lg / -icon / -block`. Ocupado: `aria-busy="true"` + `<span class="spinner">`.
- Campos: `.field` > `label` + `.input` / `.textarea` + `.hint` / `.error-text`. Varios en fila: `.form-grid` (+ `.span-2`).
- `.check`, `.switch`, `.segmented`, `.filter-chips`, `.tabs` + `.tab`.
- `.card`, `.cells` (una tarjeta partida en celdas), `.icon-box`, `.badge`, `.callout`, `.empty`.
- Utilidades: `.flex-row`, `.flex-column`, `.bg-grid`, `.bg-dots`, `.eyebrow`, `.mono`, `.muted`, `.small`, `.link`, `.tnum`, `.wrap`, `.sr-only`, `.reveal`, `.sin-scroll`.
- Con comportamiento: `window.ui.alert / confirm / confirmTyped / toast / openModal / closeModal`; abrir ventana desde HTML con `data-modal-open="id"` y cerrar con `data-modal-close`; texto flotante con `data-tip="…"`.
- `lib/ui/index.ts` pide cada pieza solo si la página la usa. No volver a importarlas todas de entrada.

## Colores y tema

`project.css` en 3 niveles: 1 primitivos (únicos con valores crudos) → 2 semánticos por tema → 3 componente.

- Los componentes usan nivel 2 o 3 (`--clr-surface`, `--clr-text`, `--card-border`…), **nunca un primitivo** (`--gray-200`): no cambiaría con el tema.
- Mezclas de color: `color-mix(in srgb, …)`. Con `oklch` los grises salen teñidos.
- Tema: sigue al equipo por defecto; el botón guarda la elección (`window.__theme`). Todo se revisa en claro y en oscuro.
- El porqué de cada decisión: `DESIGN_SYSTEM.md`.

## Reglas CSS obligatorias (skills: css-order, astro-css-architecture)

Orden en cada selector: base → `@media (hover: hover)` (nunca `:hover` fuera) → `@media (min-width: 750px)` (mobile-first).

- `global.css` → reset, utilidades y piezas · `project.css` → valores · `<style>` del `.astro` → estilos del componente.
- Nunca `style=""` en etiquetas. Nunca colores ni medidas escritos a mano: solo tokens.
- Lo que se arma en el navegador (`innerHTML`, `createElement`) o llega ya armado (texto de un artículo) no recibe los estilos del `<style>` del componente: usar `:global(...)` bajo un padre propio o `<style is:global>`.
- Al pasar el mouse la tarjeta se queda quieta (ni sube ni crece): solo borde y sombra, o se mueve la imagen de adentro.
- Movimiento solo con CSS. Aparecer al bajar = clase `.reveal`.

## Reglas de interfaz

- Nunca `alert()` / `confirm()` / `prompt()` del navegador: `window.ui.*`.
- Nunca `<select>` ni `<input type="date">` del navegador: `Select.astro` y `DatePicker.astro`.
- Correo siempre con `EmailInput.astro`; contraseña con `PasswordInput.astro`.
- Textos y errores para el usuario: español simple, de «tú», sin nada técnico.
- Regla 60·30·10: el color de vida (`--clr-accent` de fondo, `--clr-accent-text` como texto) solo va donde se quiere un clic o un detalle pequeño. Un solo botón destacado por bloque.
- Cuidar detalles: alineación, anchos iguales, separaciones parejas. Revisar con captura (claro, oscuro, celular) antes de dar por terminado.
- Nada privado dentro de `public/` (todo lo de ahí es público).

## Assets

Logo: `public/img/logo.svg` (cabecera, pie, pestaña y ficha de Google; se ve bien en claro y oscuro). `og.jpg` 1200×630 = imagen al compartir el enlace. `foto.svg` = foto de relleno (reemplazar por las del cliente).

Letra (Geist para títulos y lectura, Geist Mono para etiquetas) e íconos (Bootstrap Icons) van dentro del sitio, sin pedir nada a Google ni a otro servidor. Cambiar de letra: lista `LETRAS` en `scripts/fuentes.py` + `--font-*` en `project.css`. Íconos: en contorno por defecto; `-fill` solo dentro de un `.icon-box`.

## Estilo (resumen; el detalle en `DESIGN_SYSTEM.md`)

Minimalista, compacto y sobrio. Títulos en minúsculas con letras juntas; etiquetas en letra de máquina; líneas finas en vez de cajas; mucho blanco. Cada sección empieza con `titulo-seccion.astro` (línea + número automático + título a la izquierda y texto a la derecha). Contenido alineado a la izquierda, no centrado.

## Pendiente

- Tienda con carrito e idiomas: no están en la base (decidido 2026-11-23: se traen cuando un proyecto los pida).
- `privacidad.astro` es un texto base: cada cliente debe revisarlo con quien le lleve lo legal.
