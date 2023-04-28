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
            filter: "brightness(1.8)",
          },
        },
      },
      animation: {
        flash: "flash steps(2, end) infinite",
      },
    },
  },
};
