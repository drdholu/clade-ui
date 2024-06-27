import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '974': '70px',
        '958': '50px',
        '9109': '109px',
      },
      colors: {
        orange: "#DC4A2D",
      },
      fontFamily: {
        'sans': ['Work Sans'],
      },
    }
  },
  plugins: [],
}

