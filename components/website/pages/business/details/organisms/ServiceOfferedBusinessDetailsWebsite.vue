<template>
  <Section>
    <H2BusinessDetailsWebsite title="Serviços oferecidos" />
    <div class="flex gap-4 my-7">
      <CategoryServiceOfferedServiceBusinessWebsite
        v-for="(category, index) in $categories"
        :key="index"
        :text="category.name"
      />
    </div>

    <div v-if="showTags" class="flex gap-4 flex-wrap">
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
      showTags: false
    }
  },

  computed: {
    $categories(): CategoryReplica {
      const categories = businessReading.$categories || []
      return (this as any)._.orderBy(categories, ['name'], ['asc'])
    },

    $tags(): TagReplica {
      const tags = businessReading.$tags || []
      return (this as any)._.orderBy(tags, ['name'], ['asc'])
    }
  },

  mounted() {
    const tags = Object.entries(this.$tags)
    if (tags.length > 0) {
      this.showTags = true
    }
  }
})
</script>
