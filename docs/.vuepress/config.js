// const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')
const customBlock = require('markdown-it-custom-block')
const buildExampleComponent = require('./utils/build-example-component')
module.exports = {
  base: '/vue-batteries/',
  plugins: ['@vuepress/active-header-links'],
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind-docs.config.js'),
      require('autoprefixer')()
    ]
  },
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
          '/configuration.md',
          {
            title: 'Components',
            collapsable: true,
            path: '/components/',
            children: [
              '/components/alert',
              '/components/button',
              '/components/input',
              '/components/textarea',
              '/components/switch',
              '/components/icon',
              '/components/groupInput',
              '/components/group'
            ]
          },
          {
            title: 'Filters',
            collapsable: true,
            sidebarDepth: 1,
            path: '/filters/',
            children: [
              '/filters/truncate',
              'filters/capitalize',
              'filters/lowercase',
              'filters/uppercase',
              'filters/filesize'
            ]
          },
          {
            title: 'Utils',
            collapsable: true,
            path: '/utils/',
            children: ['/utils/copy']
          },
          '/roadmap.md'
        ]
      }
    },
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
      md.use(customBlock, {
        example(args) {
          return buildExampleComponent(args)
        }
      })
    }
  }
}
