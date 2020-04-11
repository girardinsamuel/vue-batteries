const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer({
      add: true
    })
  ]
}
