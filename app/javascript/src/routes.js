import Home from './components/Home.vue'

export const routes = [
  { path: '', component: Home },
  { path: '*', component: Home },
  { path: '/:filter', component: Home }
]