---
tags:
  - components
  - ui
---

# Components

::: tip Info
All components rendered in the documentation have been installed with this configuration:
:::

::: details Open configuration

```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import VueBatteries from 'vue-batteries'

Vue.use(VueCompositionApi)

/* It means that :
- components are styled with default theme (Tailwind)
- all components are installed globally
- all components are available through Cell... (default prefix is Cell)
*/
Vue.use(VueBatteries, {
  styling: true
})
```

:::

[Alert](/components/alert/)
