/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script", "system-ui"],
        text: ["Quicksand", "sans-serif"],
        text2: ["Vollkorn", "sans-serif"],
        text3: ["Roboto Flex", "sans-serif"],
        text5: ["Fuzzy Bubbles", "sans-serif"],
        text4: ["Piazzolla", "serif"],
        text: ["DM Sans", "sans-serif"],
        textt: ["Special Elite", "system-ui"],
      },
      colors: {
        neutralSilver: "#f5f7fA",
        neutralDGray: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGray: "#717171",
      },
    },
  },
  plugins: [],
};
