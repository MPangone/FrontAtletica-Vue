<template>
  <div style="display: flex; justify-content: center; height: 100vh; background-color: #e0e0e0;">
    <div>
      <h1 style="color: #007bff;">Campeonatos</h1>
    </div>

    <div class="fotos">
      <ul>
        <li v-for="campeonato in campeonatos" :key="campeonato.id">
          <img :src="`src/imgCampeonato/${campeonato.id}.png`" alt="">
          <p style="color: #333;">
            Nome: {{ campeonato.nome }}
            <br>
            Premiação: R$ {{ campeonato.premiacao }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import api from '../services/api';
import { onMounted, ref } from 'vue';

const campeonatos = ref([]);

onMounted(async () => {
  try {
    const response = await api.get('api/Campeonato');
    const data = response.data;

    if (data && data.length > 0) {
      campeonatos.value = data;
    } else {
      console.warn('Nenhum campeonato encontrado na API.');
    }
  } catch (error) {
    console.warn('Erro ao buscar informações dos campeonatos:', error);
  }
});
</script>

<style scoped>
@import '../assets/main.css';
</style>
