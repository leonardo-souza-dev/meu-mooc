<template>
  <div>
    <cabecalho />
    <h2>Dashboard</h2>
    <h3>Meus treinamentos em andamento</h3>
    <ul>
      <li v-for="cursoProgresso in progressoCursosUsuario.cursosProgresso">
        <router-link :to="{ name: 'treinamento', params: { id: cursoProgresso.id } }">
          {{ cursoProgresso.nome }} - progresso {{ cursoProgresso.progresso }}%
        </router-link>
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
            id: 88,
            nome: "nUnit",
            progresso: 10
          },
          {
            id: 77,
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
