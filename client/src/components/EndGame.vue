<template lang="html">
  <div class="end-game">

    <h3 v-if="discardArray.length > 0">You're History/other time/history related pun</h3>
    <h3 v-else>Winner Winner Chicken Dinner</h3>

  </div>

</template>

<script>
import {eventBus} from '../main.js'
import OnePlayerGame from './OnePlayerGame.vue'
import EvaluationButton from './EvaluationButton.vue'
export default {
  name: 'end-game',
  props: ['discardArray']
}
















</script>

<style lang="css" scoped>
</style>
