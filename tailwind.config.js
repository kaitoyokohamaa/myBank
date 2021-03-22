module.exports = {
  purge: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          5: "#00afcc",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
