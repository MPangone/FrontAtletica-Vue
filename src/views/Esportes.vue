<template>
  <div>
    <h1>Esportes</h1>
  </div>

  <div class="fotos">
    <ul>
      <li v-for="esporte in esportes" :key="esporte.id">
        <img :src="`src/imgEsporte/${esporte.id}.png`" alt="">
        <p>
          Nome: {{ esporte.modalidade }}          
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import api from '../services/api';
import { onMounted, ref } from 'vue';

const esportes = ref([]);

onMounted(async () => {
  try {
    const response = await api.get('api/Esporte');
    const data = response.data;

    if (data && data.length > 0) {
      esportes.value = data;
    } else {
      console.warn('Nenhum esporte encontrado na API.');
    }
  } catch (error) {
    console.warn('Erro ao buscar informações dos esportes:', error);
  }
});
</script>

<style scoped>
@import '../assets/main.css';
</style>
