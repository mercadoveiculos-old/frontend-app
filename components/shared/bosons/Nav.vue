<template>
  <nav :class="className">
    <slot></slot>
  </nav>
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
