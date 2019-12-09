<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile':deckArray='drawPileArray'/>
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

    }

  }

}







</script>

<style lang="css" scoped>


#one-player-game-wrapper{
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  align-items: center;
  min-height: 35em;
}

.hidden{
  visibility: hidden;
}

#board, #hand{
  display: flex;

}
.playing-card{
  background: beige;
    box-shadow: 0.1em 0.1em 0.4em grey;
    padding: 1em;
    border-radius: 2em;
    min-height: 16em;
    max-width: 10em;
    height: 11em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: nowrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    margin: 0.2em;
    justify-content: flex-start;
}

.playing-card .card-title{
  background: white;
min-width: 100%;
padding: 0.5em 0;
border-radius: 0.2em;
align-items: center;
display: flex;
justify-content: center;
/* align-self: flex-end; */
order: 1;
}

.playing-card img {
  max-width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

</style>
