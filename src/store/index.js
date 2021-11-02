
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logo: {
      
        source: "../images/icon-left-font.png",
        alt: "Logo"

      },
      formulaire: {
        prenom:  '',
        nom:  '',
        email:  '',
        password: '',
      },
    

    mutations: {
    },
    actions: {},
    modules: {
    }
  }
})

