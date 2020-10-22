<template>
  <div>
    <p>File size display with original filter : {{ 4000 | filesize }}</p>
    <p>Custom file size display with new filter : {{ 4000 | filesize2 }}</p>
    <p>Custom file size display with method : {{ fileSize2Method(4000) }}</p>
  </div>
</template>

<script>
import { filesize } from '../../src'

const mySizeFilter = (rawSize, locale = null) => {
  // 3rd argument set to true means that {size, unit} is output instead of formatted filesize
  const { size, unit } = filesize(rawSize, locale, true)
  // add brackets in filesize display
  return `${size} [${unit}]`
}
export default {
  // Define a custom (local) filesize filter
  filters: {
    filesize2: mySizeFilter
  },
  methods: {
    fileSize2Method(size) {
      return mySizeFilter(size, 'fr-FR')
    }
  }
}
</script>
