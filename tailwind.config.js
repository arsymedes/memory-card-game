/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "genshin-liyue": "url('./images/Background.jpg')" 
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
