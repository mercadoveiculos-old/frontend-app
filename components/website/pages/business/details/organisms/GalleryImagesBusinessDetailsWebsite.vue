<template>
  <Section v-if="$images">
    <H2BusinessDetailsWebsite title="Fotos" />
    <div class="md:h-36 xl:h-44 mt-6">
      <client-only>
        <carousel v-bind="options">
          <slide
            v-for="(image, index) in $images"
            :key="index"
            :class="index === 0 ? '-left-px' : 'pr-2'"
          >
            <!-- <img
              :src="require(`@/assets/img/${i}.jpg`)"
              loading="lazy"
              alt=""
              class=""
            /> -->
            <img :src="image.url" alt="" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
import { businessReading } from '@/store'
import { Image } from '@/models'

export default Vue.extend({
  data() {
    return {
      options: {
        loop: true,
        perPageCustom: [
          [375, 1],
          [768, 2]
        ],
        paginationEnabled: false,
        paginationActiveColor: '#E06600',
        spacePadding: 24
      }
    }
  },

  computed: {
    $images(): false | Image {
      if (!(this as any)._.isArray(businessReading.$images)) {
        return false
      }

      if (!(this as any)._.isEmpty(businessReading.$images)) {
        return businessReading.$images
      }

      return false
    }
  },

  async mounted() {
    if (this.$images) {
      await this.$nextTick()
      const textbox = this.$el.querySelector(
        '.VueCarousel-inner'
      ) as HTMLHtmlElement
      if (textbox) {
        textbox.style.paddingLeft = '0px'
        textbox.style.paddingRight = '24px'
      }
    }
  }
})
</script>
