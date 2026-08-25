# Plantilla Base MacV — Sistema de Diseño

> Fuente de identidad: plantilla neutra de MacV. No hay marca propia — es el punto de partida
> que cada cliente re-marca.
> Objetivo: base sobria y limpia que se adapta a cualquier cliente cambiando 2 primitivos.
> **Fuente de verdad de valores:** `src/styles/project.css` (`:root`). Este doc explica el
> **porqué**; nunca duplica hex ni px que puedan quedar viejos.

---

## 1. Personalidad de marca
Neutra · limpia · sobria · profesional · flexible. Sensación objetivo: confianza sin ruido,
lienzo en blanco listo pa vestir. Anti-referencia: nada recargado, nada tipo plantilla
genérica de ThemeForest con degradados y sombras por todos lados.

## 2. Principios de diseño
1. **Claro por defecto** — fondo `--clr-white`, texto `--clr-dark`.
2. El acento se gana su lugar (regla 70/20/10). Solo botón principal e íconos decorativos.
3. **Glassmorphism del header** = firma. Único recurso visual distintivo de la base.
4. Títulos UPPERCASE con `letter-spacing`; cuerpo en sentence case, sin italic.
5. Aire: secciones con `padding: 50px 20px`, `max-width: 900px` en el contenido.

## 3. Color — jerarquía de uso (70/20/10)
| Peso | Rol | Token |
| ---- | --- | ----- |
| 70% | Fondo / superficies | `--clr-white`, `--clr-primary-light` |
| 20% | Texto / estructura | `--clr-dark`, `--clr-dark2`, `--clr-gray` |
| 10% | Acento (CTA, íconos) | `--clr-accent` |

Semánticos derivan por `rgba(var(--rgb-primary), α)`: `--border-soft`, `--border-hover`,
`--bg-subtle`, `--hero-overlay`, `--shadow-*`. **Regla dura:** cada `--clr-*` con
transparencias lleva su `--rgb-*` gemelo y se actualizan JUNTOS (drift ya ocurrió aquí una vez).

> Valores hex viven en `project.css`. Aquí solo roles.

## 4. Tipografía
- Familia única: **Montserrat** (import en `project.css`), fallback `Gill Sans`.
- Pesos cargados: 300·400·500·600·700·800.
- Títulos `h1–h5`: peso 700, UPPERCASE, `letter-spacing: 2px`.
- Cuerpo `p`: `--clr-dark2`, `.9rem`, `line-height 1.5`.
- H1 escala a `2rem` en `min-width: 750px`.
- Caja: UPPERCASE en títulos + botones; sentence case en párrafos; nada de italic.

## 5. Espaciado
Escala fija en tokens `--space-1..9` = `4·8·12·16·24·32·48·64·96`. Usar solo estos pasos.
El layout de `global.css` (50px/20px/18px sueltos) es legado — migrar a `--space-*` al tocarlo.

## 6. Bordes, radius y sombras
- Bordes derivados del primario: `--border-soft`, `--border-hover`.
- Radius: `--radius-sm` (12px, `.button2`, focus) · `--radius-md` (14px, `.button1`/`.boton`).
- Sombras: `--shadow-sm/md/lg` vía `rgba(var(--rgb-primary), α)`. Sin glow (base sobria).

## 7. Firma gráfica — Glassmorphism del header
Header sticky translúcido: `--header-bg-mobile` (.95) → `--header-bg-desktop` (.6) con blur.
Es el único gesto visual que distingue la base. Aparece en: header. Al re-marcar, mantener.

## 8. Contratos de componente
Concepto ↔ clase real ↔ tokens. Sincronizar con el código.

| Componente | Clase | Tokens clave | Regla |
| ---------- | ----- | ------------ | ----- |
| CTA primario | `.button1` (+`.boton`) | `--clr-accent`, `--clr-white`, `--shadow-sm` | fondo acento, hover oscurece 75% + `translateY(-1px)` |
| Acción alterna | `.button2` | `--clr-gray`, `--clr-primary`, `--clr-white` | borde gris; `.active`/hover invierte a primario |
| Header | `header .flex-row` | `--header-bg-*`, blur | sticky, glass, logo `logo-png-mini.avif` |
| Hero | `.hero .flex-column` | `--hero-overlay` | overlay primario .72 sobre imagen |
| Footer | `footer` | `--footer-hover-bg`, `--clr-primary` | fondo oscuro, links con hover translúcido |
| Íconos deco | `i.bi-*-fill` | `--clr-accent` | usar variante `-fill` |

## 9. Estados interactivos
| Elemento | Hover / Focus |
| -------- | ------------- |
| `.button1` | oscurece acento 75%, `translateY(-1px)`, `--shadow-sm` |
| `.button2` | invierte a `--clr-primary` sobre blanco |
| Link | hereda `--clr-primary` |
| Foco teclado | `:focus-visible` global → `box-shadow: var(--focus-ring)` (anillo acento 55%) |

Orden CSS obligatorio: base → `@media (hover:hover)` → `@media (min-width)` (skill `css-order`).

## 10. Accesibilidad (mínimo AA)
- **Revisar:** `--clr-dark2` (#464646) sobre `--clr-white` ≈ 8.5:1 ✓. Gris `--clr-gray` como
  texto NO pasa — solo pa bordes/fondos.
- `:focus-visible` global aplicado (anillo `--focus-ring` sobre acento, visible AA).
- `prefers-reduced-motion: reduce` neutraliza animaciones/transiciones/scroll suave.

## 11. Checklist do / don't
**Hacer:** re-marcar tocando solo nivel 1 (`--clr-primary`, `--clr-accent` y sus `--rgb-*`);
acento solo en CTA/íconos; UPPERCASE en títulos.
**Evitar:** acento por toda la UI, hex hardcodeado fuera de `:root`, `--rgb-*` desincronizado
de su `--clr-*`, `style=""` inline, radius/sombra fuera de escala "solo esta vez".

---

## Changelog
Registro fechado de cambios de identidad (fecha absoluta · qué cambió · por qué).

- `2026-08-19` — Creación del DESIGN_SYSTEM.md de la plantilla base. Se documentó identidad
  neutra, contratos de componente y jerarquía 70/20/10.
- `2026-08-19` — Fix de drift: `--rgb-primary` (26,26,26→54,54,54) y `--rgb-accent`
  (154,0,181→72,126,105) no coincidían con sus hex. Rompían sombras/bordes/overlays.
- `2026-08-19` — Escala de espaciado (`--space-1..9`) y radius (`--radius-sm/md`) a tokens.
  Botones migrados a `--radius-*`.
- `2026-08-19` — Accesibilidad: `:focus-visible` global visible (`--focus-ring` subido de 8%
  primario a 55% acento) + bloque `prefers-reduced-motion`.
