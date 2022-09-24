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
        <span itemprop="streetAddress"
          >{{ $address.street }} <span v-show="$address.number">,</span>
          {{ $address.number }} - {{ $address.neighborhood }}</span
        >
        <span v-show="$address.complement">
          &hyphen; {{ $address.complement }}</span
        >
        <span>&hyphen;</span>
        <span itemprop="addressLocality">{{ $address.city }}</span>
        <span>&hyphen;</span>
        <span itemprop="addressRegion">{{ $address.state }}</span>
        <span>&sdot;</span>
        <span>CEP: </span>
        <span itemprop="postalCode">{{ $address.cep }}</span>
        <span itemprop="addressCountry" class="hidden">BR</span>
      </div>
    </address>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { businessReading } from '@/store'
import { AddressReplica } from '@/models'

export default Vue.extend({
  computed: {
    $address(): AddressReplica | never[] {
      return businessReading.$address || []
    }
  }
})
</script>
