<template>
  <div>
    <p>
      Globally defined locale: {{ 4000 | filesize }} ,
      {{ 2000000 | filesize }}
    </p>
    <p>
      Locally overridden locale: {{ 4000 | filesize('fr-FR') }} ,
      {{ 2000000 | filesize('fr') }}
    </p>
    <p>Locale set through method: {{ myFileSize(4000) }}</p>
  </div>
</template>

<script>
import { filesize } from '../../src'
export default {
  data() {
    return {
      file: null
    }
  },
  methods: {
    myFileSize(size) {
      return filesize(size, 'fr-FR')
    }
  }
}
</script>

<style lang="scss" scoped></style>
