# Getting Started

## Quick Start

If you want to get started quickly, just add this to your main configuration file (e.g. main.js):

```js
import VueBatteries from 'vue-batteries'
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
```

This will register all components, filters, and functions globally ([more on that](/configuration)) and you will be able to start using them in your .vue files:

```vue
<template>
  <div id="app">
    <CellAlert>
      {{ I am an alert ! | uppercase }}
    </CellAlert>
  </div>
</template>
```

## Style of components

No style
Theme => Tailwind
Customise theme
Override locally

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
- default locale is en-US
*/
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
```

:::
