/* Funciones para pintar los textos y las listas del sitio.
   Se usan en el build (Astro pinta el portugués en el HTML) y en el navegador (cambio de idioma). */
import { ICONS } from '../data/icons.js';
import { I18N } from '../data/i18n.js';
import { PRICING } from '../data/pricing.js';

/* Idioma con el que se formatean precios y textos. El navegador lo cambia desde site.js. */
export const state = { lang: 'pt' };

export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const get = (obj, path) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);

/* Preços: os valores vêm de pricing.js (PRICING); aqui só se formatam por idioma.
   Nos textos de I18N, {months}, {discount}, {paid}, {total} e {rate} são substituídos pelos valores de PRICING. */
const fmtNumber = (n) => n.toLocaleString(state.lang === 'pt' ? 'de-DE' : 'en-US');
export const formatPrice = (n) => (state.lang === 'pt' ? `${fmtNumber(n)} €` : `€${fmtNumber(n)}`);
const formatPercent = (n) => (state.lang === 'pt' ? `${n} %` : `${n}%`);
export const fill = (str) => {
  if (typeof PRICING === 'undefined') return str;
  const vars = {
    months: PRICING.minMonths,
    discount: formatPercent(PRICING.launchDiscountPercent),
    paid: PRICING.annualMonthsPaid,
    total: PRICING.annualMonthsTotal,
    rate: formatPrice(PRICING.extraHourRate)
  };
  return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
};

/* Texto legal: [entre parênteses retos] marca dados que o titular tem de preencher. */
export const legalText = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');

/* Tarjetas de planes: cada texto (I18N) se junta ao seu preço (PRICING) pelo id. */
const NOTE_ICONS = { launch: 'gift', annual: 'calendar', extra: 'tool' };
function planCards(group, monthly, items, t) {
  return items.map((x) => {
    const p = PRICING[group].find((q) => q.id === x.id);
    if (!p) return '';
    return `
    <article class="plan${p.featured ? ' featured' : ''}">
      <div class="plan-head"><h3>${esc(x.name)}</h3>${p.featured ? `<span class="badge">${esc(t.plans.badge)}</span>` : ''}</div>
      <div class="price">${p.from ? `<span class="price-pre">${esc(t.plans.from)}</span> ` : ''}<span>${esc(formatPrice(p.price))}</span>${monthly ? `<span class="price-per">${esc(t.plans.perMonth)}</span>` : ''}</div>
      ${x.fit ? `<p class="plan-fit">${esc(x.fit)}</p>` : ''}
      <p class="plan-desc">${esc(x.text)}</p>
      <a class="btn${p.featured ? '' : ' btn-outline'}" href="#contacto">${esc(t.plans.cta)}</a>
    </article>`;
  }).join('');
}

export const RENDER = {
  'legal.sections': (items) => items.map((s) => `
    <section class="legal-sec">
      <h2>${esc(s.h)}</h2>
      ${(s.p || []).map((p) => `<p>${legalText(p)}</p>`).join('')}
      ${s.ul ? `<ul>${s.ul.map((li) => `<li>${legalText(li)}</li>`).join('')}</ul>` : ''}
      ${s.table ? `<div class="table-wrap"><table><thead><tr>${s.table.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
      ${(s.after || []).map((p) => `<p>${legalText(p)}</p>`).join('')}
    </section>`).join(''),
  'stats.items': (items) => items.map((s) => {
    const raw = s.priceOf ? formatPrice(PRICING.creation.find((p) => p.id === s.priceOf).price) : s.value;
    const m = s.count && /^(\D*)(\d+)(.*)$/.exec(raw);
    const value = m ? `${esc(m[1])}<span data-count="${m[2]}">${m[2]}</span>${esc(m[3])}` : esc(raw);
    return `<li><strong class="stat-v">${value}</strong><span class="stat-l">${esc(s.label)}</span></li>`;
  }).join(''),
  'contact.points': (items) => items.map((p) => `<li>${ICONS.check}${esc(p)}</li>`).join(''),
  'hero.points': (items) => items.map((p) => `<li>${ICONS.check}${esc(p)}</li>`).join(''),
  'services.items': (items) => items.map((s) => `
    <article class="service">
      <div class="service-icon">${ICONS[s.icon] || ''}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </article>`).join(''),
  'process.steps': (items) => items.map((s, i) => `
    <li><span class="step-n">${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join(''),
  'why.items': (items) => items.map((w) => `
    <div class="why-item"><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></div>`).join(''),
  'plans.creation.items': (items, t) => planCards('creation', false, items, t),
  'plans.care.items': (items, t) => planCards('care', true, items, t),
  'plans.notes': (items) => items.map((n) => `
    <li class="plan-note${n.id === 'launch' ? ' offer' : ''}">${ICONS[NOTE_ICONS[n.id]] || ''}<p>${esc(fill(n.text))}</p></li>`).join(''),
  'faq.items': (items) => items.map((q) => `
    <details><summary><span>${esc(q.q)}</span>${ICONS.plus}</summary><p>${esc(q.a)}</p></details>`).join('')
};

/* Texto ya traducido (con {variables} sustituidas) y lista ya pintada, para el idioma activo. */
export const tx = (key, lang = state.lang) => {
  const v = get(I18N[lang] || I18N.pt, key);
  return typeof v === 'string' ? fill(v) : v;
};
export const list = (key, lang = state.lang) => {
  const t = I18N[lang] || I18N.pt;
  return RENDER[key](get(t, key), t);
};
