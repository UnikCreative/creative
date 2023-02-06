
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    
  ],
  theme: {
    extend: {
       backgroundImage: {
        'hero-background': "linear-gradient(rgba(28, 27, 27, 0.38),rgba(0, 0, 0, 0.62)),url('/src/components/assests/images/heroimage.png')",
        'service-section': "url('/src/components/assests/images/xlems_qrtvs.png')",
        'bg-three': "url('/src/components/assests/images/xlero_twerw.jpg')",
        'bg-about': "linear-gradient(rgba(28, 27, 27, 0.38),rgba(0, 0, 0, 0.62)),url('/src/components/assests/images/boutimg.png')",
        'bg-val': "url('/src/components/assests/images/misxrimg.png')",
        'bg-solutions':"url('/src/components/assests/images/solutionsimg.png')",

      },
       colors: {
        'primary': '#04838C',
        'heading': "rgb(4,131,140)",
    
      },
      background:{
        'gradient': "linear-gradient(blue, pink)"
      }
   
      
    },
  },
  plugins: [],
}
