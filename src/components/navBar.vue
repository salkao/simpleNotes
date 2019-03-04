<template>
  <div>
    <nav>
      <div class="nav-wrapper ">
        <div class="row">
          <div class="col s4 m4 l4 navControls">
            <img src="../assets/note.png" alt="" width="40px" height="40px">
            <span id="logoText">Simple<span id="textNotes">Notes</span> </span>
          </div>
          <div class="col s4 m4 l4 navControls">
            <div class="row">
              <div class="input-field col s12 m12 l12">
                <i class="material-icons prefix">search</i>
                <textarea v-model="search"
                          id="icon_prefix2"
                          class="materialize-textarea">
                </textarea>
                <i v-if="search!=''"
                    @click="clearSearch"
                    id="closeIcon"
                    class="material-icons">close
                </i>
              </div>
              <div class="col s12 m12 l12">
                <a @click="searchNotes()"
                  class="waves-effect waves-light btn"
                  id="searchBtn"> search
                </a>
              </div>
            </div>
          </div>
          <div class="col s4 m4 l4">
            <div class="col s12 m12 l12">
              <a @click="removeAllNotes()"
                class="waves-effect waves-light btn"
                id="deleteBtn">Clear notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    removeAllNotes() {
      this.$store.dispatch('removeAllNotes');
    },
    searchNotes() {
      this.$store.dispatch('searchedNote', this.search);
    },
    clearSearch() {
      this.search = '';
      this.searchNotes();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  nav{
    background-color: #E5002D;
    position: fixed;
    border-bottom: 1.5px solid #45D500;
  }
  img{
    margin-top: 6px;
    left: 0;
    position: absolute;
    margin-left: 50px;
  }
  #closeIcon{
    position: absolute;
    left: 230px;
    top: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  #logoText{
    position: absolute;
    margin-left: 80px;
    float: left;
    font-size: 40px;
    color: #45D500;
    font-weight: bolder;
    span{
      color: #ffffff;
      font-weight: lighter;
    }
  }
  #deleteBtn{
    color: #E5002D;
    background-color: #45D500;
    &:hover{
      font-weight: bolder;
    }
  }
  #searchBtn{
    color: #E5002D;
    background-color: #45D500;
    &:hover{
      font-weight: bolder;
    }
    margin-right: 80px;
  }
  .navControls{
    height: 62.5px;
    float: right;
    width: 50%;
    .col{
      width: 50% !important;
    }
  }
  .input-field{
    margin-top: 5px;
    color: #45D500;
  }
  .input-field textarea{
    border-bottom: 2px solid #45D500 !important;
  }
  .input-field textarea:focus {
    border-bottom: 2px solid #45D500 !important;
    box-shadow: 0 1px 0 0 #000;
  }
  .input-field .prefix.active {
    color: #45D500;
    transition-duration: 0.8s;
    transition-property: transform;
    transform: rotate(-270deg) !important;
  }
  .input-field .prefix{
    top: 0 !important;
    transition-duration: 0.8s;
    transition-property: transform;
  }
</style>
