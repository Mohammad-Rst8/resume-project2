/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html','./scripts/app.js'],
  theme: {
    fontFamily:{
'v-bold':'v-bold',
'v-medium':'v-medium',
'v-regular':'v-regular',
    },
    
    extend: {
      backgroundImage:{
        'back-one':"url('/images/pexels-rostislav-uzunov-5011647.jpg')"
      }
    },
  },
  plugins: [],
}

