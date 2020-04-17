<template>
  <div>
    <MyAlert title="Alert title" closable class="mb-2"
      >Alert description</MyAlert
    >
    <MyAlert title="Alert title" :closable="false" class="mb-2"
      >Alert description</MyAlert
    >
    <MyAlert title="Alert title" status="success">Alert description</MyAlert>
  </div>
</template>
