<template>
  <div :class="className">
    <svg width="27" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>Estrela</title>
        <path
          d="m13.5 0 3.73 8.367 9.11.961-6.805 6.133 1.9 8.96-7.935-4.576-7.935 4.577 1.9-8.961L.662 9.328l9.11-.961L13.5 0Z"
          fill="#E06600"
        />
      </g>
    </svg>
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default:
        'flex items-center gap-2 py-1 px-2 bg-primary-main-50 rounded-full text-base text-primary'
    }
  }
})
</script>
