<template>
  <PageBusinessDetailsTemplate />
</template>

<script>
import { businessReading } from '~/store'

export default {
  name: 'IndexPage',
  layout: 'website',

  async asyncData({ redirect, params }) {
    try {
      // const key = params.key
      const slug = params.pathMatch.split('/')[2] || null
      await businessReading.show({ slug })
    } catch (error) {
      console.log(error)
      // Página de erro 404:
      // return redirect('/404')
    }
  },

  head: {
    title: 'Motoroma',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Venha conhecer o mais moderno Lava Jato Brilho Car, localizado na Zona Norte, amplo estacionamento e serviços de primeira qualidade que oferece o máximo de requinte para sua satisfação.'
      }
    ]
  }
}
</script>
