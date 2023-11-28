<template>
  <div style="display: flex; flex-direction: column; align-items: center; height: 100vh; background-color: #e0e0e0;">
    <h1 style="color: #007bff;">Atleticas</h1>

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
import api from '../services/api';
import { onMounted, ref } from 'vue';

const atleticas = ref([]);

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
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: calc(33.33% - 20px);
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

</style>
