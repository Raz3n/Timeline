<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile':deckArray='deckArray'/>
    Board Draggable: boardArray
    Hand Draggable: handArray
    <deck-component id='discard-pile':discardArray='discardArray'/>
  </section>
</template>

<script>
import DeckComponent from './DeckComponent.vue'
import draggable from 'vuedraggable'

export default {
  name: 'one-player-game',
  data(){
    return {
      deckArray: [],
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
    this.dealCard(deckArray, boardArray, 1);
    this.dealCard(deckArray, handArray, 4);
  },
  methods: {

    getDeck(){
      return fetch('localhost:3000/api/cards')
      .then(res => res.json ())
      .then(cards => this.deckArray = shuffleCards(cards))
    },

    shuffleCards(deck){
      const length = deck.length();
      const randIndexLength = length - 1;
      const shuffleValue = 100;
      let shuffleTotal = 0;
      if (shuffleTotal < 100) {
        const indexOne = Math.random() * randIndexLength;
        const indexTwo = Math.random() * randIndexLength;
        [deck[indexOne], deck[indexTwo]] = [deck[indexTwo], deck[indexOne]];
        shuffleTotal += 1
        }
        else if (shuffleTotal === 100) {
          return deck;
        }
    },

    dealCard(dealArray, placeArray, number){
      if (number !== 0){ const card = dealArray[0];
      dealArray.shift();
      placeArray.unshift(card);
      number -= 1;
      console.log('One card dealt')
        }
      else {
        console.log('All cards dealt')
      }

    }

  }

}







</script>

<style lang="css" scoped>
</style>
