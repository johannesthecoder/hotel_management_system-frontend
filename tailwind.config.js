const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      colors: {
        primary: {
          DEFAULT: "#5f26cd",
          light: "#efeffb",
          dark: "#511db8",
        },
        background: "#ffffff",
        white: "#ffffff",
        dark: "#212427",
        grey: colors.slate[400],
        failure: colors.red[600],
        success: colors.green[600],
      },
    },
  },
  plugins: [],
};
