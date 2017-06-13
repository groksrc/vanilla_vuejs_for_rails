import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../src/app.vue'
import { routes } from '../src/routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
