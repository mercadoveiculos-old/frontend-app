import { screen } from '@/store'
import Vue from 'vue'

export default Vue.extend({
  methods: {
    handleEventLeave(): void {
      const payload = {
        componentName: (this as any).IDName,
        typeEvent: 'leave',
        breakpoint: (this as any).$screen.breakpoint
      }
      screen.setEvent(payload)
    }
  }
})
