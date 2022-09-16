<template>
  <a
    :href="link"
    :title="text"
    class="btn lg:btn max-h-10 lg:max-h-8 bg-white gap-x-1 border-facebook border border-opacity-80 hover:border-opacity-30 font-medium"
    :class="className"
  >
    <slot />
    {{ text }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped></style>
