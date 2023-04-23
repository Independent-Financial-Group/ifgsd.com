// 014C86
// '#1523FE'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html"
  ],
  theme: {
    colors: {
      'blue-wave': '#014C86',
      'red-fire': '#E65950',
      'dunkel-blue': '#111820',
      'blue-foam': '#B4C9DC',
      'blue-wine': '#A6A7B9',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

