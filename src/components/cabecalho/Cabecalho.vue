<template>
    <header>
        <h1><router-link :to="{ name: 'dashboard' }">mooc</router-link></h1>
        <ul>
            <li><router-link :to="{ name: 'listaDeTreinamentos' }">treinamentos</router-link></li>
            <li><router-link :to="{ name: 'dashboard' }">dashboard</router-link></li>
            <li><router-link :to="{ name: 'home' }">sair</router-link></li>
        </ul>
        <span>{{matricula}}</span>
        <hr />
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
