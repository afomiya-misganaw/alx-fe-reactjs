/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          light: '#FF8E8E',
          dark: '#E05555'
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          dark: '#3DA89F'
        },
        accent: '#FFE66D',
        background: '#F7FFF7',
        dark: '#292F36'
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif']
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
