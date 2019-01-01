import Vue from 'vue'
import Router from 'vue-router'
import Scores from './views/Scores.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/scores'
    },
    {
      path: '/scores',
      name: 'scores',
      component: Scores
    },
    {
      path: '/analysis',
      name: 'analysis',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Analysis.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
