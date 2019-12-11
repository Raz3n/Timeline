<template lang="html">
  <section id="view-full-deck-wrapper">

    <!-- Insert Components Needed To Render Entire Deck Here  -->
    Blank Page for inserting a full deck index view/page
  </section>
</template>

<script>
import PlayingCard from './PlayingCard.vue'

export default {
  name: 'view-full-deck',

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
    this.deckSetup();
  },

  methods: {
    deckSetup(){
      // get all the data
      return fetch('http://localhost:3000/api/cards')

      .then(res => res.json())

      .then(cards => this.currentDeck = cards)


      // understand the data
      // return these cards as a full deck called 'this.currentDeck'
    }
  }
}
</script>

<style lang="css" scoped>


#view-full-deck-wrapper{
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
