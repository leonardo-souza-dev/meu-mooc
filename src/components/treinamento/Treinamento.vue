<template>
  <div>
    <cabecalho />
    <section>
      <h1>{{ treinamento.nome }}</h1>
      <div>
        <ul>
          <li v-for="nomeAula in treinamento.nomesAulas">{{ nomeAula }}</li>
        </ul>
      </div>
      <h2>{{ treinamento.videoAulaSendoExibida.nome }}</h2>
      <video width="320" height="240" controls>
        <source v-bind:src="treinamento.videoAulaSendoExibida.uri" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
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
    },
    created() {
      this.treinamento = {
        id: 99,
        nome: 'browser stack',
        nomesAulas: ['montando ambiente', 'hello world', 'conclusoes'],
        videoAulaSendoExibida: {
          num: 1,
          nome: 'montando ambiente',
          uri: 'https://www.w3schools.com/tags/movie.mp4'
        }
      }
    }
  }
</script>

<style>
</style>
