<template>
  <div>
    <cabecalho />
    <section>
      <h1>Treinamento de {{ treinamento.nome }}</h1>
      <div>
        <ul>
          <li v-for="aula in treinamento.aulas">Aula {{ aula.num }} - {{ aula.nome }}</li>
        </ul>
      </div>
      <h2>
        Aula {{ treinamento.videoAulaSendoExibida.num }} - 
        {{ treinamento.videoAulaSendoExibida.nome }}
      </h2>
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
        aulas: [
          {
            num: 1, nome: 'montando ambiente'
          }, 
          {
            num: 2, nome: 'hello world'
          },
          {
            num: 3, nome: 'conclusoes'
          }],
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
