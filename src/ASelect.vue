<template>
  <div class="rootClass">
    <label v-if="label || $slots.label" :for="$attrs.name" class="block text-sm font-medium text-gray-700">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="mt-1 relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10" v-if="leadingIcon">
        <!-- Heroicon name: solid/mail -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <!-- leading icon: => pl-10 / trailing-icon => pr-10 but also for chevron of select -->
      <button @click="selecting = !selecting" type="button" ref="buttonRef"
        class="px-3 bg-white relative w-full border rounded-md shadow-sm py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm"
        :class="{
          'pl-10': !!leadingIcon,
          'pr-10': hasError || !!trailingIcon,
          'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500': !hasError,
          'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500': hasError
        }"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <template v-if="!searchable">
          <template v-if="multiple && value.length > 0">
            <select-badge v-for="val in displayValue" :key="val" class="mr-1" @remove.stop="unselect(val)">{{ val }}</select-badge>
          </template>
          <span
            class="block truncate"
            :class="{
              '': !hasError,
              'text-red-600': hasError
            }"
            v-else
          >
            {{ displayValue }}
          </span>
        </template>
        <input v-else name="search" v-model="searchQuery" class="block truncate w-full focus:outline-none" />
        <span class="absolute inset-y-0 right-0" :class="(!!trailingIcon || hasError) ? 'mr-14' : 'mr-8'" v-if="multiple && value.length > 0">
          <!-- close button for cleaning -->
          <button @click.stop="clearSelection" type="button" class="absolute inset-y-0 right-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </button>
        </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <!-- Heroicon name: solid/selector -->
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      <div class="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none" v-if="trailingIcon || hasError">
        <!-- Trailing icon when error -->
        <svg v-if="hasError" class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <!-- Trailing icon -->
        <svg v-else-if="trailingIcon" class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Select popover, show/hide based on select state. -->
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          v-show="selecting"
          ref="optionsRef"
          class="absolute z-20 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
          <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "", Not Highlighted: "text-gray-900"
          -->
          <template
            v-for="category in categories"
            :key="category.value"
          >
            <li
              v-if="category.value"
              class="text-gray-500 cursor-default text-xs select-none relative py-2 pl-3 pr-9"
            >
              {{ category.label }}
            </li>
            <template
              v-for="option in selectOptions.filter(opt => category.value ? opt.category == category.value : true)"
              :key="option.value"
            >
              <slot name="option" :option="option" :select="select" :isSelected="isSelected">
                <li
                  class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-indigo-600"
                  role="option"
                  @click="select(option)"
                >
                  <span
                    class="block truncate"
                    :class="isSelected(option) ? 'font-semibold': 'font-normal'"
                  >
                    {{ option.label }}
                  </span>

                  <!--
                    Checkmark, only display for selected option.

                    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                  -->
                  <span class="text-indigo-600 hover:text-white absolute inset-y-0 right-0 flex items-center pr-4" v-if="isSelected(option)">
                    <!-- Heroicon name: solid/check -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </li>
              </slot>
            </template>
          </template>
        </ul>
      </transition>
    </div>
    <p
      class="mt-1 text-sm"
      :class="{
        'text-gray-500': !hasError,
        'text-red-600': hasError
      }"
    >{{ hasError ? errorMessage : help }}</p>
  </div>
</template>

<script>
import useSelect from "./core/useSelect"
import { ref, toRefs, computed, onMounted, onUnmounted } from "vue"
import SelectBadge from "./SelectBadge"
import { inputProps, inputIconProps } from "./utils/baseProps"

export default {
  name: "ASelect",
  emits: ["update:modelValue", "change"],
  components: {
    SelectBadge,
  },
  props: {
    options: {
      type: [Array, Object],
      required: true,
    },
    categories: {
      type: Array,
      default: () => [{
        value: "",
        label: "",
      }],
    },
    modelValue: {
      type: [Number, Boolean, String, Array, Object],
      required: true,
    },
    placeholder: {
      type: String,
      default: "-- Select option --",
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    ...inputProps,
    ...inputIconProps,
  },
  setup (props, context) {
    const buttonRef = ref(null)
    const optionsRef = ref(null)
    const { modelValue, options } = toRefs(props)
    const { toggleOption, value, value2, isSelected, clearSelection, unselectOption, normalizedOptions: selectOptions } = useSelect(context, modelValue, options, props.multiple)
    const displayValue = computed(() => {
      if ((Array.isArray(value.value) && !value.value.length) || value.value === "" || value.value === null) {
        return props.placeholder
      } else if (props.multiple) {
        return value.value.map(val => val ? selectOptions.value.find(opt => opt.value === val).label : null)
      } else {
        const selected = selectOptions.value.find(opt => opt.value === value.value)
        return selected === undefined ? null : selected.label
      }
    })
    const selecting = ref(false)
    const searching = ref(false)
    const searchQuery = ref(displayValue.value)

    // handle closing select when clicking outside
    const closeListIfClickedOutside = (event) => {
      const target = event.target
      if (!selecting.value) { } else {
        if (buttonRef.value.contains(target)) {}
        if (!optionsRef.value.contains(target)) { selecting.value = false }
      }
    }
    onMounted(() => {
      window.addEventListener("mousedown", closeListIfClickedOutside)
    })

    onUnmounted(() => {
      window.removeEventListener("mousedown", closeListIfClickedOutside)
    })

    // TODO: handle externally
    const hasError = true
    const errorMessage = "Il y a une erreur"
    return {
      toggleOption,
      unselectOption,
      selectOptions,
      value,
      value2,
      isSelected,
      clearSelection,
      displayValue,
      selecting,
      searching,
      searchQuery,
      hasError,
      errorMessage,
      buttonRef,
      optionsRef,
    }
  },
  methods: {
    select (option) {
      this.toggleOption(option)
      if (!this.multiple) {
        this.selecting = false
      }
    },
    unselect (value) {
      const option = this.selectOptions.find(o => o.label === value)
      this.unselectOption(option)
      this.selecting = false
    },
  },
}
</script>
