/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000d12",
        white: "#e9f4f9",
        "gray-100": "#0d0d0c",
        white1: "#fff",
        shape: "#1b1b1b",
        blue: "#00b4fd",
      },
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};
