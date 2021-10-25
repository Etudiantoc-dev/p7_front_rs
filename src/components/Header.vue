   

<template>
  <header id="app" class="app">
    <img class="logo_header" src="" alt="Logo de l'entreprise Groupomania" />

    <h1>Réseau social des employé(e)s</h1>

    <ul>
      <li>
        <a href="inscription">Inscription</a>
      </li>
      <li>
        <a href="connexion">Connexion</a>
      </li>
      <li>
        <a href="forum">Forum</a>
      </li>
    </ul>
  </header>
</template>
  
   <script>
export default {
  name: "Header",
}
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




