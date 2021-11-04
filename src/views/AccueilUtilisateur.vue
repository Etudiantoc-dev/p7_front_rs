<template>
  <section>
    <FormUtilisateur />
  </section>
</template>

<script>
import FormUtilisateur from "../components/FormUtilisateur.vue";

import { mapState } from "vuex";

export default {
  name: "AccueilUtilisateur",
  components: {
    FormUtilisateur,
  },
  computed: {
    ...mapState({
      logo: "logo",
    }),
 
  },
};
</script>
