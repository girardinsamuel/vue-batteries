import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// Plugin installation and configuration
// import customTheme from './custom.theme'

// MODE 1
// import { configure, CellAlert } from './index'
// // configure({
// //   styling: true,
// //   extendTheme: { alert: { container: { base: 'coucou' }, content: 'ok' } }
// // })
// configure({ styling: true, theme: customTheme })
// // configure({ styling: true, extendTheme: customTheme })
// Vue.component('Alert', CellAlert)

// MODE 2
import VueBatteries from './index'
// Vue.use(VueBatteries, { styling: true, theme: customTheme })
Vue.use(VueBatteries, {
  styling: true,
  // theme: customTheme,
  prefix: '',
  components: ['CellAlert']
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
