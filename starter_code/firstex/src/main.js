import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Principal from './components/Principal.vue'
import Peliculas from './components/Peliculas.vue'
import DetallesPeliculas from "./components/DetallesPeliculas.vue";


const routes = [
  { path: "/", name: "home", component: Principal },
  { path: "/peliculas", name: "Peliculas", component: Peliculas },
  { path: "/peliculas/:id", name: "peliculasDestalle", component: DetallesPeliculas, props: true }
];
Vue.config.productionTip = false
Vue.use(vueRouter)

const router =  new vueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
