<template>
  <div id="app">
    <CellAlert>
      I am an alert !
    </CellAlert>
    <CellAlert :closable="false" class="mt-2">
      I am an alert not closable !
    </CellAlert>
  </div>
</template>
