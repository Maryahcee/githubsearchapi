/* eslint-disable prettier/prettier */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xm': '340px',
      'sm': '640px',  
      'md': '768px',  
      'lg': '1024px',  
      'xl': '1280px',  
      '2xl': '1536px'
    },
    extend: {
      colors:{
        'White': '#FFFFFF',
        'lGrayish': '#F6F8FF',
        'lBlack': '#2B3442',
        'lBlue': '#4B6A9B',
        'lGrey': '#697C9A',
        'lSky': '#0079FF',
        'black': '#141D2F',
        'darkBlue': '#1E2A47',
        'bright': '#FEFEFE',
      },
      fontFamily: {
        'space':['"Space Mono"', 'monospace']
      },
      
    },
  },
  plugins: [],
  darkMode: 'class',

};
