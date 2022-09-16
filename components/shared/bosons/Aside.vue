<template>
  <aside :class="className">
    <slot></slot>
  </aside>
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
