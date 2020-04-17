<template>
  <div class="mt-4 border border-gray-300 rounded-md tailwind-preflight">
    <div
      class="flex items-center justify-between px-4 py-2 border-b border-gray-300"
    >
      <div>
        <p class="inline-flex font-semibold leading-normal text-gray-800">
          <slot name="title">Demo title</slot>
        </p>
        <p
          v-show="showCopySuccess"
          class="inline-flex ml-2 text-sm font-semibold leading-normal transition duration-700 ease-in-out text-vuepress"
        >
          Copié !
        </p>
      </div>
      <div class="flex items-center justify-end">
        <CellIcon
          @click="reloadExample"
          name="reload"
          class="w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress"
        />
        <button
          @click="displayPreview = !displayPreview"
          type="button"
          class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer hover:bg-gray-300 hover:text-vuepress focus:outline-none active:bg-gray-300"
          :class="{
            'bg-gray-300 text-vuepress': displayPreview
          }"
        >
          Preview
        </button>
        <button
          @click="displayCode = !displayCode"
          type="button"
          class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer hover:bg-gray-300 hover:text-vuepress focus:outline-none active:bg-gray-300"
          :class="{
            'bg-gray-300 text-vuepress': displayCode
          }"
        >
          Code
        </button>
        <CellIcon
          @click="copyCode"
          name="clipboard-file"
          class="w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress"
        />
        <CellIcon
          @click="openCodePen"
          name="codepen"
          view-box="0 0 32 32"
          class="w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress"
        />
        <CellIcon
          @click="openCodeSandboxIO"
          name="codesandbox"
          view-box="0 0 32 32"
          class="w-5 h-5 ml-2 text-gray-500 cursor-pointer hover:text-vuepress"
        />
      </div>
    </div>
    <div class="rounded-b-md">
      <div class="p-4 bg-white" v-if="displayPreview">
        <ClientOnly
          ><component
            :is="preview ? preview : name"
            v-if="renderComponent"
          ></component
        ></ClientOnly>
      </div>
      <Prism
        v-if="displayCode"
        style="margin: 0;border-top-left-radius: 0;border-top-right-radius: 0;"
        class="rounded-t-none rounded-b-md"
        >{{ code }}</Prism
      >
    </div>
  </div>
</template>

<script>
import { getParameters } from 'codesandbox/lib/api/define'
import Prism from 'vue-prism-component'

