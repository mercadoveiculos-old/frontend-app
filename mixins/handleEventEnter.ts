import { screen } from '@/store'
import Vue from 'vue'

export default Vue.extend({
  methods: {
    handleEventEnter(): void {
      const payload = {
        componentName: (this as any).IDName,
        typeEvent: 'enter',
        breakpoint: (this as any).$screen.breakpoint
      }

      screen.setEvent(payload)
    }
  }
})
