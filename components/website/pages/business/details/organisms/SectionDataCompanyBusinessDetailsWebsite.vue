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

      <hr />

      <!-- Serviços oferecidos -->

      <ServiceOfferedBusinessDetailsWebsite />
      <hr />
      <!-- Formas de pagamento -->

      <PaymentMethodsBusinessDetailsWebsite />

      <client-only>
        <WrapperLinksUtilsMobileBusinessDetailsWebsite
          v-if="$screen.breakpoint === 'xs'"
        />
      </client-only>

      <GalleryImagesBusinessDetailsWebsite />
      <hr />
      <!-- Vídeos relacionados -->
      <VideosRelatedBusinessDetailsWebsite />
      <hr />
      <!-- Endereço -->
      <AddressWithMapsBusinessDetailsWebsite />
      <hr id="learn-more" />
      <!-- Saiba mais -->
      <SectionLearnMoreBusinessDetailsWebsite />
    </Article>
  </Section>
</template>
