<template>
  <main
    class="container flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10"
    :id="IDName"
    @mouseenter="handleEventEnter"
    @mouseleave="handleEventLeave"
    @touchstart="handleEventEnter"
    @touchend="handleEventLeave"
  >
    <!-- Breadcrumbs -->
    <BreadcrumbsWebsite />
    <!-- Data Company -->
    <SectionDataCompanyBusinessDetailsWebsite />
    <!-- Aside Right-->
    <SidebarRightBusinessDetails />
    <hr class="col-span-12" id="avaliations" />
    <!-- Avaliaçoes -->
    <SectionAvaliationsBusinessDetailsWebsite />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import handleEventEnter from '@/mixins/handleEventEnter'
import handleEventLeave from '@/mixins/handleEventLeave'

export default Vue.extend({
  mixins: [handleEventEnter, handleEventLeave],
  data() {
    return {
      IDName: 'PageBusinessDetailsTemplate'
    }
  },
  mounted() {
    ;(this as any).handleEventEnter()
    ;(this as any).handleEventLeave()
  }
})
</script>
