/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#00ffcc",
          300: "#00e6b8",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
