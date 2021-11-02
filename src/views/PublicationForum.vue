<script>
import FormPublication from "../components/FormPublication.vue"


export default {
  name: "PublicationForum",
  components: {
    FormPublication
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
<template> 
 
  <FormPublication/>
 

  
</template>
