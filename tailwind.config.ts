import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'move-right': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        'move-left': {
          '0%, 100%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(10px)' },
          '50%': { transform: 'translateY(0) translateX(20px)' },
          '75%': { transform: 'translateY(10px) translateX(10px)' }
        }
      },
      animation: {
        'move-right': 'move-right 5s ease-in-out infinite',
        'move-left': 'move-left 5s ease-in-out infinite',
        'float': 'float 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
