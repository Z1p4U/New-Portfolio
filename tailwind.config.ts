import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularDark:
          " repeating-radial-gradient(#8338ec 2px, transparent 5px , transparent 100px);",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
