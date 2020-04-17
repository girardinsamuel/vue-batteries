<template>
  <div :class="rootClass">
    <label v-show="label" :class="labelClass" :for="$attrs.name"
      >{{ label }}
    </label>
    <!-- <div class="flex"> -->
    <div :class="containerClass">
      <slot name="leading">
        <div :class="leadingIconContainerClass">
          <slot
            name="leadingIcon"
            :leadingIcon="leadingIcon"
            :leadingIconClass="leadingIconClass"
          >
            <CellIcon
              v-if="leadingIcon"
              :name="leadingIcon"
              :class="leadingIconClass"
            />
          </slot>
        </div>
      </slot>
      <input
        v-bind="$attrs"
        :type="fieldType"
        v-on="fieldListeners"
        @input="fieldInput"
        :value="value"
        :disabled="disabled"
        :class="[inputClass, { 'pl-8': leadingIcon, 'pr-8': trailingIcon }]"
      />
      <slot name="trailing">
        <div @click="trailingIconClick" :class="trailingIconContainerClass">
          <slot
            name="trailingIcon"
            :leadingIcon="trailingIcon"
            :leadingIconClass="trailingIconClass"
          >
            <CellIcon
              v-if="trailingIconName"
              :name="trailingIconName"
              :class="trailingIconClass"
            />
          </slot>
        </div>
      </slot>
    </div>
    <slot name="help" :class="helpClass">
      <span v-if="help" :class="helpClass">
        {{ help }}
      </span>
    </slot>
  </div>
</template>

<script>
import { useInput } from './api'
import propsInput from './props'

export default {
  mixins: [propsInput],
  setup(props, context) {
    return {
      ...useInput(props, context)
    }
  }
}
</script>
