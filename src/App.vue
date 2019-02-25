<template>
  <div id="app">
    <navBar id="nav"/>
    <div class="container">
      <input-fields id="fields"/>
    </div>
    <notesToDisplay/>
  </div>
</template>

<script>
import navBar from './components/navBar.vue';
import inputFields from './components/inputFields.vue';
import notesToDisplay from './components/notesToDisplay.vue';

export default {
  name: 'app',
  components: {
    navBar,
    inputFields,
    notesToDisplay,
  },
  mounted() {
    // eslint-disable-next-line
    M.AutoInit();
  },
};
</script>

<style lang="scss">
body{
  margin: 0;
  background-color: aquamarine;
}
#nav{
  position: absolute;
  z-index: 1;
}
#fields{
  z-index: 0;
  margin-top: 100px;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
