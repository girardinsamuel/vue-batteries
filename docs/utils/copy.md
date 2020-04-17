# Copy

This function allow to copy the given text to the clipboard.

## Global installation

This function can be registered (when registering the plugin) as a Vue.js
prototype. To enable it add the `copy` option in the configuration.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  copy: true
})
```

If you want to customize the name of the prototype you can
use a string instead of `true`, such as `copyText`:

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  copy: 'copyText'
})
// Now this.$copyText(textToCopy) will be available in your Vue.js instance
```

::: warning
You should not add `$` in the name as it is done by the plugin itself, following [Vue.js prototype convention](https://vuejs.org/v2/cookbook/adding-instance-properties.html#The-Importance-of-Scoping-Instance-Properties).
:::

Finally you can also register the function yourself:

```js
import Vue from 'vue'
import { copy } from 'vue-batteries'
Vue.prototype.$customCopy = copy
// Now this.$customCopy(textToCopy) will be available in your Vue.js instance
```

## Use without installation

This function can also be used directly in javascript without being installed
in Vue.js instance:

```js
import { copy } from 'vue-batteries'
export default {
  methods: {
    copyText(text) {
      if (copy(text)) {
        alert('Text copied')
      } else {
        alert('Error during copy')
      }
    }
  }
}
```

## Examples

@[example](Copy, Globally registered)

@[example](CopyLocal, Local use)

## API
