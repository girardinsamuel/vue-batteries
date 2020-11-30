import * as components from "./components"
import * as filters from "./filters"
import { configure, getConfig } from "./config"
import { copy } from "./utils"

const version = "__VERSION__"

const plugin = {
  version,
  install: (app, options = {}) => {
    // Configure plugin with user options (merged with default configuration)
    configure(options)
    const currentConfig = getConfig()

    // Choose which components to register: all, none or a specific list. The component prefix
    // is configurable
    const componentsToRegister = options.components || Object.keys(components)
    componentsToRegister.forEach(componentName => {
      app.component(
        componentName.replace("Cell", currentConfig.prefix),
        components[componentName],
      )
    })

    // Register directives
    if (currentConfig.copy) {
      const copyName =
      typeof currentConfig.copy === "boolean"
        ? "$copy"
        : "$" + currentConfig.copy
      app.config.globalProperties[copyName] = copy
    }
    // Register filters
    Object.keys(currentConfig.filters).forEach(filterName => {
      if (currentConfig.filters[filterName]) {
        app.filter(filterName, filters[filterName])
      }
    })

    // Provide config
    app.provide("vue-batteries", currentConfig)
  },
}

// 1. for use with build system: Vue.use()
export default plugin

// 2. for use with tree-shaking
export * from "./components"
export * from "./core"
export * from "./filters"
export { baseProps } from "./utils/baseProps"

// 3. browser use
if (typeof window !== "undefined" && window.Vue) {
  plugin.install(window.Vue)
}
