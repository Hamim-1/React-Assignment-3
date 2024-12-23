/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677BD',
        secondary: '#AFAFAF'
      },
      screens: {
        xs: '450px',
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      }
    },
  },
}