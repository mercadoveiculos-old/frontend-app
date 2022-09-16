<template>
  <client-only>
    <transition
      v-if="confirmed"
      name="fade"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="1"
    >
      <ModalMessageSendWebsite />
    </transition>
    <transition
      v-else
      name="fade"
      enter-active-class="animate__animated animate__fadeIn animate__delay-700ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-700ms"
    >
      <Modal>
        <template v-slot:header>
          <div class="flex gap-2 items-center">
            <svg
              width="40"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <title>Ícon Stop</title>
                <path
                  d="M17.874 9.838v-.672a2.125 2.125 0 0 1 4.25 0v.672l.5-.177a2.125 2.125 0 0 1 2.833 2.005V21.966l.67-.849 1.841-2.336a2.13 2.13 0 0 1 3.487 2.434l-4.78 7.767a8.354 8.354 0 0 1-15.468-4.378v-9.605a2.126 2.126 0 0 1 2.833-2.005l.5.177v-1.505a2.125 2.125 0 0 1 2.834-2.005l.5.177Zm7.958 10.441v-8.613 8.613Zm-3.708-8.613v7.125h-.917V9.166a1.208 1.208 0 1 0-2.417 0v9.625h-.916v-7.125a1.209 1.209 0 0 0-2.417 0v8.791h-.917V15a1.208 1.208 0 1 0-2.416 0v9.604a7.438 7.438 0 0 0 13.77 3.899l4.78-7.767a1.214 1.214 0 0 0-1.986-1.387l-1.841 2.337c-.76.962-2.307.425-2.307-.8v-9.22a1.208 1.208 0 1 0-2.416 0Z"
                  fill="#4C5561"
                  stroke="#F10000"
                  stroke-width=".75"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.999 3.333c9.205 0 16.666 7.462 16.666 16.667 0 9.205-7.461 16.667-16.666 16.667S3.332 29.205 3.332 20c0-9.205 7.462-16.667 16.667-16.667Zm15 16.667c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.715 15 15 15 8.284 0 15-6.716 15-15Z"
                  fill="#F10000"
                />
              </g>
            </svg>
            <h3
              class="text-red-main-700 font-semibold text-2xl font-montserrat"
            >
              Verificação anti-spam
            </h3>
          </div>
        </template>
        <template v-slot:body>
          <div class="flex flex-col gap-6 mb-2 px-5">
            <h4 class="text-lg font-bold font-montserrat text-primary">
              Enviamos um código para:
            </h4>
            <p class="text-base font-semibold">william****@gmail.com</p>
            <p class="text-xs text-dark-main-400">
              Verifique se você recebeu um email contendo seu código. <br />
              Seu código tem 5 números.
            </p>

            <div class="flex flex-col gap-1.5">
              <div class="relative flex flex-col gap-1.5">
                <label for="info_code" class="label"
                  >Informe o código de 5 digitos</label
                >
                <input
                  type="text"
                  class="input"
                  :class="[showError ? 'border border-red-main-700' : '']"
                  v-model.trim="code"
                  id="info_code"
                />
                <div v-if="showError" class="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.416 6.39565L6.66795 6.71124L6.56954 7.1291L7.10955 7.22037C7.46236 7.29734 7.53196 7.4139 7.45516 7.73609L6.56954 11.5496C6.33674 12.536 6.69555 13 7.53916 13C8.19318 13 8.95279 12.7229 9.2972 12.3424L9.4028 11.885C9.16279 12.0785 8.81239 12.1555 8.57958 12.1555C8.24958 12.1555 8.12957 11.9433 8.21478 11.5694L9.416 6.39565ZM9.5 4.09963C9.5 4.39127 9.37357 4.67096 9.14852 4.87718C8.92347 5.0834 8.61824 5.19925 8.29998 5.19925C7.98171 5.19925 7.67648 5.0834 7.45143 4.87718C7.22638 4.67096 7.09995 4.39127 7.09995 4.09963C7.09995 3.80799 7.22638 3.52829 7.45143 3.32207C7.67648 3.11585 7.98171 3 8.29998 3C8.61824 3 8.92347 3.11585 9.14852 3.32207C9.37357 3.52829 9.5 3.80799 9.5 4.09963Z"
                      fill="#FF0D00"
                    />
                  </svg>
                  <small class="text-red-main-700"
                    >Código inválido, tente novamente!</small
                  >
                </div>
                <div
                  v-if="correctCode"
                  class="absolute flex items-center justify-end right-0.5 top-7 py-1 lg:py-0 mt-0 lg:-mt-0.5"
                >
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 32c3.314 0 6.314-1.343 8.485-3.515A11.963 11.963 0 0 0 32 20c0-3.314-1.343-6.314-3.515-8.485A11.963 11.963 0 0 0 20 8a11.963 11.963 0 0 0-8.485 3.515A11.963 11.963 0 0 0 8 20c0 3.314 1.343 6.314 3.515 8.485A11.963 11.963 0 0 0 20 32Z"
                      fill="#078A0C"
                      stroke="#078A0C"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="m15.2 20 3.6 3.6 7.2-7.2"
                      stroke="#fff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <button
                @click.prevent="onSend"
                class="btn font-medium mt-2"
                :class="typeClassBtnOnSubmit"
              >
                Enviar solicitação de orçamento
              </button>
            </div>
            <Timer duration="15" />
          </div>
        </template>
      </Modal>
    </transition>
  </client-only>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import Vue, { VueConstructor } from 'vue'

export default (
  Vue as VueConstructor<
    Vue & {
      $refs: {
        form: InstanceType<typeof ValidationProvider>
      }
    }
  >
).extend({
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      salvedCode: 12345,
      code: '',
      showError: false,
      confirmed: false,
      correctCode: false
    }
  },
  watch: {
    code(n): void {
      if (this.code.length === 5 && n == this.salvedCode) {
        this.correctCode = true
      } else {
        this.correctCode = false
      }
    }
  },
  computed: {
    typeClassBtnOnSubmit(): string {
      if (this.code.length >= 5) {
        this.showError = false
        return 'btn-primary'
      }
      return 'btn-disabled'
    }
  },
  methods: {
    async onSend() {
      if (this.code.length !== 5) {
        this.showError = true
        return
      }
      this.confirmed = true
    }
  }
})
</script>
