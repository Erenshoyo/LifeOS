/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#002D1C",
          darker: "#001F14",
          light: "#00452E",
          lightest: "#00663D",
        },
      },
    },
  },
  plugins: [],
};
