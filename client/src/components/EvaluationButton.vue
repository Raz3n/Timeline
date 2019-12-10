<template lang="html">

  <button type="submit" name="button"></button>


</template>

<script>

import OnePlayerGame from 'OnePlayerGame.vue'


export default {
  name: 'evaluation-button',
  props: ['cards-in-play'],

  methods: {

    evaluateCard () {
      // find index of played card
      // compare to year of left card
      this.forEach(card (value, index, array) => {
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
        else if {     //if there is a right card and its year is more than the card year return false
          (rightCard && rightCard.year < card.year) {
            return false
          }

          else {        //else card is correct and function ends
            return true
          }
        }
      })
    }
  }


}
</script>

<style lang="css" scoped>
</style>
