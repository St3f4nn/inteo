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

        "hero-desktop": "url('../assets/images/hero/showcase_desktop.jpg')",
        "hero-tablet": "url('../assets/images/hero/showcase_tablet.jpg')",
        "hero-mobile": "url('../assets/images/hero/showcase_mobile.jpg')",

        // About

        "about-1-desktop": "url('../assets/images/about/kitchen_desktop.jpg')",
        "about-1-tablet": "url('../assets/images/about/kitchen_tablet.jpg')",
        "about-1-mobile": "url('../assets/images/about/kitchen_mobile.jpg')",

        "about-2-desktop": "url('../assets/images/about/bedroom_desktop.jpg')",
        "about-2-tablet": "url('../assets/images/about/bedroom_tablet.jpg')",
        "about-2-mobile": "url('../assets/images/about/bedroom_mobile.jpg')",
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
      gridTemplateColumns: {
        "awards-container-desktop": "9.54fr 90.46fr",
        "awards-container-tablet": "16.86fr 83.14fr",
        "awards-container-mobile": "19.10fr 80.90fr",

        awards: "21.98fr 21.32fr 18.21fr 20.38fr",
      },
      height: {
        0.25: "0.0625rem",
        30: "7.5rem",
        67.9275: "16.981875rem",
        139.5: "34.875rem",
        120: "30rem",
        160: "40rem",
      },
      letterSpacing: {
        "pre-heading": "0.1rem",
        heading: "0.025rem",

        "hero-cta-text": "0.145rem",
        "badge-text": "0.08rem",

        "metrics-description": "0.05rem",
      },
      lineHeight: {
        4.5: "1.125rem",
        12: "3rem",
        15: "3.75rem",
        18: "4.5rem",
        24: "6rem",
      },
      maxWidth: {
        "3xs": "5.5rem",
        "3.5xl": "50rem",
      },
      rotate: {
        13: "13deg",
        14: "14deg",
      },
      spacing: {
        1.1325: "0.283125rem",
        2.2625: "0.565625rem",
        2.325: "0.58125rem",
        2.5: "0.625rem",
        4.6475: "1.161875rem",
        5.5: "1.375rem",
        5.75: "1.4375rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        11.3225: "2.830625rem",
        13: "3.25rem",
        15: "3.75rem",
        15.75: "3.9375rem",
        16.5: "4.125rem",
        18.5: "4.625rem",
        23.25: "5.8125rem",
        69.25: "17.3125rem",
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
