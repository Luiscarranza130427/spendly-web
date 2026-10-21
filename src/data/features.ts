export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefit: string;
  iconName: string;
  assetPath?: string;
  highlights: string[];
}

export const coreFeatures: FeatureItem[] = [
  {
    id: 'cuentas',
    title: 'Cuentas',
    tagline: 'Todas tus cuentas en un solo lugar',
    description: 'Administra efectivo, cuentas bancarias, tarjetas, ahorros y billeteras desde un solo lugar.',
    benefit: 'Visualiza el saldo consolidado de todo tu patrimonio sin saltar entre diferentes aplicaciones bancarias.',
    iconName: 'Wallet',
    assetPath: '/images/illustrations/accounts-wallet.webp',
    highlights: [
      'Soporte para efectivo, bancos, débito y crédito',
      'Saldos actualizados al instante',
      'Separación por categorías y billeteras',
    ],
  },
  {
    id: 'movimientos',
    title: 'Movimientos',
    tagline: 'Historial transparente y categorizado',
    description: 'Registra ingresos, gastos y transferencias con un historial claro, filtros y categorización precisa.',
    benefit: 'Identifica exactamente en qué gastas cada peso y clasifica tus transacciones en segundos.',
    iconName: 'ArrowLeftRight',
    assetPath: '/images/gifs/spendly-dashboard-poster.webp',
    highlights: [
      'Ingresos, gastos y transferencias entre cuentas propias',
      'Filtros por fecha, categoría y cuenta',
      'Notas y etiquetas personalizadas',
    ],
  },
  {
    id: 'analisis',
    title: 'Análisis',
    tagline: 'Entiende tus hábitos financieros',
    description: 'Entiende cómo se mueve tu dinero por día, mes y año con resúmenes claros e intuitivos.',
    benefit: 'Descubre patrones de gasto innecesarios y optimiza tu capacidad de ahorro mensual.',
    iconName: 'TrendingUp',
    assetPath: '/images/illustrations/analytics-dashboard.webp',
    highlights: [
      'Distribución de gastos por categorías',
      'Comparativa de ingresos vs. egresos',
      'Tendencias temporales sin fórmulas complejas',
    ],
  },
  {
    id: 'presupuestos',
    title: 'Presupuestos',
    tagline: 'Decide cuánto gastar antes de preguntarte dónde se fue',
    description: 'Define límites y sigue tu progreso para mantener tus gastos bajo control durante cada periodo.',
    benefit: 'Evita sorpresas a fin de mes con una visión en tiempo real de cuánto dinero te queda disponible.',
    iconName: 'PieChart',
    assetPath: '/images/illustrations/budgets-3d.webp',
    highlights: [
      'Topes de gasto por categoría',
      'Progreso visual con indicadores de consumo',
      'Alertas preventivas antes de superar tus límites',
    ],
  },
  {
    id: 'metas',
    title: 'Metas',
    tagline: 'Convierte tus objetivos en progreso visible',
    description: 'Define cuánto quieres ahorrar y sigue el avance de cada meta hasta alcanzarla con éxito.',
    benefit: 'Mantén la motivación viendo cómo cada pequeño ahorro te acerca a tu fondo de emergencia o viaje soñado.',
    iconName: 'Target',
    assetPath: '/images/illustrations/goals-savings.webp',
    highlights: [
      'Metas a corto, mediano y largo plazo',
      'Barra de progreso visual y aportes registrados',
      'Fechas objetivo estimadas',
    ],
  },
  {
    id: 'recurrentes',
    title: 'Recurrentes',
    tagline: 'Control total de pagos periódicos',
    description: 'Organiza ingresos y gastos periódicos como alquiler, suscripciones y nóminas sin perderlos de vista.',
    benefit: 'Ten previsión de tus compromisos fijos del mes antes de comprometer dinero en ocio.',
    iconName: 'CalendarSync',
    assetPath: '/images/illustrations/recurring-3d.webp',
    highlights: [
      'Programación de pagos y suscripciones',
      'Recordatorio de compromisos próximos',
      'Impacto anticipado en el balance',
    ],
  },
];

export const additionalFeatures: FeatureItem[] = [
  {
    id: 'reportes',
    title: 'Reportes Detallados',
    tagline: 'Balances consolidados para declarar o planificar',
    description: 'Consulta resúmenes financieros mensuales y anuales listos para revisar tu evolución patrimonial.',
    benefit: 'Toda tu información estructurada para tomar decisiones con certeza y sin hojas de cálculo rotas.',
    iconName: 'FileSpreadsheet',
    assetPath: '/images/illustrations/reports-3d.webp',
    highlights: [
      'Resumen de balance por periodos',
      'Evolución del ahorro acumulado',
      'Visualización limpia sin exceso de métricas',
    ],
  },
  {
    id: 'multidispositivo',
    title: 'Multidispositivo',
    tagline: 'Siempre contigo en cualquier pantalla',
    description: 'Consulta Spendly desde tu laptop, tablet o teléfono con una interfaz fluida y adaptada.',
    benefit: 'Registra un gasto al instante desde tu teléfono mientras esperas tu café o analiza en pantalla grande desde tu escritorio.',
    iconName: 'Smartphone',
    assetPath: '/images/illustrations/multidevice.webp',
    highlights: [
      'Diseño 100% responsivo para navegadores modernos',
      'Experiencia ágil y ligera en conexiones móviles',
      'Sin descargas obligatorias de tiendas de apps',
    ],
  },
  {
    id: 'seguridad-feature',
    title: 'Seguridad y Privacidad',
    tagline: 'Tu dinero y tus datos, bajo tu control',
    description: 'Tus datos y espacios financieros se mantienen protegidos, aislados y con validaciones en servidor.',
    benefit: 'Tus finanzas son estrictamente privadas: sólo tú tienes acceso a tus registros y cuentas.',
    iconName: 'ShieldCheck',
    assetPath: '/images/illustrations/security.webp',
    highlights: [
      'Aislamiento de datos por usuario y espacio',
      'Cifrado en tránsito con HTTPS estricto',
      'Protección de sesiones con tokens seguros',
    ],
  },
];
