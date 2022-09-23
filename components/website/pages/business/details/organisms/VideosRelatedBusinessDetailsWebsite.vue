<template>
  <Section>
    <H2BusinessDetailsWebsite title="Vídeos relacionados" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 xl:gap-6 mt-6">
      <EmbedVideoYoutube
        v-for="(url, index) in youtubeUrl"
        :key="index"
        :url="url"
        class-name="w-full h-56 md:h-52 lg:h-44 aspect-auto"
      />
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      youtubeUrl: [
        'https://www.youtube.com/embed/RwU-_K5WbZ8',
        'https://www.youtube.com/embed/kcMFBkgqWG8'
      ]
    }
  }
})
</script>
