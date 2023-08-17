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
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
};
