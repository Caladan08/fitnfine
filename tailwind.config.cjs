/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#264653",
        teal: "#029987",
        tealHover: "#218074",
        yellow: "#e6b335",
        yellowHover: "#c99d2c",
        orange: "#e35936",
        orangeHover: "#c74e30",
        background: "#1c1c1c",
        workoutCardBG: "#353536",
        workoutCardBGHover: "#494a4a",
      },
    },
  },
  plugins: [],
};
