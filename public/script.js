/* Digital Montra — textos PT/EN e interatividade.
   Para mudar textos, edite o objeto I18N. O português é o idioma por defeito. */

const CONTACT_EMAIL = 'ola@digitalmontra.pt';

const ICONS = {
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v9H4v-9"/><path d="M2 7h20v5H2z"/><path d="M12 21V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
  site: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  tool: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg>'
};

const I18N = {
  pt: {
    skip: 'Saltar para o conteúdo',
    wa: 'Falar connosco no WhatsApp',
    draft: {
      title: 'Veja o seu site antes de decidir.',
      text: 'Em 48 horas recebe um rascunho gratuito, pensado para o computador e para o telemóvel. Sem compromisso.',
      note: 'Ilustração do tipo de rascunho que recebe. Não é o projeto de nenhum cliente.'
    },
    cookie: {
      title: 'Cookies e privacidade',
      text: 'Usamos apenas o armazenamento necessário para o site funcionar (por exemplo, lembrar o idioma). Pode aceitar ou recusar o armazenamento opcional, e alterar a sua escolha em qualquer altura.',
      policy: 'Política de privacidade e cookies', settings: 'Definições de cookies',
      accept: 'Aceitar todos', reject: 'Recusar opcionais', customize: 'Personalizar', save: 'Guardar escolha', always: 'Sempre ativos',
      necessary: { t: 'Necessários', d: 'Guardam o idioma e a sua escolha sobre cookies. O site não funciona bem sem eles.' },
      stats: { t: 'Estatísticas', d: 'Medem as visitas de forma agregada. Neste momento o site não usa nenhuma ferramenta de estatísticas; esta opção só passa a aplicar-se se vier a ser ativada.' }
    },
    legal: {
      seo: { title: 'Política de privacidade e cookies | Digital Montra', description: 'Como a Digital Montra trata os seus dados pessoais e que cookies e armazenamento local usa este site.' },
      back: 'Voltar ao site',
      title: 'Política de privacidade e cookies',
      updated: 'Última atualização: 7 de outubro de 2026',
      sections: [
        { h: '1. Quem é o responsável', p: ['Digital Montra Web Studio, Pablo Javier Viegas Mendes, NIF 316902527, Algarve, Portugal.', 'Contacto para questões de privacidade: ola@digitalmontra.pt.'] },
        { h: '2. Que dados recolhemos', p: ['Quando preenche o formulário de contacto, recolhemos o seu nome, o nome do negócio (opcional), o email ou telefone e a mensagem que escrever.', 'Se nos contactar por email ou WhatsApp, tratamos os dados que nos enviar.'] },
        { h: '3. Para que os usamos e com que fundamento', p: ['Usamos estes dados para responder ao seu pedido e preparar a proposta, com base em diligências pré-contratuais a seu pedido (artigo 6.º, n.º 1, alínea b) do RGPD).', 'Se vier a ser nosso cliente, tratamos também os dados necessários para a prestação do serviço e para cumprir obrigações legais, como a faturação.', 'Não usamos os seus dados para marketing nem para decisões automatizadas.'] },
        { h: '4. Durante quanto tempo os conservamos', p: ['Pedidos que não resultem em contrato: 6 meses.', 'Clientes: durante o tempo exigido pela lei fiscal e contabilística.'] },
        { h: '5. Com quem os partilhamos', p: ['Recorremos a prestadores que tratam dados em nosso nome:'], ul: ['Netlify, para alojar o site e receber os pedidos do formulário.', 'Zoho Mail, para receber e responder aos emails.', 'WhatsApp (Meta), apenas se escolher contactar-nos por essa via.'] },
        { h: '6. Os seus direitos', p: ['Pode pedir acesso, retificação, apagamento, limitação do tratamento, portabilidade dos seus dados, opor-se ao tratamento e retirar o consentimento quando o tratamento se basear nele. Para isso escreva para ola@digitalmontra.pt.', 'Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em www.cnpd.pt.'] },
        { h: '7. Cookies e armazenamento local', p: ['Este site não usa cookies de publicidade nem de estatísticas. Guarda no seu navegador apenas o que é necessário para funcionar, sem enviar essa informação a terceiros:'], table: { head: ['Nome', 'Para que serve', 'Duração', 'Tipo'], rows: [['dm-lang', 'Lembra o idioma escolhido (PT ou EN).', 'Até o apagar', 'Necessário'], ['dm-consent', 'Guarda a sua escolha sobre cookies.', '6 meses', 'Necessário']] }, after: ['As fontes de letra estão alojadas no próprio site, por isso a sua visita não envia dados a servidores de fontes externos.', 'Se no futuro ativarmos ferramentas opcionais, como estatísticas, só o faremos depois de o visitante aceitar. Pode mudar a sua escolha em qualquer altura em "Definições de cookies", no rodapé.', 'Ao clicar em ligações para sites externos, como o WhatsApp, esses sites aplicam as suas próprias políticas.'] },
        { h: '8. Alterações a esta política', p: ['Podemos atualizar esta política. A data da última alteração está no início desta página.'] }
      ]
    },
    seo: {
      title: 'Criação de Sites no Algarve | Digital Montra Web Studio',
      description: 'Criação de sites para restaurantes, alojamentos, lojas e serviços no Algarve. Bilingues PT/EN, rápidos no telemóvel. Rascunho grátis em 48 h.'
    },
    stats: {
      items: [
        { value: '48 h', label: 'Rascunho gratuito do seu site', count: true },
        { value: '1–2 sem', label: 'Da aprovação ao site no ar' },
        { value: 'PT + EN', label: 'Em todos os sites' },
        { priceOf: 'essencial', label: 'Plano Essencial, preço fixo', count: true }
      ]
    },
    nav: { services: 'Serviços', process: 'Processo', plans: 'Planos', faq: 'Perguntas', contact: 'Contacto', cta: 'Pedir proposta' },
    hero: {
      eyebrow: 'Estúdio web no Algarve',
      title: 'Sites que abrem a montra do seu negócio.',
      sub: 'Criamos sites modernos, rápidos e bilingues para negócios locais do Algarve: restaurantes, alojamentos, lojas e serviços. Receba uma proposta com um rascunho do seu site, sem compromisso.',
      cta1: 'Pedir proposta grátis', cta2: 'Ver serviços',
      points: ['Português e inglês', 'Perfeito no telemóvel', 'Preço fixo, sem surpresas']
    },
    services: {
      eyebrow: 'Serviços', title: 'Tudo o que um negócio local precisa para ser encontrado online.',
      items: [
        { icon: 'site', title: 'Site profissional', text: 'Uma presença clara e cuidada: quem são, o que fazem, horários, contactos e localização no mapa.' },
        { icon: 'calendar', title: 'Reservas e pedidos', text: 'Formulários de reserva, pedidos de orçamento ou ligação direta ao WhatsApp para não perder clientes.' },
        { icon: 'pin', title: 'Presença no Google', text: 'Configuração do Perfil da Empresa no Google e SEO local para aparecer quando procuram por perto.' },
        { icon: 'tool', title: 'Manutenção', text: 'Atualizamos menus, preços e fotos por si, e tratamos do alojamento, segurança e cópias de segurança.' }
      ]
    },
    process: {
      eyebrow: 'Como funciona', title: 'Do primeiro contacto ao site no ar, sem complicações.',
      steps: [
        { title: 'Conversa', text: 'Conte-nos sobre o seu negócio, os seus clientes e o que precisa.' },
        { title: 'Rascunho', text: 'Em 48 horas recebe um rascunho gratuito do site para ver antes de decidir.' },
        { title: 'Ajustes', text: 'Afinamos textos, fotos e cores consigo até estar exatamente como quer.' },
        { title: 'Lançamento', text: 'Em 1 a 2 semanas publicamos com domínio próprio, pronto para o Google.' }
      ]
    },
    why: {
      title: 'Porquê a Digital Montra?',
      sub: 'Uma montra mostra o seu negócio a quem passa. O seu site faz o mesmo, a qualquer hora, em qualquer lugar.',
      items: [
        { title: 'Pensado para o Algarve', text: 'Sites feitos para clientes locais e para quem nos visita, em português e inglês desde o primeiro dia.' },
        { title: 'Rápido e simples', text: 'Sites leves, que abrem depressa no telemóvel e são fáceis de usar para os seus clientes.' },
        { title: 'Um contacto direto', text: 'Fala sempre com a mesma pessoa, sem intermediários nem linguagem técnica.' }
      ]
    },
    plans: {
      eyebrow: 'Planos', badge: 'Recomendado', cta: 'Pedir proposta', from: 'desde', perMonth: '/mês',
      creation: {
        title: 'Criação do site',
        sub: 'Pagamento único. Todos os sites são bilingues (PT/EN), rápidos e adaptados ao telemóvel.',
        items: [
          { id: 'essencial', name: 'Essencial', fit: 'Ideal para cafés, cabeleireiros e serviços.', text: 'Página única com serviços, fotos, mapa, WhatsApp e contacto.' },
          { id: 'profissional', name: 'Profissional', fit: 'Ideal para restaurantes e alojamento local.', text: 'Até 5 páginas, galeria, menu ou tabela de preços, formulário e SEO básico.' },
          { id: 'premium', name: 'Premium', fit: 'Ideal para hotéis e negócios com reservas.', text: 'Integração de reservas, blog e páginas adicionais.' }
        ]
      },
      care: {
        title: 'Manutenção mensal',
        sub: 'O seu site sempre online, seguro e atualizado. Compromisso mínimo de {months} meses.',
        items: [
          { id: 'base', name: 'Base', text: 'Alojamento, certificado SSL, cópias de segurança, atualizações e 1 alteração pequena por mês.' },
          { id: 'plus', name: 'Plus', text: 'Tudo do Base + até 4 alterações por mês (menu, preços, fotos, horários), gestão do Perfil de Empresa no Google e relatório mensal de visitas.' },
          { id: 'pro', name: 'Pro', text: 'Tudo do Plus + SEO local, atualização de época (verão/inverno), 1 secção nova por trimestre e suporte prioritário.' }
        ]
      },
      notes: [
        { id: 'launch', text: 'Oferta de lançamento: ao escolher o plano Plus ou Pro por {months} meses, a criação do site Essencial ou Profissional tem {discount} de desconto.' },
        { id: 'annual', text: 'Pagamento anual: paga {paid} meses e tem {total}.' },
        { id: 'extra', text: 'Alterações fora do plano: {rate}/hora.' }
      ]
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        { q: 'Quanto tempo demora a ficar pronto?', a: 'Recebe um rascunho gratuito em 48 horas. Depois de aprovado, o site fica pronto em 1 a 2 semanas.' },
        { q: 'Preciso de ter domínio ou alojamento?', a: 'Não. Tratamos do registo do domínio e do alojamento por si, ou usamos os que já tiver.' },
        { q: 'Posso alterar o site depois?', a: 'Sim. Com o plano de manutenção fazemos as alterações por si; também pode pedir alterações pontuais.' },
        { q: 'O site fica também em inglês?', a: 'Sim. Todos os sites incluem português e inglês, com o português por defeito.' }
      ]
    },
    contact: {
      eyebrow: 'Contacto', title: 'Fale-nos do seu negócio e receba um rascunho em 48 horas.',
      sub: 'Basta o nome e a atividade do negócio. Preparamos o rascunho gratuito e uma proposta com preço fixo.',
      points: ['Rascunho grátis em 48 horas', 'Sem compromisso', 'Preço fixo, sem surpresas'],
      waCta: 'Falar no WhatsApp',
      name: 'O seu nome', business: 'Nome do negócio', businessPh: 'Ex.: Restaurante O Pescador',
      activity: 'Atividade do negócio', activityPh: 'Ex.: restaurante, alojamento local, loja, serviços',
      email: 'Email ou telefone', message: 'Quer acrescentar algo? (opcional)',
      send: 'Pedir proposta grátis', promise: 'Rascunho gratuito em 48 horas. Sem compromisso.',
      privacy: 'Usamos os seus dados apenas para responder ao seu pedido.', privacyLink: 'Política de privacidade',
      errors: { business: 'Indique o nome do negócio.', activity: 'Indique a atividade do negócio.', name: 'Indique o seu nome.', reply: 'Indique um email ou telefone válido para podermos responder.' },
      thanks: 'Obrigado!', thanksSub: 'Recebemos o seu pedido e entraremos em contacto em breve.', again: 'Enviar outro pedido',
      mailSubject: 'Pedido de proposta'
    }
  },
  en: {
    skip: 'Skip to content',
    wa: 'Chat with us on WhatsApp',
    draft: {
      title: 'See your site before you decide.',
      text: 'Within 48 hours you receive a free draft, designed for desktop and mobile. No strings attached.',
      note: 'Illustration of the kind of draft you receive. Not a client project.'
    },
    cookie: {
      title: 'Cookies and privacy',
      text: 'We only use the storage the site needs to work (for example, remembering your language). You can accept or refuse optional storage, and change your choice at any time.',
      policy: 'Privacy and cookie policy', settings: 'Cookie settings',
      accept: 'Accept all', reject: 'Refuse optional', customize: 'Customise', save: 'Save choice', always: 'Always on',
      necessary: { t: 'Necessary', d: 'They store your language and your cookie choice. The site does not work properly without them.' },
      stats: { t: 'Statistics', d: 'They measure visits in aggregate. The site does not currently use any statistics tool; this option only applies if one is ever enabled.' }
    },
    legal: {
      seo: { title: 'Privacy and cookie policy | Digital Montra', description: 'How Digital Montra handles your personal data and which cookies and local storage this website uses.' },
      back: 'Back to site',
      title: 'Privacy and cookie policy',
      updated: 'Last updated: 7 October 2026',
      sections: [
        { h: '1. Who is responsible', p: ['Digital Montra Web Studio, Pablo Javier Viegas Mendes, tax ID (NIF) 316902527, Algarve, Portugal.', 'Contact for privacy questions: ola@digitalmontra.pt.'] },
        { h: '2. What data we collect', p: ['When you fill in the contact form, we collect your name, business name (optional), email or phone number and the message you write.', 'If you contact us by email or WhatsApp, we process the data you send us.'] },
        { h: '3. What we use it for and on what basis', p: ['We use this data to reply to your request and prepare a proposal, based on steps taken at your request before a contract (Article 6(1)(b) GDPR).', 'If you become a client, we also process the data needed to provide the service and to meet legal obligations such as invoicing.', 'We do not use your data for marketing or automated decisions.'] },
        { h: '4. How long we keep it', p: ['Requests that do not lead to a contract: 6 months.', 'Clients: for as long as tax and accounting law requires.'] },
        { h: '5. Who we share it with', p: ['We use providers that process data on our behalf:'], ul: ['Netlify, to host the site and receive form requests.', 'Zoho Mail, to receive and answer emails.', 'WhatsApp (Meta), only if you choose to contact us that way.'] },
        { h: '6. Your rights', p: ['You can ask for access, rectification, erasure, restriction of processing and portability of your data, object to processing, and withdraw consent where processing is based on it. To do so, write to ola@digitalmontra.pt.', 'You also have the right to lodge a complaint with the Portuguese data protection authority, the CNPD, at www.cnpd.pt.'] },
        { h: '7. Cookies and local storage', p: ['This site does not use advertising or statistics cookies. It stores in your browser only what it needs to work, and does not send that information to third parties:'], table: { head: ['Name', 'Purpose', 'Duration', 'Type'], rows: [['dm-lang', 'Remembers your chosen language (PT or EN).', 'Until you clear it', 'Necessary'], ['dm-consent', 'Stores your cookie choice.', '6 months', 'Necessary']] }, after: ['Fonts are hosted on the site itself, so your visit does not send data to external font servers.', 'If we enable optional tools such as statistics in the future, we will only do so after the visitor accepts. You can change your choice at any time under "Cookie settings" in the footer.', 'When you click links to external sites, such as WhatsApp, those sites apply their own policies.'] },
        { h: '8. Changes to this policy', p: ['We may update this policy. The date of the last change is at the top of this page.'] }
      ]
    },
    seo: {
      title: 'Website Design in the Algarve | Digital Montra Web Studio',
      description: 'Website design for restaurants, holiday rentals, shops and services in the Algarve. Bilingual PT/EN, fast on mobile. Free draft in 48 hours.'
    },
    stats: {
      items: [
        { value: '48 h', label: 'Free draft of your site', count: true },
        { value: '1–2 wks', label: 'From approval to live' },
        { value: 'PT + EN', label: 'On every site' },
        { priceOf: 'essencial', label: 'Essencial plan, fixed price', count: true }
      ]
    },
    nav: { services: 'Services', process: 'Process', plans: 'Plans', faq: 'FAQ', contact: 'Contact', cta: 'Get a proposal' },
    hero: {
      eyebrow: 'Web studio in the Algarve',
      title: 'Websites that open the shop window to your business.',
      sub: 'We build modern, fast, bilingual websites for local Algarve businesses: restaurants, holiday rentals, shops and services. Get a proposal with a draft of your site, no strings attached.',
      cta1: 'Get a free proposal', cta2: 'See services',
      points: ['Portuguese and English', 'Perfect on mobile', 'Fixed price, no surprises']
    },
    services: {
      eyebrow: 'Services', title: 'Everything a local business needs to be found online.',
      items: [
        { icon: 'site', title: 'Professional website', text: 'A clear, polished presence: who you are, what you do, opening hours, contact details and a map.' },
        { icon: 'calendar', title: 'Bookings and enquiries', text: 'Booking forms, quote requests or a direct WhatsApp link so you never miss a customer.' },
        { icon: 'pin', title: 'Google presence', text: 'Google Business Profile setup and local SEO so you show up when people search nearby.' },
        { icon: 'tool', title: 'Care plan', text: 'We update menus, prices and photos for you, and handle hosting, security and backups.' }
      ]
    },
    process: {
      eyebrow: 'How it works', title: 'From first chat to a live website, without the hassle.',
      steps: [
        { title: 'Chat', text: 'Tell us about your business, your customers and what you need.' },
        { title: 'Draft', text: 'Within 48 hours you get a free draft of your site to see before deciding.' },
        { title: 'Refine', text: 'We fine-tune text, photos and colours with you until it is just right.' },
        { title: 'Launch', text: 'Within 1 to 2 weeks we go live on your own domain, ready for Google.' }
      ]
    },
    why: {
      title: 'Why Digital Montra?',
      sub: 'A montra is a shop window that shows your business to passers-by. Your website does the same, at any hour, from anywhere.',
      items: [
        { title: 'Made for the Algarve', text: 'Built for locals and visitors alike, in Portuguese and English from day one.' },
        { title: 'Fast and simple', text: 'Lightweight sites that load quickly on mobile and are easy for your customers to use.' },
        { title: 'One direct contact', text: 'You always talk to the same person, with no middlemen and no jargon.' }
      ]
    },
    plans: {
      eyebrow: 'Plans', badge: 'Recommended', cta: 'Request a proposal', from: 'from', perMonth: '/month',
      creation: {
        title: 'Website creation',
        sub: 'One-off payment. Every site is bilingual (PT/EN), fast and mobile-friendly.',
        items: [
          { id: 'essencial', name: 'Essencial', fit: 'Best for cafés, salons and trades.', text: 'One-page site with services, photos, map, WhatsApp and contact.' },
          { id: 'profissional', name: 'Profissional', fit: 'Best for restaurants and holiday rentals.', text: 'Up to 5 pages, gallery, menu or price list, contact form and basic SEO.' },
          { id: 'premium', name: 'Premium', fit: 'Best for hotels and booking-based businesses.', text: 'Booking integration, blog and extra pages.' }
        ]
      },
      care: {
        title: 'Monthly care plans',
        sub: 'Your site always online, secure and up to date. Minimum commitment: {months} months.',
        items: [
          { id: 'base', name: 'Base', text: 'Hosting, SSL certificate, backups, updates and 1 small change per month.' },
          { id: 'plus', name: 'Plus', text: 'Everything in Base + up to 4 changes per month (menu, prices, photos, hours), Google Business Profile management and a monthly visits report.' },
          { id: 'pro', name: 'Pro', text: 'Everything in Plus + local SEO, seasonal refresh (summer/winter), 1 new section per quarter and priority support.' }
        ]
      },
      notes: [
        { id: 'launch', text: 'Launch offer: choose Plus or Pro for {months} months and get {discount} off the Essencial or Profissional website.' },
        { id: 'annual', text: 'Annual payment: pay for {paid} months, get {total}.' },
        { id: 'extra', text: 'Changes outside your plan: {rate}/hour.' }
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How long does it take?', a: 'You get a free draft within 48 hours. Once approved, your site is ready in 1 to 2 weeks.' },
        { q: 'Do I need a domain or hosting?', a: 'No. We register the domain and set up hosting for you, or use the ones you already have.' },
        { q: 'Can I change the site later?', a: 'Yes. With the care plan we make changes for you; you can also request one-off updates.' },
        { q: 'Is the site in English too?', a: 'Yes. Every site includes Portuguese and English, with Portuguese as the default.' }
      ]
    },
    contact: {
      eyebrow: 'Contact', title: 'Tell us about your business and get a draft in 48 hours.',
      sub: 'Just your business name and activity. We prepare the free draft and a fixed-price proposal.',
      points: ['Free draft in 48 hours', 'No strings attached', 'Fixed price, no surprises'],
      waCta: 'Chat on WhatsApp',
      name: 'Your name', business: 'Business name', businessPh: 'E.g. O Pescador Restaurant',
      activity: 'Business activity', activityPh: 'E.g. restaurant, holiday rental, shop, services',
      email: 'Email or phone', message: 'Anything to add? (optional)',
      send: 'Get a free proposal', promise: 'Free draft in 48 hours. No strings attached.',
      privacy: 'We only use your details to reply to your request.', privacyLink: 'Privacy policy',
      errors: { business: 'Enter your business name.', activity: 'Enter your business activity.', name: 'Enter your name.', reply: 'Enter a valid email or phone number so we can reply.' },
      thanks: 'Thank you!', thanksSub: 'We have received your request and will be in touch soon.', again: 'Send another request',
      mailSubject: 'Proposal request'
    }
  }
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const get = (obj, path) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);

/* Preços: os valores vêm de pricing.js (PRICING); aqui só se formatam por idioma.
   Nos textos de I18N, {months}, {discount}, {paid}, {total} e {rate} são substituídos pelos valores de PRICING. */
const fmtNumber = (n) => n.toLocaleString(currentLang === 'pt' ? 'de-DE' : 'en-US');
const formatPrice = (n) => (currentLang === 'pt' ? `${fmtNumber(n)} €` : `€${fmtNumber(n)}`);
const formatPercent = (n) => (currentLang === 'pt' ? `${n} %` : `${n}%`);
const fill = (str) => {
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
const legalText = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');

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

const RENDER = {
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

let currentLang = 'pt';

function setLang(lang) {
  const t = I18N[lang] || I18N.pt;
  currentLang = I18N[lang] ? lang : 'pt';
  document.documentElement.lang = currentLang;
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
    b.setAttribute('aria-pressed', String(b.dataset.lang === currentLang));
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
  try { localStorage.setItem('dm-lang', currentLang); } catch (e) { /* sem armazenamento */ }
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
  el.textContent = formErrorKey ? I18N[currentLang].contact.errors[formErrorKey] : '';
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
    const t = I18N[currentLang].contact;
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
