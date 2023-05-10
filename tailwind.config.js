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
      },
      gridTemplateColumns: {
        'nav': '1fr 2fr',
      }
    },
  },
  plugins: [],
}