<template>
  <div id="app" class="pen">
    <navBar id="nav"/>
    <div class="full">
    <div class="container">
      <input-fields id="fields" class="panel top"/>
    </div>
    </div>

    <notesToDisplay/>
    <footerBottom/>
  </div>
</template>

<script>
import navBar from './components/navBar.vue';
import inputFields from './components/inputFields.vue';
import notesToDisplay from './components/notesToDisplay.vue';
import footerBottom from './components/footerBottom.vue';

export default {
  name: 'app',
  components: {
    navBar,
    inputFields,
    notesToDisplay,
    footerBottom,
  },
  mounted() {
    // eslint-disable-next-line
    M.AutoInit();
  },
};
</script>

<style lang="scss">
body{
  height: 100%;
  background-color: #FF96AB;
  //background-color: #E5002D;
  background-color: #45D500;
  background-image: url('./assets/back.jpg');
  background-repeat: repeat-y;
}
#nav{
  position: absolute;
  z-index: 1;
}
#fields{
  z-index: 0;
  margin-top: 40px;
}
.full{
  width: 100%;
  border-bottom: 6px solid #E5002D;
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
