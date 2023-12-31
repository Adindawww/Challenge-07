/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screen: {
      mobile: "414px",
      tablet: "800px",
      web: "1440px"
    }
  },
  plugins: [],
}

