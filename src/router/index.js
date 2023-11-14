import { createRouter, createWebHistory } from 'vue-router';
import Campeonato from '../views/Campeonatos.vue'
import Festa from '../views/Festas.vue'
import Esporte from '../views/Esportes.vue'
import Atletica from '../views/Atleticas.vue'

const routes = [                                                                                       
  {
    path: '/campeonato',
    name: 'campeonato',
    component: Campeonato
  },
  {                
    path: '/festa',
    name: 'festa',
    component: Festa
  },
  {
    path: '/esporte',
    name: 'esporte', 
    component: Esporte
  },
  {
    path: '/atletica',
    name: 'atletica',
    component: Atletica
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
