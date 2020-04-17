# Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.

## HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-batteries/dist/vue-batteries.js"></script>

<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```

## JavaScript

```javascript
// If using a module system (e.g. via Vue CLI), import Vue and vue-batteries and then call Vue.use(vue-batteries).
// import Vue from 'vue'
// import vue-batteries from 'vue-batteries'
//
// Vue.use(vue-batteries)

// NOTE: here the example

// Now the app has started!
new Vue({}).$mount('#app')
```

Output the following:

```html
<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```

## Setup for documentation

::: tip Info
All components/filters/directives used and rendered in this documentation have been installed with this configuration:
:::

::: details Open demo configuration

```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import VueBatteries from 'vue-batteries'

Vue.use(VueCompositionApi)

/* It means that :
- components are styled with default theme (Tailwind)
- all components are installed globally
- all components are available through Cell... (default prefix is Cell)
- all filters are installed
- all directives are installed
- all prototypes are installed
*/
Vue.use(VueBatteries, {
  styling: true,
  copy: true,
  filters: {
    truncate: true,
    uppercase: true,
    lowercase: true,
    capitalize: true,
    slugify: true
  }
})
```

:::
