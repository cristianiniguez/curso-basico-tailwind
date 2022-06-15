/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bali: 'url(/public/img/bali.jpg)',
        chicago: 'url(/public/img/chicago.jpg)',
        europe: 'url(/public/img/europe.jpg)',
        iceland: 'url(/public/img/iceland.jpg)',
        la: 'url(/public/img/LA.jpg)',
        miami: 'url(/public/img/miami.jpg)',
        newYork: 'url(/public/img/new_york.jpg)',
        norway: 'url(/public/img/norway.jpg)',
        sanFrancisco: 'url(/public/img/sanFrancisco.jpg)',
        sanFranciscoDesktop: 'url(/public/img/sanFranciscoDesktop.jpg)',
        seattle: 'url(/public/img/seattle.jpg)',
        switzerland: 'url(/public/img/switzerland.jpg)',
        sydney: 'url(/public/img/sydney.jpg)',
        yosemite: 'url(/public/img/yosemite.jpg)',
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
