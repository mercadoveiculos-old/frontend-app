<template>
  <div>
    <transition-group
      class="container mt-8"
      tag="ul"
      name="fade"
      mode="out-in"
      enter-active-class="animate__animated animate__fadeOut animate__delay-300ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-300ms"
    >
      <li v-for="(usuario, index) in usuarios" :key="usuario.id">
        {{ usuario.nome }}
        <button @click="remover(index, usuario.id)" class="btn-primary-sm ml-4">
          X Remover
        </button>
      </li>
    </transition-group>

    <vue-identify-network>
      <span slot="unknown"> desconhecida </span>
      <span slot="slow"> lenta </span>
      <span slot="fast"> Rápida </span>
    </vue-identify-network>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      usuarios: [
        {
          id: 1,
          nome: 'William'
        },
        {
          id: 2,
          nome: 'Marley'
        },
        {
          id: 3,
          nome: 'Livia'
        }
      ]
    }
  },
  methods: {
    remover(index: number, idUser: number): void {
      this.usuarios.splice(index, 1)
      console.log(idUser)
    }
  }
})
</script>

<style scoped></style>
