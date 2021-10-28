
<template>
<div id="app">
  <div id="nav">
    <router-link to="/"></router-link><router-link to="/Signup" tag ="button">inscription</router-link>
   </div> <!-- Comment cibler et utiliser le lien "Inscription" déjà construit dans Header-->
    <router-view  />
  </div>
</template>
<style>


#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
