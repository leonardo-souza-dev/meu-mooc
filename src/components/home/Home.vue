<template>
  <div>
      <cabecalho />
      <principal />
  </div>
</template>

<script>
  import Cabecalho from '../cabecalho/Cabecalho.vue';
  import Principal from '../principal/Principal.vue';

  export default {
  
  components: {
    'cabecalho': Cabecalho,    
    'principal': Principal
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
