<template>
  <div style="display: flex; flex-direction: column; align-items: center; height: 150vh; background-color: #e0e0e0;">
    <h1 style="color: #007bff;">Atleticas</h1>
    <button @click="openModal">Adicionar Atletica</button>
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <form @submit.prevent="createAtletica">
          <label>Nome:</label>
          <input v-model="newAtletica.nome" required>

          <label>Curso:</label>
          <input v-model="newAtletica.curso" required>

          <button type="submit">Criar Atletica</button>
        </form>

        <button @click="closeModal">Fechar</button>
      </div>
    </div>

    <div class="card-container">
      <div v-for="atletica in atleticas" :key="atletica.id" class="card">
        <img :src="`src/imgAtletica/${atletica.id}.png`" alt="" class="card-image">
        <div class="card-content">
          <p style="color: #333;">
            Nome: {{ atletica.nome }}
            <br>
            Curso: {{ atletica.curso }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../services/api';

const isModalOpen = ref(false);
const newAtletica = ref({ nome: '', curso: '' });
const atleticas = ref([]);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  newAtletica.value = { nome: '', curso: '' };
};

const createAtletica = async () => {
  try {
    const response = await api.post('api/Atletica', newAtletica.value);
    const createdAtletica = response.data;

    atleticas.value.push(createdAtletica);

    closeModal();
  } catch (error) {
    console.error('Erro ao criar a Atletica:', error);
  }
};

onMounted(async () => {
  try {
    const response = await api.get('api/Atletica');
    const data = response.data;

    if (data && data.length > 0) {
      atleticas.value = data;
    } else {
      console.warn('Nenhuma atletica encontrada na API.');
    }
  } catch (error) {
    console.warn('Erro ao buscar informações das atleticas:', error);
  }
});
</script>

<style scoped>

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100vh;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: calc(25% - 20px); 
  text-align: center;
  background-color: #fff;
}

.card-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.card-content {
  padding: 10px;
}

p {
  text-align: center;
  font-size: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}




.modal-content form label,
.modal-content form input,
.modal-content form button {
  margin-bottom: 15px;
}
</style>
