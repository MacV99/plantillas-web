# Plantilla web base — MacV

Punto de partida para los sitios de clientes. Astro, sin frameworks extra.

## Nuevo cliente en 5 pasos

1. **Datos** → `src/data/cliente.ts`: nombre, contacto, horario, redes, menú y el contenido de cada sección.
2. **Secciones** → las que no se usen se apagan dejando su lista vacía (`[]`) o su texto vacío (`""`) en ese mismo archivo. El orden se cambia en `src/pages/index.astro`.
3. **Colores** → `src/styles/project.css`, bloque **MARCA**: `--brand-600` / `--brand-300` (tinta: texto fuerte y botón oscuro) y `--accent-600` / `--accent-700` / `--accent-300` / `--accent-on` (color de vida: el del botón principal y los detalles). Cada línea dice para qué sirve.
4. **Imágenes** → reemplazar en `public/img/`:
   - `logo.svg` → cabecera, pie e ícono de la pestaña (cuadrado; debe verse bien en claro y oscuro)
   - `og.jpg` (1200×630) → la que aparece al enviar el enlace por WhatsApp o redes
   - `foto.svg` es de relleno: poner las fotos reales en `cliente.ts`
5. **Legal** → revisar `src/pages/privacidad.astro` con el cliente.

Para revisar cómo quedó la marca: abrir `/estilos` y probar el tema claro y el oscuro.

## Qué trae

- **Secciones:** portada, cifras, servicios, características, nosotros, ventajas, misión y visión, galería, precios, opiniones, marcas, artículos, preguntas frecuentes, llamada a escribir y contacto con horario y mapa.
- **Páginas:** inicio, artículos, tratamiento de datos, error 404, «en mantenimiento» y muestrario (`/estilos`).
- **Piezas:** botones, campos, lista desplegable, calendario, ventanas, avisos, etiquetas, pestañas y filtros.
- **Interruptores** en `cliente.ts`: menú del celular en barra abajo, botón flotante de WhatsApp y contador de visitas.
- **Para Google:** ficha del negocio, mapa del sitio y `robots.txt`, armados solos con los datos del cliente.

## Artículos

Un archivo `.md` por artículo en `src/content/articulos/`. Con `borrador: true` solo se ve mientras se trabaja. Sin artículos publicados, la sección no aparece.

## Comandos

```bash
pnpm dev       # localhost:4321
pnpm build     # genera dist/
pnpm preview   # ver el build
pnpm fuentes   # al usar un ícono nuevo
```

`pnpm fuentes` necesita Python con `pip install fonttools brotli`.
