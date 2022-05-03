<template>
  <div id="app">
    <barra-navegacao></barra-navegacao>
    <router-view/>
  </div>
</template>

<script>
import BarraNavegacao from './components/Navegacao/BarraNavegacao.vue';

export default {
  components: {
    'barra-navegacao': BarraNavegacao
  }

}
</script>


<style>

</style>
