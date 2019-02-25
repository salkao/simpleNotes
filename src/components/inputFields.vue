<template>
  <div>
    <div class="container">
      <div class="row form">
        <form class="col s12" id="inputFields">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">mode_edit</i>
              <textarea v-model="noteTitle"
                        id="icon_prefix2"
                        class="materialize-textarea">
              </textarea>
              <label for="icon_prefix2">Note title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">note</i>
              <textarea v-model="noteVal" id="icon_prefix2" class="materialize-textarea"></textarea>
              <label for="icon_prefix2">Note text</label>
              <span id="errorMesagge"
                    v-if="!valid">
                    Can't add note. Note must have title and note text!
              </span>
              <div class="col s12">
                <a @click="addNote()" class="waves-effect waves-light btn add">add note</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputFields',
  data() {
    return {
      note: {
        title: '',
        text: '',
        dateTime: '',
      },
      noteVal: '',
      noteTitle: '',
      valid: true,
    };
  },
  methods: {
    getDateTime() {
      const date = new Date();
      const hours = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();
      let dd = date.getDate();
      let mm = date.getMonth() + 1;
      const yyyy = date.getFullYear();
      if (dd < 10) {
        dd = `0 ${dd} `;
      }
      if (mm < 10) {
        mm = `0  ${mm} `;
      }
      return ` ${dd}.${mm}.${yyyy}. ${hours}:${mins}:${secs}`;
    },
    clearValues() {
      this.noteVal = '';
      this.noteTitle = '';
    },
    addNote() {
      if (this.noteTitle === '' || this.noteVal === '') {
        this.valid = false;
        return;
      }
      this.valid = true;
      this.note.title = this.noteTitle.charAt(0).toUpperCase() + this.noteTitle.slice(1);
      this.note.text = this.noteVal.charAt(0).toUpperCase() + this.noteVal.slice(1);
      this.note.dateTime = this.getDateTime();
      this.$store.dispatch('addNote', {
        title: this.note.title,
        text: this.note.text,
        dateTime: this.note.dateTime,
      });
      this.clearValues();
      this.$store.dispatch('showTrue');
    },
  },
};
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 50px;
    border: 3px inset #26a69a;
  }
  .form{
    padding: 20px;
    margin: 0;
    z-index: 0;
  }
  a{
    z-index: 0;
  }
  label{
    z-index: 0 !important;
  }
  .add{
    margin-top: 20px;
    width: 30%;
  }
  #errorMesagge{
    color: red;
  }
</style>
