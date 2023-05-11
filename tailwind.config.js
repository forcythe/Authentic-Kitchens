/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1536px',

      'xl': {'max': '1300px'},

      'lg': {'max': '1100px'},

      'md': {'max': '824px'},

      'sm': {'max': '600px'},
    },

    extend: {},
  },
  plugins: [],
}
