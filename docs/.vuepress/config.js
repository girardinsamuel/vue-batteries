module.exports = {
  base: '/vue-batteries/',
  plugins: [
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
        editLinkText: '🤚 Help us to improve this page',
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
              { text: 'English', link: '/language/english/' },
              { text: 'French', link: '/language/french/' }
            ]
          }
        ],
        sidebar: [
          '/installation.md',
          '/started.md',
          {
            title: 'Components',
            collapsable: true,
            path: '/components/',
            children: ['/components/alert']
          },
          '/utilities.md',
          '/roadmap.md'
        ]
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 1,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    // defaults to false, set to true to enable
    editLinks: true
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), { enabled: true })
    }
  }
}
