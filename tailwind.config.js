/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        primary: "#4A85F6",
        surface: "#FFFFFF",
        secondary: "#000000",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(242, 232, 204, 0.8) 14.9%, rgba(242, 232, 204, 0) 100%)",
      },
    },
  },
  plugins: [],
};
