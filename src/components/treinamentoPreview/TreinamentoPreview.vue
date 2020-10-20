<template>
  <router-link :to="{ name: 'treinamento', params: { id: this.id } }">
    <h3>{{ nome }}</h3>
    <img class="img-preview" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Brown_Bear_cub_in_river_1.jpg" />
  </router-link>
</template>

<script>
  export default {  
    name: 'treinamento',
    props: ['id', 'nome'],
    
    data () {
      return {
      }
    },
  }
</script>

<style>
  .img-preview {
    width: 150px
  }
</style>
