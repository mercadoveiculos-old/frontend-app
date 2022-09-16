<template>
  <div :class="className">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>Check</title>
        <path
          d="m9.2 12 2.1 2.1 4.2-4.2M12 19a6.978 6.978 0 0 0 4.95-2.05A6.978 6.978 0 0 0 19 12a6.978 6.978 0 0 0-2.05-4.95A6.978 6.978 0 0 0 12 5a6.978 6.978 0 0 0-4.95 2.05A6.978 6.978 0 0 0 5 12c0 1.933.784 3.683 2.05 4.95A6.978 6.978 0 0 0 12 19Z"
          stroke="#044506"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
    <span class="lowercase">{{ text }}</span>
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
        'flex items-center gap-0.5 py-0.5 px-2 bg-white border border-dark-main-100 rounded-full text-sm text-primary'
    }
  }
})
</script>
