/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "mobile-menu-bg": "url('../images/mobile_menu_bg.png')",
      },
    },
  },
  plugins: [],
};
