<template>
  <div>
    <input type="file" id="myfile" ref="myfile" @change="handleFileUpload" />
    <div v-if="file">
      <p>Raw size in bytes returned by File object: {{ file.size }} bytes</p>
      <p>Readable size 😃: {{ file.size | filesize }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null
    }
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.myfile.files[0]
    }
  }
}
</script>

<style lang="scss" scoped></style>
