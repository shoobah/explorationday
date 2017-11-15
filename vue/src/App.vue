<template>
  <div id="app">
    <img style="width:100px" src="./assets/Pig-PNG-Pic.png">
    <h2 v-bind:id="theId" >{{msg}} {{ok ? "YES" : "NO"}}</h2>
    NEJ
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
      return {
          msg: 'Anders says ',
          theId: 'B5455DB0-E3BA-401C-9C05-150C97D16722',
          ok: true
      };
  }
}
</script>

<style>
#app {
  font-family: 'Calibri', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
    font-weight: 100;
    text-decoration: underline;
}
</style>
