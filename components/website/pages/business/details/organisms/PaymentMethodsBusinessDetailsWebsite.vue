<template>
  <Section>
    <H2BusinessDetailsWebsite title="Formas de pagamento aceitas" />

    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3 mt-6">
      <li
        class="bg-gray-main-100 md:bg-gray-main-200 text-sm md:text-base text-primary p-2 rounded font-medium"
        v-for="(payment, index) in payments"
      >
        {{ payment }}
      </li>
    </ul>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      payments: [
        'Cartão de Crédito',
        'Cartão de Débito',
        'Boleto Bancário',
        'PIX',
        'Cheque',
        'Dinheiro',
        'Transferência Bancária',
        'MasterCard',
        'Visa',
        'Vale Refeição',
        'Vale Alimentação'
      ]
    }
  }
})
</script>

<style scoped></style>
