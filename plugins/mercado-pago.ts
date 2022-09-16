import Vue from 'vue'

Vue.prototype.$testPluginMP = (string: any): void => {
  return console.log("Cartão numero", string)
}
