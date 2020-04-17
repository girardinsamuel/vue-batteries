<template>
  <div>
    <div class="flex items-center">
      <p class="mr-4">{{ messageToCopy }}</p>
      <CellButton @click="handleCopy" variant="blue">Copy text !</CellButton>
    </div>
    <CellAlert v-if="showCopySuccess" status="success" class="mt-2"
      >Copied !</CellAlert
    >
  </div>
</template>

<script>
import { copy } from '../../src/'

export default {
  data() {
    return {
      messageToCopy: 'I will be copied',
      showCopySuccess: false
    }
  },
  methods: {
    handleCopy() {
      if (copy(this.messageToCopy)) {
        this.showCopySuccess = true
        setTimeout(() => {
          this.showCopySuccess = false
        }, 2000)
      }
    }
  }
}
</script>
