<template>
  <div>
    <CellGroup :options="options" v-model="groupModel" class="flex">
      <template v-slot="{ option, toggle, isChecked }">
        <div
          @click="toggle(option.value)"
          class="w-24 p-4 mr-4 text-center bg-gray-300 rounded-md cursor-pointer border-vuepress"
          :class="isChecked && 'border-2 border-red-600'"
        >
          <p>{{ option.label }}</p>
        </div>
      </template>
    </CellGroup>
    <p>Value of group: {{ groupModel }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupModel: null,
      options: [
        { value: 'opt1', label: 'Opt 1' },
        { value: 'opt2', label: 'Opt 2' },
        { value: 'opt3', label: 'Opt 3' }
      ]
    }
  }
}
</script>
