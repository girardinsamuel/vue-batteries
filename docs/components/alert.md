# Alert

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

- `closable` ***Boolean*** (*optional*) `default: true` 

  This Boolean property indicates that the user cannot interact with the control. 

- `status` ***String*** (*optional*) `default: null` 

- `classes` ***Object*** (*optional*) `default: [object Object]` 

- `v-model` ***Boolean*** (*optional*) `default: true` 

  Use this directive to create two-way data bindings with the component.
  It automatically picks the correct way to update the element based on the input type. 
