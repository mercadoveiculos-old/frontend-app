<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m9.416 6.396-2.748.315-.098.418.54.091c.352.077.422.194.345.516L6.57 11.55c-.233.986.126 1.45.97 1.45.653 0 1.413-.277 1.757-.658l.106-.457c-.24.194-.59.27-.823.27-.33 0-.45-.212-.365-.586l1.201-5.173ZM9.5 4.1c0 .291-.126.571-.351.777-.226.206-.53.322-.849.322-.318 0-.624-.116-.849-.322A1.055 1.055 0 0 1 7.1 4.1c0-.292.126-.572.351-.778.225-.206.53-.322.849-.322.318 0 .623.116.849.322.225.206.351.486.351.778Z"
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
      default: '#4169BD'
    },

    width: {
      type: String,
      default: '16'
    },

    height: {
      type: String,
      default: '16'
    }
  }
})
</script>
