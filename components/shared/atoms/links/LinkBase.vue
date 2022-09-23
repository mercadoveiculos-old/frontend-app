<template>
  <a
    v-if="rel"
    :href="link"
    :rel="rel"
    :class="className"
    :title="title ?? text"
  >
    <slot name="left" /> {{ text }} <slot name="right" />
  </a>

  <a v-else :href="link" :rel="rel" :class="className" :title="title ?? text">
    <slot name="left" /> {{ text }} <slot name="right" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    rel: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'text-sm text-primary font-medium'
    }
  }
})
</script>
