<template>
  <div :class="className">
    <template v-for="value in totalRating">
      <RatingIcon color="#E06600" />
    </template>

    <template v-for="value in totalStarEmpty">
      <RatingIcon color="#D3D5D8" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    totalRating: {
      type: Number,
      required: true
    },
    className: {
      type: String,
      default: 'flex gap-0.5'
    }
  },
  data() {
    return {
      totalStarPerGrid: 5
    }
  },
  computed: {
    totalStarEmpty(): number {
      return this.totalStarPerGrid - this.totalRating
    }
  }
})
</script>

<style scoped></style>
