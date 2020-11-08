import { createApp } from "vue"
import App from "./App.vue"
import VueBatteries from "./index"
import "@/assets/tailwind.css"
import icons from "./icons"

const app = createApp(App)
app
  .use(VueBatteries, { icons: icons, prefix: "a" })
  .mount("#app")
