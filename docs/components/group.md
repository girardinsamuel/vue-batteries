# Group

This component is a selectable group of items (multiple or not). This is a renderless
component allowing you to wrap any item you want.

## Installation

This component can be registered globally

```js
import VueBatteries from 'vue-batteries'
Vue.use(VueBatteries, {
  //...
  components: ['CellGroup']
})
```

or locally

```vue
<script>
import { CellGroup } from 'vue-batteries'
export default {
  components: {
    CellGroup
  }
}
</script>
```

More on that in [Components registration](../configuration.md#components-registration).

## Configuration

## Examples

@[example](Group1, Selectable group of items (as radio))

@[example](Group2, Multi-selectable group of items (as checkboxes))

@[example](Group3, Custom options attributes)

## API
