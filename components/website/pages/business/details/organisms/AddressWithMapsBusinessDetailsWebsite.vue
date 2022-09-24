<template>
  <Section>
    <H2BusinessDetailsWebsite title="Endereço" />
    <address class="mt-5">
      <span class="text-xs md:text-sm not-italic"
        >{{ $address.street }}<span v-show="$address.number">,</span>
        {{ $address.number }} - {{ $address.neighborhood }},
        {{ $address.city }} - {{ $address.state_name }},
        {{ $address.cep }}</span
      >
    </address>
    <div class="w-full h-80 md:h-96 bg-blue-200">
      <!-- <gmapsMap :options="mapOptions" /> -->
      <client-only>
        <gmaps-map :options="mapOptions">
          <gmaps-info-window :options="options">
            <p class="uppercase font-bold text-red-700">{{ $fantasyName }}</p>
          </gmaps-info-window>
        </gmaps-map>
      </client-only>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import { gmapsMap, gmapsInfoWindow } from 'x5-gmaps'
import { businessReading } from '@/store'
import { AddressReplica } from '@/models'

export default Vue.extend({
  components: {
    gmapsMap,
    gmapsInfoWindow
  },

  data: () => ({
    options: {
      position: {
        lat: Number(businessReading.$address.latitude) || null,
        lng: Number(businessReading.$address.longitude) || null
      }
    },
    mapOptions: {
      center: {
        lat: Number(businessReading.$address.latitude) || null,
        lng: Number(businessReading.$address.longitude) || null
      },
      zoom: 16
    }
  }),
  computed: {
    $fantasyName(): string | null | undefined {
      return businessReading.$attributes.fantasy_name || null
    },

    $address(): AddressReplica | never[] {
      return businessReading.$address || []
    }
  }
})
</script>
