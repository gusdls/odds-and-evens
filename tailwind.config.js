/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glimmer: {
          from: {
            filter: "brightness(1.2)",
          },
          to: {
            filter: "brightness(1.8)",
          },
        },
      },
      animation: {
        glimmer: "glimmer steps(2, end) infinite",
      },
    },
  },
};
