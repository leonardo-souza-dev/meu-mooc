<template>
  <div>
      <meu-header />
      <principal />
  </div>
</template>

<script>
  import MeuHeader from '../meuHeader/MeuHeader.vue';
  import Principal from '../principal/Principal.vue';

  export default {
  
  components: {
    'meu-header': MeuHeader,    
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
