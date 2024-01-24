/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "	#DDA0DD",
        SecondaryColor: "#9932CC",
        DarkColor: "#8B008B",
        ExtraDarkColor: "	#800080",
        
      }
    },
  },
  plugins: [],
}

