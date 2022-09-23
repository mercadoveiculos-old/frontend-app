<template>
  <section v-show="showSection">
    <H2BusinessDetailsWebsite title="Saiba mais" />
    <div class="w-full lg:w-11/12 text-base mt-5">
      {{ $description }}
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { businessReading } from '@/store'

export default Vue.extend({
  data() {
    return {
      showSection: false
    }
  },

  computed: {
    $description(): string | null {
      return businessReading.$attributes.description || null
    }
  },

  mounted() {
    if (this.$description) this.showSection = true
  }
})
</script>
