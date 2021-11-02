<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import FormPublication from "../components/FormPublication.vue"
import { mapState } from "vuex";

export default {
  name: "PublicationForum",
  components: {
    Footer,
    Header,
    FormPublication
  },
  computed: {
    ...mapState({
      logo: "logo",
    }),
  },
  methods: {
    signup() {
      const formulairePublication = {
        prenom: this.prenom,
        commentaire: this.commentaire,
        multimedia: this.multimedia,
      };
      {
        const userPublication = {
          body: JSON.stringify(formulairePublication),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        };

        fetch(`http://localhost:3000/api/publication`, userPublication)
          .then((res) => res.json())
          .then((res) => console.log(res));
      }
    },
  },
};
</script>
<template> <div id="App">
    <Header
    v-for='item in logo'
    :image='item.image'
    :key='item.name'
    />
  <FormPublication/>
  <Footer/>

  </div>
</template>
