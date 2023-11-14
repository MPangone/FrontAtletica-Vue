<template>
  <div>
    <h1>Atleticas</h1>
  </div>

  <div class="fotos">
    <ul>
      <li v-for="atletica in atleticas" :key="atletica.id">
        <img :src="`src/imgAtletica/${atletica.id}.png`" alt="">
        <p>
          Nome: {{ atletica.nome }}
          <br>
          Curso: {{ atletica.curso }}
        </p>
      </li>
    </ul>
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
