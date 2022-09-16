<template>
  <LinkBase
    link="#"
    text="Veja outros resultados"
    className="flex items-center text-xs text-link"
  >
    <template slot="left">
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11.996h12M7 18l-6-6 6-6"
          stroke="#4C5561"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </LinkBase>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
