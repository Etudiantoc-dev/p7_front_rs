
<template>
  <div id="app">
     <Header
    v-for='item in logo'
    :image='item.image'
    :key='item.name'
    />
    <section>
      <aside>
        <h2>Inscription</h2>
        <form id="app">
          <div class="form_group">
            <label for="nom">Nom</label>
            <input
              class="form-control"
              type="text"
              id="nom"
              name="nom"
              v-model="nom"
              placeholder="Nom"
            />
          </div>
          <div class="form_group">
            <label for="prenom">Prénom</label>
            <input
              type="text"
              class="form-control"
              id="prenom"
              name="prenom"
              v-model="prenom"
              placeholder="Prénom"
            />
          </div>
          <div class="form_group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="email"
              placeholder="Email"
            />
            <small>{{ validEmail }}</small>
          </div>
          <div class="form_group">
            <label for="password">Mot de passe</label>
            <input
              type="text"
              class="form-control"
              id="password"
              name="password"
              v-model="password"
              placeholder="Mot de passe"
            />
          </div>
          <div class="form_group">
            <input
              type="submit"
              value="Inscription"
              class="bouton_inscription"
              id="bouton"
            />
            <p id="erreur" style="color: orangered; width: max-content"></p>
          </div>
        </form>
      </aside>
    </section>
    <Footer />
  </div>
</template>



<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import {mapState} from "vuex"

export default {
  name: "Signup",
  components: {
    Header,
    Footer,
   
  },
  data(){
  return{
    nom :"",
    prenom :"",
    emai:"",
    password:""

      
  }},
   computed:{
    ...mapState({
      logo: "logo"
    })
  },
   methods: {
   signup(){
       const formulaireInscription = {
           nom : this.nom,
           prenom : this.prenom,
           email : this.email,
           password : this.password
       }
       {
           const user = {
             method: "POST",
             body: JSON.stringify(formulaireInscription),
             headers: { "Content-type": "application/json; charset=UTF-8" },
           }
       
  fetch(`http://localhost:3000/api/auth/signup`, user)
    .then(res => res.json())
    .then(res => console.log(res));
  
   }}
   }}
  
   
      


</script>
  <style lang="css">
body {
  width: 100%;
  margin: auto;
}
/* SECTION formulaire */
.form_group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: auto;
  height: 50px;
}
.form_group,
label {
  display: flex;
  justify-content: center;
}
.bouton_inscription {
  color: #fd2d01;
  margin-top: 15px;
}
/* Responsive */

@media (max-width: 768px) {
  header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
  .logo_header {
    margin: auto;
    width: 20%;
  }
  h1 {
    font-size: 20px;
    margin: auto;
  }
  ul,
  a {
    display: flex;
    justify-content: center;
    color: #fd2d01;
    margin-top: 10px;
    padding-left: 20px;
  }
  section {
    margin-top: 20px;
  }
}
</style>

   