<template>
  <client-only>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn animate__delay-500ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-500ms"
    >
      <Modal
        title="Solicitar alteração"
        class-name-modal="w-11/12 md:w-5/12 lg:w-4/12 mx-auto bg-white rounded mt-20 shadow-md"
      >
        <template #body>
          <div class="flex flex-col gap-4 mb-4">
            <NuxtLink to="/app/editar" class="btn-primary" no-rel>
              Sou dono desta empresa
            </NuxtLink>

            <NuxtLink to="/fale-conosco" class="btn-secondary" no-rel>
              Sou um usuário do site
            </NuxtLink>
          </div>
        </template>
      </Modal>
    </transition>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
