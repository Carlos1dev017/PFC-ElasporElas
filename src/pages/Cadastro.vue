<template>
  <div class="cadastro-page">
    <!-- Modal de Cadastro -->
    <div id="cadastroModal" class="modal" :class="{ 'show': showModal }">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h1>Receba Nossas Atualizações e Participe!</h1>
        <p>
          Ao se cadastrar, você receberá por e-mail todas as novidades do nosso site, 
          informações sobre eventos futuros, e conteúdos exclusivos do "Elas por Elas". 
          Mantenha-se conectada e faça parte da nossa comunidade!
        </p>
        
        <form @submit.prevent="handleSubmit" id="cadastroFormModal">
          <div class="form-group">
            <label for="emailModal">E-mail:</label>
            <input 
              type="email" 
              id="emailModal" 
              v-model="formData.email" 
              name="email" 
              required
            >
          </div>
          <div class="form-group">
            <label for="passwordModal">Criar Senha:</label>
            <input 
              type="password" 
              id="passwordModal" 
              v-model="formData.password" 
              name="password" 
              required
            >
          </div>
          <button type="submit" class="submit-btn">Cadastrar</button>
          <p v-if="message" id="messageModal" class="message" :class="messageClass">
            {{ message }}
          </p>
        </form>
      </div>
    </div>

    <!-- Botão para abrir modal -->
    <div class="cadastro-trigger">
      <button @click="openModal" class="participar" aria-label="Botão para participar do projeto">
        Receber atualizações 🔔
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cadastro',
  data() {
    return {
      showModal: false,
      formData: {
        email: '',
        password: ''
      },
      message: '',
      messageClass: ''
    }
  },
  mounted() {
    // Abrir modal automaticamente se necessário
    this.showModal = true;
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.message = '';
      this.formData = {
        email: '',
        password: ''
      };
    },
    handleSubmit() {
      // Validação básica
      if (!this.formData.email || !this.formData.password) {
        this.message = 'Por favor, preencha todos os campos.';
        this.messageClass = 'error';
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.formData.email)) {
        this.message = 'Por favor, insira um e-mail válido.';
        this.messageClass = 'error';
        return;
      }

      // Validação de senha
      if (this.formData.password.length < 6) {
        this.message = 'A senha deve ter pelo menos 6 caracteres.';
        this.messageClass = 'error';
        return;
      }

      // Simular envio do formulário
      this.message = 'Cadastro realizado com sucesso! Você receberá nossas atualizações em breve.';
      this.messageClass = 'success';

      // Limpar formulário após sucesso
      setTimeout(() => {
        this.closeModal();
      }, 2000);

      // Aqui você pode adicionar a lógica para enviar os dados para o backend
      console.log('Dados do cadastro:', this.formData);
    }
  }
}
</script>

<style scoped>
/* Importando os estilos CSS originais */
@import '../assets/CSS/styles_cadastro.css';

.cadastro-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal.show {
  display: block;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: none;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-button {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 10px;
}

.close-button:hover,
.close-button:focus {
  color: #000;
  text-decoration: none;
}

h1 {
  color: #d63384;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

p {
  text-align: center;
  margin-bottom: 20px;
  color: #666;
  line-height: 1.5;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: 500;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #d63384;
  box-shadow: 0 0 5px rgba(214, 51, 132, 0.3);
}

.submit-btn {
  width: 100%;
  background-color: #d63384;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #b02a5b;
}

.message {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.cadastro-trigger {
  text-align: center;
}

.participar {
  background-color: #d63384;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.participar:hover {
  background-color: #b02a5b;
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .modal-content {
    margin: 10% auto;
    width: 95%;
    padding: 15px;
  }
  
  h1 {
    font-size: 1.3rem;
  }
  
  input[type="email"],
  input[type="password"] {
    font-size: 14px;
  }
}
</style>

