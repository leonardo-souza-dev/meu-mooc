<template>
  <div>
    <cabecalho />
    <section>
      <h2>Treinamentos</h2>
      <ul>
        <li v-for="t in treinamentosPreview"> 
          <treinamento-preview :nome="t.nome" :id="t.id" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import TreinamentoPreview from '../treinamentoPreview/TreinamentoPreview.vue'
  import Cabecalho from '../cabecalho/Cabecalho.vue'
  
  export default {
    name: 'listaDeTreinamentos',
    components: {
      'treinamento-preview': TreinamentoPreview,
      'cabecalho': Cabecalho
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        treinamentosPreview: []
      }
    },
    created() {
      this.$http.get('https://localhost:44337/treinamentos/')
        .then(res => res.json())
        .then(res => this.treinamentosPreview = res, err => console.log(err))
    }
  }
</script>

<style>
</style>
