/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Source-Sans-Pro": ["Source Sans Pro", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Satisfy: ["Satisfy", "cursive"],
        "Source-Sans-3": ["Source Sans 3", "sans - serif"],
        Inter: ["Inter", "sans-serif"],
        Borel: ["Borel", "cursive"],
      },
      boxShadow: {
        "3xl": "0 55px 60px 55px rgba(0, 0, 0, 0)",
      },
      backgroundImage: {
        "tech-background": " url('./src/assets/tech-background.jpg')",
      },
    },
  },
  plugins: [],
};
