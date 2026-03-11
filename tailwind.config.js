/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hacker: "#0f0f0f",
        accent: "#00ffcc",
        glow: "#0ff",
      },
    },
  },
  plugins: [],
};
