<template>
  <Alert v-bind="$attrs">
    <slot />
    <template #close="{close}">
      <a @click="close">X</a>
    </template>
  </Alert>
</template>

<script>
export default {
  name: 'MyAlert'
}
</script>

<style lang="scss" scoped></style>
