<template>
  <section>
    <h2>Treinamentos</h2>
    <ul>
      <li v-for="t in treinamentosPreview"> 
        <treinamento-preview :nome="t.nome" :id="t.id" />
      </li>
    </ul>
  </section>
</template>

<script>
  import TreinamentoPreview from '../treinamentoPreview/TreinamentoPreview.vue'
  
  export default {
    name: 'listaDeTreinamentos',
    components: {
      'treinamento-preview': TreinamentoPreview
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        treinamentosPreview: [{
            id: 12,
            nome: "cypress"
        },{
            id: 23,
            nome: "xUnit"
        }]
      }
    }
  }
</script>

<style>
</style>
