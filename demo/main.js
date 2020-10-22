import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Demo from '~entry'
import '@/assets/tailwind.css'

Vue.use(VueCompositionApi)

import VueTailwind from 'vue-tailwind'
Vue.use(VueTailwind)

import plugin from '../src/index'
Vue.use(plugin, {
  locale: 'fr-FR',
  styling: true,
  prefix: 'C',
  copy: true,
  filters: {
    truncate: true,
    uppercase: true,
    lowercase: true,
    capitalize: true,
    filesize: true
  }
})

Vue.config.productionTip = false

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(Demo)
}).$mount('#app')
