import Vuex from 'vuex';
import Vue from 'vue';
import http from './http';

Vue.use(Vuex);

const estado = {
  token: localStorage.getItem('token') || '',
  user: {}
}

const mutacoes = {
  DEFINIR_USER_LOGADO(state, { token, user }) {
    state.user = user;
    state.token = token;
  },
  DESLOGAR_USER(state) {
    state.user = {};
    state.token = null;
  }
}

const acoes = {
  logar({ commit }, user) {
    return new Promise((resolve, reject) => {
      http.post('auth/login', user)
        .then(res => {
          commit('DEFINIR_USER_LOGADO', {
            token: res.data.access_token,
            user: res.data.user
          })
          resolve(res.data);
        })
        .catch(err => {
          console.error(err)
          reject(err);
        }) 
    })

  }
}

const getters = {
  userEstaLogado: state => Boolean(state.token)
}

export default new Vuex.Store({
  state: estado,
  mutations: mutacoes,
  actions: acoes,
  getters
})
