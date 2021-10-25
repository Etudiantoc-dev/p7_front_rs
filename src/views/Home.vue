<template>
  <div id="app">
 <Header></Header>
    <section>
      <aside>
        <FormConnexion
          v-for="item in connexion"
          :checkForm="checkForm"
          :validEmail="validEmail"
          :email="item.email"
          :key="item.name"
          :password="item.password"
        />
      </aside>
    </section>
    <Footer class="footer">
      <p>{{ copie }}</p>
    </Footer>
  </div>
</template>

<script>
import FormConnexion from "../components/FormConnexion.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  name: "App",
  components: {
    FormConnexion,
    Footer,
    Header
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
    checkForm: function (e) {
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

    validEmail: function (email) {
      var expReg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
