<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile' :deckArray='drawPileArray'  />

    <evaluation-button :cardsInPlay="boardArray" />
        <draggable class="board-array flash" id="board" :list="boardArray" group="cards" @change="log">
          <playing-card v-for="(card, index) in boardArray" :key="index" :card="card"/>
        </draggable>

        <draggable class="hand-array" id="hand" :list="handArray" group="cards" @change="log">
          <playing-card v-for="(card, index) in handArray" :key="index" :card="card"/>
        </draggable>

    <deck-component id='discard-pile' :deckArray='discardArray'/>

  </section>
</template>

<script>
import DeckComponent from './DeckComponent.vue'
import PlayingCard from './PlayingCard.vue'
import EvaluationButton from './EvaluationButton.vue'
import draggable from 'vuedraggable'


export default {
  name: 'one-player-game',

  Order: 1,

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
    'playing-card': PlayingCard,
    'evaluation-button': EvaluationButton,
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
        placePileArray.unshift(card);
      }
      return dealPileArray

    },

    // add: function() {
    //   this.list.push({ shortTitle: ""});
    // },
    // replace: function () {
    //   this.list = [{ shortTitle: ""}];
    // },
    // clone: function (el) {
    //   return {
    //     shortTitle: el.shortTitle + " cloned"
    //   };
    // },
    log: function (evt) {
      window.console.log(evt);
    }
  }
}
</script>

<style lang="css" scoped>

#one-player-game-wrapper{
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  /* display: flex;
  flex-direction: column; */
  justify-content: space-evenly;
  padding: 1em;
  align-items: center;
  min-height: 35em;
}

.hidden{
  visibility: hidden;
}

/* #board, #hand{
  display: flex;
  background: rgba(248, 188, 7, 0.1);
  border-radius: 1em;
} */
/*
#board {
  padding-left: 5em;
  padding-right: 5em;
  margin-bottom: 1em;
}

#hand {
  justify-content: flex-start;
  width: 80%;
} */
.board-array{
  position: relative;
  height: 300px;
  width: 1000px;
  top: 60px;
  left: calc(50% - 500px);
  display: flex;
  justify-content: center;
  margin-bottom: 4em;
  background: rgba(248, 188, 7, 0.1);
}

.hand-array{
  position: relative;
  height: 300px;
  width: 800px;
  bottom: -10px;
  left: calc(50% - 400px);
  display: flex;
  background: rgba(248, 188, 7, 0.1);
}

@-webkit-keyframes flash {
 0%, 50%, 100% { opacity: 1; }
 25%, 75% { opacity: 0; }
}
@keyframes flash {
 0%, 50%, 100% { opacity: 1; }
 25%, 75% { opacity: 0; }
}

.flash:hover {
 opacity: 1;
 -webkit-animation: flash 1s;
 animation: flash 1s;
}

</style>
