/* Preços do site: é o ÚNICO sítio onde se mudam valores.
   Aqui só há números e opções; os textos (PT/EN) estão em I18N.plans, em script.js.
   Se mudar os preços, atualize também os "Offer" do JSON-LD no <head> de index.html. */
const PRICING = {
  /* Criação do site (pagamento único) */
  creation: [
    { id: 'essencial', price: 390 },
    { id: 'profissional', price: 790 },
    { id: 'premium', price: 1290, from: true }   /* from: mostra "desde" antes do valor */
  ],
  /* Manutenção mensal; featured: plano recomendado (etiqueta e destaque) */
  care: [
    { id: 'base', price: 29 },
    { id: 'plus', price: 49, featured: true },
    { id: 'pro', price: 79 }
  ],
  minMonths: 12,                 /* compromisso mínimo da manutenção, em meses */
  launchDiscountPercent: 50,     /* desconto na criação ao escolher Plus ou Pro */
  annualMonthsPaid: 10,          /* pagamento anual: paga estes meses... */
  annualMonthsTotal: 12,         /* ...e tem estes */
  extraHourRate: 35              /* alterações fora do plano, € por hora */
};
