<template>
  <div>
    <div class="py-4">
      <div class="flex justify-center border-b w-full">
        <span class="-mb-4 flex items-center text-xs p-2 bg-white"
          >Novo no Mercado Veículos?
        </span>
      </div>
    </div>

    <NuxtLink
      to="/criar-conta"
      class="btn md:btn:small lg:btn:small btn-primary-outline"
      >Crie sua conta, é gratuito</NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
