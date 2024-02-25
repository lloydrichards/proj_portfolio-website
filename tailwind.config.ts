import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class", '[data-theme^="dark-"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lab_modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderRadius: {
      none: "0px",
      sm: "calc(var(--radius) / 4)",
      md: "calc(var(--radius) / 2)",
      DEFAULT: "var(--radius)",
      xl: "calc(var(--radius) * 2)",
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "var(--border-base)",
      "0": "0",
      "2": "calc(var(--border-base) * 2)",
      "4": "calc(var(--border-base) * 4)",
      "8": "calc(var(--border-base) * 8)",
    },
    boxShadow: {
      DEFAULT: `var(--shadow, ${defaultTheme.boxShadow.DEFAULT})`,
      sm: `var(--shadow-sm, ${defaultTheme.boxShadow.sm})`,
      md: `var(--shadow-md, ${defaultTheme.boxShadow.md})`,
      lg: `var(--shadow-lg, ${defaultTheme.boxShadow.lg})`,
      xl: `var(--shadow-xl, ${defaultTheme.boxShadow.xl})`,
      "2xl": `var(--shadow-2xl, ${defaultTheme.boxShadow["2xl"]})`,
      inner: `var(--shadow-inner, ${defaultTheme.boxShadow.inner})`,
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      mono: {
        "050": "hsl(var(--color-mono-050))",
        "100": "hsl(var(--color-mono-100))",
        "200": "hsl(var(--color-mono-200))",
        "300": "hsl(var(--color-mono-300))",
        "400": "hsl(var(--color-mono-400))",
        "500": "hsl(var(--color-mono-500))",
        "600": "hsl(var(--color-mono-600))",
        "700": "hsl(var(--color-mono-700))",
        "800": "hsl(var(--color-mono-800))",
        "900": "hsl(var(--color-mono-900))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      warning: {
        DEFAULT: "hsl(var(--warning))",
        foreground: "hsl(var(--warning-foreground))",
      },
      success: {
        DEFAULT: "hsl(var(--success))",
        foreground: "hsl(var(--success-foreground))",
      },
      info: {
        DEFAULT: "hsl(var(--info))",
        foreground: "hsl(var(--info-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    fontFamily: {
      serif: ["var(--font-josefin-sans)"],
      sans: ["var(--font-inter)"],
      mono: ["var(--font-roboto-mono)"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.25" }],
      sm: ["0.875rem", { lineHeight: "1.25" }],
      base: ["1rem", { lineHeight: "1.5" }],
      lg: ["1.125rem", { lineHeight: "1.5" }],
      xl: ["1.25rem", { lineHeight: "1.5" }],
      "2xl": ["1.5rem", { lineHeight: "1.5" }],
      "3xl": ["1.875rem", { lineHeight: "1.25" }],
      "4xl": ["2.25rem", { lineHeight: "1" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
