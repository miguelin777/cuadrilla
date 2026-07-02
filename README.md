# Cuadrilla — Estudio de software

Sitio del estudio de software **Cuadrilla** (El Bajío, México). Concepto: _tú diriges, nosotros construimos_ — software terminado a la medida para negocios (facturación CFDI, dashboards, migración de Excel, integraciones y agentes de WhatsApp).

Diseño _dark editorial_ premium con acento ámbar, animaciones (framer-motion), cursor personalizado y una **demo interactiva** en vivo: un pedido de WhatsApp que se convierte en una factura CFDI 4.0 timbrada.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **framer-motion** (animaciones), **lucide-react** (íconos)
- CSS a mano (sistema de diseño en `src/index.css`), sin frameworks de UI
- Fuentes: Space Grotesk · Instrument Serif · IBM Plex Mono · Inter (Google Fonts)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ (estático)
npm run preview  # sirve el build
```

## Estructura

```
index.html            # <head> con SEO, Open Graph y JSON-LD
public/               # robots.txt, sitemap.xml, llms.txt, og-image.svg, favicon
src/
  App.tsx             # ensamblado de secciones
  index.css           # sistema de diseño completo
  data.ts             # todo el contenido (servicios, casos, FAQ, datos de la demo CFDI)
  contact.ts          # WhatsApp / correo  ← CAMBIAR por datos reales
  anim.ts             # variantes de animación reutilizables
  components/          # Hero, Servicios, Proceso, DemoCFDI, Portafolio, Precios, FAQ, etc.
```

## SEO + GEO (búsqueda por IA)

- Meta tags completos, canonical, Open Graph + Twitter, imagen social.
- Datos estructurados **JSON-LD** (`ProfessionalService`, `WebSite`, `FAQPage`).
- `public/llms.txt` para que los motores de IA (ChatGPT, Perplexity, Gemini, Claude) lean y citen el sitio.
- `robots.txt` con permisos explícitos a bots de IA + `sitemap.xml`.
- Contenido base en `<noscript>` para crawlers que no ejecutan JavaScript.

## Antes de publicar

1. Cambiar contacto real en `src/contact.ts` (WhatsApp y correo).
2. Reemplazar el dominio `cuadrilla.mx` en `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`.
3. Sustituir los casos de portafolio ilustrativos por proyectos reales.
4. (Opcional) exportar `og-image.svg` a PNG 1200×630 para máxima compatibilidad social.

## Despliegue

Sitio 100% estático → gratis en **Cloudflare Pages**, **Netlify** o **Vercel**.
Build command: `npm run build` · Output: `dist`.
