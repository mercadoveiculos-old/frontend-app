<template>
  <svg width="27" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m18.546 11.106-3.968 3.948a1.531 1.531 0 0 1-2.16 0L8.45 11.106c-.965-.96-.275-2.606 1.088-2.606h7.936c1.363 0 2.037 1.646 1.072 2.606Z"
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
