# Button

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

- `mode` ***String*** (*optional*) `default: 'fill'` 

- `variant` ***String*** (*optional*) `default: null` 

- `leading-icon` ***String*** (*optional*) `default: ''` 

- `trailing-icon` ***String*** (*optional*) `default: ''` 

- `block` ***Boolean*** (*optional*) `default: false` 

- `loading` ***Boolean*** (*optional*) `default: false` 

- `disabled` ***Boolean*** (*optional*) `default: false` 

- `classes` ***Object*** (*optional*) `default: [object Object]` 

- `to` ***Object*** (*optional*) `default: [object Object]` 
