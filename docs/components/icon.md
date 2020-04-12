# Icon

This component is a simple alert box which can be closed and display different status.

## Installation

## Configuration

## Examples

```vue @demo
<template>
  <div>
    <button @click="alert = !alert">Toggle alert</button>
    <CellAlert v-model="alert"> I can be toggled {{ $version }} </CellAlert>
  </div>
</template>

<script>
export default {
  data: () => ({
    alert: false
  })
}
</script>
```

## API

### props 

- `name` ***String*** (*optional*) 

- `loading` ***Boolean*** (*optional*) `default: false` 
