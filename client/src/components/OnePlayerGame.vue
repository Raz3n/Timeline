<template lang="html">
  <section id="one-player-game-wrapper">
    <deck-component id='draw-pile':deckArray='deckArray'/>
    Board Draggable: boardArray
    Hand Draggable: handArray
    <deck-component id='discard-pile':discardArray='discardArray'/>
  </section>
</template>

<script>
import DeckComponent from './DeckComponent.vue'
import draggable from 'vuedraggable'


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
    'deck-component': DeckComponent,
    draggable
  }
}
</script>

<style lang="css" scoped>
</style>
