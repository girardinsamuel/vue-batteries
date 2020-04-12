import VueBatteries from '../../src'
import VueCompositionApi from '@vue/composition-api'
const { version } = require('../../package.json')

// install vue-batteries plugin in Vue.js doc apps to be able to
// import components in documentation

// add version as variable in documentation
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // install plugin
  Vue.use(VueCompositionApi)
  Vue.use(VueBatteries, {
    styling: true
  })
  // add version
  Vue.mixin({
    computed: {
      $version() {
        return version
      }
    }
  })
}
