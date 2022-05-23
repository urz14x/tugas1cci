module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        arrow: "arrow 3s infinite linear",
      },
      colors: {
        oldbrown: "#673838",
        smoothblack: "#2a2a2a",
        smoothfont: "#333333",
        youngred: "#FBAEAE",
        semired: "#FACCCC",
      },
      fontFamily: {
        mono: ["Operator Mono"],
      },
      keyframes: {
        arrow: {
          "50%": {
            transform: "translateY(-1rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
