<template>
  <Section v-if="showSection">
    <H2BusinessDetailsWebsite title="Formas de pagamento aceitas" />

    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3 mt-6">
      <li
        v-for="(payment, index) in $payments"
        :key="index"
        class="bg-gray-main-100 md:bg-gray-main-200 text-sm md:text-base text-primary p-2 rounded font-medium"
      >
        {{ payment.name }}
      </li>
    </ul>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import { businessReading } from '@/store'
import { PaymentReplica } from '@/models'

export default Vue.extend({
  data() {
    return {
      showSection: false
    }
  },

  computed: {
    $payments(): PaymentReplica {
      const payments = businessReading.$payments || []
      return (this as any)._.orderBy(payments, ['position'], ['asc'])
    }
  },

  mounted() {
    const payments = Object.entries(this.$payments)
    if (payments.length > 0) {
      this.showSection = true
    }
  }
})
</script>

<style scoped></style>
