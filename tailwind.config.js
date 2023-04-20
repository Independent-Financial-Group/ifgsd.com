/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue wave': '#1523FE',
      'red fire': '#E65950',
      'dunkel blue': '#111820',
      'blue foam': '#B4C9DC',
      'blue wine': '#A6A7B9'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}

