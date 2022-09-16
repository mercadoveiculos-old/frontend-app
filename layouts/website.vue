<template>
  <div>
    <HandlerConnection />
    <HeaderWrapperWebsite />
    <transition
      name="fade"
      enter-active-class="animate__animated animate__delay-500ms"
      leave-active-class="animate__animated animate__delay-500ms"
    >
      <nuxt />
    </transition>
    <CTABusinessRegistrationWebsite />
    <FooterWrapperWebsite />
  </div>
</template>
<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'font-roboto lg:bg-gray-main-5 text-secondary'
      }
    }
  },
  name: 'website'
}
</script>
