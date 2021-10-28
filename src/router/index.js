import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Signup from '../views/Signup.vue'
import VueRouter from 'vue-router'
import Publication from '../views/Publication.vue'

Vue.use(VueRouter)

export default new Router({
  routes : [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path:'/Signup',
      name:'signup',
      component: Signup
    },
    {
      path: '/Publication',
      name:'publication',
      component: Publication
    }

  ]
})





