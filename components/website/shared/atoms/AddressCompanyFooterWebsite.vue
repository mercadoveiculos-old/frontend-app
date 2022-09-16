<template>
  <span :class="className">
    © 2022 MercadoVeiculos.com Atividades de Internert LTDA. 58.067.681/0001-95
    Rua Alm. Batista das Neves, 845 - Diamantino, MT - 78400-000
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    className: {
      default: 'text-sm text-gray-400'
    }
  }
})
</script>

<style scoped></style>
