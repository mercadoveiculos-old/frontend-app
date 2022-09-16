<template>
  <div class="w-full md:w-10/12 my-6">
    <div class="flex gap-2">
      <div>
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <title>Info</title>
            <path
              d="M12 20c2.21 0 4.21-.895 5.657-2.343A7.975 7.975 0 0 0 20 12c0-2.21-.895-4.21-2.343-5.657A7.975 7.975 0 0 0 12 4c-2.21 0-4.21.895-5.657 2.343A7.975 7.975 0 0 0 4 12c0 2.21.895 4.21 2.343 5.657A7.975 7.975 0 0 0 12 20Z"
              stroke="#4169BD"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
              fill="#4169BD"
            />
            <path
              d="M12.2 16v-5.6h-.8M10.8 16h2.8"
              stroke="#4169BD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>

      <div class="flex flex-col md:flex-row gap-2">
        <p class="text-xs flex-1">
          Venha conhecer o mais moderno Lava Jato Brilho Car, localizado na Zona
          Norte, amplo estacionamento e serviços de primeira qualidade que
          oferece o máximo de requinte para sua satisfação.
        </p>
        <div class="flex gap-1 items-center justify-end md:justify-start">
          <svg
            width="7"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.606.954 3.948 3.968a1.531 1.531 0 0 1 0 2.16L2.606 11.05C1.646 12.015 0 11.325 0 9.962V2.027C0 .663 1.646-.011 2.606.954Z"
              fill="#E06600"
            />
          </svg>

          <NuxtLink
            to="#"
            class="text-xs text-primary-main-normal"
            v-scroll-to="'#learn-more'"
            rel="nofollow"
            >Saiba mais</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
