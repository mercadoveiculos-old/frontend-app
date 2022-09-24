<template>
  <client-only>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
      :duration="1000"
    >
      <header
        v-if="
          (showHeader === true && windowTop > 1280 && $screen.md) ||
          (showHeader === true && windowTop > 680 && $screen.lg)
        "
        class="hidden md:block h-16 lg:h-20 bg-white w-full shadow-4dp top-0 fixed z-50 transition duration-1000"
      >
        <div class="container flex h-full justify-end lg:grid grid-cols-2">
          <div class="hidden lg:flex items-center h-full mt-1">
            <div class="flex flex-1 flex-col -space-y-2.5">
              <span class="text-sm font-medium z-50">{{
                $fantasyName | uppercase
              }}</span>
              <ContactPhoneBusinessDetails
                :contact="contact"
                className="flex items-center gap-2 w-6/12 -ml-1"
              />
            </div>
          </div>
          <div class="flex self-center justify-end">
            <div class="flex items-center gap-4 self-baseline">
              <button class="btn btn-primary-outline flex items-center gap-1">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.85 6A3.85 3.85 0 0 0 5 9.85c0 3.85 4.55 7.35 7 8.164 2.45-.814 7-4.314 7-8.164a3.85 3.85 0 0 0-7-2.214A3.845 3.845 0 0 0 8.85 6Z"
                    stroke="#0E368A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Salvar
              </button>
              <button
                class="btn btn-primary"
                v-scroll-to="'#component-form-budget'"
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        </div>
      </header>
    </transition>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import { screen } from '@/store'

import { businessReading } from '@/store'
import { PhoneReplica } from '@/models'

export default Vue.extend({
  data() {
    return {
      showHeader: true,
      contact: {
        type: 'mobile',
        number: '(65) 9 9999-9999',
        whatsapp: true
      },
      windowTop: 0,
      timeOut: ''
    }
  },

  filters: {
    uppercase(value: string): string {
      return value.toUpperCase()
    }
  },

  computed: {
    $showHeader() {
      switch (screen.$component) {
        case 'CTABusinessRegistrationWebsite':
        case 'FooterWrapperWebsite':
          return false
        default:
          return screen.$showHeader
      }
    },

    $fantasyName(): string | null {
      return businessReading.$attributes.fantasy_name || null
    },

    $phones(): PhoneReplica | never[] {
      const phones = businessReading.$phones || null
      if (phones) return (this as any)._.orderBy(phones, ['position'], ['asc'])
      return []
    }
  },

  watch: {
    $showHeader(valNew, valOld) {
      if (valNew) {
        if ((this as any).timeOut) {
          ;(this as any).showHeader = valOld
          clearTimeout((this as any).timeOut)
        }
      }
      ;(this as any).timeOut = setTimeout(
        () => ((this as any).showHeader = valNew),
        500
      ) as any
    }
  },

  methods: {
    onScroll(): void {
      if (process.browser)
        (this as any).windowTop = (<any>window).top.scrollY || 0
    }
  },

  created(): void {
    ;(this as any).$showHeader
  },

  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', (this as any).onScroll)
    }

    console.log((this as any).$phones)
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('scroll', (this as any).onScroll)
    }
  }
})
</script>
