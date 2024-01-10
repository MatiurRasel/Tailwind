/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      
      spacing: {
        // 96:'24rem' is largest by default
        128:'32rem',
      }
    },
  },
  plugins: [],
}
// if have src folder
// content: ["./src/**/*.{html,js}"],

