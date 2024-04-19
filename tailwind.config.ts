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
        circularDarkLg:
          " repeating-radial-gradient(#8338ec 2px, transparent 5px , transparent 100px);",
        circularDarkMd:
          " repeating-radial-gradient(#8338ec 2px, transparent 5px , transparent 50px);",
        circularDarkSm:
          " repeating-radial-gradient(#8338ec 2px, transparent 5px , transparent 30px);",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
