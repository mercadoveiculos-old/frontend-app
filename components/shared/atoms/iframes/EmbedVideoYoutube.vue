<template>
  <iframe
    :class="className"
    :src="url"
    loading="lazy"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    className: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped></style>
