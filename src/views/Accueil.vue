<template>
  <div id="app">
    <Header/>
    <section>
      <aside>
        <FormConnexion
          v-for="item in connexion"
          :checkForm="checkForm"
          
          :email="item.email"
          :key="item.name"
          :password="item.password"
        />
      </aside>
    </section>
    <Footer/>
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
    Header,
  },
  data() {
    return {
      
      connexion: [
        {
          errors: [],
          email: "",
          password: "",
        },
      ],
    };
  },

//   methods: {
//     checkForm: function (e) {
//       this.errors = [];
//       if (!this.email) {
//         this.errors.push("Email required.");
//       } else if (!this.validEmail(this.email)) {
//         this.errors.push("Valid email required.");
//       }

//       if (!this.errors.length) {
//         return true;
//       }
//       e.preventDefault();
//     },

//     validEmail: function (email) {
//       var expReg =
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return expReg.test(email);
//     },
//   },
};
</script>
