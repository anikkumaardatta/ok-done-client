/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {extend: {},
  colors: {
    primary: "#66BC46",
    secondary: "#2B332C",
    yellow: "#FEC775",
    green: "#8FD29F",
    purple: "#B2A4FF",
    pink: "#FFACAC",
    seccess: "#4B9518",
    danger: "#FF3547"
  },
  },
  plugins: [require("flowbite/plugin")],
}

