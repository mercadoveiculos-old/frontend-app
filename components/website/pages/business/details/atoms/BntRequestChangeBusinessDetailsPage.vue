<template>
  <div>
    <button
      class="flex items-center text-xs text-link"
      @click.prevent="openModalActive"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m13 8 3 3M5 19h3L19 8l-3-3L5 16v3Z"
          stroke="#4C5561"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Sugerir edição
    </button>
    <ModalRequestChangeBusinessDetailsPage
      v-if="$isModalActive && $isNameModal === modalName"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { modal } from '@/store'

export default Vue.extend({
  data() {
    return {
      modalName: 'ModalRequestChangeBusinessDetailsPage'
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
