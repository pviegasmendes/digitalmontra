# Digital Montra

Sitio web de **Digital Montra Web Studio**, un estudio que crea webs para negocios locales del Algarve (restaurantes, alojamientos, tiendas y servicios).

Es un sitio estático bilingüe (portugués de Portugal por defecto, e inglés) hecho con [Astro](https://astro.build). El portugués se genera ya en el HTML al compilar (mejor para buscadores y para quien llega sin JavaScript); el cambio a inglés se hace en el navegador.

## Qué incluye

- Portada con el panel de azulejos animado, servicios, proceso, "Porquê", planes, FAQ y contacto.
- Cambio de idioma PT/EN sin recargar. Todos los textos viven en `src/data/i18n.js`.
- Formulario de contacto con Netlify Forms (con respaldo por `mailto:` si el envío falla).
- Aviso de cookies conforme al RGPD y a la CNPD (Portugal), y página de política de privacidad y cookies.
- SEO básico: metaetiquetas, Open Graph y datos estructurados (`ProfessionalService` y `FAQPage`), generados desde los mismos datos de precios y textos.
- Accesibilidad: foco visible, zonas táctiles de al menos 44 px, contraste AA y `prefers-reduced-motion`.
- Fuentes alojadas en el propio sitio (sin peticiones a Google Fonts).

## Estructura

```
.
├── astro.config.mjs             # Configuración de Astro
├── netlify.toml                 # Netlify: comando de build y carpeta que se publica (dist)
├── package.json                 # Dependencias y comandos (dev, build, preview)
├── CLAUDE.md                    # Notas y reglas del proyecto
├── public/                      # Archivos que se copian tal cual
│   ├── assets/                  # Logo, favicon e iconos
│   │   └── fonts/               # Montserrat y Karla (woff2)
│   ├── robots.txt
│   └── _headers                 # Cabeceras de seguridad y caché para Netlify
└── src/
    ├── pages/                   # index.astro y politica-de-privacidade.astro
    ├── layouts/Base.astro       # <head>, metaetiquetas, datos estructurados y script
    ├── components/              # Header, Hero, Services, Process, Why, Plans, Faq, Contact...
    ├── styles/global.css        # Estilos y variables de diseño (:root)
    ├── data/
    │   ├── i18n.js              # Textos PT/EN
    │   ├── pricing.js           # Precios y condiciones de los planes (único sitio donde se cambian)
    │   ├── contact.js           # Email y teléfono
    │   ├── icons.js             # Iconos SVG
    │   └── jsonld.js            # Datos estructurados para Google
    └── scripts/
        ├── render.js            # Pinta textos y listas (en el build y en el navegador)
        └── site.js              # Idioma, animaciones, formulario y cookies en el navegador
```

## Ejecutar en local

Hace falta [Node.js](https://nodejs.org/) 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` (o el puerto que indique la terminal). Para comprobar la versión final:

```bash
npm run build
npm run preview
```

El formulario no puede enviarse a Netlify en local: ahí cae al `mailto:` con el pedido escrito.

## Publicar en Netlify

Conecta este repositorio en Netlify (*Add new site → Import an existing project*). Netlify lee `netlify.toml`: ejecuta `npm run build` y publica la carpeta `dist`.

Si prefieres arrastrar una carpeta, ejecuta `npm run build` y sube solo `dist/`.

Después del primer despliegue:

1. Comprueba que el formulario `contacto` aparece en *Forms*.
2. En *Site configuration → Forms → Form notifications*, añade un aviso por email al buzón del estudio.
3. Envía un pedido de prueba desde el sitio publicado y comprueba que llega.

## Cómo editar

- **Textos:** en `src/data/i18n.js`. Cada texto debe existir en `pt` y en `en`, con la misma estructura. El marcado de `src/components/` toma el portugués de ahí (atributo `data-i18n`), así que no hay que cambiar nada más.
- **Precios y condiciones de los planes:** solo en `src/data/pricing.js`. Los textos, las notas y los datos estructurados para Google se actualizan solos.
- **Colores y fuentes:** variables en `:root` de `src/styles/global.css`.
- **Email y teléfono:** `src/data/contact.js` (el enlace de contacto del marcado se cambia en `src/components/Contact.astro`).
- **Política de privacidad:** sus textos están en `I18N.legal`. Si se añade una herramienta que guarde datos en el navegador (estadísticas, mapas, vídeos, píxeles), actualiza la tabla de cookies y no la cargues hasta que el visitante dé su consentimiento (`window.dmConsent.has('stats')`).

## Notas importantes

- **Datos personales:** la política de privacidad incluye los datos del titular del sitio. Revisa que lo que publicas en un repositorio público es lo que quieres mostrar.
- **Nunca** subas claves de API, contraseñas ni tokens: el sitio y el repositorio pueden ser públicos.
- La página de política tiene `noindex` y no debe incluirse en un futuro `sitemap.xml`.
- Pendiente cuando haya dominio publicado: `sitemap.xml` (con `@astrojs/sitemap`), URL canónica, `hreflang`, `og:image` y `og:url`.
