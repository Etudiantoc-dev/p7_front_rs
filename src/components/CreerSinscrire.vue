<script>
export default {
  name: "CreerSinscrire",
 };
</script>
<template>
  <div id="app">
    <Header v-for="item in logo" :image="item.image" :key="item.name" />
    <section>
      <aside>
        <div class="connex">
          <h2>Connexion</h2>
        </div>
        <div class="connex">
          <p>
            Tu n'as pas encore de compte ?
            <span><a href="Créer un compte">Créer un compte</a> </span>
          </p>
        </div>

        <form id="app">
          <div class="form_group">
            <label for="item.nom">Nom</label>
            <input
              class="form-control"
              type="text"
              id="nom"
              name="nom"
              placeholder="Nom"
              kei="item.name"
            />
          </div>
          <div class="form_group">
            <label for="item.prenom">Prénom</label>
            <input
              type="text"
              class="form-control"
              id="prenom"
              name="prenom"
              placeholder="Prénom"
            />
          </div>
          <div class="form_group">
            <label for="item.email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form_group">
            <label for="item.password">Mot de passe</label>
            <input
              type="text"
              class="form-control"
              id="password"
              name="password"
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
<style lang="css">
body {
  width: 100%;
  margin: auto;
}
/* SECTION formulaire */
.connex {
  margin: auto;
  flex-direction: column;
  display: flex;
  width: 25%;
  text-align: center;
}
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
