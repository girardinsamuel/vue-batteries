<template>
  <div id="app">
    <CellAlert status="error" class="mb-2" no-styling>
      I am an alert not styled.
    </CellAlert>
    <hr />
    <CellAlert
      status="error"
      class="mb-2"
      :classes-override="{
        container: {
          base:
            'flex items-center justify-between px-3 py-2 bg-gray-300 border-l-4',
          error: 'bg-red-200 text-red-600 border-red-600'
        },
        content: 'flex items-center',
        close: 'text-md'
      }"
    >
      <CellIcon name="close-circle" class="w-4 h-4 mr-2 text-red-600" />
      I am a redesigned alert
    </CellAlert>
  </div>
</template>
