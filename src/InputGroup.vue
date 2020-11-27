<template>
  <div :class="rootClass">
    <label v-if="label" :class="labelClass" :for="$attrs.name">{{ label }}</label>
    <div :class="containerClass">
      <template v-for="opt in normalizedOptions" :key="opt.value">
        <component
          :is="component"
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
import { computed, ref, resolveComponent } from "vue"

export default {
  name: "InputGroup",
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
    type: {
      type: String,
      default: "checkbox",
      validator: function (value) {
        return (
          ["checkbox", "radio"].indexOf(value) !== -1
        )
      },
    },
    checkboxComponent: {
      type: String,
      default: "MyCheckbox",
    },
    radioComponent: {
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
    const multiple = props.type === "checkbox"
    const componentName = props.type === "checkbox" ? props.checkboxComponent : props.radioComponent
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
    const { normalizedOptions, value, toggle, isSelected } = useGroup(props, context, multiple, props.valueAttr, props.labelAttr)

    const component = resolveComponent(componentName)

    return {
      rootClass,
      containerClass,
      helpClass,
      labelClass,
      normalizedOptions,
      value,
      toggle,
      isSelected,
      component,
    }
  },
}
</script>

<style>

</style>
