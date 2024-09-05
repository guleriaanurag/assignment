/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        black: {
          100: "#ddddde",
          200: "#bbbcbc",
          300: "#9a9a9b",
          400: "#787979",
          500: "#565758",
          600: "#454646",
          700: "#343435",
          800: "#222323",
          900: "#111112"
        },

        bgblack: {
          500: "#272b30",
          600: "#1f2226",
      },

      widgetbg: "#363c43"

      }
    },
  },
  plugins: [],
}

