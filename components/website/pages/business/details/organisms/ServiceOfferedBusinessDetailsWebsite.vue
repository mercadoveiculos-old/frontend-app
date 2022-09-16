<template>
  <Section>
    <H2BusinessDetailsWebsite title="Serviços oferecidos" />
    <div class="flex gap-4 my-7">
      <CategoryServiceOfferedServiceBusinessWebsite
        v-for="(category, index) in categories"
        :key="index"
        :text="category"
      />
    </div>

    <div class="flex gap-4 flex-wrap">
      <TagServiceOfferedBusinessDetailsWebsite
        v-for="(tag, index) in tags"
        :key="index"
        :text="tag"
      />
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      categories: ['Retífica de motores', 'Oficina'],
      tags: [
        'cabeçote',
        'motor diesel',
        'peças e serviços automotivos',
        'reconstrução de motor',
        'retífica de motor diesel',
        'retífica de motor para carro',
        'retífica de motor para moto',
        'serviço de retífica motor',
        'serviço de retífica veículo nacional'
      ]
    }
  }
})
</script>
