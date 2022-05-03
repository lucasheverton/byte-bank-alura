<template>
  <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
        <div>
            <button class="btn btn-primary brn-block" type="submit">Entrar</button>
            <router-link :to="{ name: 'novo.usuario'}">
                Não possui um cadastro, cadastre-se aqui!
            </router-link>
        </div>
      </form>

      <p class="mt-3 p-3 alert-danger" v-if="loginErrorMessage">{{ loginErrorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
      return {
        usuario: {},
        loginErrorMessage: ''
      }
  },
  methods: {
    efetuarLogin() {
        this.$store.dispatch('logar', this.usuario)
          .then(() => { 
            this.$router.push({ name: 'gerentes' })
            this.loginErrorMessage = '';
          })
          .catch((err) => {
            if(err.request.status === 401) {
              const messageError = JSON.parse(err.request.response);
              this.loginErrorMessage = messageError.message;
            }
          })
    },
    }
}
</script>

<style>

</style>
