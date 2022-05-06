const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        background: '#EFF2F9',
        primary: '#303B5B',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        default: "url('./src/assets/img/default.png')",
        bluetogreen:
          'linear-gradient(134.9deg, #0094FF 3.37%, #00FFA3 103.38%)',
        bluegradient: 'linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)',
        pinkgradient: 'linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%);',
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
