/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#e7e7e7",
        darkColor: "#000000",
        mainGold: "#C5A363",
      },
    },
  },
  plugins: [],
});
