import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'modal', stateFactory: true, namespaced: true })
export default class Modal extends VuexModule {
  private isModalActive = false
  private nameModal = ''

  public get $isModalActive() {
    return this.isModalActive
  }

  public get $isNameModal() {
    return this.nameModal
  }

  @Mutation
  private TOGGLE_MODAL_ACTIVE() {
    this.isModalActive = !this.isModalActive
  }

  @Mutation
  private ADD_NAME_MODAL(name: string) {
    this.nameModal = name
  }

  @Action
  public toggle() {
    this.context.commit('TOGGLE_MODAL_ACTIVE')
  }

  @Action
  public setNameModal(payload: string) {
    this.context.commit('ADD_NAME_MODAL', payload)
  }
}
