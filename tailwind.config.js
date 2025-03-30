/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        HeadingFont :["HeadingFont","sans-serif"],
        paragraphFont :["paragraphFont","sans-serif"],
      },
      listStyleType: {
        square: "square", // Add support for square list bullets
      },
      screens: {
        v_sm: "350px", // Custom screen size
        bth_screen: "850px",
      },
    },
  },
  plugins: [],
};
