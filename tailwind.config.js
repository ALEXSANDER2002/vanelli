/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#006D77", // Teal principal
          foreground: "#ffffff",
          hover: "#065A62",
        },
        secondary: {
          DEFAULT: "#83C5BE", // Teal mais claro
          foreground: "#006D77",
          hover: "#68B0A9",
        },
        accent: {
          DEFAULT: "#99E65F", // Verde-limão
          foreground: "#006D77",
          hover: "#8AD44F",
        },
        destructive: {
          DEFAULT: "#FF6B6B",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#EDF6F9", // Teal muito claro
          foreground: "#006D77",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#006D77",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#006D77",
        },
        // Tons de teal personalizados
        teal: {
          50: "#EDF6F9",
          100: "#D5EBF0",
          200: "#83C5BE",
          300: "#5EADA6",
          400: "#3D958E",
          500: "#006D77",
          600: "#065A62",
          700: "#0B474D",
          800: "#0F3438",
          900: "#122123",
        },
        // Tons de verde-limão personalizados
        lime: {
          50: "#F4FFEB",
          100: "#E8FFD7",
          200: "#CCFF9E",
          300: "#99E65F",
          400: "#8AD44F",
          500: "#7BC242",
          600: "#6CAF35",
          700: "#5D9C28",
          800: "#4E891B",
          900: "#3F760E",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wave: "wave 15s linear infinite",
      },
      backgroundImage: {
        "wave-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 20, 50 10 T 100 10' fill='none' stroke='%2383C5BE' stroke-width='2'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

