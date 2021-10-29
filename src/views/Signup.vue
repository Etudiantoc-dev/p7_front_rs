<template>
  <div id="app">
    <Header v-for="item in logo" :image="item.image" :key="item.name" />
    <FormInscription
          v-for="item in formulaire"
          :key="item.name"
          :nom='nom'
          :prenom='prenom'
          :email='email'
          :password='password'

          />
    <Footer/>
    </div>
    </template>
      
    
<script>

import Header from "../components/Header.vue";
import FormInscription from "../components/FormInscription.vue"
import Footer from "../components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "Signup",
  components: {
    Header,
    Footer,
    FormInscription
  },
 
  computed: {
    ...mapState({
      logo: "logo",
      formulaire:"formulaire"

    }),
  },
  methods: {
    signup() {
      const formulaireInscription = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      };
      {
        const user = {
          method: "POST",
          body: JSON.stringify(formulaireInscription),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        };

        fetch(`http://localhost:3000/api/auth/signup`, user)
          .then((res) => res.json())
          .then((res) => console.log(res));
      }
    },
  },
};
</script>
  



   