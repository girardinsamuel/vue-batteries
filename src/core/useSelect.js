import { computed, ref } from "vue"

function isObject (objValue) {
  return objValue && typeof objValue === "object" && objValue.constructor === Object
}

const normalizeOptions = (options, valueAttr, labelAttr, categoryAttr) => {
  let normalizedOptions = []
  if (Array.isArray(options)) {
    // let objInArray = false
    options.forEach(opt => {
      if (typeof opt !== "object") {
        normalizedOptions.push({
          [valueAttr]: opt,
          [labelAttr]: opt,
          disabled: false,
          category: "default",
        })
      } else {
        // objInArray = true
        normalizedOptions.push({
          value: opt[valueAttr],
          label: opt[labelAttr],
          disabled: false,
          category: opt[categoryAttr],
        })
      }
    })
  } else if (isObject(options)) {
    Object.entries(options).forEach(([key, value]) => {
      normalizedOptions.push({ value: key, label: value, disabled: false, category: "default" })
    })
  } else {
    normalizedOptions = []
    return new Error("options must be an Array or an Object.")
  }
  return normalizedOptions
}

export default (context, initialValue, options, multiple = false, valueAttr = "value", labelAttr = "label", categoryAttr = "category") => {
  const externalValue = ref(multiple ? initialValue.value || [] : initialValue.value || null)
  const internalValue = computed({
    get () {
      return multiple ? initialValue.value || [] : initialValue.value || null
    },
    set (value) {
      context.emit("update:modelValue", value)
      context.emit("change", value)
      externalValue.value = value
    },
  })

  const normalizedOptions = computed(() => {
    return normalizeOptions(options.value, valueAttr, labelAttr, categoryAttr)
  })

  const toggleOption = (option) => {
    if (multiple) {
      if (internalValue.value.includes(option.value)) {
        const valueIndex = internalValue.value.indexOf(option.value)
        internalValue.value.splice(valueIndex, 1)
      } else {
        internalValue.value.push(option.value)
      }
    } else {
      if (internalValue.value === option.value) {
        internalValue.value = null
      } else {
        internalValue.value = option.value
      }
    }
  }
  const selectOption = (option) => {
    if (multiple) {
      if (!internalValue.value.includes(option.value)) {
        internalValue.value.push(option.value)
      }
    } else {
      if (internalValue.value !== option.value) {
        internalValue.value = option.value
      }
    }
  }
  const unselectOption = (option) => {
    if (multiple) {
      if (internalValue.value.includes(option.value)) {
        const valueIndex = internalValue.value.indexOf(option.value)
        internalValue.value.splice(valueIndex, 1)
      }
    } else if (internalValue.value === option.value) {
      internalValue.value = null
    }
  }
  const isSelected = (option) => {
    if (multiple) {
      return internalValue.value.includes(option.value)
    } else {
      return internalValue.value === option.value
    }
  }
  const isExternalSelected = (option) => {
    if (multiple) {
      return externalValue.value.includes(option.value)
    } else {
      return externalValue.value === option.value
    }
  }

  const clearSelection = () => {
    internalValue.value = multiple ? [] : null
  }

  return {
    // state
    normalizedOptions,
    value: internalValue,
    externalValue,
    // value2,
    // methods
    toggleOption,
    selectOption,
    unselectOption,
    isSelected,
    isExternalSelected,
    clearSelection,
  }
}
