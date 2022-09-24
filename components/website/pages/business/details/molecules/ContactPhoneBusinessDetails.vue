<template>
  <div>
    <div v-if="hide" :class="className">
      <ContactCallIconBusinessDetails :contact="contact" />

      <div class="relative flex items-center w-full h-16">
        <span class="text-lg md:text-xl font-bold" itemprop="telephone">{{
          contact.number
        }}</span>
        <div
          class="absolute z-20 h-12 bg-gradient-to-l from-white via-white to-transparent top-0 w-9/12 right-12"
        ></div>

        <button
          class="absolute btn-secondary md:btn-secondary-sm z-30 right-1"
          @click.prevent="showContact"
        >
          Ver telefone
        </button>
      </div>
    </div>
    <client-only>
      <transition
        name="fade"
        enter-active-class="animate__animated animate__bounceIn animate__delay-200ms"
        leave-active-class="animate__animated animate__bounceIn animate__delay-200ms"
      >
        <div v-if="!hide" class="flex items-center gap-2 w-full">
          <ContactCallIconBusinessDetails :contact="contact" />

          <div
            class="relative grid grid-cols-2 gap-0 md:flex items-center w-full h-16"
          >
            <div
              class="text-lg md:text-xl font-bold text-primary"
              :class="contact.type === 'phone-number' ? 'md:mr-8' : 'md:mr-4'"
              itemprop="telephone"
            >
              {{ contact.number }}
            </div>

            <div class="flex items-center gap-3 md:gap-4">
              <BtnCallContactPhoneBusinessDetails :contact="contact" />
              <BtnWhatsAppContactPhoneBusinessDetails
                v-if="contact.whatsapp === 'Y'"
              />
              <button class="text-link hidden md:block">Copiar</button>
            </div>
          </div>
        </div>
      </transition>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PhoneReplica } from '@/models'

import 'animate.css'
export default Vue.extend({
  props: {
    contact: {
      type: Object as PropType<PhoneReplica>,
      required: true
    },
    className: {
      type: String,
      default: 'flex items-center gap-2 w-9/12 md:w-5/12'
    }
  },
  data() {
    return {
      hide: true
    }
  },
  methods: {
    showContact() {
      this.hide = false
    }
  }
})
</script>
