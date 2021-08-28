module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
        scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
    },
  },
  plugins: [],
}
