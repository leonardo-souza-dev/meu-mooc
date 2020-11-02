<template>
  <div>
    <p>meu-mooc</p>
    <input type="text" placeholder="matrícula" />
    <input type="password" placeholder="senha" />
    <router-link :to="{ name: 'dashboard', params: { usuarioId: 1 } }">Login</router-link>
  </div>
</template>

<script>
  import Cabecalho from '../cabecalho/Cabecalho.vue';

  export default {
    components: {
      'cabecalho': Cabecalho
    },
    name: 'treinamento',
    data () {
      return {
        treinamento: {}
      }
    }
    // ,created() {
    //   this.treinamento = {
    //     id: 99,
    //     nome: 'browser stack',
    //     nomesAulas: ['montando ambiente', 'hello world', 'conclusoes'],
    //     videoAulaSendoExibida: {
    //       num: 1,
    //       nome: 'montando ambiente',
    //       uri: 'https://www.w3schools.com/tags/movie.mp4'
    //     }
    //   }
    // }
  }
</script>

<style>
</style>
