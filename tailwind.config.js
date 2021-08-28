module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
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
