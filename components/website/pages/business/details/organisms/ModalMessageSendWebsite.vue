<template>
  <client-only>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn animate__delay-500ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-500ms"
    >
      <Modal>
        <template #body>
          <div class="flex flex-col gap-8 items-center -mt-8 mb-6 flipInY">
            <svg
              width="128"
              height="128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m96.17 31.819 3.449-3.448-3.448 3.448Zm-64.362 0L28.36 28.37l3.448 3.448Zm0 64.362L28.36 99.63l3.448-3.448Zm17.425-35.629a4.876 4.876 0 0 0-6.896 6.896l6.896-6.896ZM59.44 77.653l-3.449 3.448a4.876 4.876 0 0 0 6.896 0l-3.448-3.448Zm30.754-23.858a4.876 4.876 0 0 0-6.896-6.896l6.896 6.896ZM63.99 114.387c13.912 0 26.516-5.645 35.629-14.758l-6.896-6.896c-7.36 7.359-17.511 11.902-28.733 11.902v9.752Zm35.629-14.758c9.113-9.113 14.758-21.716 14.758-35.629h-9.752c0 11.222-4.543 21.374-11.902 28.733l6.896 6.896ZM114.377 64c0-13.913-5.645-26.516-14.758-35.63l-6.896 6.897c7.359 7.359 11.902 17.51 11.902 28.733h9.752ZM99.619 28.37c-9.113-9.112-21.717-14.757-35.63-14.757v9.752c11.223 0 21.375 4.543 28.734 11.902l6.896-6.896Zm-35.63-14.757c-13.912 0-26.515 5.645-35.629 14.758l6.896 6.896c7.36-7.359 17.511-11.902 28.734-11.902v-9.752ZM28.36 28.37C19.247 37.484 13.602 50.087 13.602 64h9.753c0-11.222 4.543-21.374 11.901-28.733L28.36 28.37ZM13.602 64c0 13.913 5.645 26.516 14.758 35.63l6.896-6.897C27.898 85.374 23.355 75.223 23.355 64h-9.753ZM28.36 99.63c9.114 9.112 21.717 14.757 35.63 14.757v-9.752c-11.223 0-21.375-4.543-28.734-11.902L28.36 99.63Zm13.977-32.182L55.99 81.101l6.896-6.896-13.653-13.653-6.896 6.896Zm20.55 13.653 27.306-27.306-6.896-6.896-27.306 27.306 6.895 6.896Z"
                fill="#09AD0F"
              />
            </svg>
            <p class="text-xl font-semibold">
              Mensagem encaminhada com sucesso!
            </p>
            <button class="btn-primary w-44" @click.prevent="closeModal">
              OK
            </button>
          </div>
        </template>
      </Modal>
    </transition>
  </client-only>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { modal } from '@/store'

export default Vue.extend({
  methods: {
    closeModal() {
      modal.toggle()
    }
  }
})
</script>

<style scoped>
.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
</style>
