<template>
  <div id="app">

    
     
        <!-- <CreerSinscrire/> -->
        <FormConnexion/>
      
    
    <Footer/>
  </div>
</template>

<script>
import FormConnexion from "../components/FormConnexion.vue";
// import CreerSinscrire from '../components/CreerSinscrire.vue'


import {mapState} from "vuex";

export default {
  name: "Accueil",
  components: {
    FormConnexion,
  
    // CreerSinscrire
  },
  computed:{
    ...mapState({
      logo: "logo"
    })
  },
  data() {
    return {
      
      connexion: [
        {
          errors: [],
          email: "",
          password: "",
        },
      ],
    };
  },

//   methods: {
//     checkForm: function (e) {
//       this.errors = [];
//       if (!this.email) {
//         this.errors.push("Email required.");
//       } else if (!this.validEmail(this.email)) {
//         this.errors.push("Valid email required.");
//       }

//       if (!this.errors.length) {
//         return true;
//       }
//       e.preventDefault();
//     },

//     validEmail: function (email) {
//       var expReg =
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return expReg.test(email);
//     },
//   },
};
</script>
