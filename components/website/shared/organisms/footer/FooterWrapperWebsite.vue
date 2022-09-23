<template>
  <!-- Footer -->
  <footer
    :id="IDName"
    class="bg-primary-main-900"
    @mouseenter="handleEventEnter"
    @mouseleave="handleEventLeave"
    @touchstart="handleEventEnter"
    @touchend="handleEventLeave"
  >
    <!-- FOOTER SUPERIOR -->
    <!--

    @touchmove="eventMove"
    -->
    <FooterWrapperSuperiorWebiste />

    <!-- FOOTER INFERIOR -->
    <hr class="border-dark-main-600 my-10 md:my-14" />

    <FooterWrapperInferiorWebiste />
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

import handleEventEnter from '@/mixins/handleEventEnter'
import handleEventLeave from '@/mixins/handleEventLeave'

export default Vue.extend({
  mixins: [handleEventEnter, handleEventLeave],
  data() {
    return {
      IDName: 'FooterWrapperWebsite'
    }
  },
  mounted() {
    ;(this as any).handleEventEnter()
    ;(this as any).handleEventLeave()
  }
})
</script>
