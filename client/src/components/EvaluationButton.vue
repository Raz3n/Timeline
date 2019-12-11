<template lang="html">

  <button v-on:click="evaluateCard()" name="button">Check if True</button>


</template>

<script>

import OnePlayerGame from './OnePlayerGame.vue'
import {eventBus} from '../main.js'

export default {
  name: 'evaluation-button',
  props: ['cardsInPlay'],

  methods: {

    evaluateCard () {
      // find index of played card
      // compare to year of left card
      // let failCounter = 0;
      // this.cardsInPlay.forEach(function(card, index, array)


      for (let i = 0; i < this.cardsInPlay.length; i++)
       {

        const leftCard = this.cardsInPlay[i -1];
        const rightCard = this.cardsInPlay[i +1];
        const card = this.cardsInPlay[i];

        //left card index is the index of array minus 1
        //right card index is the index of array plus 1

        //define the leftcard as the card at the left card index position
        //define the right card as the card at the right card index position
        // const leftCard = this.cardsInPlay[leftCardIndex];
        // const rightCard = this.cardsInPlay[rightCardIndex];

        //if there is a left card and its year is more than the card year return false
        if (
          (leftCard && parseInt(leftCard.year) > parseInt(card.year)) ||
          (rightCard && parseInt(rightCard.year) < parseInt(card.year))) {
          console.log(i);
          console.log("incorrect - left card higher")
          eventBus.$emit('wrong-card', card)
        }
        //if there is a right card and its year is more than the card year return false

        // else if (rightCard && parseInt(rightCard.year) < parseInt(card.year)) {
        //   console.log(i);
        //   console.log("incorrect - right card lower")
        //   eventBus.$emit(this.card)
        //   }

          else {
            console.log(i);
            console.log("correct")      //else card is correct and function ends

          }
        }

      // if (failCounter > 0) {
      //   console.log('loser')
      // } else (
      //   console.log('congrats')
      // )

    }
  }
}
</script>

<style lang="css" scoped>
</style>
