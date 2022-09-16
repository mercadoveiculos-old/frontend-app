<template>
  <section
    v-if="$isModalActive"
    @click.prevent="toggleModalActive"
    class="fixed inset-0 overflow-y-auto h-full w-full bg-gray-900 bg-opacity-95 z-50"
  >
    <div :class="classNameModal">
      <header class="flex p-4 justify-between">
        <div class="flex items-center flex-1 gap-2">
          <slot name="header"></slot>
          <img v-if="iconTitle" :src="iconTitle" alt="Icon" />
          <h3 v-if="title" :class="classNameTitle">
            {{ title }}
          </h3>
        </div>
        <button @click.prevent="closeModalActive" title="Fechar">
          <svg
            width="25"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.68 5.71a1.032 1.032 0 0 0-1.44 0l-4.991 4.88L7.257 5.7a1.032 1.032 0 0 0-1.439 0 .982.982 0 0 0 0 1.41L10.81 12l-4.992 4.89a.982.982 0 0 0 0 1.41c.398.39 1.041.39 1.44 0l4.991-4.89 4.992 4.89c.398.39 1.04.39 1.439 0a.982.982 0 0 0 0-1.41L13.688 12l4.992-4.89a.988.988 0 0 0 0-1.4Z"
              fill="#000"
              fill-opacity=".54"
            />
          </svg>
        </button>
      </header>
      <hr v-if="dividerHeader" />
      <!-- Body -->
      <div class="p-4 my-4 mb-8">
        <slot name="body"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { modal } from '@/store'

export default Vue.extend({
  props: {
    iconTitle: {
      type: String
    },
    title: {
      type: String
    },
    classNameTitle: {
      type: String,
      default: 'flex-1 text-base text-primary font-semibold'
    },
    classNameModal: {
      type: String,
      default:
        'w-11/12 md:w-8/12 lg:w-5/12 mx-auto bg-white rounded mt-20 shadow-md'
    },
    dividerHeader: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    $isModalActive() {
      return modal.$isModalActive || false
    }
  },

  methods: {
    toggleModalActive(event: any): void {
      if (event.target === event.currentTarget) {
        modal.toggle()
      }
    },

    closeModalActive(): void {
      modal.toggle()
    }
  }
})
</script>
