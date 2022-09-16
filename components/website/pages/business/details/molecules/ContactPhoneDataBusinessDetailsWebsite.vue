<template>
  <div class="flex flex-col">
    <ContactPhoneBusinessDetails
      v-for="(contact, index) in dataContact"
      :key="index"
      :contact="contact"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      dataContact: [
        {
          type: 'mobile',
          number: '(65) 9 9999-9999',
          whatsapp: true
        },
        {
          type: 'fixed',
          number: '(65) 3336-0000',
          whatsapp: false
        }
      ]
    }
  }
})
</script>
