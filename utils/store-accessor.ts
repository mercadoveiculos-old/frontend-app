import { initializeCookies } from './nuxt-instance'
/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Screen from '@/store/screen'
import Modal from '@/store/modal'
import Mobile from '@/store/mobile'
import Auth from '@/store/auth'
import BusinessReading from '@/store/business/reading'

let screen: Screen
let modal: Modal
let mobile: Mobile
let auth: Auth
let businessReading: BusinessReading

const initializeStores = (store: Store<any>): void => {
  screen = getModule(Screen, store)
  modal = getModule(Modal, store)
  mobile = getModule(Mobile, store)
  auth = getModule(Auth, store)
  businessReading = getModule(BusinessReading, store)
}

export { initializeStores, screen, modal, mobile, auth, businessReading }
