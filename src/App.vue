<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/esporte" class="nav-link" aria-current="page">Esportes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/atletica" class="nav-link">Atleticas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/campeonato" class="nav-link">Campeonatos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/festa" class="nav-link">Festas</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li v-if="!isAuthenticated" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!isAuthenticated" class="nav-item">
              <router-link to="/cadastro" class="nav-link">Cadastrar</router-link>
            </li>
            <li v-if="isAuthenticated" class="nav-item">
              <button @click="logout" class="nav-link">Sair</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view :isAuthenticated="isAuthenticated" @authenticated="updateAuthenticationStatus"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    updateAuthenticationStatus(status) {
      this.isAuthenticated = status;
    },
    logout() {
      this.isAuthenticated = false;
      this.$router.push('/login');
    },
  },
};
</script>
