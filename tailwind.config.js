/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          orange: '#ff6b00',
          amber: '#f59e0b',
          yellow: '#eab308',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 8px 30px -4px rgba(234, 88, 12, 0.4)',
        'glow-yellow': '0 8px 30px -4px rgba(245, 158, 11, 0.3)',
        'card-warm': '0 10px 30px -5px rgba(245, 158, 11, 0.08), 0 4px 12px -2px rgba(124, 45, 18, 0.04)',
      },
    },
  },
  plugins: [],
}
