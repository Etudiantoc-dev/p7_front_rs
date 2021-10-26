import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../views/Accueil.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new Router({
  routes : [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },

  ]
})





