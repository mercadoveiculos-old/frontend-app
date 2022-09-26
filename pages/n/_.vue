<template>
  <PageBusinessDetailsTemplate />
</template>

<script>
import { businessReading } from '@/store'
import { BusinessReplica } from '@/models'

export default {
  name: 'IndexPage',
  layout: 'website',

  async asyncData({ redirect, params }) {
    try {
      // const key = params.key
      const slug = params.pathMatch || null
      await businessReading.show({ slug })
    } catch (error) {
      console.log(error)
      // Página de erro 404:
      // return redirect('/404')
    }
  },

  computed: {
    $attributes() {
      return businessReading.$attributes || null
    }
  },

  methods: {
    cutText(value) {
      const total = 155
      if (value.length > total) {
        return `${value.slice(0, total)}...`
      }
      return value
    },

    metaTitle() {
      return this.$attributes.meta_title
        ? this.$attributes.meta_title.toUpperCase()
        : this.$attributes.fantasy_name.toUpperCase()
    },
    metaDescription() {
      return this.$attributes.meta_description
        ? this.$attributes.meta_description
        : this.cutText(this.$attributes.description)
    }
  },

  head() {
    return {
      title: this.metaTitle(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription()
        }
      ]
    }
  }
}
</script>
