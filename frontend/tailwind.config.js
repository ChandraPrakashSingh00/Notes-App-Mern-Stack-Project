/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      // Colour used in the Project

      colors: {
        primary: "#2B85FF",
        secondary: "#ef863E",
      }

    },
  },
  plugins: [],
}

