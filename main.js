import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Principal from './components/Principal.vue'
import Peliculas from './components/Peliculas.vue'
import DetallesPeliculas from './components/DetallesPeliculas'


//componentes se escriben la primera letra con mayuscula
const routes = [{ 
 path: '/', 
 name: 'home',
 component: Principal
},{
  path:'/peliculas',
  name: '/listadoPeliculas',
  component: Peliculas
},{
  path: '/peliculas/:id',
  name: 'peliculasDetalles',
  component: DetallesPeliculas,
  props: true
}]

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
