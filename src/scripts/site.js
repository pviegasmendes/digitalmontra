/* Interactividad del sitio en el navegador: idioma PT/EN, animaciones, formulario y cookies. */
import { I18N } from '../data/i18n.js';
import { CONTACT_EMAIL } from '../data/contact.js';
import { RENDER, esc, get, fill, state } from './render.js';

function setLang(lang) {
  const t = I18N[lang] || I18N.pt;
  state.lang = I18N[lang] ? lang : 'pt';
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = get(t, el.dataset.i18n);
    if (typeof v === 'string') el.textContent = fill(v);
  });
  document.querySelectorAll('[data-list]').forEach((el) => {
    const key = el.dataset.list;
    const items = get(t, key);
    if (RENDER[key] && Array.isArray(items)) el.innerHTML = RENDER[key](items, t);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const v = get(t, el.dataset.i18nPh);
    if (typeof v === 'string') el.setAttribute('placeholder', v);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const v = get(t, el.dataset.i18nAria);
    if (typeof v === 'string') el.setAttribute('aria-label', v);
  });
  document.querySelectorAll('.lang button').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang));
  });
  const seo = document.documentElement.dataset.page === 'legal' ? t.legal.seo : t.seo;
  document.title = seo.title;
  [['meta[name="description"]', 'content'], ['meta[property="og:title"]', 'content'], ['meta[property="og:description"]', 'content']].forEach(([sel, attr], i) => {
    const m = document.querySelector(sel);
    if (m) m.setAttribute(attr, i === 1 ? seo.title : seo.description);
  });
  splitHeadline();
  observeReveals();
  renderFormError();
  try { localStorage.setItem('dm-lang', state.lang); } catch (e) { /* sem armazenamento */ }
}

