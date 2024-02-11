/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html','./scripts/app.js'],
  theme: {
    
    extend: {
      fontFamily: {
        vbold: 'vbold',
        vmedium: 'vmedium',
        vregular: 'vregular',
      },
      backgroundImage:{
        'back-one':"url('https://s30.picofile.com/file/8472417526/pexels_rostislav_uzunov_5011647.jpg')"
      }
      
    },
  },
  plugins: [],
}

