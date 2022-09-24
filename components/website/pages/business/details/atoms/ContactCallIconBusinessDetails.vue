<template>
  <CellPhoneIcon v-if="contact.type === 'cell-phone-number'" />
  <PhoneCallIcon v-else />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PhoneReplica } from '@/models'

export default Vue.extend({
  props: {
    contact: {
      type: Object as PropType<PhoneReplica>,
      required: true
    }
  }
})
</script>
