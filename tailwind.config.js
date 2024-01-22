/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './app/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        burtons: "Burtons"
      }
    },
  },
  plugins: [],
};
