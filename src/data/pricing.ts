export interface PlanFeatureItem {
  text: string;
  included: boolean;
}

export interface PlanComparisonRow {
  name: string;
  freeValue: string;
  proValue: string;
  isCheck?: boolean;
}

export interface Plan {
  id: 'gratis' | 'pro';
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  priceDisplay: string;
  currency: string;
  priceNumber: string;
  periodDisplay: string;
  trialNote?: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  isExternal?: boolean;
  featureItems: PlanFeatureItem[];
}

export const plans: Plan[] = [
  {
    id: 'gratis',
    name: 'Gratis',
    badge: 'Sin costo',
    tagline: 'Lo esencial para ordenar tus finanzas personales.',
    description: 'Comienza hoy mismo a organizar tu dinero y toma el control de tus cuentas personales con lo esencial.',
    currency: 'S/',
    priceNumber: '0',
    priceDisplay: 'S/ 0',
    periodDisplay: 'para siempre',
    ctaText: 'Empieza gratis',
    ctaHref: 'registro',
    isExternal: true,
    featureItems: [
      { text: 'Espacios financieros propios: 1', included: true },
      { text: 'Cuentas por espacio: 5', included: true },
      { text: 'Metas de ahorro activas: 3', included: true },
      { text: 'Movimientos recurrentes: 5', included: true },
      { text: 'Reportes avanzados', included: false },
      { text: 'Exportaciones por mes: 3', included: true },
      { text: 'Exportar en Excel y PDF', included: false },
      { text: 'Auditoría', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Recomendado',
    tagline: 'Más espacios, reportes avanzados, exportaciones y auditoría.',
    description: 'Para llevar tu gestión financiera a un nivel profesional con capacidad ilimitada y herramientas analíticas.',
    currency: 'S/',
    priceNumber: '19.90',
    priceDisplay: 'S/ 19.90',
    periodDisplay: 'al mes',
    trialNote: '3 días de prueba gratis',
    isPopular: true,
    ctaText: 'Probar Pro 3 días gratis',
    ctaHref: 'registro',
    secondaryCtaText: 'Contratar Pro',
    secondaryCtaHref: 'registro',
    isExternal: true,
    featureItems: [
      { text: 'Espacios financieros propios: 5', included: true },
      { text: 'Cuentas por espacio: Ilimitado', included: true },
      { text: 'Metas de ahorro activas: Ilimitado', included: true },
      { text: 'Movimientos recurrentes: Ilimitado', included: true },
      { text: 'Reportes avanzados', included: true },
      { text: 'Exportaciones por mes: 100', included: true },
      { text: 'Exportar en Excel y PDF', included: true },
      { text: 'Auditoría', included: true },
    ],
  },
];

export const planComparisonTable: { category: string; features: PlanComparisonRow[] }[] = [
  {
    category: 'Capacidad y Espacios',
    features: [
      { name: 'Espacios financieros propios', freeValue: '1', proValue: '5' },
      { name: 'Cuentas por espacio (bancos, tarjetas, efectivo)', freeValue: '5', proValue: 'Ilimitado' },
      { name: 'Metas de ahorro activas', freeValue: '3', proValue: 'Ilimitado' },
      { name: 'Movimientos y transacciones recurrentes', freeValue: '5', proValue: 'Ilimitado' },
    ],
  },
  {
    category: 'Reportes y Exportación',
    features: [
      { name: 'Reportes financieros avanzados', freeValue: 'No', proValue: 'Sí', isCheck: true },
      { name: 'Exportaciones de datos por mes', freeValue: '3 al mes', proValue: '100 al mes' },
      { name: 'Exportar en formatos Excel y PDF', freeValue: 'No', proValue: 'Sí', isCheck: true },
      { name: 'Registro de auditoría y trazabilidad', freeValue: 'No', proValue: 'Sí', isCheck: true },
    ],
  },
  {
    category: 'Seguridad y Acceso',
    features: [
      { name: 'Cifrado en tránsito HTTPS y sesiones seguras', freeValue: 'Sí', proValue: 'Sí', isCheck: true },
      { name: 'Aislamiento estricto de datos por usuario', freeValue: 'Sí', proValue: 'Sí', isCheck: true },
      { name: 'Acceso multidispositivo desde el navegador web', freeValue: 'Sí', proValue: 'Sí', isCheck: true },
      { name: 'Prueba gratuita de evaluación', freeValue: 'Para siempre', proValue: '3 días gratis' },
    ],
  },
];

export const pricingFaqs = [
  {
    question: '¿Qué incluye el plan Gratis?',
    answer: 'El plan Gratis te permite organizar tus finanzas personales sin costo para siempre: incluye 1 espacio financiero, hasta 5 cuentas, 3 metas de ahorro activas, 5 movimientos recurrentes y 3 exportaciones mensuales.',
  },
  {
    question: '¿Cómo funciona la prueba gratis de 3 días de Spendly Pro?',
    answer: 'Puedes activar Spendly Pro y disfrutar de todas sus funciones (cuentas ilimitadas, 5 espacios, reportes avanzados, exportación a Excel/PDF y auditoría) durante 3 días sin compromiso.',
  },
  {
    question: '¿Cuánto cuesta Spendly Pro después de la prueba?',
    answer: 'El plan Pro tiene un precio de S/ 19.90 al mes en soles peruanos, cancelable en cualquier momento desde tu panel de usuario.',
  },
  {
    question: '¿Qué métodos de pago se aceptan para Pro?',
    answer: 'Aceptamos tarjetas de débito y crédito principales a través de nuestra pasarela de pagos segura integrada en la aplicación.',
  },
  {
    question: '¿Mis datos seguirán disponibles si cambio de plan?',
    answer: 'Absolutamente. Tu historial de movimientos, cuentas y presupuestos permanecen íntegros en tu cuenta sin riesgo de pérdida.',
  },
];
