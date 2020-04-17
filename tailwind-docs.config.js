module.exports = {
  theme: {
    extend: {
      colors: {
        vuepress: '#3eaf7c'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
  // // remove preflight to avoid resetting vuepress doc styles
  // corePlugins: {
  //   preflight: false
  // }
}
