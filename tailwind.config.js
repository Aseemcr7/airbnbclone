/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        poppi: ['Poppines' ,' sans-serif']
      },
      boxShadow: {
        'fullside': '0px 0px 60px -20px rgba(0,0,0,0.3)',
      },
      fontSize:{
        'vs': '10px',
      },
      screens:{
        'nm': '920px',

        'mobile': '0px',
      },
    },
  },
  plugins: [],
}

