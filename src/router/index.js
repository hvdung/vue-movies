import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/HelloWorld'
import About from '@/components/About'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movies?page=:page',
      name: 'Movies page',
      component: Movies
    },
    {
      path: '/movies?s=:search&page=:page',
      name: 'Movies search',
      component: Movies
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie
    }
  ]
})
