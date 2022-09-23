<template>
  <section
    id="component-form-budget"
    class="flex flex-col gap-6 bg-white border border-gray-main-200 rounded-md px-6 py-7"
    @mouseenter="enterFormBudget"
    @mouseleave="leaveFormBudget"
  >
    <h4 class="text-3xl font-semibold text-primary-main-normal font-montserrat">
      Faça um orçamento
    </h4>
    <p class="text-lg font-medium font-montserrat">
      Envie uma mensagem para
      <span class="capitalize font-semibold">motorama retífica de motores</span>
    </p>
    <ValidationObserver ref="form">
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-5">
          <ValidationProvider
            v-slot="{ errors, valid }"
            name="nome"
            rules="required"
          >
            <div class="flex flex-col gap-1">
              <label for="name" class="label font-semibold">Nome</label>
              <input
                id="name"
                type="text"
                :error-messages="errors"
                :success="valid"
                placeholder="Nome"
                class="input lg:input"
              />
              <small v-if="showError && errors[0]" class="text-red-main-700">{{
                errors[0]
              }}</small>
            </div>
          </ValidationProvider>
          <div class="flex gap-5">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="e-mail"
              rules="required|email"
            >
              <div class="flex flex-col gap-1">
                <label for="email" class="label font-semibold">E-mail</label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="text"
                  :error-messages="errors"
                  :success="valid"
                  placeholder="Seu melhor email"
                  class="input lg:input"
                />

                <small
                  v-if="showError && errors[0]"
                  class="text-red-main-700"
                  >{{ errors[0] }}</small
                >
              </div>
            </ValidationProvider>
            <div class="flex flex-col gap-1">
              <label for="phone" class="label font-semibold"
                >Telefone (opcional)</label
              >
              <input
                id="phone"
                v-model="form.phone"
                type="text"
                placeholder="Telefone"
                class="input lg:input"
              />
            </div>
          </div>
          <ValidationProvider
            v-slot="{ errors, valid }"
            name="assunto"
            rules="required"
          >
            <div class="flex flex-col gap-1">
              <label for="subject" class="label font-semibold">Assunto</label>
              <textarea
                id="subject"
                v-model="form.subject"
                :error-messages="errors"
                :success="valid"
                class="form-input rounded"
                rows="3"
              ></textarea>
              <small v-if="showError && errors[0]" class="text-red-main-700">{{
                errors[0]
              }}</small>
            </div>
          </ValidationProvider>

          <button
            type="submit"
            class="btn btn-primary py-2 text-xl font-medium text-white font-montserrat"
          >
            Solicitar orçamento
          </button>
          <button class="btn-secondary" @click.prevent="openModalActive">
            Modal
          </button>
        </div>
      </form>
    </ValidationObserver>

    <div class="text-xs">
      <div>
        <p>
          Ao clicar aqui, você autoriza a Mercadoveiculos.com.br e seus
          vendedores/parceiros a contatá-lo por mensagens de texto/chamadas que
          podem incluir marketing e ser por discagem automática. As chamadas
          podem ser pré-gravadas. Você também concorda com nossa Declaração de
          Privacidade. O consentimento não é necessário para comprar
          bens/serviços.
        </p>
      </div>
      <div class="mt-4">
        <p>Valorizamos a sua privacidade.</p>
        <a href="" class="text-link"
          >Declaração de Privacidade Mercadoveiculos.com.br</a
        >
      </div>
    </div>
    <ModalVerificationCodeBusinessDetailsPage
      v-if="$isModalActive && $isNameModal === modalName"
    />
  </section>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import Vue, { VueConstructor } from 'vue'
import { modal } from '@/store'

export default (
  Vue as VueConstructor<
    Vue & {
      $refs: {
        form: InstanceType<typeof ValidationProvider>
      }
    }
  >
).extend({
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      modalName: 'ModalVerificationCodeBusinessDetailsPage',
      showError: false,
      form: {
        email: '',
        phone: '',
        subject:
          'Descreva o que você gostaria de receber da MOTORAMA RETÍFICA DE MOTOROES, assim como prazos e quantidades'
      }
    }
  },
  computed: {
    $isNameModal() {
      return modal.$isNameModal
    },
    $isModalActive() {
      return modal.$isModalActive || false
    }
  },
  methods: {
    async onSubmit() {
      const validator = await this.$refs.form.validate()
      if (!validator) {
        return (this.showError = true)
      }
    },
    enterFormBudget(e: any): void {
      console.log('entrou')
      console.log(e)

      console.log(e.srcElement.id)
    },
    leaveFormBudget(e: any): void {
      console.log('saiu')
    },
    openModalActive() {
      modal.toggle()
      modal.setNameModal(this.modalName)
    }
  }
})
</script>
