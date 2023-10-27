/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "clr-text-base" : "hsl(var(--clr-text-base))",
        "clr-text-accent" : "hsl(var(--clr-text-accent))",
        "clr-text-button" : "hsl(var(--clr-text-button))",

        "clr-profil-bg" : "hsl(var(--clr-profil-bg))",

        "clr-background" : "hsl(var(--clr-background))",
        "clr-background-secondary" : "hsl(var(--clr-background-secondary))",
        "clr-background-third" : "hsl(var(--clr-background-third))",

        "clr-hover" : "hsl(var(--clr-hover))",

        "clr-alert" : "hsl(var(--clr-alert))",
        "clr-alert-secondary" : "hsl(var(--clr-alert-secondary))",
        "clr-order" : "hsl(var(--clr-order))",

        "clr-button-bg" : "hsl(var(--clr-button-bg))",
        "clr-button-hover" : "hsl(var(--clr-button-hover))",
        "clr-button-hover-2" : "hsl(var(--clr-button-hover-2))",
        "clr-button-bg-secondary": "hsl(var(--clr-button-secondary))",

        "clr-button-google" : "hsla(14,100%,50%, 100%)",
        "clr-button-facebook" : "hsla(221,44%,41%, 100%)",
        "clr-button-bg-infos": "hsl(var(--clr-text-base))",
        
      },


      fontFamily:{
        spot: ["spot"],
        appleberry: ["appleberry"],
        
      },

      boxShadow: {
        'card': '0 2px 16px -3px rgba(0, 0, 0, 0.4)',
        'btn-order': '0px 6px 0px 0px rgba(59,88,38,1)',
        'btn-primary': '0px 4px 0px 0px rgba(207,137,0,1)',
        'info': '0px 8px 20px 2px rgba(0, 0, 0, 0.4)',
      },

      backgroundImage : {
        'banner' : 'url("../assets/image/Back-banner.png")'
      }
     
    },
  },
  plugins: [],
}