<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

