<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    className: {
      type: String
    }
  }
})
</script>
