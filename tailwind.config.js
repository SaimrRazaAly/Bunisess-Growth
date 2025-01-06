module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleType: {
        square: "square", // Add support for square list bullets
      },
      screen: {
        pr_md: "850px",
      },
    },
  },
  plugins: [],
};
