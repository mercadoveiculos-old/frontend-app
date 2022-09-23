<template>
  <h2 :class="className">
    {{ title }}
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'text-2xl md:text-3xl font-montserrat text-primary font-semibold'
    }
  }
})
</script>
