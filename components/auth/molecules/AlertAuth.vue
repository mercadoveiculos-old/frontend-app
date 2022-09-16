<template>
  <div
    class="flex gap-3 border border-red-main-800 bg-white mx-6 lg:mx-0 px-4 py-2 rounded-md mb-2 lg:mb-6"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8227 3.47691L21.8727 19.2162C21.9561 19.3612 22 19.5257 22 19.6932C22 19.8606 21.9561 20.0251 21.8727 20.1701C21.7893 20.3151 21.6694 20.4355 21.525 20.5193C21.3806 20.603 21.2168 20.6471 21.05 20.6471H2.95001C2.78324 20.6471 2.61942 20.603 2.475 20.5193C2.33058 20.4355 2.21065 20.3151 2.12727 20.1701C2.04389 20.0251 2 19.8606 2 19.6932C2 19.5257 2.0439 19.3612 2.12728 19.2162L11.1773 3.47691C11.2607 3.33191 11.3806 3.2115 11.525 3.12779C11.6694 3.04407 11.8332 3 12 3C12.1668 3 12.3306 3.04407 12.475 3.12779C12.6194 3.2115 12.7393 3.33191 12.8227 3.47691V3.47691ZM4.59546 18.7393H19.4045L12 5.86165L4.59546 18.7393V18.7393ZM11.05 15.8776H12.95V17.7854H11.05V15.8776ZM11.05 9.20029H12.95V13.9698H11.05V9.20029Z"
        fill="#F10000"
      />
    </svg>

    <div>
      <h3 class="text-base text-red-main-800 font-semibold">
        Houve um problema
      </h3>
      <span class="text-xs text-primary"
        >Não encontramos uma conta associada a este endereço de e-mail</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
