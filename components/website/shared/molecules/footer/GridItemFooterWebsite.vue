<template>
  <div>
    <h6 class="text-base text-gray-600">{{ title }}</h6>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
