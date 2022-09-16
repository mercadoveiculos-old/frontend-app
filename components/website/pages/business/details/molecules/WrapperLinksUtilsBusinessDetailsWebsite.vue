<template>
  <Section>
    <div class="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0">
      <LinksOtherAndRequestChangeBusinessDetailsPage
        v-show="$screen.breakpoint !== 'xs'"
      />
      <div
        class="flex justify-between md:justify-start gap-4 order-1 md:order-2"
      >
        <ShareBusinessDetailsPage />
        <SaveBusinessDetailsPage />
      </div>
    </div>
  </Section>
</template>
