import Vue from 'vue'
import App from '../src/app.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})