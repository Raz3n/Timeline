<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile' :deckArray='drawPileArray'/>
    Board Draggable: boardArray
    Hand Draggable: handArray
    <deck-component id='discard-pile' :deckArray='discardArray'/>
  </section>
</template>

<script>
import DeckComponent from './DeckComponent.vue'
import draggable from 'vuedraggable'

export default {
  name: 'one-player-game',
  data(){
    return {
      drawPileArray: [],
      boardArray: [],
      handArray:[],
      discardArray: []
    }
  },
  components: {
    'deck-component': DeckComponent,
    draggable
  },
  mounted() {
    this.getDeck();
    // this.drawPileArray = this;
    this.dealCard(this.drawPileArray, this.boardArray, 1);
    this.dealCard(this.drawPileArray, this.handArray, 4);
  },
  methods: {

    getDeck(){
      return fetch('http://localhost:3000/api/cards')
      .then(res => res.json())
      .then(cards => this.drawPileArray = this.shuffleCards(cards))
    },

    shuffleCards(deck){
      console.log('deck:', deck);
      const length = deck.length;
      const randIndexLength = length - 1;
      const shuffleValue = 100;
      // let shuffleTotal = 0;


      for (let shuffleStep = 0; shuffleStep < shuffleValue; shuffleStep++) {
        // run this statment 100 times
        const indexOne = Math.round(Math.random() * randIndexLength);
        const indexTwo = Math.round(Math.random() * randIndexLength);
        [deck[indexOne], deck[indexTwo]] = [deck[indexTwo], deck[indexOne]];
      }

      return deck;
      // if (shuffleTotal === 100) {
      //     return deck;
      //   }

    },

    dealCard(dealArray, placeArray, number){
      for (let dealStep = 0; dealStep < number; dealStep++) {
        const card = dealArray[0];
        dealArray.shift();
        placeArray.unshift(card);
      }
      console.log('All cards dealt')

    }

  }

}







</script>

<style lang="css" scoped>
</style>
