<template>
  <label :for="id">
    <input
      type="radio"
      :name="name"
      :id="id"
      v-model="currentValue"
      :value="values[1]"
      @input="onChange"
    />
    {{ label }}
  </label>
</template>

<script>
import { computed, ref, onCreated } from '@vue/composition-api'
export default {
  name: 'TestRadio',
  props: {
    value: {
      type: [Boolean, String, Number, Array],
      value: null
    },
    values: {
      type: Array,
      default: () => [false, true]
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    let currentValue = ref(props.value)
    const isChecked = computed({
      get: () => {
        if (Array.isArray(props.value)) {
          return props.value
        } else {
          return props.value === props.values[1]
        }
      },
      set(value) {
        currentValue.value = value
      }
    })

    const onChange = event => {
      let localValue
      let checked
      if (Array.isArray(isChecked.value)) {
        localValue = currentValue.value
        checked = isChecked.value.indexOf(props.values[1]) >= 0
      } else {
        localValue = currentValue.value ? props.values[1] : props.values[0]
        checked = currentValue.value ? true : false
      }
      context.emit('input', localValue)
      context.emit('change', localValue)
      // context.emit('update:isChecked', checked)
    }

    // onCreated(() => {
    //   currentValue.value = props.value
    // })

    return {
      isChecked,
      onChange,
      currentValue
    }
  }
}
</script>
