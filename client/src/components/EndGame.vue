<template lang="html">
  <section class="end-game">
    <h3 v-if="message === 'endLose'"> You're History </h3>
    <h3 v-if="message === 'endWin'"> You've Won! </h3>
    <p>you got {{this.scoreTotal}} points</p>
  </section>


</template>

<script>
import {eventBus} from '../main.js'
import OnePlayerGame from './OnePlayerGame.vue'
import EvaluationButton from './EvaluationButton.vue'
export default {
  name: 'end-game',
  props: ['discardArray', 'message', 'score'],
  computed:{
    scoreTotal() {
      return (this.score.length -1)  * 100}
  }
}

</script>


<style lang="css" scoped>


@keyframes display {
  0% {opacity: 0;}
  100% {opacity: 100;}
}
.end-game{
  z-index: 3;
    background: red;
    padding: 2em;
    max-height: 100px;
    max-width: 420px;
    position: absolute;
    left: calc(50% - 210px);
    top: calc(50% - 50px);
    animation: display 3s forwards;
    border-radius: 2em;
    box-shadow: 0em 0.5em 1em grey;
}

h3 {
  font-size: 4em;
  color: white;
  }


</style>
