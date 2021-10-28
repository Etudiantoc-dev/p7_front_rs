<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import {mapState} from "vuex"
export default {
  name: "Publication",
  components: {
    Footer,
    Header,
  },
   computed:{
    ...mapState({
      logo: "logo"
    })
}}
</script>
<template id="app" class="app">
  <section>
    <aside>
      <Header v-for="item in logo" :image="item.image" :key="item.name" />
      <Footer />
    </aside>
  </section>
</template>