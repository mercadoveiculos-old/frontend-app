<template>
  <button class="flex gap-1.5 1 btn btn-primary cursor-pointer">
    <svg
      class="hidden sm:block"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14 10 6.5-6.25M14 3.5h6.5V10"
        stroke="#FFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.188 4.897a1 1 0 0 1 .874.515l1.223 2.203a1 1 0 0 1 .02.933l-1.178 2.357s.342 1.755 1.77 3.185c1.43 1.429 3.18 1.764 3.18 1.764l2.356-1.178a1 1 0 0 1 .933.02l2.21 1.23a1 1 0 0 1 .514.873v2.537c0 1.292-1.2 2.225-2.424 1.812-2.514-.849-6.416-2.464-8.89-4.937-2.473-2.473-4.088-6.376-4.936-8.89-.413-1.224.52-2.424 1.812-2.424h2.536Z"
        stroke="#FFF"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>

    <span>Ligar</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
})
</script>
