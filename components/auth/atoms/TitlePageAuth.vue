<template>
  <h2 class="text-2xl font-montserrat font-medium text-primary">
    {{ title || '' }}
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inject: ['title']
})
</script>
