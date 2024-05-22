/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#24262b",
        "primary-gray": "#5e626f;",
        "primary-blue": "#283959;",
        "blue-light": "#939CAC;",
        "white-100": "#f3f3f3",
        "red-600": "#dc2626",
        "blue-gray":"#f9fafc"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
}

