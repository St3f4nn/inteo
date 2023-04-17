/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "global-arrow": "url('../assets/images/global/arrow.svg')",
      },
      colors: {
        primary: {
          50: "rgb(230, 216, 204)",
          300: "rgb(196, 163, 134)",
          600: "rgb(153, 104, 48)",
        },
        neutral: {
          250: "rgb(217, 217, 214)",
          450: "rgb(124, 124, 124)",
          650: "rgb(68, 68, 68)",
          750: "rgb(44, 44, 44)",
        },
      },
      fontFamily: {
        "playfair-display": "'Playfair Display', serif",
        outfit: "'Outfit', sans-serif",
      },
      maxWidth: {
        "2xs": "5.5rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1296px",
        },
      });
    },
  ],
};
