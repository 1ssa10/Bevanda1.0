import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#57F780",
          500: "#2FF757",
          800: "#1CFF4D",
        },

        light: {
          500: "#e5e7eb",
          600: "#F3F4F6",
          700: "#f9fafb",
          900: "#ffffff",
        },
        dark: {
          500: "#212734",
          600: "#151821",
          700: "#0F1117",
          900: "#000000",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [],
};
export default config;
