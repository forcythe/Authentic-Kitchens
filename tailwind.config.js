/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1536px',

      'xl': {'max': '1200px'},

      'lg': {'max': '1124px'},

      'md': {'max': '850px'},

      'sm': {'max': '600px'},
    },

    extend: {},
  },
  plugins: [],
}
