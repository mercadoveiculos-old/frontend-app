<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    ;(this as any).$testPluginMP('123469')
  }
})
</script>

<style scoped></style>
