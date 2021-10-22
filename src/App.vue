<template>
  <div id="app">
    <header>
      <img
        class="logo_header"
        src="../src/assets/icon-left-font.png"
        alt="Logo de l'entreprise Groupomania"
      />
      <!-- <FormConnexion msg="Réseau social des employés" /> -->
      <h1>Réseau social des employé(e)s</h1>

      <ul>
        <!-- <FormConnexion /> -->
        <li><a href="inscription">Inscription</a></li>
        <li><a href="connexion">Connexion</a></li>
        <li><a href="forum">Forum</a></li>
      </ul>
    </header>
    <section>
      <aside>
        <FormConnexion> </FormConnexion>
       
      </aside>
    </section>
     <Footer class="footer">
          <p>{{ copie }}</p>
        </Footer>
  </div>
</template>

<script>
import FormConnexion from "./components/FormConnexion.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    FormConnexion,
    Footer,
  },
  data() {
    return {
      copie: "réseau",
      connexion: [
        {
          errors: [],
          email: null,
          password: null,
        },
      ],
    };
  },

  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },

    validEmail: function(email) {
      var expReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return expReg.test(email);
    },
  },

  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${this.copie} ${currentYear}`;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
