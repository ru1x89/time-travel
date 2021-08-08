module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#F2F2F2',
          300: '#8B8B8B',
          700: '#5C5C5C',
        },
        green: {
          400: '#11FAA0',
          500: '#00E089',
        },
        purple: {
          400: '#786EBF',
        },
      },
    },
    fontFamily: {
      sans: ['"Nunito"', '"Helvetica Neue"', 'Arial'],
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover'],
    },
  },
}