export default {
  name: 'previewer',
  components: {
    Prism
  },
  props: {
    name: {
      type: String,
      required: true
    },
    preview: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    },
    es5Js: {
      type: String,
      default: ''
    },
    modernJs: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    htmlDisabled: {
      type: Boolean,
      default: false
    },
    jsDisabled: {
      type: Boolean,
      default: false
    },
    cssDisabled: {
      type: Boolean,
      default: false
    },
    htmlOnly: {
      type: Boolean,
      default: false
    },
    jsOnly: {
      type: Boolean,
      default: false
    },
    cssOnly: {
      type: Boolean,
      default: false
    },
    resultDisabled: {
      type: Boolean,
      default: false
    },
    resultOnly: {
      type: Boolean,
      default: false
    },
    playgroundOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      displayPreview: true,
      displayCode: false,
      showCopySuccess: false,
      url: '',
      renderComponent: true
    }
  },
  computed: {
    langVariants() {
      return {
        html: {
          default: this.unsanitize(this.html)
        },
        js: {
          es5: this.unsanitize(this.es5Js),
          modern: this.unsanitize(this.modernJs)
        },
        css: {
          default: this.unsanitize(this.css)
        }
      }
    },
    blocks() {
      return {
        html: this.formatDirectives(this.langVariants.html.default),
        js: this.formatDirectives(this.langVariants.js['es5']),
        css: this.langVariants.css.default
      }
    },
    code() {
      return `<template>\n${this.blocks.html}\n</template>\n\n<script>\n${this.blocks.js}\n<\/script>`
    },
    compatBlocks() {
      return {
        html: this.langVariants.html.default,
        js: this.langVariants.js.es5,
        css: this.langVariants.css.default
      }
    },
    shouldRenderResult() {
      return (
        !this.resultDisabled && !this.htmlOnly && !this.jsOnly && !this.cssOnly
      )
    },
    resultIFrameHtml() {
      const iframe = document.createElement('iframe')
      iframe.srcdoc = `
        <!DOCTYPE html>
        <body>
          ${this.blocks.html}
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>
          <script>${this.blocks.js}<\/script>
          <script>
            (function(){
              var appNum = 1
              if (app instanceof Vue) {
                while(window.parent.window['app' + appNum] != null) {
                  appNum += 1
                }
                window.parent.window['app' + appNum] = app
                var appNoticeEl = document.createElement('div')
                appNoticeEl.style = 'position:fixed;top:0;right:0'
                appNoticeEl.textContent = 'app' + appNum
                document.body.appendChild(appNoticeEl)
              }
            })()
          <\/script>
          <style>
            ${this.blocks.css}
          </style>
        </body>
      `
      iframe.name = this.name
      return iframe.outerHTML
    }
  },
  methods: {
    unsanitize(code) {
      return code
        .replace(/&quot;/g, '"')
        .replace(/\[\[/g, '{{')
        .replace(/\]\]/g, '}}')
    },
    formatDirectives(code) {
      return code.replace(/\bv-bind:\b/g, ':').replace(/\bv-on:\b/g, '@')
    },
    copyCode() {
      this.$copy(this.code).then(() => {
        this.showCopySuccess = true
        setTimeout(() => {
          this.showCopySuccess = false
        }, 2000)
      })
    },
    reloadExample() {
      // Remove my-component from the DOM
      this.renderComponent = false
      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
      })
    },
    openCodePen() {
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://codepen.io/pen/define'
      form.target = '_blank'
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = 'data'
      // https://blog.codepen.io/documentation/api/prefill/
      input.value = JSON.stringify({
        title: `Vue Batteries: ${this.name}`,
        editors: `${this.blocks.html ? 1 : 0}${this.blocks.css ? 1 : 0}${
          this.blocks.js ? 1 : 0
        }`,
        private: true,
        // HTML
        html: this.blocks.html,
        // JS
        js_external: [
          'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
          // TODO: add vue-batteries as CDN to work in CodePen here
        ],
        // js_pre_processor: store.jsStyle === 'modern' ? 'babel' : '',
        js: this.blocks.js,
        // CSS
        css: this.blocks.css,
        css_prefix: 'autoprefixer',
        css_external: [
          'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css'
        ]
      })
      form.appendChild(input)
      document.body.appendChild(form)
      form.submit()
      form.parentNode.removeChild(form)
    },
    openCodeSandboxIO() {
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://codesandbox.io/api/v1/sandboxes/define'
      form.target = '_blank'
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = 'parameters'

      input.value = getParameters({
        files: {
          'package.json': {
            content: {
              dependencies: {
                vue: 'latest',
                '@vue/composition-api': 'latest',
                // TODO: add vue batteries
                tailwindcss: 'latest',
                '@tailwindcss/custom-forms': 'latest',
                autoprefixer: 'latest'
              },
              devDependencies: {
                '@vue/cli-plugin-eslint': '4.1.1',
                '@vue/cli-service': '4.1.1',
                'babel-eslint': '^10.0.3',
                eslint: '^6.7.2',
                'eslint-plugin-vue': '^6.0.1',
                'vue-template-compiler': '^2.6.11'
              },
              eslintConfig: {
                root: true,
                env: {
                  node: true
                },
                extends: ['plugin:vue/essential', 'eslint:recommended'],
                rules: {},
                parserOptions: {
                  parser: 'babel-eslint'
                }
              }
            }
          },
          'tailwind.config.js': {
            content: `module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}`
          },
          'main.js': {
            content: `import Vue from "vue";
import App from "./App.vue";
import VueCompositionApi from '@vue/composition-api'
import './tailwind.css'
// TODO: add vue batteries use plugin
Vue.use(VueCompositionApi)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
`
          },
          'App.vue': {
            content: `<template>
              ${this.blocks.html}
              </template>
              `
          },
          'index.html': {
            content: `<!DOCTYPE html>
                        <html lang="en">
                          <head>
                            <meta charset="utf-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width,initial-scale=1.0">
                            <title>${this.name} | CodeSandbox</title>
                          </head>
                          <body>
                            <noscript>
                              <strong>We're sorry but codesandbox doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
                            </noscript>
                            <div id="app"></div>
                            <!-- built files will be auto injected -->
                          </body>
                        </html>`
          },
          'tailwind.css': {
            content: `
@tailwind base;
@tailwind components;
@tailwind utilities;
`
          },
          'postcss.config.js': {
            content: `module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}`
          }
        }
      })
      form.appendChild(input)
      document.body.appendChild(form)
      form.submit()
      form.parentNode.removeChild(form)
    }
  }
}
</script>

<style scoped>
.tailwind-preflight >>> p {
  margin-top: 0;
  margin-bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
