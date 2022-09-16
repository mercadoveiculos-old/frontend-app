<template>
  <client-only>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn animate__delay-300ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-300ms"
    >
      <Modal title="Compartilhar">
        <template v-slot:body>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-1">
              <div class="flex w-auto rounded-full bg-whatsapp p-2">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.106 10.778A12.787 12.787 0 0 0 19.994 7C12.891 7 7.11 12.78 7.11 19.884c0 2.27.592 4.486 1.718 6.442L7 33l6.83-1.793a12.845 12.845 0 0 0 6.158 1.567h.006C27.092 32.774 33 26.994 33 19.89c0-3.442-1.462-6.674-3.894-9.112Zm-9.112 19.825a10.69 10.69 0 0 1-5.455-1.491l-.389-.232-4.05 1.062 1.079-3.953-.256-.406a10.673 10.673 0 0 1-1.636-5.7c0-5.901 4.805-10.707 10.713-10.707 2.861 0 5.548 1.115 7.568 3.14 2.02 2.025 3.261 4.713 3.256 7.574 0 5.908-4.928 10.713-10.83 10.713Zm5.873-8.02c-.319-.163-1.903-.94-2.2-1.045-.295-.11-.51-.163-.725.162-.214.325-.83 1.045-1.021 1.266-.186.214-.377.243-.696.08-1.892-.945-3.134-1.688-4.382-3.83-.33-.568.33-.528.946-1.758.104-.215.052-.4-.03-.563-.08-.162-.725-1.747-.992-2.391-.26-.627-.528-.54-.725-.551-.186-.012-.4-.012-.615-.012-.215 0-.563.081-.86.4-.295.325-1.125 1.103-1.125 2.688 0 1.584 1.155 3.116 1.312 3.33.162.216 2.269 3.466 5.501 4.864 2.043.882 2.844.958 3.866.807.62-.093 1.903-.778 2.17-1.532.267-.755.267-1.399.186-1.532-.076-.146-.29-.227-.61-.383Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span class="text-xs font-medium">WhatsApp</span>
            </div>

            <div class="flex flex-col items-center gap-1">
              <div class="flex w-auto rounded-full bg-facebook p-2">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m26.013 21.625.722-4.705H22.22v-3.054c0-1.287.63-2.542 2.653-2.542h2.052V7.318S25.063 7 23.282 7c-3.718 0-6.149 2.254-6.149 6.333v3.587H13v4.705h4.133V33h5.087V21.625h3.793Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span class="text-xs font-medium">Facebook</span>
            </div>

            <div class="flex flex-col items-center gap-1">
              <div class="flex w-auto rounded-full bg-twitter p-2">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.517 10.85c-1.106.488-2.278.81-3.479.952a6.077 6.077 0 0 0 2.665-3.351 12.104 12.104 0 0 1-3.846 1.47 6.056 6.056 0 0 0-10.32 5.523A17.195 17.195 0 0 1 7.056 9.116a6.036 6.036 0 0 0-.82 3.045c0 2.1 1.069 3.955 2.694 5.04a6.036 6.036 0 0 1-2.743-.756v.075a6.06 6.06 0 0 0 4.858 5.939 6.096 6.096 0 0 1-2.737.104 6.06 6.06 0 0 0 5.658 4.207A12.157 12.157 0 0 1 5 29.277 17.131 17.131 0 0 0 14.282 32c11.14 0 17.233-9.229 17.233-17.232 0-.261-.008-.525-.02-.782a12.301 12.301 0 0 0 3.023-3.136h-.001Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span class="text-xs font-medium">Twitter</span>
            </div>

            <div class="flex flex-col items-center gap-1">
              <div class="flex w-auto rounded-full bg-gray-500 p-2">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 8H8a2.996 2.996 0 0 0-2.985 3L5 29c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V11c0-1.65-1.35-3-3-3Zm-.6 6.375-10.605 6.63c-.48.3-1.11.3-1.59 0L8.6 14.375c-.375-.24-.6-.645-.6-1.08 0-1.005 1.095-1.605 1.95-1.08L20 18.5l10.05-6.285c.855-.525 1.95.075 1.95 1.08 0 .435-.225.84-.6 1.08Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span class="text-xs font-medium">Email</span>
            </div>
          </div>
          <div
            class="flex items-center border rounded bg-gray-main-50 justify-between py-2 px-3 mt-8"
          >
            <a
              href="https://mecadoveiculos.com/-m0myuPAWxA"
              class="text-sm font-medium text-primary"
              target="_blank"
              rel="noopener noreferrer"
              ref="mylink"
            >
              https://mecadoveiculos.com/-m0myuPAWxA
            </a>

            <button
              class="text-link text-base font-medium"
              @click.prevent="copyURL"
            >
              COPIAR
            </button>
          </div>
        </template>
      </Modal>
    </transition>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    copyURL() {
      const copyText: any = this.$refs.mylink
      navigator.clipboard.writeText(copyText)
      alert('URL copiada com sucesso!')
    }
  }
})
</script>
