<template>
  <button :type="typeButton" :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    typeButton: {
      type: String,
      default: 'submit'
    },
    className: {
      type: String,
      default: 'btn-primary mt-4 font-medium text-white font-montserrat'
    }
  }
})
</script>
