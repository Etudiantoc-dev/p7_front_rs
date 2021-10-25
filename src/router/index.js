import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new Router({
  routes : [
    {
      path: '/',
      name: 'home',
      component: Home
    },

  ]
})





