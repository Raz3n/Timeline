<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile' :deckArray='drawPileArray'  />

    <draggable class="board-array" :list="boardArray">

      <div class="board-array-item" v-for="(element, index) in boardArray" :key="index">
        {{ element.shortTitle }}
      </div>

    </draggable>

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
    this.gameSetup();

  },
  methods: {

    gameSetup(){
      // get all the data
      return fetch('http://localhost:3000/api/cards')
      // understand the data
      .then(res => res.json())
      // use data as cards and shuffle them
      .then(cards => this.drawPileArray = this.shuffleCards(cards))
      // deal the shuffled cards
      .then(shuffledCards => {
        this.dealCard(this.drawPileArray, this.boardArray, 1);
        this.dealCard(this.drawPileArray, this.handArray, 4);
      })

    },

    shuffleCards(deck){
      // get the length of the array i.e. the number of cards in the deck e.g. 20.
      const length = deck.length;
      // get the index number range i.e. the length minus 1
      const randIndexLength = length - 1;
      // choose a number of times to perform the shuffle
      const shuffleValue = 100;

      for (let shuffleStep = 0; shuffleStep < shuffleValue; shuffleStep++) {
        // run this statment x number of times
        // choose a random card by index number.
        const indexOne = Math.round( Math.random() * randIndexLength );
        // choose a second random card by index number
        const indexTwo = Math.round( Math.random() * randIndexLength );

        // swap the positions of random card 1 and random card 2.
        [deck[indexOne], deck[indexTwo]] = [deck[indexTwo], deck[indexOne]];
      }
      return deck;
    },

    dealCard(dealPileArray, placePileArray, number){
      for (let dealStep = 0; dealStep < number; dealStep++) {
        const card = dealPileArray[0];
        dealPileArray.shift();
        // console.log('card:', card);
        placePileArray.unshift(card);
      }
      return dealPileArray

      // console.log('All cards dealt')

    },

    log: function(evt) {
      window.console.log(evt);
    }

  }

}







</script>

<style lang="css" scoped>
</style>
