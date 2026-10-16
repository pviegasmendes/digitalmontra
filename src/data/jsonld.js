/* Datos estructurados para Google (JSON-LD). Los precios y textos salen de pricing.js y de i18n.js,
   así que cambiar un precio allí actualiza también esto. */
import { I18N } from './i18n.js';
import { PRICING } from './pricing.js';
import { CONTACT_EMAIL, CONTACT_PHONE } from './contact.js';

const t = I18N.pt;
const text = (id, group) => group.find((x) => x.id === id);

export function buildJsonLd() {
  const creation = PRICING.creation.map((p) => {
    const x = text(p.id, t.plans.creation.items);
    return {
      '@type': 'Offer',
      name: x.name,
      description: `${x.fit} ${x.text}`,
      priceCurrency: 'EUR',
      ...(p.from
        ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: String(p.price), priceCurrency: 'EUR' } }
        : { price: String(p.price) })
    };
  });
  const care = PRICING.care.map((p) => {
    const x = text(p.id, t.plans.care.items);
    return { '@type': 'Offer', name: `${t.plans.care.title} ${x.name}`, description: x.text, price: String(p.price), priceCurrency: 'EUR' };
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': '#negocio',
        name: 'Digital Montra Web Studio',
        description: 'Estúdio de criação de sites para negócios locais do Algarve: restaurantes, alojamentos, lojas e serviços. Sites bilingues em português e inglês.',
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        areaServed: { '@type': 'AdministrativeArea', name: 'Algarve', containedInPlace: { '@type': 'Country', name: 'Portugal' } },
        address: { '@type': 'PostalAddress', addressRegion: 'Algarve', addressCountry: 'PT' },
        availableLanguage: ['pt', 'en'],
        knowsAbout: ['Criação de sites', 'Web design', 'SEO local', 'Perfil da Empresa no Google'],
        makesOffer: [...creation, ...care]
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faq.items.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } }))
      }
    ]
  };
}
