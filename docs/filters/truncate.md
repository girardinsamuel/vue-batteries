# truncate

This function allow to truncate string up to a given characters count.

## Global installation

This function can be registered (when registering the plugin) as a Vue.js filter. To enable it set `truncate` filters option as `true` in the configuration.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  filters: {
    truncate: true
  }
})
```

You can also register the function yourself allowing you
to customize filter name.

```js
import Vue from 'vue'
import { truncate } from 'vue-batteries'

Vue.filter('shorten', truncate)
// 1. Here filter name is shorten instead of truncate
```

## Local installation

```vue
<template>
  <div>
    <p>{{ message | truncate(30) }}</p>
  </div>
</template>

<script>
import { truncate } from 'vue-batteries'
export default {
  filters: {
    truncate
  }
  //...
}
</script>
```

## Use without installation

This function can also be used directly in javascript without being installed in Vue.js instance:

```js
import { truncate as truncateFilter } from 'vue-batteries'
export default {
  methods: {
    truncate(text, limit, suffix = '') {
      return truncateFilter(text, limit, suffix)
    }
  }
}
```

::: tip
`truncate` function is imported as a `truncateFilter` to be able to keep using `truncate` as method name inside component. It's more clear.
:::

## Examples

@[example](Truncate, Basic truncate)

@[example](TruncateWithSuffix, Truncate with suffix)

::: tip
Note that when using suffix, the number of characters to keep should include the suffix length.
:::

## API

TODO
3 arguments
1 optional
return string truncated
