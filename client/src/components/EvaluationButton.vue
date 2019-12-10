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

        const leftCard = array[leftCardIndex];
        const rightCard = array[rightCardIndex];

        if (leftCard && leftCard.year > card.year) {
          return false
        }
        else if {
          (rightCard && rightCard.year < card.year) {
            return false
          }

          else {
            return true
          }
        }
      })


      //
      // if  (left card year value > played card )
      // return false
      //
      // else if (compare to year value of right card
      // if right card year value is < played card )
      // return false
      //
      // else
      //
      // true




    }
  }


}
</script>

<style lang="css" scoped>
</style>
