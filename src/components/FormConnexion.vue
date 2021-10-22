<template>
  <div class="form_group">
    <form id="app">
<!-- 
    <p v-if= "errors.length">
    <b> Veuillez Corriger les erreurs suivantes:</b>
    <ul>
      <li :v-for= "error in errors"> {{ error }}</li>
    </ul>
  </p> -->
      <div class="form_group">
        <label for="email">Email</label>
        <input
          class="form-control"
          type="email"
          id="email"
          name="email"
          v-model= "email"
          placeholder="Adresse Email"
        />
      </div>
      <div class="form_group">
        <label for="password">Mot de passe</label>
        <input
          type="text"
          class="form-control"
          id="password"
          name="password"
          v-model = "password"
          placeholder="Mot de passe"
        />
      </div>
      <div class="form_group">
        <input
          type="submit"
          value="Connexion"
          class="bouton_connexion"
          id="bouton"
        />
        <p id="erreur" style="color: orangered; width: max-content"></p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormConnexion",
  props: ["checkForm","validEmail","email","password"]
};
</script>
<style lang="css">
body {
  width: 100%;
  margin: auto;
}
/* HEADER */
header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.logo_header {
  width: 200px;
  margin-top: -40px;
}

ul,
a {
  margin-right: 30px;
  text-decoration: none;
  list-style-type: none;
  color: #fd2d01;
}
ul,
li {
  padding-top: 10px;
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
.bouton_connexion {
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
