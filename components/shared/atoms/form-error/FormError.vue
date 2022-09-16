<template>
  <div v-if="errors && errors[0]" class="flex text-xs">
    <LineInfoIcon color="#FF0D00" />
    <span class="text-xs text-red-main-700"> {{ errors[0] }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    errors: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped></style>
