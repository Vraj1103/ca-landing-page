import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Premium 4-color palette: primary (dark), surface (light), muted (grey), accent (restrained gold) */
        primary: "#0f1729",
        surface: "#faf9f7",
        muted: "#5c6b76",
        accent: "#9a7229",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
