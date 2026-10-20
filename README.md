# Spendly Web — Sitio Público & Landing de Marketing

Sitio web público, promocional y de captación oficial de **Spendly**, la plataforma SaaS de finanzas personales.

> **Importante**: Este proyecto corresponde únicamente a la web pública de marketing construida con Astro. La aplicación SaaS principal se mantiene en un repositorio separado (Next.js / Laravel / PostgreSQL).

---

## 1. Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation ultra-rápido, zero-JS por defecto)
- **Tipado**: [TypeScript](https://www.typescriptlang.org/) en modo estricto (`strict: true`)
- **Estilos**: [Tailwind CSS v3](https://tailwindcss.com/) con sistema de diseño y paleta oficial Spendly
- **Tipografía**: Inter self-hosted mediante `@fontsource/inter` (sin dependencias en tiempo de ejecución de CDNs externos)
- **Iconografía**: [Lucide Icons](https://lucide.dev/) (`lucide-astro`)
- **SEO & Social**: `@astrojs/sitemap`, Open Graph, Twitter Cards, `robots.txt` y Schema JSON-LD `WebApplication`
- **Despliegue**: Listo para [Vercel](https://vercel.com/) con configuración estática y encabezados de seguridad en `vercel.json`
- **Gestor de paquetes**: `pnpm`

---

## 2. Paleta de Colores Oficial

- **Verde principal**: `#08B889`
- **Verde esmeralda**: `#0C8F72`
- **Verde oscuro**: `#075D50`
- **Menta clara**: `#DDF7EC`
- **Fondo suave**: `#F6FAF8`
- **Texto principal**: `#102A2A`
- **Texto secundario**: `#5F7270`
- **Blanco puro**: `#FFFFFF`

---

## 3. Estructura del Proyecto

```text
spendly-web/
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── images/
│       ├── brand/           # Isotipo y logotipos transparentes
│       ├── hero/            # Ilustración y composición de portada
│       ├── mockups/         # Dashboard real desktop + mobile
│       ├── features/        # Ilustraciones de herramientas y planes
│       ├── sidebar/         # Ilustración financiera oficial
│       ├── backgrounds/     # Fondos suaves y recursos decorativos
│       └── social/          # Tarjetas sociales OG (1200x630 y 1080x1080)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro       # Sticky navbar con blur y menú móvil accesible
│   │   │   └── Footer.astro       # Pie con branding NovaTec y enlaces legales
│   │   ├── sections/
│   │   │   ├── Hero.astro             # Portada con LCP optimizado y mockup
│   │   │   ├── TrustStrip.astro       # Valores fácticos (Simple, Seguro, Organizado)
│   │   │   ├── Problem.astro          # ¿A dónde se va tu dinero?
│   │   │   ├── Solution.astro         # Finanzas más claras
│   │   │   ├── Features.astro         # Grid de 6 funciones centrales
│   │   │   ├── ProductShowcase.astro  # Mockup de panel central
│   │   │   ├── AccountsShowcase.astro # Gestión de cuentas
│   │   │   ├── AnalyticsShowcase.astro# Hábitos y tendencias
│   │   │   ├── BudgetsShowcase.astro  # Presupuestos
│   │   │   ├── GoalsShowcase.astro    # Metas de ahorro
│   │   │   ├── MultiDevice.astro      # Navegación en móvil, tablet y laptop
│   │   │   ├── Security.astro         # Seguridad técnica honesta
│   │   │   ├── PricingPreview.astro   # Preview Gratis vs Pro
│   │   │   ├── FAQ.astro              # Acordeón accesible sin JavaScript
│   │   │   └── FinalCTA.astro         # Bloque verde de conversión
│   │   └── ui/
│   │       ├── Button.astro           # Botón accesible con variantes
│   │       ├── Badge.astro            # Etiquetas de estado
│   │       ├── SectionTitle.astro     # Encabezados con jerarquía semántica
│   │       └── FeatureCard.astro      # Tarjetas de función con hover sutil
│   ├── data/
│   │   ├── features.ts      # Funciones, descripciones y beneficios
│   │   ├── pricing.ts       # Definición de planes y tabla comparativa
│   │   ├── faq.ts           # Preguntas frecuentes categorizadas
│   │   └── navigation.ts    # Enlaces de menú y helper de URLs de autenticación
│   ├── layouts/
│   │   └── BaseLayout.astro # Head con SEO, OG, Twitter, JSON-LD y Skip Link
│   ├── pages/
│   │   ├── index.astro      # Landing page completa
│   │   ├── funciones.astro  # Detalle exhaustivo de cada herramienta
│   │   ├── planes.astro     # Comparativa y detalle de Gratis vs Pro
│   │   ├── seguridad.astro  # Documentación técnica de seguridad
│   │   ├── preguntas.astro  # Centro completo de preguntas frecuentes
│   │   ├── 404.astro        # Página de error personalizada
│   │   ├── privacidad.astro # Política de privacidad profesional
│   │   └── terminos.astro   # Términos de servicio
│   └── styles/
│       └── global.css       # Tokens, tipografía y utilidades de accesibilidad
├── docs/
│   ├── ASSETS.md            # Catálogo de imágenes, secciones y textos alt
│   ├── CONTENT.md           # Registro completo del copy utilizado
│   └── PALETA.md            # Paleta de color de referencia
├── .env.example
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 4. Variables de Entorno

Crear un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `PUBLIC_SPENDLY_APP_URL` | URL de la aplicación web SaaS Spendly para enlaces de Iniciar Sesión y Registro | `https://app.spendly.com` |

---

## 5. Scripts de Desarrollo y Construcción

Todos los comandos deben ejecutarse con **`pnpm`**:

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo local (http://localhost:4321)
pnpm dev

# Comprobar tipos de TypeScript y componentes Astro
pnpm check

# Construir bundle estático de producción optimizado en dist/
pnpm build

# Previsualizar el bundle de producción localmente
pnpm preview
```

---

## 6. Despliegue en Vercel

El proyecto está preconfigurado para Vercel:

1. Importar el repositorio en el panel de Vercel.
2. Vercel detecta automáticamente el framework **Astro**.
3. Comando de build: `pnpm run build`
4. Directorio de salida: `dist`
5. Configurar la variable de entorno `PUBLIC_SPENDLY_APP_URL` apuntando a la URL del SaaS en producción.
6. El archivo `vercel.json` aplica automáticamente las cabeceras de seguridad (`X-Frame-Options`, `Content-Type-Options`, `Referrer-Policy`) y políticas de caché inmutable para `/images/`.

---

## 7. Accesibilidad y Rendimiento

- Cumplimiento **WCAG 2.2 AA**:
  - Jerarquía semántica de títulos estricta (un solo `<h1>` por página).
  - Indicadores de foco visibles (`focus-visible`).
  - Atributos `aria-expanded` y soporte de tecla Escape en navegación móvil.
  - Textos descriptivos en atributos `alt` de todas las imágenes.
  - Respeto a la preferencia de usuario `prefers-reduced-motion`.
- **Core Web Vitals**:
  - Zero-JS por defecto salvo script ligero para toggle de menú móvil.
  - LCP optimizado con carga `eager` y `fetchpriority="high"` en la imagen principal.
  - Dimensiones explícitas en imágenes para eliminar CLS.
  - Tipografías locales optimizadas para evitar retrasos de fuentes externas.
