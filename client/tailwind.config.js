/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fonts
        "Poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        // Color Palletes
        "Dark": "#353535",
        "Gray": "#D9D9D9",
        "LightGray": "#E6E6E6",
        "Light": "#FFFFFF"
      },
      screens: {
        // Web Responsive Sizes
      }
    },
  },
  plugins: [],
}

