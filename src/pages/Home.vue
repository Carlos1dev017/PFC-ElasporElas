<template>
  <main>
    <section class="inicio">
      <div class="logo-inicio">
        <img src="../assets/imagem/imagem.logoelasporelas.png" alt="Logo principal Elas por Elas">
      </div>
      <div class="text fade-in">
        <h2>Quem somos nós?</h2>
        <p>Projeto de extensão do IFPR (Instituto Federal do Paraná) com intuito de ser
          um espaço acolhedor feminino, não apenas ouvindo mulheres, mas também
          organizando discussões a respeito do papel das mesmas na sociedade, assim
          contribuindo para essa causa.</p>
        <h3>Respeito, Autonomia e Empoderamento da Mulher na escola e na comunidade.</h3>
        <button class="saiba-mais" aria-label="Saiba mais sobre o projeto">
          <router-link to="/sobre">Saiba mais</router-link>
        </button>
      </div>
    </section>

    <section class="objetivos">
      <h1>NOSSOS OBJETIVOS</h1>
      <div class="cards">
        <div class="card fade-in">
          <img src="../assets/imagem/equidade.png" alt="Equidade de gênero">
          <div class="card-content">
            <h3>Promover a equidade de gênero</h3>
            <p>Impulsionar a Equidade de Gênero: Trabalhamos ativamente para desconstruir
              desigualdades e fomentar um ambiente onde todas as pessoas, 
              independentemente do gênero, tenham as mesmas oportunidades e respeito.</p>
          </div>
        </div>
        
        <div class="card fade-in">
          <img src="../assets/imagem/conjunto de mulheres.png" alt="Espaço de acolhimento">
          <div class="card-content">
            <h3>Promover um espaço de acolhimento às mulheres</h3>
            <p>Nosso compromisso é promover um espaço de acolhimento genuíno às 
              mulheres, dentro e fora do Campus. Queremos que cada mulher se sinta 
              segura, ouvida, respeitada e parte de uma comunidade que a apoia.</p>
          </div>
        </div>
        
        <div class="card fade-in">
          <img src="../assets/imagem/luta fenista.png" alt="Conscientização">
          <div class="card-content">
            <h3>Conscientizar sobre a luta feminina</h3>
            <p>Buscamos conscientizar sobre a profundidade e a importância da luta
              feminina, compartilhando histórias, educando sobre nossos direitos
              e mobilizando para que as conquistas avancem e não haja retrocessos.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="objetivos">
      <h1>DEPOIMENTOS</h1>
      <div class="container">
        Em breve, compartilharemos depoimentos inspiradores de mulheres que fazem parte da nossa comunidade.
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped src="../assets/styles/styles.css"></style>