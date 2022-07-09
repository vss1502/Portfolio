import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false;

import './assets/scss/main.scss'

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
