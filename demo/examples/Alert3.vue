<template>
  <div id="app">
    <CellAlert>
      I am an alert !
      <template #close="{ close }"
        ><a class="text-xs cursor-pointer" @click="close">Close</a></template
      >
    </CellAlert>
  </div>
</template>
