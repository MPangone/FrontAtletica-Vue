import { createRouter, createWebHistory } from 'vue-router';
import Campeonato from '../views/Campeonatos.vue';
import Festa from '../views/Festas.vue';
import Esporte from '../views/Esportes.vue';
import Atletica from '../views/Atleticas.vue';
import Login from '../componentes/Login.vue';
import Cadastro from '../componentes/Cadastro.vue';

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
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
