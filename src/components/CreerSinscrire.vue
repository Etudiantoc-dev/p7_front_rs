<script>
export default {
  name: "CreerSinscrire",
  data: function() {
    return {
      mode: "login",
      email: "",
      prenom: "",
      nom: "",
      password: "",
    };
  },
  computed: {
    validatedFields: function() {
      if (this.mode == "create") {
        if (
          this.nom != "" &&
          this.prenom != "" &&
          this.email != "" &&
          this.password != ""
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  methods: {
    switchToCreateAccount: function() {
      this.mode = "create";
    },
    switchToLogin: function() {
      this.mode = "login";
    },
    createAccount: function() {
      console.log(this.nom, this.prenom, this.email, this.password);
    },
  },
};
</script>
<template>
  <div id="app">
    <section>
      <aside>
        <div class="connex" v-if="mode == 'login'">
          <h2>Connexion</h2>
        </div>
        <div class="connex" v-else>
          <h2>Inscription</h2>
        </div>
        <div class="connex" v-if="mode == 'login'">
          <p>
            Tu n'as pas encore de compte ?
            <button @click="switchToCreateAccount()">Créer un compte</button>
          </p>
        </div>
        <div class="connex" v-else>
          <p>
            Tu as déjà un compte
            <button @click="switchToLogin()">Se connecter</button>
          </p>
        </div>

        <form>
          <div class="form_group" v-if="mode == 'create'">
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
          <div class="form_group" v-if="mode == 'create'">
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
          <div
            class="form_group" @click="createAccount()" 
            :class="{ button_disabled: !validatedFields }"
            v-if="mode == 'create'"
          >
            <input
              
              type="submit"
              value="Inscription"
              class="bouton_inscription"
              id="bouton"
            />
            <p id="erreur" style="color: orangered; width: max-content"></p>
          </div>
          <div
            class="form_group"
            :class="{ button_disabled: !validatedFields }"
            v-else
          >
            <input
              type="submit"
              value="Connection"
              class="bouton_connection"
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

.bouton_inscription,
.bouton_connection {
  color: #fd2d01;
  margin-top: 15px;
}

.button_disabled {
  pointer-events: none;
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
