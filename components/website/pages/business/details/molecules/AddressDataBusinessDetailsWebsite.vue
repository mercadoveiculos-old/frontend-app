<template>
  <div class="flex flex-1 items-start justify-between">
    <address
      class="flex xl:items-center gap-2 text-xs md:text-sm not-italic"
      itemprop="address"
      itemscope
      itemtype="https://schema.org/PostalAddress"
    >
      <img class="h-6 w-6" src="@/assets/img/icons/local-two.svg" alt="Local" />
      <div class="flex-wrap">
        <span itemprop="streetAddress">Av. J. P. F. Mendes, 339 - Centro</span>
        <span>&hyphen;</span>
        <span itemprop="addressLocality">Diamantino</span>
        <span>&hyphen;</span>
        <span itemprop="addressRegion">MT</span>
        <span>&sdot;</span>
        <span>CEP: </span>
        <span itemprop="postalCode">78.400-000</span>
        <span itemprop="addressCountry" class="hidden">BR</span>
      </div>
    </address>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
