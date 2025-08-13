import type { Config } from "tailwindcss";
import { breakPoint, colors, maxWidth } from "./src/themes/";

export const themeConfig = {
  extend: {
    maxWidth,
    colors,
    screens: breakPoint,
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
};

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: themeConfig,
  plugins: [],
};
export default config;