/* Título do hero: cada palavra sobe a partir de uma máscara. */
function splitHeadline() {
  const h = document.querySelector('.hero h1');
  if (!h) return;
  const text = h.textContent.trim();
  h.setAttribute('aria-label', text);
  h.innerHTML = text.split(/\s+/).map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${esc(w)}</span></span>`).join(' ');
}

/* Revelar ao fazer scroll. Só anima na primeira renderização; ao mudar de
   idioma os elementos novos aparecem já visíveis. */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let revealObserver = null;
let firstRender = true;

function countUp(el) {
  const to = Number(el.dataset.count);
  if (prefersReduced || !to) return;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  el.textContent = '0';
  requestAnimationFrame(step);
}

function reveal(el) {
  el.classList.add('is-in');
  el.querySelectorAll('[data-count]').forEach(countUp);
  /* Depois da entrada, devolve o elemento aos seus estilos normais (hover). */
  setTimeout(() => el.removeAttribute('data-reveal'), 1800);
}

function observeReveals() {
  document.querySelectorAll('[data-list]:not([data-noreveal])').forEach((list) => {
    const base = Number(list.dataset.delay || 0);
    [...list.children].forEach((child, i) => {
      if (child.dataset.rv) return;
      child.dataset.rv = '1';
      if (firstRender && !prefersReduced) {
        child.setAttribute('data-reveal', '');
        child.style.setProperty('--d', base + i);
      } else {
        child.classList.add('is-in');
      }
    });
  });
  if (!('IntersectionObserver' in window) || prefersReduced) {
    document.querySelectorAll('[data-reveal]').forEach(reveal);
  } else {
    revealObserver = revealObserver || new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        revealObserver.unobserve(e.target);
        reveal(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => revealObserver.observe(el));
  }
  firstRender = false;
}

/* Cabeçalho, barra de progresso, inclinação do painel e brilho nos cartões. */
function initMotion() {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.progress');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (!('solid' in header.dataset)) header.classList.toggle('at-top', window.scrollY < 24);
      progress.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (prefersReduced) return;

  const wrap = document.querySelector('.azulejo-wrap');
  const panel = document.querySelector('.azulejo');
  /* Los efectos que siguen al ratón no saltan a la posición: la persiguen con
     un pequeño retraso (interpolación), así el movimiento se siente fluido. */
  const FOLLOW = 0.08; // 0–1: más bajo = más retraso
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
  let looping = false;

  const loop = () => {
    let moving = false;

    tilt.x += (tilt.tx - tilt.x) * FOLLOW;
    tilt.y += (tilt.ty - tilt.y) * FOLLOW;
    if (panel) {
      panel.style.transform = `rotateX(${(-tilt.y * 14).toFixed(2)}deg) rotateY(${(tilt.x * 14).toFixed(2)}deg)`;
    }
    if (Math.abs(tilt.tx - tilt.x) > 0.002 || Math.abs(tilt.ty - tilt.y) > 0.002) moving = true;

    looping = moving;
    if (looping) requestAnimationFrame(loop);
  };
  const kick = () => { if (!looping) { looping = true; requestAnimationFrame(loop); } };

  if (wrap && panel && window.matchMedia('(hover: hover)').matches) {
    wrap.addEventListener('pointermove', (e) => {
      const r = wrap.getBoundingClientRect();
      tilt.tx = (e.clientX - r.left) / r.width - 0.5;
      tilt.ty = (e.clientY - r.top) / r.height - 0.5;
      kick();
    });
    wrap.addEventListener('pointerleave', () => { tilt.tx = 0; tilt.ty = 0; kick(); });
  }
}

/* Formulário: abre o email do visitante com o pedido preenchido.
   Para receber pedidos sem depender do email do visitante, ligar a um serviço
   como Formspree ou Netlify Forms (ver CLAUDE.md). */
let formErrorKey = null;
const FIELD_IDS = { business: 'f-biz', activity: 'f-act', name: 'f-name', reply: 'f-mail' };
const looksLikeContact = (v) => /\S+@\S+\.\S+/.test(v) || v.replace(/\D/g, '').length >= 7;

function renderFormError() {
  const el = document.getElementById('form-error');
  if (!el) return;
  el.textContent = formErrorKey ? I18N[state.lang].contact.errors[formErrorKey] : '';
  el.hidden = !formErrorKey;
}

function clearFormError() {
  formErrorKey = null;
  renderFormError();
  Object.values(FIELD_IDS).forEach((id) => {
    const f = document.getElementById(id);
    f.removeAttribute('aria-invalid');
    f.removeAttribute('aria-describedby');
  });
}

function initForm() {
  const form = document.getElementById('contact-form');
  const done = document.getElementById('form-done');
  const again = document.getElementById('form-again');
  if (!form) return;
  const submit = form.querySelector('[type="submit"]');

  /* O erro desaparece assim que o visitante corrige o campo. */
  Object.values(FIELD_IDS).forEach((id) => document.getElementById(id).addEventListener('input', () => {
    if (formErrorKey) clearFormError();
  }));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submit.disabled) return;
    const data = Object.fromEntries(new FormData(form));
    clearFormError();
    const checks = [['business', (v) => !!v], ['activity', (v) => !!v], ['name', (v) => !!v], ['reply', looksLikeContact]];
    const bad = checks.find(([k, ok]) => !ok(String(data[k] || '').trim()));
    if (bad) {
      formErrorKey = bad[0];
      renderFormError();
      const field = document.getElementById(FIELD_IDS[bad[0]]);
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', 'form-error');
      field.focus();
      return;
    }
    const t = I18N[state.lang].contact;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    const showDone = () => {
      submit.disabled = false;
      form.removeAttribute('aria-busy');
      form.hidden = true;
      done.hidden = false;
    };

    /* Netlify Forms; se o envio falhar (ou em local), abre o email do visitante. */
    const mailtoFallback = () => {
      const body = [
        `${t.name}: ${data.name}`,
        `${t.business}: ${data.business}`,
        `${t.activity}: ${data.activity}`,
        `${t.email}: ${data.reply}`,
        '',
        data.message || ''
      ].join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${t.mailSubject} — ${data.business}`)}&body=${encodeURIComponent(body)}`;
      showDone();
    };

    /* Se o servidor não responder em 12 s, recorre ao email em vez de ficar à espera. */
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
      signal: ctrl.signal
    }).then((r) => (r.ok ? showDone() : mailtoFallback())).catch(mailtoFallback).finally(() => clearTimeout(timer));
  });

  again.addEventListener('click', () => {
    form.reset();
    done.hidden = true;
    form.hidden = false;
    document.getElementById('f-name').focus();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = null;
  try { saved = localStorage.getItem('dm-lang'); } catch (e) { /* sem armazenamento */ }
  setLang(saved || 'pt');
  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  initForm();
  initMotion();
  initCookies();
});

/* Consentimento de cookies (RGPD + Lei n.º 41/2004).
   Só há armazenamento necessário; o opcional (estatísticas) fica desligado até
   o visitante aceitar. Quem adicionar uma ferramenta de estatísticas deve
   carregá-la apenas quando window.dmConsent.has('stats') for verdadeiro ou
   depois do evento 'dm:consent'. A escolha expira ao fim de 6 meses. */
const CONSENT_KEY = 'dm-consent';
const CONSENT_DAYS = 180;

function readConsent() {
  try {
    const c = JSON.parse(localStorage.getItem(CONSENT_KEY));
    if (c && c.v === 1 && Date.now() - c.t < CONSENT_DAYS * 864e5) return c;
  } catch (e) { /* sem armazenamento */ }
  return null;
}

window.dmConsent = { state: readConsent(), has(cat) { return !!(this.state && this.state[cat]); } };

function initCookies() {
  const box = document.getElementById('cookie');
  if (!box) return;
  const prefs = document.getElementById('cookie-prefs');
  const stats = document.getElementById('cookie-stats');
  const btnCustom = document.getElementById('cookie-custom');
  const btnSave = document.getElementById('cookie-save');
  let opener = null;

  const setPrefs = (open) => {
    prefs.hidden = !open;
    btnSave.hidden = !open;
    btnCustom.hidden = open;
    btnCustom.setAttribute('aria-expanded', String(open));
  };
  const show = (open, focus) => {
    stats.checked = window.dmConsent.has('stats');
    setPrefs(open);
    box.hidden = false;
    document.body.classList.add('cookie-open');
    if (focus) { box.tabIndex = -1; box.focus(); }
  };
  const save = (statsOn) => {
    const c = { v: 1, t: Date.now(), stats: !!statsOn };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(c)); } catch (e) { /* sem armazenamento */ }
    window.dmConsent.state = c;
    document.dispatchEvent(new CustomEvent('dm:consent', { detail: c }));
    box.hidden = true;
    document.body.classList.remove('cookie-open');
    if (opener) { opener.focus(); opener = null; }
  };

  document.getElementById('cookie-accept').addEventListener('click', () => save(true));
  document.getElementById('cookie-reject').addEventListener('click', () => save(false));
  btnCustom.addEventListener('click', () => setPrefs(true));
  btnSave.addEventListener('click', () => save(stats.checked));
  document.querySelectorAll('[data-cookie-settings]').forEach((b) => b.addEventListener('click', () => {
    opener = b;
    show(true, true);
  }));

  if (!window.dmConsent.state) show(false, false);
}
