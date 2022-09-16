<template>
  <section
    id="component-data-service"
    @mouseenter="enterMainService"
    @mouseleave="leaveMainService"
  >
    <div itemscope itemtype="https://schema.org/LocalBusiness">
      <HeaderMainDataBusinessDetailsWebsite />

      <!-- Data -->
      <div class="flex flex-col gap-y-7 md:gap-y-5">
        <CategoryWithRatingDataBusinessDetailsWebsite />
        <AdressesDataBusinessDetailsWebsite />
        <ContactPhoneDataBusinessDetailsWebsite />
      </div>
    </div>

    <!-- Horarios de Atendimento -->
    <OpeningHoursDataBusinessDetailsWebsite />

    <!-- Descricao -->
    <DescriptionDataBusinessDetailsWebsite />

    <!-- Links / botoes -->
    <ButtonsLinksDataBusinessDetailsWebsite />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    enterMainService(e: any): void {
      console.log('entrou')
      console.log(e)

      console.log(e.srcElement.id)
    },
    leaveMainService(e: any): void {
      console.log('saiu')
    }
  }
})
</script>
