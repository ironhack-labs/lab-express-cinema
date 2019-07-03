import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Principal from './components/Principal.vue';
import Peliculas from "./components/Peliculas.vue";

const routes=[
  { path:'/' , name:'home', component: Principal},
  { path:'/peliculas' , name:'listadoPeliculas', component: Peliculas},
];

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router =new VueRouter({routes});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
