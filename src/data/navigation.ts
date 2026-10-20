export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Funciones', href: '/funciones' },
  { label: 'Planes', href: '/planes' },
  { label: 'Seguridad', href: '/seguridad' },
  { label: 'Preguntas', href: '/preguntas' },
];

export const footerNavigation = {
  producto: [
    { label: 'Funciones', href: '/funciones' },
    { label: 'Planes', href: '/planes' },
    { label: 'Seguridad', href: '/seguridad' },
    { label: 'Multidispositivo', href: '/funciones#multidispositivo' },
  ],
  cuenta: [
    { label: 'Iniciar sesión', href: 'login', isAuth: true },
    { label: 'Crear cuenta', href: 'registro', isAuth: true },
  ],
  ayuda: [
    { label: 'Preguntas frecuentes', href: '/preguntas' },
    { label: 'Soporte', href: '/preguntas#contacto' },
  ],
  legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
  ],
};

export function getAppUrl(path: 'login' | 'registro' = 'registro'): string {
  const baseUrl = import.meta.env.PUBLIC_SPENDLY_APP_URL || 'https://spendly.novatec.site';
  // Eliminar trailing slash si existe
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return `${cleanBase}/${path}`;
}
