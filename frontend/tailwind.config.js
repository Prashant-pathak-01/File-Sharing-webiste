/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primaryColorA:'#176B87',
        primaryColorB:'#86B6F6',
        primaryColorC:'#bd2a3d',

        colorA:'#B4D4FF',
        colorB:'#EEF5FF',
        colorC:'#cc2929'

      },
      fontFamily:{
        'oswald': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
