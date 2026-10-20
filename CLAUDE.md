# Digital Montra — sitio web

Sitio de Digital Montra Web Studio, un estudio que hace webs para negocios locales del Algarve (restaurantes, alojamientos, tiendas y servicios). El dueño es Pablo. Habla con él en español.

## Estructura

El sitio está hecho con **Astro** (sitio estático, sin framework de componentes en el navegador). Netlify ejecuta `npm run build` y publica la carpeta `dist/` (ver `netlify.toml`, con `NODE_VERSION = "22"`). `dist/`, `node_modules/` y `.astro/` no se suben a Git. Las cabeceras de seguridad y de caché están en `public/_headers`. Al guardar `netlify.toml` u otros archivos de configuración desde PowerShell, usar UTF-8 sin BOM (`Set-Content -Encoding utf8` en Windows PowerShell 5.1 añade BOM y rompe el TOML). Para publicar arrastrando una carpeta a Netlify, ejecutar `npm run build` y subir solo `dist/`.

Para trabajar: `npm install`, `npm run dev` (desarrollo), `npm run build` y `npm run preview` (versión final).

- `src/pages/index.astro` y `src/pages/politica-de-privacidade.astro`: las dos páginas. Se publican como `index.html` y `politica-de-privacidade.html` (`build.format: 'file'`).
- `src/layouts/Base.astro`: `<head>`, metaetiquetas, datos estructurados (JSON-LD) y carga del script del navegador.
- `src/components/`: una pieza por sección (Header, Hero, Services, Process, Why, Plans, Faq, Contact, Footer, CookieBanner, Whatsapp). Cada texto lleva `data-i18n="clave"` y se pinta con `tx('clave')`; las listas llevan `data-list="clave"` y se pintan con `list('clave')`.
- `src/styles/global.css`: todos los estilos. Los colores y fuentes están como variables en `:root`.
- `src/data/i18n.js`: todos los textos en portugués e inglés (objeto `I18N`). `src/data/pricing.js`: precios. `src/data/contact.js`: email y teléfono. `src/data/icons.js`: iconos. `src/data/jsonld.js`: datos estructurados para Google, generados desde los datos anteriores.
- `src/scripts/render.js`: funciones que pintan textos y listas, usadas por Astro en el build y por el navegador al cambiar de idioma. `src/scripts/site.js`: cambio de idioma, animaciones, formulario y cookies en el navegador.
- La página de política (`I18N.legal`) es la política de privacidad y cookies (RGPD). Titular: Pablo Javier Viegas Mendes, NIF 316902527 (ya puestos). Conservación de pedidos sin contrato: 6 meses (ya puesto). La política ya no tiene huecos pendientes. Se quitó a propósito la frase sobre transferencias de datos fuera de la UE (Netlify, Google y Meta, con sede en EE. UU.): si se quiere volver a incluir, hay que confirmar antes las salvaguardas actuales de cada prestador.
- `public/assets/`: emblema del logo en azul y en blanco, favicon e icono de Apple. `assets/fonts/` tiene Montserrat y Karla alojadas en el propio sitio (no usar Google Fonts: enviaría la IP del visitante a Google sin consentimiento).

## Reglas

- El portugués de Portugal (no de Brasil) es el idioma por defecto. Cada texto debe existir en `pt` y `en` en `I18N`, con la misma estructura.
- Los textos viven solo en `src/data/i18n.js`: el HTML que genera Astro toma el portugués de ahí, así que no hay que escribir el mismo texto en dos sitios. Si añades un texto nuevo al marcado, ponle `data-i18n` y pásalo por `tx()`.
- Identidad visual: azul del logo `#1C548C`, azul oscuro `#12385E`, azul noche `#0E2A47` (portada y pie), fondo `#F7F5F0`, Montserrat para títulos y Karla para texto. El panel de "azulejos" de la portada es el elemento distintivo; no añadir más decoración que compita con él.
- Datos reales del negocio, que no se inventan:
  - Email: ola@digitalmontra.pt (buzón en Zoho Mail; la política de privacidad lista Zoho como prestador de correo, actualizarla si cambia)
  - WhatsApp: +351 912 979 825
  - Creación del sitio (pago único): Essencial 390 €, Profissional 790 € (hasta 5 páginas), Premium desde 1.290 €
  - Mantenimiento mensual (compromiso mínimo de 12 meses): Base 29 €/mes, Plus 49 €/mes (recomendado), Pro 79 €/mes
  - Oferta de lanzamiento: Plus o Pro por 12 meses = 50 % de descuento en la creación Essencial o Profissional. Pago anual: se pagan 10 meses y se tienen 12. Cambios fuera del plan: 35 €/hora
  - Los precios viven en un único archivo, `src/data/pricing.js`; los textos PT/EN de los planes, en `I18N.plans` (`src/data/i18n.js`). Los datos estructurados para Google (`src/data/jsonld.js`) leen esos mismos valores, así que no hay que tocarlos al cambiar un precio
  - Rascunho gratis en 48 h; el sitio queda listo en 1 a 2 semanas tras aprobarlo
