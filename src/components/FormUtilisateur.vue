<script>
export default {
  name: "FormUtilisateur",
  data: function() {
    return {
      mode: "login",
      errors: [],
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
          this.nom != "" ,
          this.prenom != "" ,
          this.email != "" ,
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
    checkForm: function(e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    switchToCreateAccount: function() {
      this.mode = "create";
    },
    switchToLogin: function() {
      this.mode = "login";
    },
    validPassword: function(){

    },
    createAccount() {
      const formInscription = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      };

      const user = {
        method: "POST",
        body: JSON.stringify(formInscription),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch(`http://localhost:3000/api/auth/signup`, user)
        .then((res) => res.json())
        .then((res) => console.log(res));
    },
    login() {
       
      const formconnection = {
        email: this.email,
        password: this.password,
      };

      const user = {
        method: "POST",
        body: JSON.stringify(formconnection),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch(`http://localhost:3000/api/auth/login`, user)
      
        .then((res) => res.json())
        .then((res) => console.log(res));
       
    },
    
  },
};
</script>
<template>
    <section>
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
          Tu as déjà un compte ?
          <button class="ligne" @click="switchToLogin()">Se connecter</button>
        </p>
      </div>

      <form @submit="checkForm" novalidate="true">
        <!--action="/something" method="post" DANS L'EXEMPLE FORMVUE SUR LE SITE??-->

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
          <label for="item.prenom">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
          <small v-if="errors.length">
            <b>Veuillez entrer une adresse valide</b>
            <ul>
              <li class="style" v-bind="error in errors">{{ error }}</li>
            </ul>
          </small>
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
          class="form_group"
          @click="createAccount(checkForm())"
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
          @click.prevent="login(checkForm())"
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
    </section>
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
.ligne {
  margin-top: 5px;
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
.validEmail {
  background: #fd2d01;
}
.style {
  list-style: none;
}
b {
  color: #fd2d01;
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
