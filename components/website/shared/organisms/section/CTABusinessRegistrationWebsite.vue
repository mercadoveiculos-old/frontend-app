<template>
  <section
    :id="IDName"
    class="bg-gray-main-200 border-t border-primary-main-200 py-16 lg:py-20"
    @mouseenter="handleEventEnter"
    @mouseleave="handleEventLeave"
    @touchstart="handleEventEnter"
    @touchend="handleEventLeave"
  >
    <div class="container flex flex-col gap-10 md:gap-12">
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-main-normal font-montserrat space-y-5"
      >
        <div>Cadastre seu negócio,</div>
        <div class="text-secondary-button font-extrabold">é grátis!</div>
      </h1>
      <p
        class="font-semibold text-secondary font-montserrat text-3xl md:text-4xl"
      >
        Ajude o seu cliente a te encontrar
      </p>
      <button
        class="btn-cta flex items-center justify-center gap-3 bg-green-main-800 text-white font-montserrat font-semibold text-2xl w-full md:w-56 hover:bg-green-main-900 py-3.5"
      >
        Saiba mais
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.1 5H19m0 0v9.9M19 5 5 19"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import handleEventEnter from '@/mixins/handleEventEnter'
import handleEventLeave from '@/mixins/handleEventLeave'

export default Vue.extend({
  mixins: [handleEventEnter, handleEventLeave],
  data() {
    return {
      IDName: 'CTABusinessRegistrationWebsite'
    }
  },
  mounted() {
    ;(this as any).handleEventEnter()
    ;(this as any).handleEventLeave()
  }
})
</script>
