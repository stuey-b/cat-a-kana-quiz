/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        9: "repeat(9, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridRow: {
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-14": "span 14 / span 14",
      },
      gridRowStart: {
        9: "9",
        10: "10",
        16: "16",
      },
      backgroundImage: {
        "main": "url('../public/images/quiz-bg-1.jpg')",
      }
    },
    plugins: [],
  },
};
