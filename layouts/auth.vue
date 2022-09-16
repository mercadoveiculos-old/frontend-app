<template>
  <div class="container flex flex-col min-h-screen gap-y-8 mt-6">
    <HeaderAuth />
    <main class="flex-1">
      <transition
        name="fade"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeUp"
        duration="500"
      >
        <nuxt />
      </transition>
    </main>
    <FooterAuth />
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
  name: 'auth'
}
</script>
