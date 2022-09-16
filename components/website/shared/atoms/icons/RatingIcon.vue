<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <title>Avaliação</title>
      <path
        d="m6.982.487-1.709 3.62-3.823.582c-.685.104-.96.987-.463 1.493l2.766 2.816-.654 3.978c-.118.72.607 1.258 1.214.921l3.42-1.878 3.42 1.879c.606.333 1.331-.203 1.213-.922l-.654-3.978 2.766-2.816c.497-.506.222-1.389-.463-1.493l-3.823-.582L8.483.487a.822.822 0 0 0-1.501 0Z"
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
      default: '#D3D5D8' //#E06600
    },

    width: {
      type: String,
      default: '15'
    },

    height: {
      type: String,
      default: '14'
    }
  }
})
</script>
