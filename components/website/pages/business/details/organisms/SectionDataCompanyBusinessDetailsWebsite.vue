<template>
  <Section class-name="md:col-span-12 lg:col-span-7 mt-4 md:-mt-4">
    <Article class-name="flex flex-col gap-y-12">
      <!-- Dados principais -->
      <MainDataBusinessDetailsWebsite />

      <!-- Links -->

      <WrapperLinksUtilsBusinessDetailsWebsite />

      <client-only>
        <!-- MD Solicitar orçamento -->
        <Section class-name="lg:hidden md:bg-gray-50">
          <div class="w-full md:w-8/12 mx-auto md:py-10">
            <FormBudgetBusinessDetailsWebsite />
          </div>
        </Section>

        <!-- AdsWebsite -->
        <Section class-name="lg:hidden w-full md:w-8/12 mx-auto">
          <AdsWebsite
            class-name="bg-white border border-gray-main-200 rounded-md lg:mt-10 top-6"
          />
        </Section>
      </client-only>

      <!-- Serviços oferecidos -->
      <hr />
      <ServiceOfferedBusinessDetailsWebsite />

      <!-- Formas de pagamento -->
      <hr v-show="$payments" />
      <PaymentMethodsBusinessDetailsWebsite />

      <client-only>
        <WrapperLinksUtilsMobileBusinessDetailsWebsite
          v-if="$screen.breakpoint === 'xs'"
        />
      </client-only>

      <hr v-show="$images" />
      <GalleryImagesBusinessDetailsWebsite />

      <!-- Vídeos relacionados -->
      <hr v-show="$videos" />
      <VideosRelatedBusinessDetailsWebsite />

      <!-- Endereço -->
      <hr />
      <AddressWithMapsBusinessDetailsWebsite />

      <hr v-show="$description" id="learn-more" />
      <!-- Saiba mais -->
      <SectionLearnMoreBusinessDetailsWebsite />
    </Article>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
import { businessReading } from '@/store'
import { ImageReplica, PaymentReplica, VideoReplica } from '@/models'

export default Vue.extend({
  computed: {
    $images(): ImageReplica | boolean | undefined {
      const images = Object.entries(businessReading.$images) || null
      if (images.length > 0) return true
      return false
    },

    $videos(): VideoReplica | boolean | undefined {
      const videos = Object.entries(businessReading.$videos) || null
      if (videos.length > 0) return true
      return false
    },

    $payments(): PaymentReplica | boolean | undefined {
      const payments = Object.entries(businessReading.$payments) || null
      if (payments.length > 0) return true
      return false
    },

    $description(): string | boolean {
      if (businessReading.$attributes.description.length > 0) return true
      return false
    }
  }
})
</script>
