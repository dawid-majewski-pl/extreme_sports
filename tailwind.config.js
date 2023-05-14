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
      }
    },
  },
  plugins: [],
}