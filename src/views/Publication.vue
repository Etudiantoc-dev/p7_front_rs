<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { mapState } from "vuex";
export default {
  name: "Publication",
  components: {
    Footer,
    Header,
  },
  computed: {
    ...mapState({
      logo: "logo",
    }),
  },
};
</script>
<template>
  <div id="app" class="app">
    <Header v-for="item in logo" :image="item.image" :key="item.name" />
    <section>
      <aside id="form_publication">
        <div class="container_commentaires"></div>
        <div class="container_img"></div>
      </aside>
      <aside></aside>
    </section>
    <Footer />
  </div>
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
#form_publication{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>