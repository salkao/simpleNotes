<template>
  <div>
    <div id="component">
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
                <textarea v-model="noteVal" id="icon_prefix2"
                          class="materialize-textarea">
                </textarea>
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
body{
  width: 100%;
}
  #component{
    padding: 30px;
    margin: 0;
    // position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    //background-image: url('../assets/back.jpg');
  }
  .container{
    margin-top: 20px;
    //border: 4px inset #E5002D;
    background-color: rgba(229, 255, 255, 0.7);
    form{
      color: #E5002D;
      z-index: 0;
      padding-top: 20px;
      label{
        color: black !important;
      }
      textarea{
        border-bottom-color: black;
      }
    }
  }
  .input-field textarea{
    border-bottom: 1px solid #E5002D !important;
  }
  .input-field textarea:focus + label {
    color: #000;
  }
  .input-field textarea:focus {
    border-bottom: 2px solid #45D500 !important;
    box-shadow: 0 1px 0 0 #000;
  }
  .input-field .prefix.active {
    color: #45D500;
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
    background-color: #E5002D;
    color: #45D500;
    &:hover{
      color: #E5002D;
      background-color: #45D500;
      font-weight: bold;
    }
  }

  #errorMesagge{
    color: red;
  }
</style>
