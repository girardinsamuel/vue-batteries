<template>
  <svgicon
    :class="{
      [$options.name]: true,
      [`${$options.name}--${size}`]: size,
    }"
    :name="name">
  </svgicon>
</template>

<script>
export default {
  name: 'Icon2',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
  },
  created() {
    // The `[request]` placeholder is replaced
    // by the filename of the file which is
    // loaded (e.g. `AppIcon-music.js`).
    import(/* webpackChunkName: "AppIcon-[request]" */ `./icons/${this.name}`)
  },
};
</script>

<style>
.AppIcon {
  display: inline-block;
  height: 1em;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
}

.AppIcon--fill {
  fill: currentColor;
  stroke: none;
}

.AppIcon--s {
  height: 0.5em;
}

.AppIcon--m {
  height: 1em;
}

.AppIcon--l {
  height: 3em;
}
</style>