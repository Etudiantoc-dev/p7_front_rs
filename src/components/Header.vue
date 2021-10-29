   

<template>
  <header id="app" class="app">
    <img class="logo_header" :src="image.source" :alt="image.alt" />

    <h1>Réseau social des employé(e)s</h1>

    <ul>
      <li><router-link to="./Signup">
        <a href="inscription">Inscription</a>
        </router-link>
      </li>
      <li>
        <router-link to="/"> <a href="connexion">Connexion</a></router-link>
      </li>
      <li>
        <router-link to="/Publication">
          <a href="Publication">Publication</a>
        </router-link>
      </li>
      <li>
        <a href="Forum">Forum</a>
      </li>
    </ul>
  </header>
</template>
  
   <script>
export default {
  name: "Header",
  props: {
    image: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style lang="css">
body {
  width: 100%;
  margin: auto;
}
/* HEADER */
header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.logo_header {
  width: 200px;
  margin-top: -40px;
}

ul,
a {
  margin-right: 30px;
  text-decoration: none;
  list-style-type: none;
  color: #fd2d01;
}
ul,
li {
  padding-top: 10px;
}

/* Responsive */

@media (max-width: 768px) {
  header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
  .logo_header {
    margin: auto;
    width: 20%;
  }
  h1 {
    font-size: 20px;
    margin: auto;
  }
  ul,
  a {
    display: flex;
    justify-content: center;
    color: #fd2d01;
    margin-top: 10px;
    padding-left: 20px;
  }
  section {
    margin-top: 20px;
  }
}
</style>




