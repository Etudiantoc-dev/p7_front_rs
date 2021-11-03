import Vue from 'vue'
import CreerSinscrire from '../src/components/CreerSinscrire'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(CreerSinscrire )
}).$mount('#app')
