import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Eventos from '../pages/Eventos.vue'
import Comunidade from '../pages/Comunidade.vue'
import Pesquisas from '../pages/Pesquisas.vue'
import Informacoes from '../pages/Informacoes.vue'
import Sobre from '../pages/Sobre.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/eventos', component: Eventos },
  { path: '/comunidade', component: Comunidade },
  { path: '/pesquisas', component: Pesquisas },
  { path: '/informacoes', component: Informacoes },
  { path: '/sobre', component: Sobre }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router