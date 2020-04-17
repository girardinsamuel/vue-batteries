<template>
  <div :class="rootClass">
    <label v-show="label" :class="labelClass" :for="$attrs.name">
      <span
        :class="backClass"
        role="checkbox"
        @click="toggle"
        v-bind="$attrs"
        v-on="$listeners"
        :aria-checked="value.toString()"
      >
        <span aria-hidden="true" :class="frontClass" />
      </span>
      {{ label }}
    </label>
    <slot name="help" :class="helpClass">
      <span v-if="help" :class="helpClass">
        {{ help }}
      </span>
    </slot>
  </div>
</template>

<script>
import { useSwitch } from './api'
import propsSwitch from './props'

export default {
  mixins: [propsSwitch],
  setup(props, context) {
    return {
      ...useSwitch(props, context)
    }
  }
}
</script>
