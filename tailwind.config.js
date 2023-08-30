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
      'blue-wave': {
        0: '#e6eff6',
        50: '#80aed1',
        100: '#739dc9',
        200: '#5c8cc0',
        300: '#447cb6',
        400: '#2a6cac',
        500: '#015ca2',
        600: '#014f8c',
        700: '#014277',
        800: '#003663',
        900: '#002a4f',
      },
      'dune': {
        100: '#f2eadb',
        200: '#f0e6d6',
        300: '#ede3d0',
        400: '#ebdfca',
        500: '#e9dcc4',
        600: '#cbbfaa',
        700: '#ada391',
        800: '#908878',
        900: '#746e61'
      },
      'sunburst': {
        100: '#ee9686',
        200: '#e88472',
        300: '#e3725e',
        400: '#dd5e49',
        500: '#d64933',
        600: '#ba3e2b',
        700: '#9e3423',
        800: '#842a1c',
        900: '#6a2014'
      },
      'dunkel-blue': {
        100: '#656a71',
        200: '#4e545b',
        300: '#393f46',
        400: '#242b33',
        500: '#111820',
        600: '#0d131a',
        700: '#090f15',
        800: '#060a0f',
        900: '#04070a'
      },
      'seabreeze': {
        100: '#fafbfd',
        200: '#f9fafd',
        300: '#f9f9fd',
        400: '#f8f9fc',
        500: '#f7f8fc',
        600: '#d7d8db',
        700: '#b7b8bb',
        800: '#999a9c',
        900: '#7c7c7e'
      },
      'hazard-blue': {
        100: "#e1eef2",
        200: "#c4dde6",
        300: "#a6cbd9",
        400: "#89bacd",
        500: "#6ba9c0",
        600: "#56879a",
        700: "#406573",
        800: "#2b444d",
        900: "#152226"
      },
      'neon-orange': {
        100: "#ffe5dc",
        200: "#ffccb8",
        300: "#ffb295",
        400: "#ff9971",
        500: "#ff7f4e",
        600: "#cc663e",
        700: "#994c2f",
        800: "#66331f",
        900: "#331910"
      },
      'light-blue': {
        100: "#fcfdfd",
        200: "#f8fafc",
        300: "#f5f8fa",
        400: "#f1f5f9",
        500: "#eef3f7",
        600: "#bec2c6",
        700: "#8f9294",
        800: "#5f6163",
        900: "#303131"
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/ifg-hero-surfer-wave-flipped-compressed.jpg')"
      }
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

