<template>
  <article :class="className">
    <slot></slot>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    className: {
      type: String,
      default: ''
    }
  }
})
</script>
