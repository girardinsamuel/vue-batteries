import { defineComponent, computed, ref } from "vue"

import useBaseClasses from "../core/useClasses"
import { baseProps } from "../utils/baseProps"
import { getConfig } from "../config"

const useClasses = (props, context, status) => {
  const { styling, componentClasses, setElementClasses } = useBaseClasses(
    props,
    "input",
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
  return {
    trailingIconClass,
    trailingIconContainerClass,
    leadingIconClass,
    leadingIconContainerClass,
    labelClass,
    helpClass,
    inputClass,
    rootClass,
    containerClass,
  }
}

const useApi = (props, context, status) => {
  const config = getConfig()

  // hide input value
  const visibility = ref(props.type !== "password")
  const toggle = () => {
    visibility.value = !visibility.value
  }
  const fieldType = computed(() => {
    if (visibility.value) {
      return props.type === "password" ? "text" : props.type
    } else {
      return "password"
    }
  })
  // const fieldStatus = ref(props.status)

  // trailingIcon logic
  const trailingIconName = computed(() => {
    if (props.loading) {
      return "loading"
    } else if (props.statusIcon && !!status.value) {
      return config.statusIcons[status.value]
    } else if (props.passwordToggle && props.type === "password") {
      return visibility.value ? config.visibilityIcons.on : config.visibilityIcons.off
    } else if (props.trailingIcon) {
      return props.trailingIcon
    } else {
      return null
    }
  })
  const trailingClick = $event => {
    props.passwordToggle && props.type === "password"
      ? toggle()
      : context.emit("trailing-icon-click")
  }

  // input value logic
  const inputValue = ref(props.modelValue)
  const onInput = event => {
    inputValue.value = event.target.value
    context.emit("update:modelValue", inputValue.value)
  }
  const onBlur = event => {
    // to implement if needed
  }
  // const inputValue = props.modelValue
  const helpText = ref(props.help)
  const renderHelp = computed(() => { return helpText.value !== "" || "help" in context.slots })
  const hasTrailingIcon = computed(() => { return (props.passwordToggle && props.type === "password") || !!trailingIconName.value })

  return {
    visibility,
    fieldType,
    trailingIconName,
    trailingClick,
    onInput,
    onBlur,
    helpText,
    renderHelp,
    inputValue,
    hasTrailingIcon,
    // fieldStatus,
  }
}

const Input = defineComponent({
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    ...baseProps,
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    modelValue: {
      type: [String, Number],
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
    /** Allow user to show input content for password type's input by clicking on the trailingIcon. Only shown if
    input type is password.
      @default true
    */
    passwordToggle: {
      type: Boolean,
      default: true,
    },
    /** Show status icon in trailingIcon slot when input status is defined. Icons can be defined in
    global input configuration object for each status. */
    statusIcon: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
  },
})
export default {
  useApi,
  useClasses,
  Input,
}
