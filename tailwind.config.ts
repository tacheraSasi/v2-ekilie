/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          customGreen: '#74f5a1',
          customGreenLight: '#74f5a1',
          customGreenDark: '#428d5c',
      },
    },
  },
  plugins: [],
}