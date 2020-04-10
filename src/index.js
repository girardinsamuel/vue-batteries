const version = '__VERSION__'

import * as components from './components'
import { configure, getConfig } from './config'

// for classic plugin use
const install = (Vue, userConfig = {}) => {
  if (install.installed) {
    return
  }

  install.installed = true

  // Save configuration
  configure(userConfig)
  const currentConfig = getConfig()
  // Choose which components to register: all, none or a specific list. The component prefix
  // is configurable
  const componentsToRegister = userConfig.components || Object.keys(components)
  componentsToRegister.forEach(componentName => {
    Vue.component(
      componentName.replace('Cell', currentConfig.prefix),
      components[componentName]
    )
  })
}

const plugin = {
  install,
  version
}

// for Vue.use()
export default plugin
// for tree-shakable use
export * from './components/api'
export * from './components/mixins'
export { configure }
export * from './components'

// for browser use
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(plugin)
// }
