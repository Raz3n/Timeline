<template lang="html">
<section>

  <div v-if="message === 'endLose'" >
  <h3> You're History </h3>

  </div>


  <div v-if="message === 'endWin'" >

    <h3> Winner Winner Chicken Dinner </h3>

  </div>

</section>


</template>

<script>
import {eventBus} from '../main.js'
import OnePlayerGame from './OnePlayerGame.vue'
import EvaluationButton from './EvaluationButton.vue'
export default {
  name: 'end-game',
  props: ['discardArray', 'message', 'messageLost']
}

</script>


<style lang="css" scoped>

h3 {

  font-size: 100px;


}


</style>
