module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      listStyleType: {
        square: "square", // Add support for square list bullets
      },
      screens: {
        v_sm: "350px",
      },
    },
  },
  plugins: [],
};
