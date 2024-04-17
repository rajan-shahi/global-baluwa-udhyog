/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //bg-colors:#52BFDB
        primary: {
          50: "#eefbf3",
          100: "#cbf4db",
          150: "#a8ecc3",
          200: "#85e4ab",
          250: "#62dd93",
          300: "#3fd57b",
          350: "#2ac066",
          400: "#229d53",
          450: "#1b7a41",
          500: "#13572e",
          550: "#0b341c",
          600: "#0b341c",
        },

        // text

        accent: {
          50: "#f9edeb",
          100: "#eec8c3",
          150: "#e3a39b",
          200: "#d87f73",
          250: "#cd5a4b",
          300: "#b44132",
          350: "#b44132",
          400: "#8c3227",
          450: "#64241c",
          500: "#3c1611",
        },
      },
    },
  },
  plugins: [],
};
