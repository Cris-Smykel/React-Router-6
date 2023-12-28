/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7ED",
        customGray: "#4D4D4D",
        customBlack: "#161616",
      },
    },
  },
  plugins: [],
};
