<template>
  <Section v-show="showSection">
    <H2BusinessDetailsWebsite title="Vídeos relacionados" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 xl:gap-6 mt-6">
      <EmbedVideoYoutube
        v-for="(video, index) in $videos"
        :key="index"
        :code="video.code"
        class-name="w-full h-56 md:h-52 lg:h-44 aspect-auto"
      />
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import { businessReading } from '@/store'
import { VideoReplica } from '@/models'

export default Vue.extend({
  data() {
    return {
      showSection: false
    }
  },

  computed: {
    $videos(): VideoReplica | never[] {
      const videos = businessReading.$videos || null
      if (videos) return (this as any)._.orderBy(videos, ['position'], ['asc'])
      return []
    }
  },

  mounted() {
    const videos = Object.entries(this.$videos)
    if (videos.length > 0) this.showSection = true
  }
})
</script>
