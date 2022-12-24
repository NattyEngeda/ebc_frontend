/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Abhaya-Libre': ['Abhaya Libre', 'serif'],
        'Glory': ['Glory', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}