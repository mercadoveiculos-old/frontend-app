<template>
  <main :class="className">
    <slot></slot>
  </main>
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
