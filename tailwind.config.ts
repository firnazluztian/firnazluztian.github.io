import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        extralight: '100',
        light: '200',
        normal: '300',
        medium: '400',
        semibold: '500',
        bold: '600',
        extrabold: '700',
        black: '800',
      },
      fontSize: {
        h1: ["60px", { fontWeight: "600" }],
        h2: ["48px", { fontWeight: "600" }],
        h3: ["36px", { fontWeight: "600" }],
        h4: ["30px", { fontWeight: "600" }],
        h5: ["24px", { fontWeight: "600" }],
        h6: ["20px", { fontWeight: "600" }],
        h7: ["16px", { fontWeight: "600" }],
        body: "18px",
        "body-sm": "16px",
        caption: "14px",
        "caption-sm": "12px",
        "2xs": "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        theme: '#96c346',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
