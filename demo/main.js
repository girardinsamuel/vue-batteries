import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Demo from '~entry'
import '@/assets/tailwind.css'

Vue.use(VueCompositionApi)

import plugin from '../src/index'
Vue.use(plugin, { styling: true, prefix: 'C' })

Vue.config.productionTip = false

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(Demo)
}).$mount('#app')
