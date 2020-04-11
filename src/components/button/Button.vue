<template>
  <router-link
    :to="to"
    tag="button"
    v-if="renderAsRouterLink"
    :class="buttonClass"
    :disabled="disabled"
  >
    <slot
      name="leadingIcon"
      :leadingIcon="leadingIcon"
      :leadingIconClass="leadingIconClass"
      :loading="loading"
    >
      <icon
        v-if="leadingIcon || loading"
        :name="loading ? 'loading' : leadingIcon"
        :class="leadingIconClass"
      />
    </slot>
    <span><slot /></span>
    <slot
      name="trailingIcon"
      :trailingIcon="trailingIcon"
      :trailingIconClass="trailingIconClass"
      :loading="loading"
    >
      <icon
        v-if="trailingIcon"
        :name="trailingIcon"
        :class="trailingIconClass"
      />
    </slot>
  </router-link>

  <button v-else type="button" :class="buttonClass" :disabled="disabled">
    <slot
      name="leadingIcon"
      :leadingIcon="leadingIcon"
      :leadingIconClass="leadingIconClass"
      :loading="loading"
    >
      <CellIcon
        v-if="leadingIcon || loading"
        :name="loading ? 'loading' : leadingIcon"
        :class="leadingIconClass"
      />
    </slot>
    <span><slot /></span>
    <slot
      name="trailingIcon"
      :trailingIcon="trailingIcon"
      :trailingIconClass="trailingIconClass"
      :loading="loading"
    >
      <icon
        v-if="trailingIcon"
        :name="trailingIcon"
        :class="trailingIconClass"
      />
    </slot>
  </button>
</template>

<script>
// <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//   <svg class="fill-current w-4 h-4 mr-2"></svg>
//   <span>Download</span>
// </button>
import { useButton } from './api'
import propsButton from './props'

export default {
  mixins: [propsButton],
  computed: {
    isRouterLinkComponentAvailable() {
      return !!(
        this.$options.components.RouterLink || this.$options.components.NuxtLink
      )
    },
    renderAsRouterLink() {
      return this.isRouterLinkComponentAvailable && this.to
    }
  },
  setup(props, context) {
    return {
      ...useButton(props, context)
    }
  }
}
</script>
