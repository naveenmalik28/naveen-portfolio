import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08090d",
        panel: "#11131a",
        line: "#242833",
        pearl: "#f4efe5",
        mint: "#8ef1c9",
        coral: "#ff7f6e",
        amber: "#f7c66a",
        steel: "#a8b0c2"
      },
      boxShadow: {
        glow: "0 18px 70px rgba(142, 241, 201, 0.12)",
        premium: "0 24px 90px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};

export default config;
