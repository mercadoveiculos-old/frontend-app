<template>
  <div v-if="timerDisplay" class="flex items-center gap-2">
    <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.994 1.833A6.663 6.663 0 0 0 1.334 8.5c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0 0 14.667 8.5a6.67 6.67 0 0 0-6.673-6.667Zm.007 12A5.332 5.332 0 0 1 2.667 8.5a5.332 5.332 0 0 1 5.334-5.333A5.332 5.332 0 0 1 13.334 8.5a5.332 5.332 0 0 1-5.333 5.333Zm-.147-8.666h-.04a.478.478 0 0 0-.48.48v3.146c0 .234.12.454.327.574l2.766 1.66c.227.133.52.066.654-.16a.474.474 0 0 0-.167-.66l-2.58-1.534V5.647a.478.478 0 0 0-.48-.48Z"
        fill="#4C5561"
      />
    </svg>
    <span :class="className">{{ text }} {{ timerDisplay }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'Código expira em'
    },
    className: {
      type: String,
      default: 'text-xs text-dark-main-400'
    },
    duration: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      timerDisplay: ''
    }
  },
  mounted() {
    this.startTimer(60 * Number(this.duration))
  },
  methods: {
    startTimer(duration: number): void {
      let timer: number = duration
      let minutes, seconds
      setInterval(() => {
        const timerDevider: string = String(timer / 60)
        const timerModule: string = String(timer % 60)
        minutes = parseInt(timerDevider, 10)
        seconds = parseInt(timerModule, 10)
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        this.timerDisplay = `${minutes}:${seconds}`
        if (--timer < 0) {
          timer = duration
        }
      }, 1000)
    }
  }
})
</script>
