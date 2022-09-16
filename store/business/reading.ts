import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { PageBusinessReading } from '@/models'

const URI = '/v1/business/reading'

interface ShowPayload {
  slug: string
}

@Module({ name: 'business/reading', stateFactory: true, namespaced: true })
export default class BusinessReading extends VuexModule {
  // Cria um estado de negócio:
  private pageBusiness = {} as PageBusinessReading

  // Cria o getter de negócio:
  get $pageBusiness() {
    return this.pageBusiness
  }

  // Cria o getter de negócio:
  get $attributes() {
    return this.pageBusiness.attributes
  }

  // Cria o getter de negócio:
  get $images() {
    return this.pageBusiness.relationships.images
  }

  @Mutation
  private UPDATE_PAGE_BUSINESS(pageBusiness: PageBusinessReading) {
    this.pageBusiness = pageBusiness
  }

  @Action({ rawError: true })
  public async show({ slug }: ShowPayload) {
    // O método $get já traz desestruturado :D
    const { data } = await $axios.$get(`${URI}/${slug}/?include=images`)
    // Atualiza com a mutation o usuário recebido da requisição:
    this.context.commit('UPDATE_PAGE_BUSINESS', data)
  }

  // @Action({ rawError: true })
  // public async update(payload: UpdatePayload) {
  //   await $axios.$put('/users/register/', payload)
  // }
}
