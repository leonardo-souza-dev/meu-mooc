<template>
  <main>
    <lista-de-treinamentos />
  </main>
</template>

<script>
  import ListaDeTreinamentos from '../listaDeTreinamentos/ListaDeTreinamentos.vue'
  import Treinamento from '../treinamento/Treinamento.vue'

  export default {

    components: {
      'lista-de-treinamentos': ListaDeTreinamentos,
      'treinamento': Treinamento
    },
  
    name: 'principal',

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
</style>
