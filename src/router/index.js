import Vue from 'vue'
import Router from 'vue-router'
import AccueilUtilisateur from '../views/AccueilUtilisateur.vue'
import VueRouter from 'vue-router'
import Publication from '../views/PublicationForum.vue'


Vue.use(VueRouter)

export default new Router({
  routes: [

    {
      path: '/AccueilUtilisateur',
      name: ' AccueilUtilisateur',
      component: AccueilUtilisateur
    },
    {
      path: '/PublicationForum',
      name: 'forum',
      component: Publication
    }

  ]
})





