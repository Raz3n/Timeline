<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component :deckArray='deckArray'/>
    Board Component: boardArray
    Hand Component: handArray
    Discard Component: discardArray
  </section>
</template>

<script>
import DeckComponent from './DeckComponent.vue'

export default {
  name: 'one-player-game',
  data(){
    return {
      deckArray: [],
      boardArray: [],
      handArray:[],
      discardArray: []
    }
  },
  components: {
    'deck-component': DeckComponent
  }
}
</script>

<style lang="css" scoped>
</style>
