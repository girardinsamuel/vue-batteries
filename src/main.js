import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import '@/assets/tailwind.css'
Vue.use(VueCompositionApi)
import VueRouter from 'vue-router'
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
// Vue.use(VueBatteries, {
//   styling: true,
//   // theme: customTheme,
//   components: ['CellAlert']
// })
// All components
Vue.use(VueBatteries, {
  styling: true,
  copy: true,
  filters: {
    truncate: true,
    uppercase: true,
    lowercase: true,
    capitalize: true,
    filesize: true
  }
})
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./Playground2.vue')
    },
    {
      path: '/example-route',
      name: 'example',
      component: () => import('./ExampleRoute.vue')
    }
  ]
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
