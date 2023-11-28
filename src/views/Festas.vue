<template>
  <div style="display: flex; justify-content: center; height: 100vh; background-color: #e0e0e0;">
    <div>
      <h1 style="color: #007bff;">Festas</h1>
    </div>

    <div class="fotos">
      <ul>
        <li v-for="festa in festas" :key="festa.id">
          <img :src="`src/imgFesta/${festa.id}.png`" alt="">
          <p style="color: #333;">
            Nome: {{ festa.nome }}
            <br>
            Local: {{ festa.local }}
          </p>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script setup>
import api from '../services/api';
import { onMounted, ref } from 'vue';

const festas = ref([]);

onMounted(async () => {
  try {
    const response = await api.get('api/Festa');
    const data = response.data;

    if (data && data.length > 0) {
      festas.value = data;
    } else {
      console.warn('Nenhuma festa encontrada na API.');
    }
  } catch (error) {
    console.warn('Erro ao buscar informações das festas:', error);
  }
});
</script>

<style scoped>
@import '../assets/main.css';
</style>
