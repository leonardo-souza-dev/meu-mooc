<template>
    <header>
        <h1><router-link :to="{ name: 'dashboard' }">mooc</router-link></h1>
        <ul>
            <li>treinamentos</li>
            <li>dashboard</li>
        </ul>
        <span>{{matricula}}</span>
    </header>
</template>

<script>
export default {
  name: 'cabecalho',
  data () {
    return {
      matricula: 6804151514
    }
  }
}
</script>

<style>
</style>
