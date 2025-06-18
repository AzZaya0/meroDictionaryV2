/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xl": { max: "1200px" },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        videoEnd: {
          "0%": {  opacity: "1", transform: "translateY(0)" , },
          "90%": {  opacity: "0", transform: "translateY(-100%)" },
                "100%": {opacity: "0", transform: "translateY(-100%)", display: "none" }
        },
        entry:{
          '0%':{ opacity: "0",  transform:'translateY(100%)'}
          ,'100%':{ opacity: "1", transform:'translateY(0) '}
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        videoEnd: "videoEnd 2s ease-in forwards",
        entry: "entry 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
