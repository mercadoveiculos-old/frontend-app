<template>
  <span>
    <template v-if="status === 'closed'">
      <span class="text-sm font-medium text-red-main-700"> Fechado </span>
    </template>
    <template v-else-if="status === 'soon'">
      <span class="text-sm font-medium text-secondary-main-normal">
        Fecha em breve
      </span>
    </template>
    <template v-else-if="status === 'closed_lunch'">
      <span class="text-sm font-medium text-orange-500">
        Fechado para almoço
      </span>
    </template>
    <template v-else>
      <span class="text-sm font-medium text-green-600"> Aberto agora </span>
    </template>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    status: {
      type: String,
      required: true
    }
  }
})
</script>
