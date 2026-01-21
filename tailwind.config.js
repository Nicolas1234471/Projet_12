    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(220, 20%, 97%)",
        foreground: "hsl(220, 30%, 15%)",
        card: "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(220, 30%, 15%)",
        primary: "hsl(15, 90%, 60%)",
        "primary-foreground": "hsl(0, 0%, 100%)",
        secondary: "hsl(220, 15%, 92%)",
        "secondary-foreground": "hsl(220, 30%, 20%)",
        muted: "hsl(220, 15%, 94%)",
        "muted-foreground": "hsl(220, 15%, 45%)",
        accent: "hsl(175, 60%, 45%)",
        "accent-foreground": "hsl(0, 0%, 100%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(210, 40%, 98%)",
        border: "hsl(220, 15%, 88%)",
        input: "hsl(220, 15%, 88%)",
        ring: "hsl(15, 90%, 60%)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      animation: {
        gradient: "gradient 6s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class", // active le dark mode avec la classe 'dark'
};
