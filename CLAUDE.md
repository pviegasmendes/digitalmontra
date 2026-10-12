# Digital Montra — sitio web

Sitio de Digital Montra Web Studio, un estudio que hace webs para negocios locales del Algarve (restaurantes, alojamientos, tiendas y servicios). El dueño es Pablo. Habla con él en español.

## Estructura

Todo el sitio vive en `public/` (es la carpeta que publica Netlify, ver `netlify.toml`). Fuera de ella quedan `CLAUDE.md` y la configuración. Las cabeceras de seguridad y de caché están en `public/_headers` (funciona también al arrastrar la carpeta a Netlify). Al guardar `netlify.toml` u otros archivos de configuración desde PowerShell, usar UTF-8 sin BOM (`Set-Content -Encoding utf8` en Windows PowerShell 5.1 añade BOM y rompe el TOML).
Para publicar arrastrando a Netlify, subir solo `public/`. Si se quiere subir la carpeta raíz, hay que conectar el repositorio con Git (Netlify entonces lee `publish = "public"`).

- `public/index.html`: el marcado de todas las secciones (portada, servicios, proceso, "Porquê", planes, FAQ, contacto y pie).
- `public/styles.css`: todos los estilos. Los colores y fuentes están como variables en `:root`.
- `public/script.js`: todos los textos en portugués e inglés (objeto `I18N`), el cambio de idioma y el formulario.
- `public/politica-de-privacidade.html`: política de privacidad y cookies (RGPD), con sus textos PT/EN en `I18N.legal`. Titular: Pablo Javier Viegas Mendes, NIF 316902527 (ya puestos). Conservación de pedidos sin contrato: 6 meses (ya puesto). La política ya no tiene huecos pendientes. Se quitó a propósito la frase sobre transferencias de datos fuera de la UE (Netlify, Google y Meta, con sede en EE. UU.): si se quiere volver a incluir, hay que confirmar antes las salvaguardas actuales de cada prestador.
- `public/assets/`: emblema del logo en azul y en blanco, favicon e icono de Apple. `assets/fonts/` tiene Montserrat y Karla alojadas en el propio sitio (no usar Google Fonts: enviaría la IP del visitante a Google sin consentimiento).

Es HTML, CSS y JS sin build ni dependencias. Para verlo, ejecutar `npx serve public`.

## Reglas

- El portugués de Portugal (no de Brasil) es el idioma por defecto. Cada texto debe existir en `pt` y `en` en `I18N`, con la misma estructura.
- Si cambias un texto que también está escrito en `index.html` (atributos `data-i18n`), actualiza los dos para que la página sin JS siga correcta.
- Identidad visual: azul del logo `#1C548C`, azul oscuro `#12385E`, azul noche `#0E2A47` (portada y pie), fondo `#F7F5F0`, Montserrat para títulos y Karla para texto. El panel de "azulejos" de la portada es el elemento distintivo; no añadir más decoración que compita con él.
- Datos reales del negocio, que no se inventan:
  - Email: ola@digitalmontra.pt (buzón en Zoho Mail; la política de privacidad lista Zoho como prestador de correo, actualizarla si cambia)
  - WhatsApp: +351 912 979 825
  - Esencial: 290 €
  - Profesional: hasta 5 páginas, precio bajo consulta
  - Mantenimiento: 29 €/mes o 290 €/año (2 meses gratis)
  - Rascunho gratis en 48 h; el sitio queda listo en 1 a 2 semanas tras aprobarlo
- No inventar testimonios, cifras de clientes ni proyectos de portafolio. Si hace falta, usar marcadores entre corchetes como `[NOMBRE DEL CLIENTE]` y avisar a Pablo.
- Nunca poner claves de API, contraseñas ni tokens en el código. El sitio es público.
- Mantener la accesibilidad: zonas táctiles de al menos 44 px, foco visible, contraste AA y `prefers-reduced-motion`. Las animaciones continuas (faja, panel de azulejos) se pueden pausar con el botón de la faja (`#motion-toggle`, WCAG 2.2.2): cualquier animación infinita nueva debe obedecer a la clase `motion-paused` de `body`. Con movimiento reducido se quitan desplazamientos y rotaciones, pero se conservan los cambios de color y opacidad.
- Colores: usar las variables de `:root` (`--tint`, `--on-dark`, `--error`, `--placeholder`...) en vez de escribir hexadecimales sueltos.

## Estado del formulario

El formulario usa Netlify Forms (`data-netlify`, campo trampa `bot-field`): `script.js` lo envía con `fetch` a `/`. Si el envío falla, o se prueba en local (donde no existe ese endpoint), cae al `mailto:` con el pedido escrito, así no se pierde el contacto. Tras el primer despliegue, activar las notificaciones por email en Netlify (Site configuration → Forms → Form notifications) para recibir los pedidos en ola@digitalmontra.pt.

La página de política no se indexa en Google (`noindex` en su `<meta robots>` y cabecera `X-Robots-Tag` en `public/_headers`). No bloquearla en `robots.txt`: si Google no puede leerla, no ve el `noindex`. Al crear `sitemap.xml`, no incluirla.

## Cookies y consentimiento

El sitio solo guarda en el navegador `dm-lang` (idioma) y `dm-consent` (la elección sobre cookies), ambos necesarios. El aviso (`#cookie`, lógica `initCookies` en `script.js`) cumple lo que pide la CNPD: botones de aceptar y rechazar con el mismo peso, opciones por categoría sin casillas marcadas de antemano, enlace a la política, cambio de elección en cualquier momento desde "Definições de cookies" en el pie, y caducidad de la elección a los 6 meses. Si se añade una herramienta opcional (estadísticas, mapas, vídeos embebidos, píxeles), no cargarla hasta que `window.dmConsent.has('stats')` sea verdadero (o tras el evento `dm:consent`), y actualizar la tabla de cookies en `I18N.legal` (pt y en).

## Ideas de mejora pendientes

- SEO cuando haya dominio: `sitemap.xml`, URL canónica, `hreflang` pt/en y datos estructurados `LocalBusiness`.
- Imagen para compartir en redes (og-image 1200×630) con el emblema, y añadir `og:image` y `og:url`.
- Sección de portafolio cuando haya los primeros clientes.
- Rellenar los datos del titular y el plazo de conservación en la política de privacidad, y revisarla con alguien que conozca el RGPD.
- Revisar el rendimiento con Lighthouse una vez publicado.
