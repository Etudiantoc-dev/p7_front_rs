<template>
  <div>
    <FormUtilisateur />
  </div>
</template>

<script>
import FormUtilisateur from "../components/FormUtilisateur.vue";

import { mapState, mapGetters} from "vuex";

export default {
  name: "Accueil",
  components: {
    FormUtilisateur,
  },
  computed: {
    ...mapState({
      logo: "logo",
    }),
    ...mapGetters({
      validatedFields:'validatedFields'
    })
  },
};
</script>
