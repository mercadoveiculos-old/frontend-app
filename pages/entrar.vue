<template>
  <section class="w-full md:w-96 mx-auto bg-white text-sm">
    <AlertAuth v-if="false" />
    <div class="grid gap-y-6 lg:shadow-md rounded-md bg-white lg:p-6">
      <TitlePageAuth />
      <LoginSocialAuth />
      <HorizontalOrAuth />
      <div class="grid gap-4">
        <ValidationObserver ref="form">
          <form @submit.prevent="onSubmit" method="post" class="grid gap-4">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="celular ou e-mail"
              rules="required|min:3"
            >
              <div class="grid gap-1.5">
                <FormInput
                  label="Número de celular ou e-mail"
                  :error-messages="errors"
                  :success="valid"
                  v-model="user_id"
                />
                <FormError v-if="showError" :errors="errors" />
                <!-- <FormInput label="Informe sua senha" v-model="password" /> -->

                <!-- <span class="flex text-xs">
                  <LineInfoIcon />
                  <small
                    v-if="showError && errors[0]"
                    class="text-red-main-700"
                  >
                    {{ errors[0] }}</small
                  >
                  <LineInfoIcon />
                  As senhas devem ter pelo menos 6 caracteres.
                </span> -->
              </div>
            </ValidationProvider>

            <!-- <div class="flex flex-col gap-1.5">
              <label class="label-default font-semibold" for=""
                >Número de celular ou e-mail</label
              >
              <input
                type="text"
                class="form-input border-red-main-700 rounded lg:h-8 placeholder-dark-main-300"
                placeholder=""
              />
              <div class="flex text-xs text-red-main-700">
                <LineInfoIcon color="#FF0D00" />
                <span>Digite seu e-mail ou número de telefone celular.</span>
              </div>
            </div> -->

            <button
              type="submit"
              class="btn lg:btn:small btn-primary font-medium"
            >
              Continuar
            </button>
          </form>
        </ValidationObserver>
        <LinksAcceptsTermsAuth />
      </div>
    </div>
    <BtnCreateNewAccountAuth />
  </section>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

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
  name: 'Entrar',
  layout: 'auth',

  data() {
    return {
      showError: false,
      title: 'Fazer Login',
      user_id: '',
      password: ''
    }
  },

  provide() {
    return {
      title: (this as any).title
    }
  },

  methods: {
    async onSubmit() {
      const validator = await this.$refs.form.validate()
      if (!validator) {
        return ((this as any).showError = true)
      }
    },

    singIn(event: any) {
      const button = event.currentTarget || null
      button.value = 'Efetuando login'
      button.setAttribute('disabled', '')

      setTimeout(() => {
        button.value = 'Continuar'
        button.removeAttribute('disabled')
      }, 10000)
    }
  },

  head() {
    return {
      title: (this as any).title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Entre na sua conta para acessar seus controles de personalização, preferências no Mercado Veículos'
        }
      ]
    }
  }
})
</script>
