module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fb': '#1877f2'
      },
      padding: {
        '18': '4.5rem'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
  plugins: [],
}
