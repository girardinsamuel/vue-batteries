/** Behaviour used to provide different options and be able to select one or multiple. */
import { ref, computed } from "vue"

function isObject (objValue) {
  return objValue && typeof objValue === "object" && objValue.constructor === Object
}

export const normalizeOptions = (options, valueAttr, labelAttr) => {
  let normalizedOptions = []
  if (Array.isArray(options)) {
    let objInArray = false
    options.forEach(opt => {
      if (typeof opt !== "object") {
        normalizedOptions.push({
          [valueAttr]: opt,
          [labelAttr]: opt,
          disabled: false,
        })
      } else {
        objInArray = true
      }
    })
    if (objInArray) {
      normalizedOptions = options
    }
  } else if (isObject(options)) {
    Object.entries(options).forEach(([key, value]) => {
      normalizedOptions.push({ [valueAttr]: key, [labelAttr]: value, disabled: false })
    })
  } else {
    return new Error("options must be an Array or an Object.")
  }
  return normalizedOptions
}

export default (props, { emit }, multiple = false, valueAttr = "value", labelAttr = "label") => {
  const normalizedOptions = computed(() => {
    return normalizeOptions(props.options, valueAttr, labelAttr)
  })
  // TODO: maybe init to []
  const internalValue = ref(multiple ? props.modelValue || [] : props.modelValue)

  const toggle = event => {
    // TODO: in a group the toggle is applied always with a value isn't it ?
    // what about in select ? => add a select method
    if (props.disabled) {
      return
    }
    const value = event.target.value
    if (multiple) {
      if (internalValue.value.includes(value)) {
        const valueIndex = internalValue.value.indexOf(value)
        internalValue.value.splice(0, valueIndex)
      } else {
        internalValue.value.push(value)
      }
    } else {
      internalValue.value = value
    }
    emit("update:modelValue", internalValue.value)
    emit("change", internalValue.value)
  }

  const isSelected = (optionValue) => {
    if (multiple) {
      return internalValue.value.includes(optionValue)
    } else {
      return internalValue.value === optionValue
    }
  }

  // onMounted(() => {
  //   normalizeOptions()
  // })

  return {
    // state
    normalizedOptions,
    value: internalValue,
    // methods
    toggle,
    isSelected,
  }
}
