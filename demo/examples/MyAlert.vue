<template>
  <CellAlert
    v-bind="$attrs"
    no-styling
    :class="{
      'bg-gray-300 border-l-4 border-gray-800 text-left': true,
      'border-red-600': status === 'error',
      'border-green-600': status === 'success',
      'border-yellow-600': status === 'warning'
    }"
  >
    <template #renderless="{dismissed, close}">
      <div class="flex items-center justify-between px-4 py-2 mb-2">
        <h1
          class="text-lg font-bold"
          :class="{
            'text-red-600': status === 'error',
            'text-green-600': status === 'success',
            'text-yellow-600': status === 'warning'
          }"
        >
          {{ title }}
        </h1>
        <button @click="close" class="font-bold" v-if="closable">
          X
        </button>
      </div>
      <!-- Alert description -->
      <p class="px-4 py-2 text-base"><slot /></p>
    </template>
  </CellAlert>
</template>

<script>
import { propsAlert } from '../../src'

export default {
  name: 'MyAlert',
  // Original props of Alert component.
  mixins: [propsAlert],
  // New props for Alert component
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
