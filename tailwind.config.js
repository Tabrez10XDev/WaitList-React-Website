/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { sm: { max: "768px" } },
      display: ["responsive"],
      colors: {
        divider: "#B0B0B0",
        textGreyDark: "#646D80",
        greyVeryLight: "#F4F4F6",
        grey: "#656565",
        purple: "#9747FF",
        blue: "#9747FF",
        textBlue: "#2071EE",
        green: "#58BB47",
        textGreyLight: "#979DAA",
        borderGrey: "#CFD2D8",
        bgBlue: "#4A87F2",
      },
      fontFamily: {
        Satoshi: "Satoshi",
        SatoshiMedium: "SatoshiMedium",
        SatoshiBold: "SatoshiBold",
      },
    },
  },
  plugins: [],
};
