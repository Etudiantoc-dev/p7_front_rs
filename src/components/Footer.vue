<template>
  <footer id="app" class="app">
    <p class="footer">{{ copyright }}</p>
    <p><a href="Aide">Aides</a></p>
    <p><a href="Contact">Contact</a></p>
  </footer>
</template>

<style>
footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>

<script>


export default {
  Name: "Footer",
  props: {
    copyright: String,
  },
 

};
</script>
