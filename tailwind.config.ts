import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "this-grey": "#F0F0F0",
        "this-green": "#EDEDE3",
        "primary": "#01a859",
        "this-white": "#C3EAD9",
        "this-border": "#D5D5CB",
        "this-pink": "#FFABD4",
        "this-blue": "#8765E8",
      }
    },
  },
  plugins: [],
};
export default config;
