module.exports = {
  base: '/vue-batteries/',
  plugins: [
    require('./plugin.js'),
    require('vuepress-plugin-playground'),
    '@vuepress/active-header-links'
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-batteries',
      description: 'vue-batteries for Vue.js'
    }
  },
  themeConfig: {
    repo: 'girardinsamuel/vue-batteries',
    docsDir: 'docs',
    logo: '/assets/img/logo.png',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Release Notes',
            link: 'https://github.com/girardinsamuel/vue-batteries/releases'
          },
          {
            text: 'Contribute',
            link:
              'https://github.com/girardinsamuel/vue-batteries/CONTRIBUTING.md'
          },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
        ],
        sidebar: ['/installation.md', '/started.md']
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 1,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
  }
}
