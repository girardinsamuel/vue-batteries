/** Behaviour used to provide different options and be able to select one or multiple. */
import { ref } from "vue"

function isObject (objValue) {
  return objValue && typeof objValue === "object" && objValue.constructor === Object
}

export const normalizeOptions = (options, valueAttr, labelAttr) => {
  const normalizedOptions = ref([])
  if (Array.isArray(options)) {
    let objInArray = false
    options.forEach(opt => {
      if (typeof opt !== "object") {
        normalizedOptions.value.push({
          [valueAttr]: opt,
          [labelAttr]: opt,
        })
      } else {
        objInArray = true
      }
    })
    if (objInArray) {
      normalizedOptions.value = options.value
    }
  } else if (isObject(options)) {
    Object.entries(options).forEach(([key, value]) => {
      normalizedOptions.value.push({ [valueAttr]: key, [labelAttr]: value })
    })
  } else {
    return new Error("options must be an Array or an Object.")
  }
  return normalizedOptions
}

export default (props, { emit }, multiple = false, valueAttr = "value", labelAttr = "label") => {
  const normalizedOptions = normalizeOptions(props.options, valueAttr, labelAttr)
  // TODO: maybe init to []
  const internalValue = ref(multiple ? props.modelValue || [] : props.modelValue)

  const toggle = event => {
    // TODO: in a group the toggle is applied always with a value isn't it ?
    // what about in select ? => add a select method
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
    // emit("change", internalValue.value)
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
