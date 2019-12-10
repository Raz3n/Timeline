<template lang="html">

  <button v-on:click="evaluateCard()" name="button">Check if True</button>

</template>

<script>

import OnePlayerGame from './OnePlayerGame.vue'


export default {
  name: 'evaluation-button',
  props: ['cardsInPlay'],

  methods: {

    evaluateCard () {
      // find index of played card
      // compare to year of left card
      this.cardsInPlay.forEach(function(card, index, array){
        const leftCardIndex = index -1;
        const rightCardIndex = index +1;
        //left card index is the index of array minus 1
        //right card index is the index of array plus 1

        //define the leftcard as the card at the left card index position
        //define the right card as the card at the right card index position
        const leftCard = array[leftCardIndex];
        const rightCard = array[rightCardIndex];


        //if there is a left card and its year is more than the card year return false
        if (leftCard && leftCard.year > card.year) {
          return false
        }
        //if there is a right card and its year is more than the card year return false

        else if (rightCard && rightCard.year < card.year) {
            return false
          }

          else {        //else card is correct and function ends
            console.log("true")
          }
        }
      )
    }
  }


}
</script>

<style lang="css" scoped>
</style>
