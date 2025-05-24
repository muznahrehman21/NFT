// tailwind.config.mjs

export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const safelist = [
  "font-apex",
  "text-[#FE0101]",
  "text-[#FFFFFF]",
  "bg-gradient-to-b",
  "from-[#FF5F5F]",
  "to-[#FF0000]",
];
export const theme = {
  extend: {
    colors: {
      bg: "#FFF9F9",
      btn1: "#FD0000",
      btn2: "#FF9292",
      redliist: "#DE0308",
      blacklist: "#2B2B2B",
      discover: "#F2F2F2",
      trade: "#808080",
      featured: "#000000",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      apex: ["Apex Mk2", "sans-serif"],
      oxanium: ["Oxanium", "sans-serif"],
    },
  },
};
export const plugins = [];
