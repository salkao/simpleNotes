<template>
  <div>
    <nav>
      <div class="nav-wrapper ">
        <div class="row">
          <div class="col s6 m6 l6">
            <img src="../assets/note.png" alt="" width="40px" height="40px">
            <span id="logoText">SimpleNotes</span>
          </div>
          <div class="col s6 m6 l6">
              <a @click="removeAllNotes()"
                class="waves-effect waves-light btn"
                id="deleteBtn">Clear notes</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  methods: {
    removeAllNotes() {
      this.$store.dispatch('removeAllNotes');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  nav{
    background: linear-gradient(to bottom,#003C36, rgb(46, 138, 129));
    position: fixed;
  }
  img{
    margin-top: 6px;
    left: 0;
    position: absolute;
    margin-left: 50px;
  }
  #logoText{
    margin-left: 80px;
    float: left;
    font-size: 26px;
  }
</style>
