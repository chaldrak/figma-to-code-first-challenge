import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "6.5": "26px",
        "12.5": "46px",
      },
      colors: {
        neutral: {
          50: "#e8e9ea",
          100: "#b8babe",
          200: "#96989e",
          300: "#666a72",
          400: "#484d56",
          500: "#1a202c",
          600: "#181d28",
          700: "#12171f",
          800: "#0e1218",
          900: "#0b0d12",
        },
      },
      keyframes: {
        ressort: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        ressort: "ressort 1s infinite",
      },
      screens: {
        desktop: "1280px",
      },
    },
  },
  plugins: [],
}
export default config
