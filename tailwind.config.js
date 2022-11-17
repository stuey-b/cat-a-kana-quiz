/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Colour Palette: https://lospec.com/palette-list/fairydust-8
    colors: {
      pureWhite: "#ffffff",
      offWhite: "#f3eded",
      red: "#fda9a9",
      lightGreen: "#b9eedc",
      darkGreen: "#96beb1",
      darkerGreen: "#82939b"
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
