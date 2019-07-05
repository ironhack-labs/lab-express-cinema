import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import(/* webpackChunkName: "movies" */ './views/Movies.vue')
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: () => import(/* webpackChunkName: "movies" */ './components/Movie.vue'),
      props: true
    },
    {
      path: '/newmovie',
      name: 'newMovie',
      component: () => import(/* webpackChunkName: "movies" */ './views/NewMovie.vue'),
      props: true
    }
  ]
})
