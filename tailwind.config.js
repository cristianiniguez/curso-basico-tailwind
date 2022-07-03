/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        bali: 'url(/img/bali.jpg)',
        chicago: 'url(/img/chicago.jpg)',
        europe: 'url(/img/europe.jpg)',
        iceland: 'url(/img/iceland.jpg)',
        la: 'url(/img/LA.jpg)',
        miami: 'url(/img/miami.jpg)',
        newYork: 'url(/img/new_york.jpg)',
        norway: 'url(/img/norway.jpg)',
        sanFrancisco: 'url(/img/sanFrancisco.jpg)',
        sanFranciscoDesktop: 'url(/img/sanFranciscoDesktop.jpg)',
        seattle: 'url(/img/seattle.jpg)',
        switzerland: 'url(/img/switzerland.jpg)',
        sydney: 'url(/img/sydney.jpg)',
        yosemite: 'url(/img/yosemite.jpg)',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#cc2d4a',
        secondary: '#8fa206',
        tertiary: '#61aec9',
      }),
      textColor: {
        primary: '#cc2d4a',
        secondary: '#8fa206',
        tertiary: '#61aec9',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
