# capitalize

This function allows to capitalize strings easily.

## Global installation

This function can be registered (when registering the plugin) as a Vue.js filter. To enable it set `capitalize` filters option as `true` in the configuration.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  filters: {
    capitalize: true
  }
})
```

You can also register the function yourself allowing you
to customize filter name.

```js
import Vue from 'vue'
import { capitalize } from 'vue-batteries'

Vue.filter('upFirstLetter', capitalize)
// 1. Here filter name is `upFirstLetter` instead of capitalize
// 2. Note that the third argument suffix is optional
```

## Local installation

```vue
<template>
  <div>
    <p>{{ message | capitalize }}</p>
  </div>
</template>

<script>
import { capitalize } from 'vue-batteries'
export default {
  filters: {
    capitalize
  }
  //...
}
</script>
```

## Use without installation

This function can also be used directly in javascript without being installed in Vue.js instance:

```js
import { capitalize as capitalizeFilter } from 'vue-batteries'
export default {
  methods: {
    capitalize(text) {
      return capitalizeFilter(text)
    }
  }
}
```

::: tip
`capitalize` function is imported as a `capitalizeFilter` to be able to keep using `capitalize` as method name inside component. It's more clear.
:::

## Examples

@[example](Capitalize, Capitalize in js or templates)

## API

TODO
3 arguments
1 optional
return string truncated
