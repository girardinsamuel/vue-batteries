<template>
  <div>
    <h1>Example route</h1>
    <CellButton variant="dark" to="/">
      <template #leadingIcon="{leadingIconClass}">
        <svg
          :class="[leadingIconClass, 'mr-2']"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </template>
      Go back
    </CellButton>
  </div>
</template>
