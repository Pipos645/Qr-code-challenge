/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "qrText" : ['"Outfit"', 'sans-serif'],
      },
      screens: {
        "sm": "375px",
        "lg": "1440px",
      }
    },
  },
  plugins: [],
}
