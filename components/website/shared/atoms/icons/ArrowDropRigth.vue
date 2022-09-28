<template>
  <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m2.606.954 3.948 3.968a1.531 1.531 0 0 1 0 2.16L2.606 11.05C1.646 12.015 0 11.325 0 9.962V2.027C0 .663 1.646-.011 2.606.954Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: '#E06600'
    }
  }
})
</script>
