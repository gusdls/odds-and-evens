/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%": {
            filter: "brightness(1.2)",
          },
          "100%": {
            filter: "brightness(2)",
          },
        },
      },
      animation: {
        flash: "flash .2s steps(2, end) infinite",
        "flash-later": "flash .2s steps(2, end) .1s infinite",
      },
    },
  },
};
