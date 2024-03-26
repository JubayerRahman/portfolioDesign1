/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#1B74E4",
        defaultBg: "#F3F6F6"
      }
    },
  },
  plugins: [],
}