<template>
  <div>
    <cabecalho />
    <h2>Dashboard</h2>
    <h3>Meus treinamentos em andamento</h3>
    <ul>
      <li v-for="t in treinamentosProgresso">
        <router-link :to="{ name: 'treinamento', params: { id: t.treinamento.id } }">
          {{ t.treinamento.nome }} - progresso {{ t.progresso }}%
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
        treinamentosProgresso: []
      }
    },
    created() {
      this.$http.get('https://localhost:5001/dashboard/1')
        .then(res => res.json())
        .then(res => this.treinamentosProgresso = res.treinamentosProgresso, err => console.log(err))
    }
}
</script>

<style>
</style>
