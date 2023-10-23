/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        spot: ["spot"],
        appleberry: ["appleberry"],
        
      },
      colors: {
        "clr-order" : "hsl(var(--clr-order))",
        "clr-button-bg" :  "hsl(var(--clr-button-bg))",
        "clr-button-secondary" : "hsl(var(--clr-button-secondary))",
        "clr-bg-secondary" : "hsl(var(--clr-background-secondary))",
        "clr-text-base" : "hsl(var(--clr-text-base))",
        "clr-button-google" : "hsla(14,100%,50%, 100%)",
        "clr-button-facebook" : "hsla(221,44%,41%, 100%)",
        "clr-button-bg-secondary": "hsl(var(--clr-button-bg-secondary))",
        "clr-button-bg-infos": "hsl(var(--clr-text-base))",

      },
      boxShadow: {
        'btn-order': '0px 6px 0px 0px rgba(59,88,38,1);',
        'btn-primary': '0px 4px 0px 0px rgba(207,137,0,1);'
      }
    },
  },
  plugins: [],
}

