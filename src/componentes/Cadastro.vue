<template>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #e0e0e0;">
      <div style="max-width: 400px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #b0b0b0; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="text-align: center; margin-bottom: 20px; color: #007bff;">Cadastro</h2>
        <form @submit.prevent="registrar">
          <div style="margin-bottom: 20px;">
            <label for="usuario" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Usuário:</label>
            <input type="text" v-model="usuario" required style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #b0b0b0; border-radius: 4px;">
          </div>
  
          <div style="margin-bottom: 20px;">
            <label for="senha" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Senha:</label>
            <input type="password" v-model="senha" required style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #b0b0b0; border-radius: 4px;">
          </div>
  
          <div style="margin-bottom: 20px;">
            <label for="ra" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">RA:</label>
            <input type="text" v-model="ra" required style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #b0b0b0; border-radius: 4px;">
          </div>
  
          <button type="submit" style="background-color: #007bff; color: #fff; padding: 10px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Cadastrar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: '',
        senha: '',
        ra: '',
      };
    },
    methods: {
      registrar() {
        // Lógica de cadastro aqui
        // Exemplo: Armazena as informações de cadastro no localStorage
        this.storeUserInformation(this.usuario, this.senha, this.ra);
        // Exemplo de redirecionamento após o cadastro
        this.$router.push('/login');
      },
      storeUserInformation(usuario, senha, ra) {
        // Armazena as informações de cadastro no localStorage
        const userInformation = {
          usuario,
          senha,
          ra,
        };
        localStorage.setItem('userInformation', JSON.stringify(userInformation));
      },
    },
  };
  </script>
  