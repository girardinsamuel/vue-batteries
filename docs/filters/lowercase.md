# lowercase

This function set a whole string to lowercase. It uses Javascript `toLowerCase`
function.

## Global installation

This function can be registered (when registering the plugin) as a Vue.js filter. To enable it set `lowercase` filters option as `true` in the configuration.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  filters: {
    lowercase: true
  }
})
```

You can also register the function yourself allowing you
to customize filter name.

```js
import Vue from 'vue'
import { lowercase } from 'vue-batteries'

Vue.filter('lower', lowercase)
// 1. Here filter name is lower instead of lowercase
```

## Local installation

```vue
<template>
  <div>
    <p>{{ message | lowercase }}</p>
  </div>
</template>

<script>
import { lowercase } from 'vue-batteries'
export default {
  filters: {
    lowercase
  }
  //...
}
</script>
```

## Examples

@[example](lowercase, Lowercase filter)

## API

TODO
3 arguments
1 optional
return string truncated
