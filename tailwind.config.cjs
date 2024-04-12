/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        "Source-Sans-Pro": ["Source Sans Pro", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Allura: ["Allura", "cursive"],
      },
      boxShadow: {
        "3xl": "0 55px 60px 55px rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
});
