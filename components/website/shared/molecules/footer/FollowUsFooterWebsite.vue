<!-- eslint-disable vue/no-lone-template -->
<template>
  <div class="flex flex-col justify-center text-center gap-3">
    <span>Siga-nos!</span>
    <div class="flex gap-4">
      <LinkIcon :link="facebook.url" :title="facebook.title">
        <template>
          <svg
            width="33"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>{{ facebook.title }}</title>
              <rect x=".5" width="32" height="32" rx="16" fill="#E06600" />
              <path
                d="m20.509 17.166.518-3.378h-3.241v-2.192c0-.924.453-1.825 1.904-1.825h1.474V6.895s-1.337-.228-2.616-.228c-2.67 0-4.414 1.618-4.414 4.547v2.574h-2.968v3.378h2.968v8.167h3.652v-8.166h2.723Z"
                fill="#fff"
              />
            </g>
          </svg>
        </template>
      </LinkIcon>

      <LinkIcon :link="instagram.url" :title="instagram.title">
        <template>
          <svg
            width="33"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>{{ instagram.title }}</title>
              <rect x=".5" width="32" height="32" rx="16" fill="#E06600" />
              <path
                d="M16.502 11.214A4.778 4.778 0 0 0 11.717 16a4.778 4.778 0 0 0 4.785 4.786A4.778 4.778 0 0 0 21.287 16a4.778 4.778 0 0 0-4.785-4.786Zm0 7.897A3.117 3.117 0 0 1 13.392 16a3.114 3.114 0 0 1 3.11-3.112A3.114 3.114 0 0 1 19.612 16c0 1.716-1.398 3.111-3.11 3.111Zm6.097-8.093c0 .62-.5 1.116-1.116 1.116a1.116 1.116 0 1 1 1.116-1.116Zm3.169 1.133c-.071-1.495-.413-2.82-1.508-3.911-1.091-1.091-2.415-1.433-3.91-1.508-1.541-.087-6.16-.087-7.7 0-1.49.07-2.815.412-3.91 1.504-1.096 1.091-1.433 2.416-1.508 3.911-.087 1.541-.087 6.16 0 7.702.07 1.495.412 2.82 1.508 3.91 1.095 1.092 2.415 1.434 3.91 1.509 1.54.087 6.159.087 7.7 0 1.495-.071 2.819-.413 3.91-1.508 1.091-1.092 1.433-2.416 1.508-3.912.087-1.54.087-6.156 0-7.697Zm-1.991 9.351a3.15 3.15 0 0 1-1.774 1.775c-1.229.487-4.143.374-5.501.374-1.358 0-4.277.109-5.501-.374a3.15 3.15 0 0 1-1.774-1.775c-.487-1.229-.375-4.144-.375-5.502 0-1.358-.108-4.278.375-5.502A3.15 3.15 0 0 1 11 8.723c1.228-.487 4.143-.375 5.5-.375 1.358 0 4.278-.108 5.502.375a3.15 3.15 0 0 1 1.774 1.774c.487 1.23.375 4.145.375 5.503 0 1.358.112 4.278-.375 5.502Z"
                fill="#fff"
              />
            </g>
          </svg>
        </template>
      </LinkIcon>

      <LinkIcon :link="youtube.url" :title="youtube.title">
        <template>
          <svg
            width="33"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>{{ youtube.title }}</title>
              <rect x=".5" width="32" height="32" rx="16" fill="#E06600" />
              <path
                d="M25.443 11.42a2.365 2.365 0 0 0-1.65-1.688c-1.456-.398-7.293-.398-7.293-.398s-5.837 0-7.293.398a2.365 2.365 0 0 0-1.65 1.688c-.39 1.488-.39 4.594-.39 4.594s0 3.105.39 4.594c.214.82.847 1.44 1.65 1.66 1.456.399 7.293.399 7.293.399s5.837 0 7.293-.399a2.329 2.329 0 0 0 1.65-1.66c.39-1.489.39-4.594.39-4.594s0-3.106-.39-4.594Zm-10.852 7.413v-5.639l4.879 2.82-4.88 2.82Z"
                fill="#fff"
              />
            </g>
          </svg>
        </template>
      </LinkIcon>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      facebook: {
        title: 'Nossa página no Facebook',
        url: 'https://pt-br.facebook.com/mercadoveiculosbr/'
      },
      instagram: {
        title: 'Nosso Perfil no Instagram',
        url: 'https://instagram.com/mercadoveiculosbr/'
      },
      youtube: {
        title: 'Nosso canal no Youtube',
        url: '#'
      }
    }
  }
})
</script>

<style scoped></style>
