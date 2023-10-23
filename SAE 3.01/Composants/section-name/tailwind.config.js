/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'section' : "url('../assets/images/background-actu.png')" 
      },

      fontFamily:{
        spot: ["spot"],
        appleberry: ["appleberry"],
        
      },
    },
  },
  plugins: [],
}