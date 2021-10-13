module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#353535',
        btngreen: '#1ABF88',
        'header-dark': '#282D33',
        'sidebar-dark': '#1F2328',
        'background-color-dark': '#353943',
        'card-color-dark': '#1F2328',
        'title-dark': '#DDDDDD',
        'text-dark': '#A4B2BF',
        'link-dark': '#4A93EF',
        'hover-dark': '#3F77BD'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('@tailwindcss/forms')],
}