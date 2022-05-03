<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <barra-de-navegacao-logado v-if="userEstaLogado" />
      <barra-de-navegacao-deslogado v-else />
    </div>
  </nav>
</template>

<script>
import BarraDeNavegacaoDeslogado from './BarraDeNavegacaoDeslogado.vue';
import BarraDeNavegacaoLogado from './BarraDeNavegacaoLogado.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    'barra-de-navegacao-logado': BarraDeNavegacaoLogado,
    'barra-de-navegacao-deslogado': BarraDeNavegacaoDeslogado
  },
  computed: {
    ...mapGetters(['userEstaLogado'])
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}

.navbar-bytebank a {
  color: #fff;
}

.navbar-bytebank a:hover {
  color: #000;
}
</style>
