export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ['"Dancing Script", cursive'],
      secondary: ['"Mulish", sans-serif'],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
