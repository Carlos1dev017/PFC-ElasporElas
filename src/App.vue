<template>
  <div id="app">
    <Haerder />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Haerder from './components/Haerder.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Haerder,
    Footer
  }
}
</script>

<style>
/* Estilos globais podem ser adicionados aqui */
</style>