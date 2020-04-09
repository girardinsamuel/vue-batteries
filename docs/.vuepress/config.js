module.exports = {
  plugins: [require('./plugin.js')],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-batteries',
      description: 'vue-batteries for Vue.js'
    }
  },
  themeConfig: {
    repo: '/girardinsamuel/vue-batteries',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Release Notes',
            link: 'https://github.com/girardinsamuel/vue-batteries/releases'
          }
        ],
        sidebar: ['/installation.md', '/started.md']
      }
    }
  }
}
