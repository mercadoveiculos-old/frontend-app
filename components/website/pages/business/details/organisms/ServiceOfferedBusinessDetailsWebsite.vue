<template>
  <Section>
    <H2BusinessDetailsWebsite title="Serviços oferecidos" />
    <div class="flex gap-4 my-7 flex-wrap">
      <CategoryServiceOfferedServiceBusinessWebsite
        v-for="(category, index) in $categories"
        :key="index"
        :text="category.name"
      />
    </div>

    <div v-show="showSection" class="flex gap-4 flex-wrap">
      <TagServiceOfferedBusinessDetailsWebsite
        v-for="(tag, index) in $tags"
        :key="index"
        :text="tag.name"
      />
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import { businessReading } from '@/store'
import { CategoryReplica, TagReplica } from '@/models'

export default Vue.extend({
  data() {
    return {
      showSection: false
    }
  },

  computed: {
    $categories(): CategoryReplica | never[] {
      const categories = businessReading.$categories || null
      if (categories)
        return (this as any)._.orderBy(categories, ['name'], ['asc'])
      return []
    },

    $tags(): TagReplica | never[] {
      const tags = businessReading.$tags || null
      if (tags) return (this as any)._.orderBy(tags, ['name'], ['asc'])
      return []
    }
  },

  mounted() {
    const tags = Object.entries(this.$tags)
    if (tags.length > 0) this.showSection = true
  }
})
</script>
