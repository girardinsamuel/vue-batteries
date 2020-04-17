<template>
  <div>
    <MyAlert2 title="Alert title" closable class="mb-2"
      >Alert description</MyAlert2
    >
    <MyAlert2 title="Alert title" :closable="false" class="mb-2"
      >Alert description</MyAlert2
    >
    <MyAlert2 title="Alert title" status="success">Alert description</MyAlert2>
  </div>
</template>
