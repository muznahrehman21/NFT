// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
       bg: "#FFF9F9",
        btn1: "#FD0000",
        btn2: "#FF9292",
        redliist:"#DE0308",
        blacklist:"#2B2B2B",
        discover:"#F2F2F2",
        trade:"#808080",
        featured:"#000000",
        
      }
    },
  },
  plugins: [],
};
