<template>
  <div
    id="component-header"
    class="relative"
    @mouseenter="enterHeader"
    @mouseleave="leaveHeader"
  >
    <HeaderDesktopWebsite />
    <HeaderMobileWebsite />
    <HeaderFixedDesktopWebsite />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    enterHeader(e: any): void {
      console.log('entrou')
      console.log(e)

      console.log(e.srcElement.id)
    },
    leaveHeader(e: any): void {
      console.log('saiu')
    }
  }
})
</script>
