# uppercase

This function set a whole string to uppercase. It uses Javascript `toUpperCase`
function.

## Global installation

This function can be registered (when registering the plugin) as a Vue.js filter. To enable it set `uppercase` filters option as `true` in the configuration.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  filters: {
    uppercase: true
  }
})
```

You can also register the function yourself allowing you
to customize filter name.

```js
import Vue from 'vue'
import { uppercase } from 'vue-batteries'

Vue.filter('upper', uppercase)
// 1. Here filter name is upper instead of uppercase
```

## Local installation

```vue
<template>
  <div>
    <p>{{ message | uppercase }}</p>
  </div>
</template>

<script>
import { uppercase } from 'vue-batteries'
export default {
  filters: {
    uppercase
  }
  //...
}
</script>
```

## Examples

@[example](uppercase, uppercase filter)

## API

TODO
3 arguments
1 optional
return string truncated
