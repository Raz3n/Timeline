<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile' :deckArray='drawPileArray'  />

    <section id="board-container">

      <section :class="instructionsClass" id="help-left" >
        <img src="/left-arrow.svg" alt="left arrow" /> before this event </section>

      <draggable class="board-array" id="board" :list="boardArray" group="cards" @change="log" >
        <playing-card v-for="(card, index) in boardArray" :key="index" :card="card" />
      </draggable>

      <section :class="instructionsClass" id="help-right" >
        <img src="/right-arrow.svg" alt="right arrow" /> after this event </section>

      </section>

      <!-- to make disappear :class="evaluationClass" -->
      <evaluation-button  class="button" id="evaluation" :cardsInPlay="boardArray" />

      <section id="game-container">

        <draggable class="hand-array" id="hand" :list="handArray" group="cards" @change="log">
          <playing-card v-for="(card, index) in handArray" :key="index" :card="card"/>
        </draggable>

      </section>


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
      // helpInstructions: null
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
  },
  computed:{
    helpInstructions() {
        if ( this.boardArray.length !== 1) { return false}
        else {return true}
    },

    instructionsClass() {
      return {
      'fade': this.helpInstructions === false
      }
    },

    evaluationClass() {
      return {
        'fadereverse': this.helpInstructions === false
        }
      }
    }
  }

</script>

<style lang="css" scoped>

#one-player-game-wrapper{
  grid-row: 2 / 3;
    grid-column: 1 / 4;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    padding: 1em;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
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

#board-container{
  /* position: relative; */
    width: 100%;
    min-height: 100px;
    left: calc(50% - 500px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
}


.board-array{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.hand-array{
  position: relative;
  height: 300px;
  width: 800px;
  bottom: -10px;
  /* left: calc(50% - 400px); */
  display: flex;
  justify-content: center;

}

@-webkit-keyframes fadeout {
  0% { opacity: 1;}
  100% { opacity: 0;}
}

@keyframes fadeout {
  0% { opacity: 1;}
  100% { opacity: 0;}
}

.fade{
  opacity: 1;
  -webkit-animation: fadeout 0.5s;
  animation: fadeout 0.5s forwards;
}

#evaluation{
  opacity: 1;
    /* position: relative; */
    left: calc(50% - 50px);
    width: 100px;
    margin: 1em;
}

@-webkit-keyframes fadein {
  0% { opacity: 0;}
  100% { opacity: 1;}
}

@keyframes fadein {
  0% { opacity: 0;}
  100% { opacity: 1;}
}

.fadereverse {
  opacity: 0;
  -webkit-animation: fadein 2s;
  animation: fadein 2fs forwards;
}

#evaluation:hover{
  opacity:1;
}

#help-right{
  margin-left: 1%;
  position: relative;
  top: calc(34% - 10px);
}
#help-left{
  margin-right: 1%;
  position: relative;
  top: calc(34% - 10px);}


</style>
