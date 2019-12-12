<template lang="html">

  <button v-on:click="evaluateCard()" name="button">Check if True</button>


</template>

<script>

import OnePlayerGame from './OnePlayerGame.vue'
import { eventBus } from '../main.js'

export default {
  name: 'evaluation-button',
  props: ['cardsInPlay'],

  methods: {
    evaluateCard () {
      //set fail counter for checking win/lose/continue condition
      let failCounter = 0;

      // loop through all the cards and check their individual status
      for (let i = 0; i < this.cardsInPlay.length; i++){

        // find index of cards to right and left
        const leftCard = this.cardsInPlay[i -1];
        const rightCard = this.cardsInPlay[i +1];
        const card = this.cardsInPlay[i];

        //if there are cards to left or right, check their years
        if ( (leftCard && parseInt(leftCard.year) > parseInt(card.year)) ||
        (rightCard && parseInt(rightCard.year) < parseInt(card.year)) ) {
          console.log(i);
          console.log("incorrect");
          // emit message that this card is wrong
          eventBus.$emit('wrong-card', card)
          // add one to our failure counter
          failCounter++

        } else {
            // card is correct
            console.log(i);
            console.log("correct")
            eventBus.$emit('reveal-year', card)
        }
      }
      console.log('failCounter:', failCounter);
        // this evaluates the overall check
      if (failCounter > 0) {
        // sending message to game that the played card was wrong
        eventBus.$emit('a-card-was-wrong')
      } else (
        // sending message to game that the board is correct
        eventBus.$emit('continue-game')
      )

    }
  }
}
</script>

<style lang="css" scoped>
</style>
