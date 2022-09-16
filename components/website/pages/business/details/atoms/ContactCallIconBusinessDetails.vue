<template>
  <PhoneCallIcon v-if="contact.type === 'fixed'" />
  <IphoneIcon v-else />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
})
</script>
