<template>
  <header :class="className">
    <slot></slot>
  </header>
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
