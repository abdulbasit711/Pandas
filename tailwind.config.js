/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#93abff",
        secondary: "#FFF2F2",
        darkBg: "bg-gray-900",
        darkText: "#EAEAEA",
        lightBg: "#FFFFFF",
        lightText: "#1A1A2E",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
