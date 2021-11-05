<script>
export default {
  name: "formulairePublication",
  data: function() {
    return {
      prenom: "",
      commentaire: "",
      multimedia: "",
    };
  },
  methods: {
    createdPublication() {
      const formulairePublication = {
        prenom: this.prenom,
        commentaire: this.commentaire,
        multimedia: this.multimedia,
      };
      {
        const userPublication = {
          method: "POST",
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
  <section>
    <form>
      <h2>Publication</h2>
      <div class="form_group">
        <label for="prenom">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="prenom"
          name="prenom"
          v-model="prenom"
          placeholder="Prénom"
        />
      </div>
      <div class="form_group">
        <label for="commentaire">Commentaire</label>
        <input
          type="text"
          class="form-control"
          id="commentaire"
          name="commentaire"
          v-model="commentaire"
          placeholder="Commentaire"
        />
      </div>
      <div class="form-group">
        <label for="multimedia">Multimédia</label>
        <input
          type="file"
          value="Télécharger"
          class="upload_file"
          id="bouton"
        />
      </div>
      <div class="form_group">
        <input
          type="submit"
          value="Publier"
          class="bouton_inscription"
          id="bouton"
        />
      </div>
    </form>
  </section>
</template>
<style lang="css">
.commentaires {
  background-color: red;
}
.container_commentaires {
  background: black;
  width: 25%;
  height: 200px;
  object-fit: cover;
  padding-top: 10px;
}

.container_img {
  width: 25%;
  height: 400px;
  object-fit: cover;
  padding-top: 10px;
  background: red;
}
#form_publication {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
