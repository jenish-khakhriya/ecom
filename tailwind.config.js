/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
       '_1018_' : '1018px',
       '_764_' : '764px',
       '_1413_' : '1413px',
       '_1058_' : '1058px',
       '_699_' : '699px',
       '_1250_' : '1250px',
       '_460_' : '460px',
       '_1100_' : '1100px',
       '_553_' : '553px',
       '_351_' : '351px',
       '_381_' : '381px'
      }
    },
  },
  plugins: [],
}

