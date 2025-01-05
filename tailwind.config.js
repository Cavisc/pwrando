/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0",
        secondary: "#000",
        tertiary: "#fff",
        quaternary: "#00f"
      },
      fontFamily: {
        monospace: "monospace"
      }
    },
  },
  plugins: [],
}