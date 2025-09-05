<template>
  <nav aria-label="Navegação principal">
    <div class="logo">
      <img src="../assets/imagem/imagem.logoelasporelas.png" alt="Logo Elas por Elas - Projeto de Extensão IFPR">
    </div>
    <ul class="menu">
      <li><router-link to="/" :class="{ active: $route.path === '/' }">Home</router-link></li>
      <li><router-link to="/eventos" :class="{ active: $route.path === '/eventos' }">Eventos</router-link></li>
      <li><router-link to="/comunidade" :class="{ active: $route.path === '/comunidade' }">Comunidade</router-link></li>
      <li><router-link to="/pesquisas" :class="{ active: $route.path === '/pesquisas' }">Pesquisas</router-link></li>
      <li class="dropdown">
        <router-link to="/informacoes" class="dropbtn" :class="{ active: $route.path === '/informacoes' }">Informações</router-link>
        <div class="dropdown-content">
          <router-link to="/informacoes#direitos">Direitos das Mulheres</router-link>
          <router-link to="/informacoes#saude">Saúde Reprodutiva</router-link>
          <router-link to="/informacoes#higiene">Higiene e Autocuidado</router-link>
          <router-link to="/informacoes#violencias">Tipos de violências</router-link>
          <router-link to="/informacoes#ciclo">Ciclo de Violência</router-link>
          <router-link to="/informacoes#rededeapoio">Rede de Apoio</router-link>
          <router-link to="/informacoes#projetos">Projetos de ajuda e apoio</router-link>
        </div>
      </li>
      <li><router-link to="/sobre" :class="{ active: $route.path === '/sobre' }">Sobre</router-link></li>
    </ul>
    <div class="hamburger" aria-label="Menu de navegação" role="button" @click="toggleMobileMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul class="mobile-menu" :class="{ open: mobileMenuOpen }" aria-hidden="true">
      <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
      <li><router-link to="/eventos" @click="closeMobileMenu">Eventos</router-link></li>
      <li><router-link to="/comunidade" @click="closeMobileMenu">Comunidade</router-link></li>
      <li><router-link to="/pesquisas" @click="closeMobileMenu">Pesquisas</router-link></li>
      <li class="dropdown">
        <a href="javascript:void(0);" class="dropbtn" @click="toggleInfoDropdown">
          Informações <span class="arrow-icon"></span>
        </a>
        <div class="dropdown-content" :class="{ active: infoDropdownOpen }">
          <router-link to="/informacoes#direitos" @click="closeMobileMenu">Direitos das Mulheres</router-link>
          <router-link to="/informacoes#saude" @click="closeMobileMenu">Saúde Reprodutiva</router-link>
          <router-link to="/informacoes#higiene" @click="closeMobileMenu">Higiene e Autocuidado</router-link>
          <router-link to="/informacoes#violencias" @click="closeMobileMenu">Tipos de violências</router-link>
          <router-link to="/informacoes#ciclo" @click="closeMobileMenu">Ciclo de Violência</router-link>
          <router-link to="/informacoes#rededeapoio" @click="closeMobileMenu">Rede de Apoio</router-link>
          <router-link to="/informacoes#projetos" @click="closeMobileMenu">Projetos de ajuda e apoio</router-link>
        </div>
      </li>
      <li><router-link to="/sobre" @click="closeMobileMenu">Sobre</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      mobileMenuOpen: false,
      infoDropdownOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      this.infoDropdownOpen = false
    },
    toggleInfoDropdown() {
      this.infoDropdownOpen = !this.infoDropdownOpen
    }
  }
}
</script>

<style scoped src="../assets/styles/styles_menu.css"></style>