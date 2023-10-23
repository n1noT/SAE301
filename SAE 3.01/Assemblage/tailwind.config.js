/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "clr-text-base" : "hsl(var(--clr-text-base))",
        "clr-text-accent" : "hsl(var(--clr-text-accent))",
        "clr-text-button" : "hsl(var(--clr-text-button))",

        "clr-button-bg" : "hsl(var(--clr-button-bg))",

        "clr-profil-bg" : "hsl(var(--clr-profil-bg))",

        "clr-button-hover" : "hsl(var(--clr-button-hover))",

        "clr-background" : "hsl(var(--clr-background))",
        "clr-background-secondary" : "hsl(var(--clr-background-secondary))",
        "clr-background-third" : "hsl(var(--clr-background-third))",

        "clr-hover" : "hsl(var(--clr-hover))",

        "clr-alert" : "hsl(var(--clr-alert))",
        "clr-alert-secondary" : "hsl(var(--clr-alert-secondary))",
        
      },


      fontFamily:{
        spot: ["spot"],
        appleberry: ["appleberry"],
        
      },

      boxShadow: {
        'card': '0 2px 16px -3px rgba(0, 0, 0, 0.4)',
      },

      backgroundImage : {
        'banner' : 'url("../assets/images/Back-banner.png")'
      }
     
    },
  },
  plugins: [],
}