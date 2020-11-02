<template>
    <header>
        <h1><router-link :to="{ name: 'dashboard' }">mooc</router-link></h1>
        <ul>
            <li><router-link :to="{ name: 'listaDeTreinamentos' }">treinamentos</router-link></li>
            <li><router-link :to="{ name: 'dashboard' }">dashboard</router-link></li>
            <li><router-link :to="{ name: 'home' }">sair</router-link></li>
        </ul>
        <span>{{usuario.matricula}}</span>
        <hr />
    </header>
</template>

<script>
export default {
  name: 'cabecalho',
  data () {
    return {
      usuario: {}
    }
  },
    created() {
      this.$http.get('https://localhost:5001/usuarios/1')
        .then(res => res.json())
        .then(res => this.usuario = res, err => console.log(err))
    }
}
</script>

<style>
</style>
