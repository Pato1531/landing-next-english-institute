# NEXT English Institute — Landing

Landing institucional de **NEXT English Institute** (Ezeiza, La Unión, Buenos Aires), migrada
desde un HTML estático a **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, lista para
producción y deploy en Vercel.

## Stack

- Next.js 14 (App Router, Server Components por defecto)
- TypeScript estricto
- Tailwind CSS
- `next/font` (Open Sans, autohosteada) y `next/image`-ready (ver sección Imágenes)
- Metadata API de Next.js para SEO

## Estructura

```
src/
  app/
    layout.tsx       Metadata, JSON-LD, fuente, skip-link
    page.tsx          Ensambla todas las secciones en el orden original
    globals.css
    manifest.ts       PWA manifest dinámico
    sitemap.ts         /sitemap.xml dinámico
    robots.ts          /robots.txt dinámico
  components/          Un componente por sección (Hero, Cursos, Nosotros, Testimonios, FAQ, Contacto...)
  data/                 Contenido (cursos, talleres, testimonios, FAQ, hero) separado de la UI
  lib/site.ts            Datos de contacto y configuración centralizados
```

## Cómo correr en local

```bash
npm install
cp .env.example .env.local   # completar si se cambian dominio/whatsapp/instagram
npm run dev
```

## Deploy en Vercel

1. Subir este repo a GitHub.
2. Importar el repo en [vercel.com/new](https://vercel.com/new).
3. Configurar las variables de entorno de `.env.example` en el proyecto de Vercel.
4. Deploy. No requiere build steps adicionales.

## Imágenes (pendientes de cargar)

**No se inventaron URLs de imágenes.** Todas las imágenes del sitio (hero, cursos, talleres,
nosotros, galería) están representadas con `<ImagePlaceholder>` (`src/components/ImagePlaceholder.tsx`),
que muestra un bloque visual con el `alt` descriptivo, listo para accesibilidad y SEO.

Cada dato en `src/data/*.ts` incluye:
- `imageAlt`: texto alternativo descriptivo.
- `imagePrompt`: prompt sugerido para generación con IA (o como guía de brief para una sesión de fotos real).

Para reemplazar un placeholder por la imagen real:
1. Subir el archivo optimizado (`.webp` o `.avif`) a `public/images/...`.
2. Reemplazar `<ImagePlaceholder alt="..." />` por `<Image src="/images/..." alt="..." fill />` de `next/image`.

Los íconos `public/icon-192.png` y `public/icon-512.png` son placeholders sólidos en el violeta
institucional (#62377C) — reemplazar por el isotipo real del instituto en esas mismas dimensiones.
También falta `public/og-image.jpg` (1200x630) para las previews de redes sociales.

## SEO implementado

- Metadata API (`title` con template, `description`, `keywords`, `canonical`).
- Open Graph y Twitter Cards.
- `robots.txt` y `sitemap.xml` generados dinámicamente (`src/app/robots.ts`, `src/app/sitemap.ts`).
- `manifest.json` dinámico (PWA-ready).
- JSON-LD `EducationalOrganization` con dirección real (Av. El Trébol 31, La Unión, Ezeiza, Buenos Aires) para SEO local.
- Una sola página (`/`) con anchors semánticos por sección — evita contenido duplicado y mantiene
  toda la autoridad de SEO en una URL.

Para activarlo en producción, completar `NEXT_PUBLIC_SITE_URL` en las variables de entorno con el
dominio real.

## Ciberseguridad

Headers de seguridad aplicados a todas las rutas en `next.config.js`:

- **Content-Security-Policy**: restringe `script-src`/`style-src`/`img-src`/`frame-src` a los
  orígenes necesarios (Google Fonts, Google Maps embed, WhatsApp como destino de formulario).
  Se usa `'unsafe-inline'` en `style-src` porque Tailwind y Next inyectan estilos inline en el
  build; no se usa `'unsafe-inline'` en `script-src` salvo el mínimo necesario para el JSON-LD.
- **X-Frame-Options: DENY** y **frame-ancestors 'none'**: evita que el sitio sea embebido en un
  `<iframe>` de terceros (clickjacking).
- **X-Content-Type-Options: nosniff**: evita que el navegador "adivine" tipos MIME.
- **Referrer-Policy: strict-origin-when-cross-origin**: no filtra la URL completa a terceros.
- **Permissions-Policy**: deshabilita cámara, micrófono y geolocalización, que el sitio no usa.
- **Strict-Transport-Security**: fuerza HTTPS una vez desplegado con TLS (Vercel lo provee).
- El formulario de contacto no tiene backend propio (evita superficie de ataque de servidor): arma
  un mensaje y abre WhatsApp Web/App con `wa.me`. Incluye un campo **honeypot** oculto
  (`src/components/Contacto.tsx`) para descartar envíos de bots simples sin fricción para personas.
- Variables sensibles (si se agrega backend en el futuro) van en `.env.local`, nunca committeadas
  (`.gitignore` ya las excluye).
- Dependencias mínimas y acotadas a `next`, `react`, `react-dom` en producción — sin librerías de
  terceros innecesarias que amplíen la superficie de ataque.

## Accesibilidad

- HTML semántico (`header`, `main`, `section`, `footer`, `nav`).
- Skip link a `#main-content`.
- Todos los controles interactivos (slider, tabs, acordeón FAQ, testimonios) usan `aria-*` y son
  operables por teclado.
- Contraste validado contra WCAG AA sobre la paleta violeta institucional.
- `prefers-reduced-motion` respetado: las animaciones se desactivan si el usuario lo prefiere.
- Formulario de contacto con `label` asociado a cada campo y mensajes de error nativos del navegador.

## Contenido mantenido del HTML original

Se preservó el orden y la esencia de las secciones (Inicio → Cursos → Nosotros → Testimonios →
FAQ → Contacto), los cursos y talleres exactos, las reviews de Google y las preguntas frecuentes.
El copy fue pulido pero no reinventado.
