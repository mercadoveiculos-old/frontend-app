<template>
  <div class="flex flex-col">
    <ContactPhoneBusinessDetails
      v-for="(phone, index) in $phones"
      :key="index"
      :contact="phone"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { businessReading } from '@/store'
import { PhoneReplica } from '@/models'

export default Vue.extend({
  computed: {
    $phones(): PhoneReplica | never[] {
      const phones = businessReading.$phones || null
      if (phones) return (this as any)._.orderBy(phones, ['position'], ['asc'])
      return []
    }
  }
})
</script>
