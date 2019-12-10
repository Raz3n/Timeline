<template lang="html">
  <section id="view-instructions-wrapper">

    <!-- Insert Components Needed To Render Entire Deck Here  -->
    Blank Page for inserting the instructions
  </section>
</template>

<script>
import PlayingCard from './PlayingCard.vue'

export default {
  name: 'view-instructions',

  data(){
    return {
      currentDeck: []
    }
  },

  components: {
    'playing-card': PlayingCard
  },

  mounted() {
    // this.gameSetup();
    // this.deckSetup
  },

  methods: {
    deckSetup(){
      // get all the data
      // understand the data
      // return these cards as a full deck called 'this.currentDeck'
    }
  }
}
</script>

<style lang="css" scoped>


#view-instructions-wrapper{
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  align-items: center;
  min-height: 35em;
}


</style>
