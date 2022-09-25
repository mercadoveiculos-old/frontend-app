import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { BusinessReplica } from '@/models'

const URI = '/api/v1/replica/business'

interface ShowPayload {
  slug: string
}

@Module({ name: 'business/reading', stateFactory: true, namespaced: true })
export default class BusinessReading extends VuexModule {
  // Cria um estado de negócio:
  private attributes = {} as BusinessReplica

  // Cria o getter de negócio:
  get $attributes() {
    return this.attributes
  }

  get $address() {
    return this.attributes.address
  }

  get $schedule() {
    return this.attributes.schedule
  }
  
  get $categories() {
    return this.attributes.categories
  }

  get $tags() {
    return this.attributes.tags
  }

  get $images() {
    return this.attributes.images
  }

  get $payments() {
    return this.attributes.payments
  }

  get $phones() {
    return this.attributes.phones
  }

  get $videos() {
    return this.attributes.videos
  }

  @Mutation
  private UPDATE_PAGE_BUSINESS(attributes: BusinessReplica) {
    this.attributes = attributes
  }

  @Action({ rawError: true })
  public async show({ slug }: ShowPayload) {
    // O método $get já traz desestruturado :D
    const data = await $axios.$get(`${URI}/${slug}`)
    // Atualiza com a mutation o negócio recebido da requisição:
    this.context.commit('UPDATE_PAGE_BUSINESS', data)
  }

  // @Action({ rawError: true })
  // public async update(payload: UpdatePayload) {
  //   await $axios.$put('/users/register/', payload)
  // }
}
