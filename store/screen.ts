import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

interface Payload {
  componentName: string
  typeEvent: string
  breakpoint: string
}

@Module({ name: 'screen', stateFactory: true, namespaced: true })
export default class Screen extends VuexModule {
  private showHeader = true
  private component = ''
  private breakpoint = ''
  private type_event = ''

  public get $showHeader() {
    return this.showHeader
  }

  public get $component() {
    return this.component
  }

  public get $breakpoint() {
    return this.breakpoint
  }

  public get $typeEvent() {
    return this.type_event
  }

  @Mutation
  private UPDATE_SHOW_HEADER(showHeader: boolean): void {
    this.showHeader = showHeader
  }

  @Mutation
  private UPDATE_COMPONENT(component: string): void {
    this.component = component
  }

  @Mutation
  private UPDATE_BREAKPOINT(breakpoint: string): void {
    this.breakpoint = breakpoint
  }

  @Mutation
  private UPDATE_TYPE_EVENT(type_event: string): void {
    this.type_event = type_event
  }

  @Action
  public setEvent(payload: Payload): void {
    this.context.commit('UPDATE_COMPONENT', payload.componentName)
    this.context.commit('UPDATE_BREAKPOINT', payload.breakpoint)
    this.context.commit('UPDATE_TYPE_EVENT', payload.typeEvent)
  }
}
