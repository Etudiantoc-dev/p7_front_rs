<template>
  <div id="app">
    <Header />
    <section>
      <aside>
        <h2>Inscription</h2>
        <form id="app">
          <div class="form_group">
            <label for="item.nom">Nom</label>
            <input
              v-model="nom"
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
              v-model="prenom"
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
              v-model="email"
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
              v-model="password"
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
<script>
export default {
  name: "FormInscription",

  props: [
    {
      nom: String,
      prenom: String,
      email: String,
      password: String,
    },
  ],
};
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
