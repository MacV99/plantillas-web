# Plantilla web base — MacV

Punto de partida para los sitios de clientes. Astro, sin frameworks extra.

## Nuevo cliente en 4 pasos

1. **Datos** → `src/data/cliente.ts`: nombre, descripción, dominio, teléfono, WhatsApp, correo, redes, menú, servicios, características, misión y visión.
2. **Colores** → `src/styles/project.css`: `--clr-primary`, `--clr-accent` y sus `--rgb-*` (siempre juntos).
3. **Logos** → reemplazar en `public/img/` (`.avif`):
   - `logo-png-mini.avif` → header y favicon
   - `logo-png.avif` → footer
4. **Imagen para compartir** → `public/img/og.jpg` (1200×630). Es la que aparece al enviar el enlace por WhatsApp o redes.

## Comandos

```bash
pnpm dev       # localhost:4321
pnpm build     # genera dist/
pnpm preview   # ver el build
```
