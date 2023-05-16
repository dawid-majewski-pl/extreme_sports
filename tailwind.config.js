/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        content: ['Archivo'],
        label: ['Archivo Black']
      },
      fontSize: {
        'viewport': '3vw',
        'top-sm': '32px',
        'top-md': '48px',
        'section-md': '36px'
      },
      gridTemplateColumns: {
        'nav': '1fr 2fr',
      },
      colors: {
        'orange-main': '#f9c22e',
        'orange-second': '#ffa029',
        'gunmetal-main': '#1f2b37',
      },
      opacity: {
        'barely-visible': '0.98'
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}