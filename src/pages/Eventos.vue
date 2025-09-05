<template>
  <main>
    <section class="eventos">
      <h1>Nossos Eventos</h1>

      <div class="item-evento" v-for="(evento, index) in eventos" :key="index" data-aos="fade-up">
        <div class="info-evento">
          <h2>{{ evento.titulo }}</h2>
          <div class="evento-meta">
            <div class="meta-item">
              <span>📅</span>
              <span>{{ evento.data }}</span>
            </div>
            <div class="meta-item">
              <span>📍</span>
              <span>{{ evento.local }}</span>
            </div>
          </div>
          <p class="descricao-evento" v-html="evento.descricao"></p>
        </div>
        <Carousel :images="evento.imagens" :index="index" />
      </div>
    </section>
  </main>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
  name: 'Eventos',
  components: {
    Carousel
  },
  data() {
    return {
      eventos: [
        {
          titulo: "Dia das Mulheres: Elas por Elas - 1º Edição",
          data: "26 e 27 de Março, 2025",
          local: "IFPR - Campus Assis Chateaubriand",
          descricao: `Em parceria com a Secretaria da Assistência Social e da Mulher, promoveu um evento especial para as mulheres acompanhadas pelo CRAS.💜
            O encontro celebrou as conquistas femininas e criou um espaço acolhedor para trocas de histórias e reflexões.
            A abertura, conduzida pela Profa.Yohana Saheli, trouxe palavras inspiradoras como força, guerreiras e acolhimento.
            O projeto IF'Arte emocionou a todos com música ao vivo.🎶
            As estudantes Camila, Fabíola e Heloisa contextualizaram o Dia das Mulheres,
            e a Profª Michelli Galli apresentou o histórico do Coletivo Elaspor Elas📖💬.
            O evento contou ainda com poesias, cordéis, partilhas emocionantes e debates sobre desafios femininos em carreiras predominantemente masculinas.
            No encerramento, a dinâmica das fotos trouxe momentos de auto conexão e empoderamento, onde cada mulher pôde resgatar sua essência e fortalecer sua voz.📷✨
            O Dia das Mulheres 'Elas por Elas' nasceu para dar voz às mulheres e quebrar silêncios históricos. Que esse seja apenas o começo! 💪🏻💜`,
          imagens: [
            "./imagem/FOTO1-mês das mulheres.jpg",
            "./imagem/FOTO2-mês das mulhes.png",
            "./imagem/FOTO3-mês das mulhes.png",
            "./imagem/FOTO3.1-mês das mulhes.png"
          ]
        },
        // Outros eventos...
      ]
    }
  }
}
</script>

<style scoped src="../assets/styles/styles_evento.css"></style>