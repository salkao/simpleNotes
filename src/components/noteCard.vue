<template>
  <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div v-if="!editing" class="card-content white-text">
          <span  class="card-title">{{ singleNote.title }}</span>
          <p id="text">{{ singleNote.text }}</p>
        </div>
        <div v-if="editing">
          <div class="container">
            <div class="row form">
              <form class="col s12" id="inputFields">
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea v-model="valueTitle" class="materialize-textarea textArea"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">note</i>
                    <textarea v-model="valueText" class="materialize-textarea textArea"></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
          <a class="buttons" @click="removeNote(Index)" href="#">Remove</a>
          <a class="buttons" @click="enableEditing" href="#">Edit</a>
          <a class="buttons" v-if="editing" @click="saveEdit(Index)" href="#">Save</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noteCard',
  props: {
    singleNote: {
      type: Object,
      required: true,
    },
    Index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      valueTitle: this.singleNote.title,
      valueText: this.singleNote.text,
      tempTitle: null,
      tempText: null,
      editing: false,
    };
  },
  methods: {
    removeNote(index) {
      this.$store.dispatch('removeNote', index);
      this.$store.dispatch('showFalse');
    },
    enableEditing() {
      this.tempTitle = this.valueTitle;
      this.tempText = this.valueText;
      this.editing = true;
    },
    disableEditing() {
      this.tempTitle = null;
      this.tempText = null;
      this.editing = false;
    },
    saveEdit(index) {
      this.singleNote.title = this.valueTitle;
      this.singleNote.text = this.valueText;
      this.$store.dispatch('saveEdit', index, {
        title: this.valueTitle,
        text: this.valueText,
      });
      this.disableEditing();
    },
  },
};
</script>

<style lang="scss" scoped>
  @media only screen and (max-width : 1500px) {
    .card{
      width: 200px !important;
    }
  }
  @media only screen and (max-width : 500px) {
    .card{
      width: 300px !important;
    }
  }
  .col{
    width: 300px;
  }

  .card{
    width: 300px;
    background-color: #E5002D;
    word-wrap: break-word;
    border-radius: 50% 20% / 10% 40% !important;
    padding: 10px;
  }
  .textArea{
    overflow-y: auto;
  }
  #text{
    margin-top: 40px;
  }
  .card-title{
    border-bottom: 1px solid #45D500;
  }
  .buttons{
      color: #45D500 !important;
      &:hover{
        font-weight: bold;
      }
      padding-left: 10px;
  }
  .input-field .prefix.active {
    color: #45D500;
  }
</style>
