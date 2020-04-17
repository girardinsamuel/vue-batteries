<template>
  <div>
    <p>
      {{ 'I am a long message which could be truncated' | truncate(10, '...') }}
    </p>
    <p>{{ '123456789' | truncate(5, '###') }}</p>
    <p>{{ '123456789' | truncate(5, '#') }}</p>
  </div>
</template>
