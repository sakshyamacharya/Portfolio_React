/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mbl: { min: "330px", max: "639px" },
      // => @media (min-width: 300px) and (max-width: 639px) { ... }

      tl: { min: "640px", max: "1020px" },
      // => @media (min-width: 640px) and (max-width: 1023px) { ... }

      lp: { min: "1021px", max: "1279px" },
      // => @media (min-width: 1024px) and (max-width: 1279px) { ... }

      dp: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
