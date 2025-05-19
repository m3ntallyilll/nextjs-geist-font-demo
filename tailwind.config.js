/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      keyframes: {
        "tab-flash": {
          "0%, 100%": { backgroundColor: "#1e1e1e" },
          "50%": { backgroundColor: "#264f78" }
        }
      },
      animation: {
        "tab-flash": "tab-flash 1s ease-in-out"
      }
    }
  }
}
