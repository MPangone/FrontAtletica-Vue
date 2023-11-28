<template>
  <div style="display: flex; justify-content: center; height: 100vh; background-color: #e0e0e0;">
    <div>
      <h1 style="color: #007bff;">Atleticas</h1>
    </div>

    <div class="fotos">
      <ul>
        <li v-for="atletica in atleticas" :key="atletica.id">
          <img :src="`src/imgAtletica/${atletica.id}.png`" alt="">
          <p style="color: #333;">
            Nome: {{ atletica.nome }}
            <br>
            Curso: {{ atletica.curso }}
          </p>
        </li>
      </ul>
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
@import '../assets/main.css';
</style>
