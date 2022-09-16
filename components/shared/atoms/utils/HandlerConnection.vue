<template>
  <div v-if="$nuxt.isOffline">
    <div
      class="absolute top-0 left-0 right-0 text-center bg-yellow-100 border text-sm text-primary rounded-br-md rounded-bl-md border-yellow-300 z-50 w-64 md:w-72 lg:w-96 mx-auto"
    >
      Não conectado. Conectando em 1s…
    </div>
  </div>
</template>
