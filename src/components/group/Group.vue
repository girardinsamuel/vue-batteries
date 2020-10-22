<template>
  <div>
    <template v-for="option in _normalizedOptions">
      <slot
        :toggle="toggle"
        :is-checked="isChecked(option.value)"
        :option="option"
      />
    </template>
  </div>
</template>

<script>
import { useGroupInput } from './api'
import propsMixin from './props'

export default {
  mixins: [propsMixin],
  setup(props, context) {
    return {
      ...useGroupInput(props, context)
    }
  }
}
</script>
