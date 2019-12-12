<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile' :deckArray='drawPileArray' :deal="true" :discard="false"/>

    <section id="central-channel">

    <section id="board-container">
      <section :class="instructionsClass" id="help-left" >
        <img src="/left-arrow.svg" alt="left arrow" /> before this event </section>

      <draggable class="board-array" id="board" :list="boardArray" group="cards" @change="log" >
        <playing-card v-for="(card, index) in boardArray" :key="index" :card="card" :status="staticBoard" :current="boardArray"/>
      </draggable>

      <section :class="instructionsClass" id="help-right" >
        <img src="/right-arrow.svg" alt="right arrow" /> after this event
      </section>

    </section>

    <evaluation-button class="button" id="evaluation" :cardsInPlay="boardArray" :failSafe="failSafe"/>

        <draggable class="hand-array" id="hand" :list="handArray" group="cards" @change="log">
          <playing-card v-for="(card, index) in handArray" :key="index" :card="card" :status="staticBoard" :current="handArray"/>
        </draggable>

    </section>

    <end-game v-if="endGame" :message="endGameString" :score="boardArray"/>
    <deck-component id='discard-pile' :deckArray='discardArray' :deal="false" :discard="true" />


  </section>
</template>

<script>
import DeckComponent from './DeckComponent.vue'
import PlayingCard from './PlayingCard.vue'
import EvaluationButton from './EvaluationButton.vue'
import EndGame from './EndGame.vue'
import draggable from 'vuedraggable'
import {eventBus} from '../main.js'


export default {
  name: 'one-player-game',

  Order: 1,

  data(){
    return {
      drawPileArray: [],
      boardArray: [],
      handArray:[],
      discardArray:[],
      staticHand: [],
      staticBoard: []
    }
  },

  components: {
    'deck-component': DeckComponent,
    'playing-card': PlayingCard,
    'evaluation-button': EvaluationButton,
    'end-game': EndGame,
    draggable
  },

  mounted() {
    this.gameSetup();

    eventBus.$on('a-card-was-wrong', () => {
    // finding the commonCard thats in boardArray and staticHand
    console.log('current Static Hand:', this.staticHand);
    console.log('current Static Board:', this.staticBoard);

    let commonCard;

    // loop through to find matching cards
      for(var i = 0; i < this.boardArray.length; i++){
        let foundCardTrue = this.staticHand.includes(this.boardArray[i])
        if (foundCardTrue === true) {
          commonCard = this.boardArray[i]
      }};

    //finding index of this commoncard from above
      const index = this.boardArray.indexOf(commonCard);

    // removing said from boardarry to then put it in our discard array.
      this.boardArray = [];
      this.boardArray = this.staticBoard;
      this.discardArray.push(commonCard);
    // deal new card
      this.dealCard(this.drawPileArray, this.handArray, 1)
    //taking a new "snapshot" of the hand and board
      this.setStaticHand()
      this.setStaticBoard()
    });

    eventBus.$on('game-over-loser', () => {
      console.log('you suck')
    });

    eventBus.$on('continue-game', () => {
      // deal new card to hand
      this.dealCard(this.drawPileArray, this.handArray, 1);
      this.boardArray.forEach(card => {
        card.status = true
      })
      // set up new snapshots
      this.setStaticHand();
      this.setStaticBoard();
    });

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
        this.setStaticHand();
        this.setStaticBoard();
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
      if (dealPileArray.length === 0)
      {console.log('Winner Winner Chicken Dinner!');
    return false;}
      else if ( placePileArray.length > 4)
      {console.log('Too many cards CHEATER')
    return false;}

      else{

      for (let dealStep = 0; dealStep < number; dealStep++) {
        const card = dealPileArray[0];
        dealPileArray.shift();
        placePileArray.unshift(card);
      }
    }
      return dealPileArray
    },

    setStaticBoard() {
      this.staticBoard = this.boardArray.map(card => card)
    },

    setStaticHand() {
      this.staticHand = this.handArray.map(card => card)
    },

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
      },

    failSafe() {
      return this.staticBoard.length;
    },

    endGame() {
       if (this.discardArray.length > 0){
         return true
       }
       return false;
    },

    endGameString(){
      if (this.handArray.length === 0) {
        return "endWin"
        }
        return "endLose"
      }
    }
  }

</script>

<style lang="css" scoped>


#one-player-game-wrapper{
  grid-row: 2 / 3;
  grid-column: 1 / 4;

    /* padding: 1em; */
    overflow:hidden;

  /* display: flex;
  flex-direction: rows;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly; */

  display: grid;
  grid-template-columns: 7% 86% 7%;


  min-height: 35em;

}

#central-channel {
  grid-row: 1 / 1;
  grid-column: 2/ span 1;
  display: flex;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
}

.active {
  opacity: 0.8;
}

.hidden{
  visibility: hidden;
}

#board-container{
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
    overflow: auto;
    min-height: 100px;
    left: calc(50% - 500px);
    padding: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

}


.board-array{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
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

.first{

}

.last{}

</style>
