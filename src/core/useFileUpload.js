import { ref, computed, onMounted } from "vue"

export default (inputFileRef, previewRef, initialFile = null, placeholderFile = null, acceptedMimeTypes = "image/*", maxSize = 5 * 1024 * 1024) => {
  const currentFile = ref()
  const currentFileError = ref("")

  const openFileBrowser = () => {
    inputFileRef.value.click()
  }

  const selectFile = (event) => {
    // reset error
    currentFileError.value = ""
    const file = event.target.files[0]
    // check max size
    if (file.size > maxSize) {
      currentFileError.value = "File size is too large"
      return
    }
    // TODO: check file type
    previewRef.value.src = URL.createObjectURL(file)
    currentFile.value = file
  }

  const removeFile = (event) => {
    currentFile.value = null
    previewRef.value.src = placeholderFile
    // reset error
    currentFileError.value = ""
  }

  const currentFileSize = computed(() => {
    if (!currentFile.value) return null
    const size = currentFile.value.size
    var i = Math.floor(Math.log(size) / Math.log(1024))
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i]
  })

  const currentFileName = computed(() => {
    if (!currentFile.value) return ""
    return currentFile.value.name
  })

  const isPreviewable = computed(() => {
    if (!currentFile.value) return false
    return /\.(jpe?g|png|gif)$/i.test(currentFile.value.name)
  })

  onMounted(() => {
    previewRef.value.src = initialFile || placeholderFile
  })

  const hasFilePreview = computed(() => {
    return initialFile || currentFile.value
  })

  return {
    currentFile,
    currentFileError,
    acceptedMimeTypes,
    currentFileSize,
    currentFileName,
    isPreviewable,
    hasFilePreview,
    // methods
    openFileBrowser,
    selectFile,
    removeFile,
  }
}
