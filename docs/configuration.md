# Configuration

If you want to configure the plugin to avoid importing unnecessary components
or functions, or to be able to customize default theme or naming you're at the
right place.

## Components registration

Different options are available depending on your needs:

- All registered globally
- Select which components to register globally
  - Customise prefix
  - Customise full name
- Register locally

### Global

The default is to configure all components globally

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries)
```

Then you can select which components to register globally. Here two components
are registered globally.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  components: ['CellAlert', 'CellGroup']
})
```

If you want custom naming of the components, two options are available:

#### Use custom prefix for all components

The default prefix is `Cell`.
::: tip For the story 🙂
A battery 🔋 is composed with different cells, that's where the name come from !
:::

```js
import VueBatteries from 'vue-batteries'

Vue.use(VueBatteries, {
  prefix: 'App',
  components: ['CellAlert', 'CellGroup']
})
```

With the configuration above components will be available as `AppAlert` and `AppIcon`.

```vue
<template>
  <div>
    <AppAlert> I am an alert ! <AppIcon name="user" /> </AppAlert>
  </div>
</template>
```

::: warning Prefix cannot be empty !
The prefix cannot be empty, because some component names could conflict with existing
html tags. If you want to still define the name you want, use the next option.
:::

#### Define a name for each component

The last option is to register components yourself. You will be able to name them as you want, and
you will still benefit from tree-shaking capabilities by importing only the one you want.

```js
import Vue from 'vue'
import VueBatteries from 'vue-batteries'

/** You should still register the plugin to benefit from style customisation or
other settings ! But you should explicity say that no components are registered
by the plugin. */
Vue.use(VueBatteries, {
  components: []
})
// Instead you do it yourself
Vue.component('myAlertComponent', VueBatteries.CellAlert)
```

If you don't want to register plugin at all then you can (with tree-shaking) select which component you want to import.

```js
import Vue from 'vue'
import { CellAlert } from 'vue-batteries'

Vue.component('myAlertComponent', CellAlert)
```

### Local

You can also use component locally only. Then you should not register those components globally (or even not register global components all).

```vue
<template>
  <div>
    <CellAlert>
      I am an alert !
    </CellAlert>
  </div>
</template>

<script>
import { CellAlert } from 'vue-batteries'
export default {
  components: {
    CellAlert
  }
}
</script>
```

## Style and theme

## Setup for documentation

If you're wondering, how in this documentation app, the components have been registered
or want to quickly copy/paste examples then here is the configuration used.

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
