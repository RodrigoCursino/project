require('./libs')
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import '@/styles/css/reset.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/pt-br';
import '@/styles/css/cards.css';
import '@/styles/css/helpers.css';

import { routes } from './router/index'
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
