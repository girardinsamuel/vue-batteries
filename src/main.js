import { createApp } from "vue"
import App from "./App.vue"
import VueBatteries from "./index"
// import MyCheckbox from "./MyCheckbox.vue"
// import MyRadio from "./MyRadio.vue"

import "@/assets/tailwind.css"
import icons from "./icons"

const app = createApp(App)
app
  .use(VueBatteries, { icons: icons })
  // .component("MyCheckbox", MyCheckbox)
  // .component("MyRadio", MyRadio)
  .mount("#app")
