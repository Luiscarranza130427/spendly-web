# Spendly Web Media Pack

Contenido:
- `brand/spendly-logo.svg` — logo horizontal en SVG.
- `brand/spendly-favicon.svg` — favicon/icono en SVG.
- `illustrations/hero-fintech.png` — imagen principal para el Hero.
- `illustrations/accounts-wallet.png` — cuentas/movimientos.
- `illustrations/analytics-dashboard.png` — análisis y reportes.
- `illustrations/security.png` — seguridad y privacidad.
- `illustrations/multidevice.png` — laptop/tablet/móvil.
- `illustrations/goals-savings.png` — metas y ahorro.

Las ilustraciones están pensadas SIN texto para que el contenido textual se escriba directamente en Astro.

## Uso sugerido en Astro

```text
public/
└── media/
    ├── brand/
    └── illustrations/
```

Para el favicon:
```html
<link rel="icon" type="image/svg+xml" href="/media/brand/spendly-favicon.svg" />
```

Para navbar/footer:
`/media/brand/spendly-logo.svg`
