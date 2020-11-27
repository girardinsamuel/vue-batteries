<template>
  <div :class="rootClass">
    <label v-if="label" :class="labelClass" :for="$attrs.name">{{ label }}</label>
    <div :class="containerClass">
      <template v-for="opt in normalizedOptions" :key="opt.value">
        <!-- <my-checkbox v-for="option in normalizedOptions" :value="options.value" :key="option.value" >
          {{ option.label }}
        </my-checkbox> -->
        <component
          :is="componentName"
          :name="$attrs.name"
          v-model="value"
          :value="opt.value"
          @input="toggle"
          :checked="isSelected(opt.value)"
        >{{ opt.label }}</component>
      </template>
    </div>
    <span :class="helpClass">{{ help }}</span>
  </div>
</template>

<script>
import useGroup from "./core/useGroup"
import useBaseClasses from "./core/useClasses"
import { baseProps } from "./utils/baseProps"
// How to register it ? use render() ? user other magic
// import MyCheckbox from "./MyCheckbox.vue"

import { computed, ref } from "vue"

export default {
  name: "RadioGroup",
  // components: {
  //   MyCheckbox,
  // },
  props: {
    ...baseProps,
    modelValue: {
      type: [Array],
      default: () => [],
    },
    options: {
      type: [Array, Object],
      default: () => [],
    },
    valueAttr: {
      type: String,
      default: "value",
    },
    labelAttr: {
      type: String,
      default: "label",
    },
    help: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: null,
      validator: function (value) {
        return (
          value === null ||
          ["error", "warning", "success", "info"].indexOf(value) !== -1
        )
      },
    },
    label: {
      type: String,
      default: "",
    },
    componentName: {
      type: String,
      default: "MyRadio",
    },
    layout: {
      type: String,
      default: "vertical",
      validator: function (value) {
        return (
          ["vertical", "horizontal"].indexOf(value) !== -1
        )
      },
    },
  },
  setup (props, context) {
    const status = ref(props.status)
    // style
    const { styling, componentClasses, setElementClasses } = useBaseClasses(
      props,
      "group",
    )
    const rootClass = computed(() => {
      return styling && componentClasses.root
    })
    const containerClass = computed(() => {
      const containerClassType = props.layout === "vertical" ? componentClasses.container_vertical : componentClasses.container_horizontal
      return styling && componentClasses.container + " " + containerClassType
    })
    const labelClass = computed(() => {
      return setElementClasses("label", "root", {
        disabled: props.disabled,
        [status.value]: !!status.value,
        base: status.value == null,
      })
    })
    const helpClass = computed(() => {
      return setElementClasses("help", "root", {
        disabled: props.disabled,
        [status.value]: !!status.value,
        base: status.value == null,
      })
    })

    // main behaviour
    const { normalizedOptions, value, toggle, isSelected } = useGroup(props, context, false, props.valueAttr, props.labelAttr)
    return {
      rootClass,
      containerClass,
      helpClass,
      labelClass,
      normalizedOptions,
      value,
      toggle,
      isSelected,
    }
  },
}
</script>
