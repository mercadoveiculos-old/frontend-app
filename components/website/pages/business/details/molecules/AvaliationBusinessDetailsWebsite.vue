<template>
  <Article
    class-name="my-8"
    itemscope
    itemtype="http://schema.org/UserComments"
  >
    <div class="flex flex-col gap-2">
      <header>
        <div
          itemprop="creator"
          itemscope
          itemtype="http://schema.org/Person"
          class="flex items-center gap-2"
        >
          <img
            src="@/assets/img/AVQ0V28X.jpg"
            loading="lazy"
            alt=""
            class="max-h-10 w-10 rounded-full"
          />
          <span itemprop="name" class="text-sm font-semibold">Luíza Belo</span>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2 items-center">
            <div
              itemprop="starRating"
              itemscope
              itemtype="https://schema.org/Rating"
            >
              <meta itemprop="ratingValue" :content="totalRatingContent" />
              <GenerateRatingWebsite :total-rating="totalRatingContent" />
            </div>

            <h1 class="text-sm font-semibold text-primary">Perfeito</h1>
          </div>
          <time class="text-xs font-medium" itemprop="commentTime" datetime="…"
            >Avaliado em 11 de outubro de 2022</time
          >

          <span class="text-xs text-secondary-main-normal font-medium"
            >Conta verificada</span
          >
        </div>
      </header>
      <p
        itemprop="commentText"
        class="text-sm text-primary opacity-90 font-medium my-3"
      >
        São caprinhosos recomendo!
      </p>
      <CommentUtilWithLinkAbuseBusinessDetailsWebsite />
    </div>
  </Article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      totalRatingContent: 0
    }
  },
  mounted() {
    const value = Math.floor(Math.random() * 5)
    value === 0 ? 1 : value

    this.totalRatingContent = Number(value)
  }
})
</script>
