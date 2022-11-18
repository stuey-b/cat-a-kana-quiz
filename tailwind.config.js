/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Colour Palette: https://lospec.com/palette-list/fairydust-8
    colors: {
      pureWhite: "#ffffff",
      offWhite: "#f3eded",
      red: "#f98284",
      green: "#2ce8f5",
      orange: "#ffe6c6",
      blue: "#124e89",
      purple: "#68386c",
      pink: "#b55088"
    },
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
    },
    plugins: [],
  },
};
