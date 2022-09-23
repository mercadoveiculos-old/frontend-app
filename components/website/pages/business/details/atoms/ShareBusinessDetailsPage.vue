<template>
  <div>
    <button
      class="flex items-center text-sm md:text-xs text-secondary"
      @click.prevent="openModalActive"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m20 11.778-7.111 5.333v-3.555c-4.115-.509-6.023.158-8.889 2.666C6.224 11.548 8.162 10.17 12.889 10V6L20 11.778Z"
          stroke="#4C5561"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
      Compartilhar
    </button>

    <ModalShareBusinessDetailsPage
      v-if="$isModalActive && $isNameModal == modalName"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { modal } from '@/store'

export default Vue.extend({
  data() {
    return {
      modalName: 'ModalShareBusinessDetailsPage'
    }
  },
  computed: {
    $isNameModal() {
      return modal.$isNameModal
    },
    $isModalActive() {
      return modal.$isModalActive || false
    }
  },
  methods: {
    openModalActive() {
      modal.toggle()
      modal.setNameModal(this.modalName)
    }
  }
})
</script>
