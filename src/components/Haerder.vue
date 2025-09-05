<template>
  <header :class="headerClass">
    <div class="top-bar">
      <div class="#"></div>
      <router-link to="/cadastro">
        <button class="participar" aria-label="Botão para participar do projeto">
          Receber atualizações 🔔
        </button>
      </router-link>
    </div>
    <Navigation />
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation
  },
  computed: {
    headerClass() {
      return this.$route.path === '/' ? 'normal' : 'andante'
    }
  }
}
</script>

<style scoped>
/* Estilos específicos do header */
</style>