import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        alatsi: ["Alatsi"],
        jakarta: ["Plus Jakarta Sans"],
      },
    },
    colors: {
      primary: "#FEEFC6",
      secondary: "#1B1D26",
      footer:"#4A5C43",
      white: "#FFFFFF",
      grey: "#D9D9D9",
      // red: "#D04736",
      cream: "#C2A15D",
    },
  },
  plugins: [],
};
export default config;
