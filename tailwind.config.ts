import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        slateblue: "#172033",
        aqua: "#38bdf8",
        emeraldSoft: "#34d399"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(2, 8, 23, 0.12)"
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;