# filesize

This function converts raw number of bytes to human readable size. This is mostly used
to display file size easily. This function implements SI standard defining there are 1000 bytes in a kilobyte. (Others standards exist such as IEC or JEDEC but are not implemented here.)

## Global installation

This function can be registered (when registering the plugin) as a Vue.js filter. To enable it set `filesize` filters option as `true` in the configuration.

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  filters: {
    filesize: true
  }
})
```

You can also register the function yourself allowing you
to customize filter name.

```js
import Vue from 'vue'
import { filesize } from 'vue-batteries'

Vue.filter('size', filesize)
// Here filter name is size instead of filesize
```

## Local installation

```vue
<template>
  <div>
    <p>{{ message | filesize }}</p>
  </div>
</template>

<script>
import { filesize } from 'vue-batteries'
export default {
  filters: {
    filesize
  }
  //...
}
</script>
```

## Use without installation

This function can also be used directly in javascript without being installed in Vue.js instance:

```js
import { filesize as filesizeFilter } from 'vue-batteries'
export default {
  methods: {
    filesize(size) {
      return filesizeFilter(size)
    }
  }
}
```

::: tip
`filesize` function is imported as a `filesizeFilter` to be able to keep using `filesize` as method name inside component. It's more clear.
:::

## Examples

@[example](filesize, Base filesize use)

@[example](filesize2, Select a file to check its size)

@[example](filesize3, Filesize internationalisation)

@[example](filesize4, Custom formatting)

::: tip Note
In the last example, it would make more sense to let filesize disabled (default)
and globally register your custom filesize filter based on the `filesize` function (here the filter `filesize2` is only registered locally)
:::

```js
import Vue from 'vue'
import { filesize } from 'vue-batteries'

const mySizeFilter = (rawSize, locale = null) => {
  const { size, unit } = filesize(rawSize, locale, true)
  return `${size} [${unit}]`
}

// Here filesize filter is registered globally and output has been customized
Vue.filter('filesize', mySizeFilter)
```

## API

TODO
3 arguments
1 optional
return string truncated
