<template>
  <!--   
      <FormInscription 
      -
       
       
       
       /> -->
  <FormInscription
    :nom="formulaire.nom"
    :prenom="formulaire.prenom"
    :email="formulaire.email"
    :password="formulaire.password"
    :key="formulaire.name"
  />
</template>

<script>
import FormInscription from "../components/FormInscription.vue";
import { mapState,mapGetters } from "vuex";

export default {
  name: "Signup",
  components: {
    FormInscription,
  },

  computed: {
    ...mapState({
      formulaire: "formulaire",
    }),
    ...mapGetters({
      createAccount: "createAccount",
    }),
  },
  // methods: {

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
};
</script>
