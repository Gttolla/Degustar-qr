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
      green: colors.green,
      'primary': '#B43F3F',
      'secondary':'#FD5252',
      'text': '#EEEEEE',
    },
    fontFamily: {
      'titles': ['"Montserrat"'],
      'text': ['"Poppins"']
    },
    screens: {
      'wrap': '1090px',
    },
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

