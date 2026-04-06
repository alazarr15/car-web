/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc727",
        "primary-dark": "#e6b020",
        "primary-light": "#ffd966",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#0a0a0a",
        "dark-card": "#141414",
        "dark-border": "#2a2a2a",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
};
