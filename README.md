# Digital Montra

Sitio web de **Digital Montra Web Studio**, un estudio que crea webs para negocios locales del Algarve (restaurantes, alojamientos, tiendas y servicios).

Es un sitio estático bilingüe (portugués de Portugal por defecto, e inglés) hecho con HTML, CSS y JavaScript, sin build ni dependencias.

## Qué incluye

- Portada con el panel de azulejos animado, servicios, proceso, "Porquê", planes, FAQ y contacto.
- Cambio de idioma PT/EN sin recargar. Todos los textos viven en el objeto `I18N` de `script.js`.
- Formulario de contacto con Netlify Forms (con respaldo por `mailto:` si el envío falla).
- Aviso de cookies conforme al RGPD y a la CNPD (Portugal), y página de política de privacidad y cookies.
- SEO básico: metaetiquetas, Open Graph y datos estructurados (`ProfessionalService` y `FAQPage`).
- Accesibilidad: foco visible, zonas táctiles de al menos 44 px, contraste AA y `prefers-reduced-motion`.
- Fuentes alojadas en el propio sitio (sin peticiones a Google Fonts).

## Estructura

```
.
├── netlify.toml                 # Le dice a Netlify que publique la carpeta public/
├── CLAUDE.md                    # Notas y reglas del proyecto
└── public/                      # Todo el sitio (es lo que se publica)
    ├── index.html               # Página principal
    ├── politica-de-privacidade.html
    ├── styles.css               # Estilos y variables de diseño (:root)
    ├── script.js                # Textos PT/EN, idioma, formulario, cookies, animaciones
    ├── robots.txt
    ├── _headers                 # Cabeceras de seguridad y caché para Netlify
    └── assets/                  # Logo, favicon e iconos
        └── fonts/               # Montserrat y Karla (woff2)
```

## Ejecutar en local

Hace falta [Node.js](https://nodejs.org/). No hay que instalar nada más:

```bash
npx serve public
```

Después abre la dirección que indique la terminal (normalmente `http://localhost:3000`).

El formulario no puede enviarse a Netlify en local: ahí cae al `mailto:` con el pedido escrito.

## Publicar en Netlify

**Con Git (recomendado):** conecta este repositorio en Netlify (*Add new site → Import an existing project*). Netlify lee `netlify.toml` y publica la carpeta `public/`, sin comando de build.

**Arrastrando una carpeta:** sube solo `public/`, no la carpeta raíz.

Después del primer despliegue:

1. Comprueba que el formulario `contacto` aparece en *Forms*.
2. En *Site configuration → Forms → Form notifications*, añade un aviso por email al buzón del estudio.
3. Envía un pedido de prueba desde el sitio publicado y comprueba que llega.

## Cómo editar

- **Textos:** en `public/script.js`, dentro de `I18N`. Cada texto debe existir en `pt` y en `en`, con la misma estructura. Si un texto también está escrito en `index.html` (atributos `data-i18n`), cámbialo en los dos sitios para que la página siga correcta sin JavaScript.
- **Colores y fuentes:** variables en `:root` de `public/styles.css`.
- **Datos del negocio** (email, WhatsApp, precios): están en `index.html` y en `script.js`. Búscalos con el buscador del editor antes de cambiarlos para actualizar todas las apariciones.
- **Política de privacidad:** sus textos están en `I18N.legal`. Si se añade una herramienta que guarde datos en el navegador (estadísticas, mapas, vídeos, píxeles), actualiza la tabla de cookies y no la cargues hasta que el visitante dé su consentimiento (`window.dmConsent.has('stats')`).

## Notas importantes

- **Datos personales:** la política de privacidad incluye los datos del titular del sitio. Revisa que lo que publicas en un repositorio público es lo que quieres mostrar.
- **Nunca** subas claves de API, contraseñas ni tokens: el sitio y el repositorio pueden ser públicos.
- La página de política tiene `noindex` y no debe incluirse en un futuro `sitemap.xml`.
- Pendiente cuando haya dominio publicado: `sitemap.xml`, URL canónica, `hreflang`, `og:image` y `og:url`.