- No inventar testimonios, cifras de clientes ni proyectos de portafolio. Si hace falta, usar marcadores entre corchetes como `[NOMBRE DEL CLIENTE]` y avisar a Pablo.
- Nunca poner claves de API, contraseñas ni tokens en el código. El sitio es público.
- Mantener la accesibilidad: zonas táctiles de al menos 44 px, foco visible, contraste AA y `prefers-reduced-motion`. No hay animaciones infinitas a propósito (WCAG 2.2.2): si se añade una, debe poder pausarse. Con movimiento reducido se quitan desplazamientos y rotaciones, pero se conservan los cambios de color y opacidad.
- Estilo minimalista y profesional: sin grano, sin aros ni sombras decorativas, sin degradados en tarjetas, tarjetas iguales con borde fino de 1 px, botones sencillos con una flecha pequeña, títulos en peso 700, movimiento corto (0,25–0,6 s) con una sola curva (`--ease`). Mantener esa sobriedad en cualquier componente nuevo.
- Composición de estudio (rama `estudio`): retícula de 12 columnas (`--gutter`), cada sección abre con un filete fino (`--rule`) y su titular, sin etiquetas pequeñas encima (la única es la de la portada). Portada y pie en azul noche; el resto sobre el fondo claro. Cada sección usa una composición distinta (índice en filas para servicios, pasos numerados, manifiesto en letra grande, tarjetas de planes, FAQ en dos columnas, formulario partido). Subtítulo de portada de 20 palabras como máximo.
- La sección "Veja o seu site antes de decidir" (dentro de Proceso) es una ilustración del tipo de borrador, no un proyecto de cliente, y así lo dice su nota. Cuando haya proyectos reales, sustituirla o complementarla con portafolio (con permiso del cliente).
- Colores: usar las variables de `:root` (`--tint`, `--on-dark`, `--error`, `--placeholder`...) en vez de escribir hexadecimales sueltos.

## Estado del formulario

El formulario usa Netlify Forms (`data-netlify`, campo trampa `bot-field`): `src/scripts/site.js` lo envía con `fetch` a `/`. Si el envío falla, o se prueba en local (donde no existe ese endpoint), cae al `mailto:` con el pedido escrito, así no se pierde el contacto. Tras el primer despliegue, activar las notificaciones por email en Netlify (Site configuration → Forms → Form notifications) para recibir los pedidos en ola@digitalmontra.pt.

La página de política no se indexa en Google (`noindex` en su `<meta robots>` y cabecera `X-Robots-Tag` en `public/_headers`). No bloquearla en `robots.txt`: si Google no puede leerla, no ve el `noindex`. Al crear `sitemap.xml`, no incluirla.

## Cookies y consentimiento

El sitio solo guarda en el navegador `dm-lang` (idioma) y `dm-consent` (la elección sobre cookies), ambos necesarios. El aviso (`#cookie`, lógica `initCookies` en `src/scripts/site.js`) cumple lo que pide la CNPD: botones de aceptar y rechazar con el mismo peso, opciones por categoría sin casillas marcadas de antemano, enlace a la política, cambio de elección en cualquier momento desde "Definições de cookies" en el pie, y caducidad de la elección a los 6 meses. Si se añade una herramienta opcional (estadísticas, mapas, vídeos embebidos, píxeles), no cargarla hasta que `window.dmConsent.has('stats')` sea verdadero (o tras el evento `dm:consent`), y actualizar la tabla de cookies en `I18N.legal` (pt y en).

## Ideas de mejora pendientes

- SEO cuando haya dominio: `sitemap.xml`, URL canónica, `hreflang` pt/en y datos estructurados `LocalBusiness`.
- Imagen para compartir en redes (og-image 1200×630) con el emblema, y añadir `og:image` y `og:url`.
- Sección de portafolio cuando haya los primeros clientes.
- Rellenar los datos del titular y el plazo de conservación en la política de privacidad, y revisarla con alguien que conozca el RGPD.
- Revisar el rendimiento con Lighthouse una vez publicado.
