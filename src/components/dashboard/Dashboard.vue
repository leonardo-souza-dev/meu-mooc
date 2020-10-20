<template>
  <div>
    <cabecalho />
    <lista-de-treinamentos />
  </div>
</template>

<script>
  import ListaDeTreinamentos from '../listaDeTreinamentos/ListaDeTreinamentos.vue'
  import Cabecalho from '../cabecalho/Cabecalho.vue';

  export default {  
    components: {
      'cabecalho': Cabecalho,    
      'lista-de-treinamentos': ListaDeTreinamentos
    },
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>

<style>
</style>
