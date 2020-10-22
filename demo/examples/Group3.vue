<template>
  <div>
    <CellGroup
      multiple
      :options="options"
      v-model="groupModel"
      class="flex"
      val-attr-name="val"
      label-attr-name="text"
    >
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
      groupModel: [],
      options: [
        { val: 1, text: 'Roy' },
        { val: 2, text: 'Maurice' },
        { val: 3, text: 'Jen' }
      ]
    }
  }
}
</script>
