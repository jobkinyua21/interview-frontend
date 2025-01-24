/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#0047BA1F',
        darkBlue:'#0047BA',
        black1:'#111111',
        lightGray:'#DFE6F3', 
      },
      screens: {
        'xs': '420px',

      },
    },
  },
  plugins: [],
}
