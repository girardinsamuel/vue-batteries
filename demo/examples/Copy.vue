<template>
  <div>
    <div class="flex">
      <CellInput v-model="inputText" class="mr-4" />
      <CellButton @click="handleCopy" variant="blue">Copy !</CellButton>
    </div>
    <CellAlert v-if="showCopySuccess" status="success" class="mt-2"
      >Copied !</CellAlert
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: 'Try to copy me',
      showCopySuccess: false
    }
  },
  methods: {
    handleCopy() {
      if (this.$copy(this.inputText)) {
        this.showCopySuccess = true
        setTimeout(() => {
          this.showCopySuccess = false
        }, 2000)
      }
    }
  }
}
</script>
