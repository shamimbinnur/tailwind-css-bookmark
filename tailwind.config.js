module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        'fav-purple': '#5267DF',
        'fav-red': '#FA5959',
        'fav-blue': '#242A45',
        'fav-gray': '#9194A2',
        'fav-white': '#f7f7f7',
      },
      fontFamily: {
        Poppins : ["Poppins, sans-serif"]
      },
      container:{
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
      
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
