/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'md': '912px',

    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('../images/hero_bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        regular: {
          "primary": "#E27022",
          "secondary": "#f6d860",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
    darkTheme: [],
    base: true,
    styled: true,
  },
};
