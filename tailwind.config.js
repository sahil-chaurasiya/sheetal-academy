/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
        sans: ['Inter', 'sans-serif'], // or your preferred font
      },
      colors: {
        crimson: '#DC143C',
        firebrick: '#B22222',
        scarlet: '#FF2400',
        blood: '#8B0000',
      },
      animation: {
        'spin-slow': 'spin 1.8s linear infinite',
      },
    },
  },
  plugins: [],
}
