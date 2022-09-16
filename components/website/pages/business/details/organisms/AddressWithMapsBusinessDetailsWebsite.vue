<template>
  <Section>
    <H2BusinessDetailsWebsite title="Endereço" />
    <address class="mt-5">
      <span class="text-xs md:text-sm not-italic"
        >Av. Irmão Miguel Abib - Centro, Diamantino - MT, 78400-000</span
      >
    </address>
    <div class="w-full h-80 md:h-96 bg-blue-200">
      <!-- <gmapsMap :options="mapOptions" /> -->

      <gmaps-map :options="mapOptions">
        <gmaps-info-window :options="options">
          <p>MOTORAMA RETÍFICA DE MOTORES</p>
        </gmaps-info-window>
      </gmaps-map>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import { gmapsMap, gmapsInfoWindow } from 'x5-gmaps'

export default Vue.extend({
  components: {
    gmapsMap,
    gmapsInfoWindow
  },

  data: () => ({
    options: {
      position: { lat: -14.4068349, lng: -56.43942209999999 }
    },
    mapOptions: {
      center: { lat: -14.4068349, lng: -56.43942209999999 },
      zoom: 18
    }
  })
})
</script>

<style scoped></style>
