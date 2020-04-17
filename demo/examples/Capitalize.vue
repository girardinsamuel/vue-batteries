<template>
  <div>
    <p>{{ 'dinesh' | capitalize }}</p>
    <p>{{ otherFolkCapitalized }}</p>
  </div>
</template>

<script>
import { capitalize } from '../../src'
export default {
  data() {
    return {
      otherFolk: 'gilfoyle'
    }
  },
  computed: {
    otherFolkCapitalized() {
      return capitalize(this.otherFolk)
    }
  }
}
</script>
