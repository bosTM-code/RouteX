/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"PP Object Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        main: "#F1F5EB",
        darkGreen: "#034833",
        lightGreen: "#83CD20",
      },
      fontSize: {
        "15px": "0.9375rem",
        "22px": "1.375rem",
        "50px": "3.125rem",
        "80px": "5rem",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
