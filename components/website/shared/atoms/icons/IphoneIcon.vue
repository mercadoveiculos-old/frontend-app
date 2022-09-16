<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <title>IphoneIcon</title>
      <path
        d="M9.9 5.65a.75.75 0 0 0 0 1.5v-1.5Zm1.6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2.4 9.7a.75.75 0 0 0 0 1.5v-1.5Zm3.2 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.7 4.75h8v-1.5h-8v1.5Zm8 0a.45.45 0 0 1 .45.45h1.5a1.95 1.95 0 0 0-1.95-1.95v1.5Zm.45.45v13.6h1.5V5.2h-1.5Zm0 13.6a.45.45 0 0 1-.45.45v1.5a1.95 1.95 0 0 0 1.95-1.95h-1.5Zm-.45.45h-8v1.5h8v-1.5Zm-8 0a.45.45 0 0 1-.45-.45h-1.5a1.95 1.95 0 0 0 1.95 1.95v-1.5Zm-.45-.45V5.2h-1.5v13.6h1.5Zm0-13.6a.45.45 0 0 1 .45-.45v-1.5A1.95 1.95 0 0 0 4.75 5.2h1.5ZM9.9 7.15h1.6v-1.5H9.9v1.5Zm-.8 11.2h3.2v-1.5H9.1v1.5Z"
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
      default: '#4C5561'
    },

    width: {
      type: String,
      default: '25'
    },

    height: {
      type: String,
      default: '24'
    }
  }
})
</script>
