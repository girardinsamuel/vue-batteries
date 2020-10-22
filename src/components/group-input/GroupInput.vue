<template>
  <div :class="rootClass">
    <label v-show="label" :class="labelClass" :for="$attrs.name"
      >{{ label }}
    </label>
    <div :class="containerClass">
      <template v-for="(opt, index) in _normalizedOptions">
        <slot
          :update="update"
          :value="currentValue"
          :option="opt"
          :elementName="name"
        >
          <component
            :is="componentName"
            :key="`${id || name}-${index}`"
            :id="`${id || name}-${index}`"
            :name="name"
            :label="opt.label"
            v-model="currentValue"
            :values="[false, opt.value]"
            @input="update"
          />
        </slot>
      </template>
    </div>
    <slot name="help" :class="helpClass">
      <span v-if="help" :class="helpClass">
        {{ help }}
      </span>
    </slot>
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
