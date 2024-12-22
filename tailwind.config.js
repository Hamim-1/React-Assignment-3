/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [nextui()],
}