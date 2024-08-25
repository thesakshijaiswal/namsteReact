/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:"375px",
        xxl:"1600px"
      }
    },

  },
  plugins: [],
}

