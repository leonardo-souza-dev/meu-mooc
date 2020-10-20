<template>
  <div>
    <cabecalho />
    <h2>Dashboard</h2>
    <ul>
      <li v-for="cursoProgresso in progressoCursosUsuario.cursosProgresso">
        {{ cursoProgresso.nome }} - progresso {{ cursoProgresso.progresso }}%
      </li>
    </ul>
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
    },
    created() {
      this.progressoCursosUsuario = {
        cursosProgresso: [
          {
            nome: "nUnit",
            progresso: 10
          },
          {
            nome: "jasmine",
            progresso: 91
          }
        ]
      }
    }
}
</script>

<style>
</style>
