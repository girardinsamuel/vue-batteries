<template>
  <div>
    <template v-for="(opt, index) in _normalizedOptions">
      <slot
        :update="updateGroup"
        :value="currentValue"
        :option="opt"
        :name="name"
      >
        <component
          :is="componentName"
          :key="`${id || name}-${index}`"
          :id="`${id || name}-${index}`"
          :name="name"
          :label="opt.label"
          v-model="currentValue"
          :values="[false, opt.value]"
          @input="updateGroup"
        />
      </slot>
    </template>
  </div>
</template>

<script>
import { ref, onMounted, computed } from '@vue/composition-api'
import TestCheckbox from './TestCheckbox.vue'
import TestRadio from './TestRadio.vue'

export default {
  name: 'TestCheckboxGroup',
  components: {
    TestCheckbox,
    TestRadio
  },
  props: {
    value: {
      type: [Boolean, String, Number, Array],
      value: null
    },

    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    valAttrName: {
      type: String,
      default: 'value'
    },
    labelAttrName: {
      type: String,
      default: 'label'
    },
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  setup(props, context) {
    let currentValue = ref(props.value)

    const updateGroup = value => {
      currentValue.value = value
      context.emit('input', currentValue.value)
      context.emit('change', currentValue.value)
    }
    // component specific
    const componentName = computed(() => {
      return props.type === 'checkbox' ? 'TestCheckbox' : 'TestRadio'
    })

    // Deal with options
    let _normalizedOptions = ref([])
    const normalizeOptions = () => {
      if (Array.isArray(props.options)) {
        props.options.forEach(opt => {
          let val, label
          if (typeof opt === 'object') {
            ;(val = opt[props.valAttrName]), (label = opt[props.labelAttrName])
          } else {
            val = opt
            label = opt
          }
          _normalizedOptions.value.push({
            value: val,
            label: label
          })
        })
      } else {
        // TODO
        return
      }
    }
    onMounted(() => {
      normalizeOptions()
    })

    return {
      updateGroup,
      currentValue,
      _normalizedOptions,
      componentName
    }
  }
}
</script>
