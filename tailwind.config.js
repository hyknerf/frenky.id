/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          100: "#DADFF1",
          200: "#919FD4",
          300: "#6C81C6",
          400: "#4762B8",
          500: "#394E93",
          600: "#2B3B6E",
          700: "#1D2749",
          800: "#1D2749",
          900: "#00193B",
        },
        sun: {
          100: "#370617",
          200: "#6a040f",
          300: "#9d0208",
          400: "#d00000",
          500: "#dc2f02",
          600: "#e85d04",
          700: "#f48c06",
          800: "#faa307",
          900: "#ffba08",
        },
      },
    },
    fontFamily: {
      sans: ["neue-haas-grotesk-text", "sans-serif"],
      mono: ["aglet-mono"],
    },
  },
  plugins: [],
};
