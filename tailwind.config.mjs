/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        spendly: {
          50: '#F0FAF6',
          100: '#DDF7EC', // Menta clara
          200: '#BAEEDB',
          300: '#83DFC1',
          400: '#43C7A1',
          500: '#08B889', // Verde principal
          600: '#087E63', // Esmeralda con contraste óptimo WCAG AA (> 5:1)
          700: '#065D4F', // Verde oscuro profundo (> 7:1)
          800: '#0B473E',
          900: '#0B3B34',
          950: '#04221E',
        },
        surface: {
          bg: '#F6FAF8', // Fondo suave general
          card: '#FFFFFF',
          cardSubtle: '#F1F7F4',
          border: '#E2ECE8',
          borderSubtle: '#EDF4F1',
        },
        content: {
          primary: '#102A2A', // Texto principal
          secondary: '#475B59', // Texto secundario WCAG AA (> 5.5:1)
          muted: '#4E6563', // Texto atenuado WCAG AA (> 6:1)
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(16, 42, 42, 0.04), 0 1px 2px rgba(16, 42, 42, 0.02)',
        'soft': '0 4px 12px rgba(16, 42, 42, 0.05), 0 1px 3px rgba(16, 42, 42, 0.03)',
        'soft-md': '0 8px 24px rgba(16, 42, 42, 0.06), 0 2px 6px rgba(16, 42, 42, 0.03)',
        'soft-lg': '0 16px 36px rgba(16, 42, 42, 0.08), 0 4px 12px rgba(16, 42, 42, 0.04)',
        'soft-xl': '0 24px 48px -12px rgba(8, 184, 137, 0.12), 0 12px 24px -8px rgba(16, 42, 42, 0.06)',
        'card-hover': '0 20px 40px -15px rgba(8, 184, 137, 0.15), 0 0 1px 1px rgba(8, 184, 137, 0.1)',
      },
      maxWidth: {
        'container': '1240px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
