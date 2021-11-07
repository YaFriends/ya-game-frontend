module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#1E2023',
      },
      white: {
        DEFAULT: '#FFF',
      },
      grey: {
        DEFAULT: '#8B949E',
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
    fontFamily: {
      body: 'Ubuntu, Arial, sans-serif',
    },
    extend: {
      spacing: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
        7: '35px',
        8: '40px',
        9: '45px',
        10: '50px',
        11: '55px',
        12: '60px',
        13: '65px',
        14: '70px',
        15: '75px',
        16: '80px',
        17: '85px',
        18: '90px',
        19: '95px',
        20: '100px',
        21: '105px',
        22: '110px',
        23: '115px',
        24: '120px',
        30: '150px',
      },
      borderRadius: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
        7: '35px',
        8: '40px',
        9: '45px',
        10: '50px',
        '12px': '12px',
      },
    },
  },
};
