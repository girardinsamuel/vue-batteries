import { defineComponent, computed, ref } from "vue"

import useBaseClasses from "../core/useClasses"
import useGroup from "../core/useGroup"
import { baseProps } from "../utils/baseProps"
import { getConfig } from "../config"

const useClasses = (props, context, status) => {
  const { styling, componentClasses, setElementClasses } = useBaseClasses(
    props,
    "select",
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })
  const selectClass = computed(() => {
    return setElementClasses("select", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
      leading: props.leadingIcon,
      trailing: props.trailingIcon,
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
  const helpClass = computed(() => {
    return setElementClasses("help", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const leadingIconContainerClass = computed(() => {
    return setElementClasses("leadingIcon", "container")
  })
  const leadingIconClass = computed(() => {
    return setElementClasses("leadingIcon", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const trailingIconContainerClass = computed(() => {
    return setElementClasses("trailingIcon", "container")
  })
  const trailingIconClass = computed(() => {
    return setElementClasses("trailingIcon", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const requiredClass = computed(() => {
    return styling && componentClasses.required
  })
  return {
    trailingIconClass,
    trailingIconContainerClass,
    leadingIconClass,
    leadingIconContainerClass,
    labelClass,
    helpClass,
    selectClass,
    rootClass,
    containerClass,
    requiredClass,
  }
}

const useApi = (props, context, status) => {
  const config = getConfig()
  // main behaviour
  const { normalizedOptions, value, toggle, isSelected } = useGroup(props, context, props.multiple, props.valueAttr, props.labelAttr)
  // add default option for placeholder when defined
  if (context.attrs.placeholder) {
    normalizedOptions.value.unshift({ [props.valueAttr]: "", [props.labelAttr]: context.attrs.placeholder, disabled: true })
  }
  // trailingIcon logic
  const trailingIconName = computed(() => {
    if (props.loading) {
      return "loading"
    } else if (props.statusIcon && !!status.value) {
      return config.statusIcons[status.value]
    } else if (props.trailingIcon) {
      return props.trailingIcon
    } else {
      return null
    }
  })

  const helpText = ref(props.help)
  const renderHelp = computed(() => { return helpText.value !== "" || "help" in context.slots })
  const hasTrailingIcon = computed(() => { return (props.passwordToggle && props.type === "password") || !!trailingIconName.value })

  return {
    trailingIconName,
    helpText,
    renderHelp,
    hasTrailingIcon,
    // behaviour
    normalizedOptions,
    value,
    toggle,
    isSelected,
  }
}

const Select = defineComponent({
  name: "Select",
  emits: ["update:modelValue", "change"],
  props: {
    ...baseProps,
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: "",
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
    // Input specific props
    /** Name of leading icon. This is using Icon component that you can configure to
    suit your own set of icons (or to use an external library).
    */
    leadingIcon: {
      type: String,
      default: "",
    },
    trailingIcon: {
      type: String,
      default: "",
    },
    /** Show status icon in trailingIcon slot when input status is defined. Icons can be defined in
    global input configuration object for each status. */
    statusIcon: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
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
  },
})

export default {
  useApi,
  useClasses,
  Select,
}
