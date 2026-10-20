export interface FAQItem {
  id: string;
  category: 'general' | 'funciones' | 'planes' | 'seguridad';
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    id: 'es-gratis',
    category: 'planes',
    question: '¿Spendly es gratis?',
    answer: 'Sí. Spendly cuenta con un plan Gratis para comenzar a ordenar tus finanzas personales y ofrecerá funciones extendidas mediante Spendly Pro en el futuro.',
  },
  {
    id: 'varias-cuentas',
    category: 'funciones',
    question: '¿Puedo registrar varias cuentas?',
    answer: 'Sí. Puedes registrar y clasificar cuentas de efectivo, cuentas bancarias, tarjetas de débito o crédito y billeteras digitales para tener tu balance consolidado en un solo lugar.',
  },
  {
    id: 'transferencias',
    category: 'funciones',
    question: '¿Puedo registrar transferencias?',
    answer: 'Sí. Las transferencias entre tus propias cuentas mueven el saldo de origen a destino sin computarse erróneamente como un nuevo ingreso o gasto global.',
  },
  {
    id: 'presupuestos',
    category: 'funciones',
    question: '¿Puedo crear presupuestos?',
    answer: 'Sí. Puedes definir límites máximos de gasto por categoría y hacer seguimiento visual continuo durante el mes para saber cuánto dinero te queda disponible.',
  },
  {
    id: 'metas',
    category: 'funciones',
    question: '¿Puedo crear metas de ahorro?',
    answer: 'Sí. Puedes establecer objetivos de ahorro con un monto meta y una fecha estimada, registrando aportes progresivos con una barra de avance clara.',
  },
  {
    id: 'privacidad-datos',
    category: 'seguridad',
    question: '¿Mis datos son privados?',
    answer: 'Completamente. La información financiera está aislada estrictamente por cada usuario registrado. Solo tú tienes autorización para consultar tus movimientos y saldos.',
  },
  {
    id: 'movil',
    category: 'general',
    question: '¿Spendly funciona en el teléfono móvil?',
    answer: 'Sí. Spendly está desarrollado con diseño totalmente responsivo para adaptarse fluidamente a pantallas de teléfonos, tablets y computadoras desde cualquier navegador moderno.',
  },
];

export const allFaqs: FAQItem[] = [
  ...homeFaqs,
  {
    id: 'como-empezar',
    category: 'general',
    question: '¿Cómo puedo empezar a utilizar Spendly?',
    answer: 'Solo necesitas hacer clic en "Empieza gratis", registrar tu correo y contraseña, y comenzar a agregar tus cuentas y primeros movimientos.',
  },
  {
    id: 'conexion-bancos',
    category: 'general',
    question: '¿Spendly se conecta automáticamente a mis cuentas bancarias?',
    answer: 'Spendly está diseñado bajo un modelo de control deliberado y consciente donde tú registras y administras tus movimientos, sin necesidad de entregar tus credenciales bancarias personales a intermediarios.',
  },
  {
    id: 'recurrentes-uso',
    category: 'funciones',
    question: '¿Cómo funcionan los pagos y transacciones recurrentes?',
    answer: 'Te permiten registrar suscripciones mensuales (como servicios de streaming o telefonía) y sueldos periódicos para tener previsión clara de tu flujo de caja.',
  },
  {
    id: 'exportar-datos',
    category: 'funciones',
    question: '¿Puedo ver mis datos organizados por periodos?',
    answer: 'Sí, la sección de análisis y reportes te permite filtrar tus ingresos y gastos por día, mes y año para entender la evolución de tu dinero.',
  },
  {
    id: 'limite-tiempo-plan',
    category: 'planes',
    question: '¿El plan gratuito caduca tras un periodo de prueba?',
    answer: 'No. No es una prueba por tiempo limitado; el plan Gratis permanece activo para tu uso continuo.',
  },
  {
    id: 'seguridad-conexion',
    category: 'seguridad',
    question: '¿Qué medidas de seguridad protegen mi sesión?',
    answer: 'Todas las conexiones utilizan cifrado HTTPS/TLS estricto, cookies de sesión protegidas y validación exhaustiva de cada solicitud en el servidor.',
  },
  {
    id: 'compartir-cuentas',
    category: 'seguridad',
    question: '¿Otras personas pueden ver mis presupuestos o saldos?',
    answer: 'No. Cada espacio financiero pertenece exclusivamente al usuario autenticado y el sistema no permite el acceso no autorizado entre distintas cuentas.',
  },
];
