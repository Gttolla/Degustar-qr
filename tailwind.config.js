/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{jsx, js}"],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'primary': '#B43F3F',
      'top-screen': '#5A1D1D',
      'text': '#EEEEEE',
    },
    fontFamily: {
      'titles': ['"Montserrat"'],
    }
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

