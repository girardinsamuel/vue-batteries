<template>
  <div>
    <p>{{ 0 | filesize }}</p>
    <p>{{ 1000 | filesize }}</p>
    <p>{{ (1000 * 15) | filesize }}</p>
    <p>{{ 345 | filesize }}</p>
    <p>{{ 258464684 | filesize }}</p>
  </div>
</template>
