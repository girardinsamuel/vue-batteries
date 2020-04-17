<template>
  <div :class="rootClass">
    <label v-show="label" :class="labelClass" :for="$attrs.name"
      >{{ label }}
    </label>
    <div class="relative">
      <!-- <div
        @click="trailingIconClick"
        v-if="trailingIconName"
        :class="trailingIconContainerClass"
      >
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
      </div> -->
      <textarea
        ref="textarea"
        v-bind="$attrs"
        v-on="fieldListeners"
        @input="fieldInput"
        :value="value"
        :rows="rows"
        :disabled="disabled"
        :class="[textareaClass]"
      />
    </div>
    <slot name="help" :class="helpClass">
      <span v-if="help" :class="helpClass">
        {{ help }}
      </span>
    </slot>
  </div>
</template>

<script>
import { useInput } from '../api'
import { useTextarea } from './api'
import propsTextarea from './props'

export default {
  mixins: [propsTextarea],
  setup(props, context) {
    return {
      ...useInput(props, context),
      ...useTextarea(props, context)
    }
  }
}
</script>
