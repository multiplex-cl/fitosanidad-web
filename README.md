# Multiplex Fitosanidad — sitio

Reconstrucción de `fitosanidad.multiplex.cl` sobre el mismo sistema de diseño usado en
[multiplex.bio](https://multiplex.bio) (Next.js 14 + Tailwind, tokens de color, tipografías
Inter/Sora, componentes compartidos), para que ambas propiedades de Multiplex se vean
consistentes.

## Stack

Next.js 14 (App Router, export estático) + TypeScript + Tailwind CSS 3. Sin dependencias de
UI externas — iconos y visualizaciones moleculares son SVG propios, igual que en el sitio
principal.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera ./out (export estático, listo para GitHub Pages)
npm run typecheck
```

## Estructura

Mismo patrón que el repo `multiplex-cl/web`: `src/app/*` (rutas), `src/components/{ui,layout,sections}`,
`src/content/{site.ts,data.ts}` (nav, footer, servicios, razones, noticias — todo el copy vive aquí),
`src/lib/{cn,seo}.ts`.

## Pendientes antes de publicar

- **`public/CNAME`**: apunta a `fitosanidad.multiplex.cl`. Ajustar si el dominio final es otro.
- **Formulario de contacto** (`src/content/site.ts` → `web3formsKey`): está vacío. Sin una
  Access Key de [Web3Forms](https://web3forms.com), el formulario cae a un fallback por
  `mailto:` (abre el cliente de correo del usuario con los datos precompletados). Para que
  envíe directo sin salir del sitio, crear una cuenta de Web3Forms para
  `contacto@multiplex.bio` y pegar la key ahí.
- **Noticias** (`src/content/data.ts` → `news`): son solo títulos y fechas extraídos del sitio
  anterior; no incluyen el cuerpo de cada artículo ni enlaces individuales.
- **Imágenes**: el sitio anterior usaba fotografía de stock de laboratorio; esta versión usa
  las mismas visualizaciones SVG abstractas (moléculas, iconos de línea) que multiplex.bio en
  su lugar, para mantener consistencia visual y evitar depender de licencias de fotografía.
- **Deploy**: el workflow en `.github/workflows/deploy-pages.yml` publica `./out` a GitHub
  Pages en cada push a `main`. Requiere habilitar Pages → "GitHub Actions" como fuente en la
  configuración del repositorio.
