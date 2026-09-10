import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1769AA",
          50: "#EAF3FA",
          100: "#CFE4F3",
          200: "#9FC8E7",
          300: "#6FADDB",
          400: "#3F91CF",
          500: "#1769AA",
          600: "#125688",
          700: "#0E4266",
          800: "#092D44",
          900: "#051822",
        },
        secondary: {
          DEFAULT: "#20A4C9",
          50: "#E9F8FC",
          100: "#C7EDF6",
          200: "#95DBED",
          300: "#63C9E4",
          400: "#3AB7D8",
          500: "#20A4C9",
          600: "#1A83A1",
          700: "#146279",
          800: "#0D4150",
          900: "#072028",
        },
        ink: {
          DEFAULT: "#102A43",
          light: "#1E3A5F",
          dark: "#0A1C2E",
        },
        canvas: "#F7FBFF",
        gold: "#C9A15A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(16,42,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,42,67,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(16, 42, 67, 0.10)",
        cardHover: "0 12px 36px -6px rgba(16, 42, 67, 0.18)",
        glass: "0 8px 32px 0 rgba(16, 42, 67, 0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ticker: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        ticker: "ticker 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
