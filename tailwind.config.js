module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {},
    color: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#1E2023',
      },
      white: {
        DEFAULT: '#FFF',
      },
      blue: {
        DEFAULT: '#58A6FF',
      },
      green: {
        DEFAULT: '#3FB950',
      },
      red: {
        DEFAULT: '#FF4757',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
