<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <title>Seta para cima a direita</title>
      <path
        d="M7.97 14.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM17 7h.75a.75.75 0 0 0-.75-.75V7Zm-9-.75a.75.75 0 0 0 0 1.5v-1.5ZM16.25 16a.75.75 0 0 0 1.5 0h-1.5Zm-7.22.03 8.5-8.5-1.06-1.06-8.5 8.5 1.06 1.06ZM8 7.75h9v-1.5H8v1.5ZM16.25 7v9h1.5V7h-1.5Z"
        :fill="color"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: '#DADDE2'
    },

    width: {
      type: String,
      default: '24'
    },

    height: {
      type: String,
      default: '24'
    }
  }
})
</script>
