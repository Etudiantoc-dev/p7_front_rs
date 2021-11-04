<template>
  <div id="app">
    <div id="nav">
      <Header :image="logo" />
    </div>
<section>
  
</section>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    
    Footer,
  },

  computed: {
    ...mapState({
      logo: "logo",
    }),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
