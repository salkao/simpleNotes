<template>
<div>
  <div class="container">
    <div class="row">
      <div v-for="(note, index) in notes" :key="index" class="col l3 m3 s12">
          <noteCard :single-note="note" :Index="index"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import noteCard from './noteCard.vue';

export default {
  name: 'notesToDisplay',
  components: {
    noteCard,
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
};
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 50px;
  }
  .col{
    margin-left: 55px !important;
  }
</style>
