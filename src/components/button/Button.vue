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

  <button v-else :class="buttonClass" :disabled="disabled" v-on="$listeners">
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
// <button class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
//   <svg class="w-4 h-4 mr-2 fill-current"></svg>
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
