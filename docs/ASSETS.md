# Catálogo y Documentación de Assets — Spendly Web

Este documento detalla todos los recursos multimedia integrados en la web pública de Spendly, su ubicación, sección donde se utilizan y el texto alternativo (`alt`) accesible asignado.

## Resumen de Integración

| Archivo en `public/images/` | Uso Principal | Sección / Página | Texto Alternativo (`alt`) Sugerido |
| :--- | :--- | :--- | :--- |
| `brand/spendly-logo.svg` | Logotipo oficial horizontal vectorizado | `Navbar.astro`, `Footer.astro` | `"Spendly"` |
| `brand/spendly-favicon.svg` | Favicon e isotipo vectorial | Favicon SVG (`/favicon.svg`), BaseLayout | `"Spendly"` |
| `brand/spendly-icon-transparent.png` | Isotipo PNG con canal alfa | Favicons legacy (`/favicon.png`, `apple-touch-icon.png`) | `"Spendly"` |
| `illustrations/hero-fintech.png` | Ilustración fintech de alta resolución sin texto | `Hero.astro` | `"Ilustración principal de Spendly mostrando organización financiera, cuentas e inversiones en un solo lugar"` |
| `illustrations/accounts-wallet.png` | Ilustración de billetera, cuentas y tarjetas | `AccountsShowcase.astro`, `/funciones#cuentas` | `"Ilustración de cuentas, tarjetas y billeteras organizadas en Spendly"` |
| `illustrations/analytics-dashboard.png` | Ilustración de panel analítico, gráficos y reportes | `AnalyticsShowcase.astro`, `/funciones#analisis` | `"Panel de análisis y gráficas de gastos e ingresos en Spendly"` |
| `illustrations/security.png` | Ilustración de protección de datos y privacidad | `Security.astro`, `/seguridad` | `"Ilustración visual de seguridad y protección de datos en Spendly"` |
| `illustrations/multidevice.png` | Ilustración multidispositivo (laptop, tablet, móvil) | `MultiDevice.astro`, `/funciones#multidispositivo` | `"Spendly adaptado a pantallas de escritorio, tablets y dispositivos móviles a través del navegador web"` |
| `illustrations/goals-savings.png` | Ilustración de objetivos y alcancía de ahorro | `GoalsShowcase.astro`, `/funciones#metas` | `"Ilustración de metas financieras y objetivos de ahorro en Spendly"` |
| `mockups/dashboard-desktop-mobile.webp` | Mockup fáctico de la interfaz Spendly en pantallas | `ProductShowcase.astro`, `/funciones#movimientos` | `"Interfaz principal de Spendly mostrando balance general, desglose de cuentas y transacciones recientes"` |
| `features/feature-finanzas-claras.webp` | Banner de claridad y balance financiero | `Solution.astro` | `"Ilustración visual de finanzas claras mostrando orden y balance financiero en Spendly"` |
| `sidebar/spendly-sidebar-finance.webp` | Ilustración financiera oficial para presupuestos | `BudgetsShowcase.astro`, `/funciones#presupuestos` | `"Ilustración financiera de Spendly representando gestión de presupuestos y metas de ahorro"` |
| `features/planes-gratis-pro-reference.webp` | Referencia de suscripciones y recurrencia | `PricingPreview.astro`, `/funciones#recurrentes` | `"Referencia visual de capacidades y planes de Spendly"` |
| `social/spendly-og-1200x630.webp` | Tarjeta Open Graph (1200x630) | Metadatos OG / Twitter / Redes | `"Spendly — Todo tu dinero. Un solo lugar."` |
| `social/spendly-social-square-1080.webp` | Pieza cuadrada para perfiles sociales | Redes sociales / Perfil | `"Spendly — Finanzas Personales Simples"` |

## Criterios de Rendimiento y Accesibilidad
1. **Ilustraciones Sin Texto**: Todas las nuevas ilustraciones fueron concebidas sin tipografía quemada en píxeles, permitiendo que títulos, textos y métricas sean renderizados en HTML semántico con contraste óptimo y lectura fluida por lectores de pantalla.
2. **Logos Vectoriales (SVG)**: El logo principal y el favicon son SVGs ultraligeros (< 2 KB), ofreciendo máxima nitidez en pantallas de cualquier densidad (Retina, 4K) con tiempos de descarga instantáneos.
3. **Carga Optimizada**: La imagen del Hero cuenta con `loading="eager"` y `fetchpriority="high"`, mientras que las ilustraciones inferiores usan `loading="lazy"`.
4. **Dimensiones fijas**: Se declaran atributos `width` y `height` proporcionales para evitar cambios acumulativos de diseño (CLS = 0).
