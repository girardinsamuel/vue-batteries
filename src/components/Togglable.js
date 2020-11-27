import { defineComponent, computed } from "vue"

import useBaseClasses from "../core/useClasses"
import { baseProps } from "../utils/baseProps"
import useToggle from "../core/useToggle"

export const useClasses = (props, context, status, isChecked, type) => {
  const { styling, componentClasses, setElementClasses } = useBaseClasses(
    props,
    type,
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })
  const inputClass = computed(() => {
    return setElementClasses("input", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
      readonly: Object.prototype.hasOwnProperty.call(context.attrs, "readonly"),
    })
  })
  const labelClass = computed(() => {
    return setElementClasses("label", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const textClass = computed(() => {
    return setElementClasses("text", "root", {
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
  return {
    labelClass,
    helpClass,
    textClass,
    inputClass,
    rootClass,
    containerClass,
  }
}
export const useApi = (props, context, status, type) => {
  // const { toggle, isChecked, internalValue } = useToggle(props, context)
  // return {
  //   toggle,
  //   isChecked,
  //   internalValue,
  // }
  return {
    ...useToggle(props, context),
  }
}

export const Togglable = defineComponent({
  name: "Togglable",
  emits: ["update:modelValue", "change", "update:checked"],
  props: {
    ...baseProps,
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    modelValue: {
      type: [String, Object, Number, Boolean, Array],
      default: undefined,
    },
    checked: {
      type: [Boolean, String],
      default: undefined,
    },
    // value of the field
    value: {
      type: [String, Object, Number, Boolean, Array],
      default: true,
    },
    uncheckedValue: {
      type: [String, Object, Number, Boolean, Array],
      default: false,
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
  },
})
