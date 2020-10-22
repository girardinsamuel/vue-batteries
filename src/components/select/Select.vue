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
      <select
        v-bind="$attrs"
        v-on="fieldListeners"
        :value="value"
        @input="fieldInput"
        :disabled="disabled"
        :class="[inputClass, { 'pl-8': leadingIcon }]"
      >
        <option v-for="opt in options" :key="opt.value" :value="opt.value">{{
          opt.label
        }}</option>
      </select>
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
import { useSelect } from './api'
// import { useInput } from '../api'
import propsInput from './props'

export default {
  mixins: [propsInput],
  setup(props, context) {
    return {
      // ...useInput(props, context),
      ...useSelect(props, context)
    }
  }
}
</script>
