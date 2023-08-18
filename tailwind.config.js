/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        lightBlue: "#3762f2",
        NavyBlue: "#123dcc",
        customBlue: "#123dcc",
        customGreen: "#55e022",
        black: "#181818",
        orange_light: "#FDF3EB",
        orange10: "#FE5200",
        // white: "#F2F2F2",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
