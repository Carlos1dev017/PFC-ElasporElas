<template>
  <div class="sobre-page">
    <section class="inicio">
      <div class="logo-inicio">
        <img src="" alt="Logo principal Elas por Elas">
      </div>
      <div class="text fade-in">
        <h2>Quem somos nós?</h2>
        <p>
          Projeto de extensão do IFPR (Instituto Federal do Paraná) com intuito de ser
          um espaço acolhedor feminino, não apenas ouvindo mulheres, mas também
          organizando discussões a respeito do papel das mesmas na sociedade, assim
          contribuindo para essa causa.
        </p>
        <h3>Respeito, Autonomia e Empoderamento da Mulher na escola e na comunidade.</h3>
        <button class="saiba-mais" aria-label="Saiba mais sobre o projeto">
          <router-link to="/sobre">Saiba mais</router-link>
        </button>
      </div>
    </section>

    <main>
      <section class="objetivos">
        <h1>NOSSOS OBJETIVOS</h1>
        <div class="cards">
          <div class="card fade-in">
            <img 
              src="https://assets-blog.goldenergy.pt/uploads/elementor/thumbs/medidas-para-promover-a-igualdade-de-genero-r0px4501ibqq2589ca0jy7af5psjxgwxq1inik3sh8.jpg" 
              alt="Equidade de gênero"
            >
            <div class="card-content">
              <h3>Promover a equidade de gênero</h3>
              <p>
                Impulsionar a Equidade de Gênero: Trabalhamos ativamente para desconstruir
                desigualdades e fomentar um ambiente onde todas as pessoas, 
                independentemente do gênero, tenham as mesmas oportunidades e respeito.
              </p>
            </div>
          </div>
          
          <div class="card fade-in">
            <img 
              src="https://img.freepik.com/vetores-premium/vista-traseira-de-meninas-de-diferentes-nacionalidades-mulheres-jovens-juntas-abracando-se_387657-35.jpg?semt=ais_items_boosted&w=740" 
              alt="Espaço de acolhimento"
            >
            <div class="card-content">
              <h3>Promover um espaço de acolhimento às mulheres</h3>
              <p>
                Nosso compromisso é promover um espaço de acolhimento genuíno às 
                mulheres, dentro e fora do Campus. Queremos que cada mulher se sinta 
                segura, ouvida, respeitada e parte de uma comunidade que a apoia.
              </p>
            </div>
          </div>
          
          <div class="card fade-in">
            <img 
              src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-woman-symbol-vector-feminism-power-female-icon-feminist-hand-girls-rights-png-image_5163738.jpg" 
              alt="Conscientização"
            >
            <div class="card-content">
              <h3>Conscientizar sobre a luta feminina</h3>
              <p>
                Buscamos conscientizar sobre a profundidade e a importância da luta
                feminina, compartilhando histórias, educando sobre nossos direitos
                e mobilizando para que as conquistas avancem e não haja retrocessos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section class="noistodas">
      <section class="coordenadoras">
        <h2>Coordenadoras</h2>
        <div class="membros">
          <div class="membro">
            <img src="/imagem/coord.celina.jpg" alt="Celina Gomes">
            <h3>Celina Gomes</h3>
            <p class="carreira">profissão ou/e Especialidade</p>
            <p>Um pouco sobre...........</p>
          </div>
          <div class="membro">
            <img src="/api/placeholder/120/120" alt="Michelli Galli">
            <h3>Michelli Galli</h3>
            <p class="carreira">profissão ou/e Especialidade</p>
            <p>Um pouco sobre...........</p>
          </div>
        </div>
      </section>
    </section>

    <section class="noistodas">
      <section class="integrantes">
        <h2>Desenvolvedoras do site</h2>
        <div class="membros">
          <div class="membro">
            <img src="/api/placeholder/120/121" alt="Camila Bezerra">
            <h3>Camila Bezerra</h3>
            <p class="fez">Estrutura • ........</p>
            <p>....................................Colaborou</p>
          </div>
          <div class="membro">
            <img src="/api/placeholder/120/120" alt="Fabiola Dutra">
            <h3>Fabiola Dutra</h3>
            <p class="fez">Conteúdo • ..........</p>
            <p>....................................Colaborou</p>
          </div>
          <div class="membro">
            <img src="/imagem/membrohelo.jpg" alt="Heloisa de Oliveira">
            <h3>Heloisa de Oliveira</h3>
            <p class="fez">Interface • ..........</p>
            <p>....................................Colaborou</p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Sobre',
  mounted() {
    // Adicionar animações fade-in quando necessário
    this.addFadeInAnimations();
  },
  methods: {
    addFadeInAnimations() {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      });

      fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    }
  }
}
</script>

<style scoped>
/* Importando os estilos CSS originais */
@import '../assets/CSS/style_sobre.css';

.sobre-page {
  min-height: 100vh;
}

.inicio {
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.text h2 {
  color: #d63384;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.text h3 {
  color: #6c757d;
  font-size: 1.2rem;
  margin: 20px 0;
  font-style: italic;
}

.text p {
  color: #495057;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
}

.saiba-mais {
  background-color: #d63384;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.saiba-mais:hover {
  background-color: #b02a5b;
  transform: translateY(-2px);
}

.saiba-mais a {
  color: white;
  text-decoration: none;
}

.objetivos {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.objetivos h1 {
  text-align: center;
  color: #d63384;
  font-size: 2.5rem;
  margin-bottom: 60px;
  font-weight: bold;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 30px;
}

.card-content h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.card-content p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.noistodas {
  background: #f8f9fa;
  padding: 60px 20px;
}

.coordenadoras, .integrantes {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.coordenadoras h2, .integrantes h2 {
  color: #d63384;
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: 600;
}

.membros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.membro {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.membro:hover {
  transform: translateY(-5px);
}

.membro img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #d63384;
}

.membro h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.carreira, .fez {
  color: #d63384;
  font-weight: 500;
  margin-bottom: 10px;
}

.membro p:last-child {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Responsividade */
@media (max-width: 768px) {
  .text h2 {
    font-size: 2rem;
  }
  
  .objetivos h1 {
    font-size: 2rem;
  }
  
  .cards {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .membros {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .inicio {
    padding: 40px 15px;
  }
  
  .objetivos {
    padding: 60px 15px;
  }
  
  .noistodas {
    padding: 40px 15px;
  }
}
</style>

