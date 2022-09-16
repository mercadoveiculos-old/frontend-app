<template>
  <a v-if="rel" :href="link" :rel="rel" :class="className" :title="title">
    <slot></slot>
  </a>
  <a v-else :href="link" :rel="rel" :class="className" :title="title">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String
    },
    rel: {
      type: String
    },
    link: {
      type: String
    },
    className: {
      type: String,
      default: 'text-sm text-primary font-medium'
    }
  }
})
</script>
