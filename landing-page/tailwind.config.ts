import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-spin': 'border-spin 2s linear infinite',
      },
      keyframes: {
        'border-spin': {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(255, 255, 255, 0.1)' },
          '100%': { borderColor: 'transparent' },
        },
      },
      boxShadow: {
        'custom-shadow': '-10px 100px 25px rgba(0, 0, 0, 0.9)',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#0667d0",
      }
    },
  },
  plugins: [],
};
export default config;
