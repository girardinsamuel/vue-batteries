import { createApp } from "vue"
import App from "./App.vue"
import VueBatteries from "./index"
import "@/assets/tailwind.css"
import icons from "./icons"
// import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon"
// import "@yzfe/svgicon/lib/svgicon.css"

const app = createApp(App)
app
  // .use(VueSvgIconPlugin, { tagName: "icon" })
  .use(VueBatteries, { icons: icons, prefix: "a", iconComponent: "a-icon" })
  .mount("#app")
