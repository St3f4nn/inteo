/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        // Global

        "global-arrow": "url('../assets/images/global/arrow.svg')",

        // Hero

        "showcase-desktop": "url('../assets/images/hero/showcase_desktop.jpg')",
        "showcase-tablet": "url('../assets/images/hero/showcase_tablet.jpg')",
        "showcase-mobile": "url('../assets/images/hero/showcase_mobile.jpg')",
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
      fontSize: {
        "2xs": "0.671875rem",
      },
      height: {
        30: "7.5rem",
        160: "40rem",
      },
      letterSpacing: {
        heading: "0.025rem",
        "hero-cta-text": "0.145rem",
      },
      lineHeight: {
        4.5: "1.125rem",
        15: "3.75rem",
        24: "6rem",
      },
      maxWidth: {
        "2xs": "5.5rem",
        "3.5xl": "50rem",
      },
      rotate: {
        14: "14deg",
      },
      spacing: {
        15: "3.75rem",
      },
      width: {
        30: "7.5rem",
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
