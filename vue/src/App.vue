<template>
  <div id="app">
    <img style="width:100px" src="./assets/Pig-PNG-Pic.png">
    <InfoList/>
  </div>
</template>

<script>
import InfoList from './components/InfoList';

export default {
    name: 'app',
    components: {
        InfoList
    }
};
</script>

<style>
#app {
    font-family:             'Calibri', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align:              center;
    color:                   #2c3e50;
    margin-top:              60px;
}
h2 {
    font-weight: bold;
}
</style>
